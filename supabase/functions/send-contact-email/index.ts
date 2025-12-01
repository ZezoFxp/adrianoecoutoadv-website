import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    // Validação e sanitização de entrada
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Todos os campos são obrigatórios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Limitar tamanho dos campos
    const sanitizedData = {
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().slice(0, 255),
      phone: String(phone).trim().slice(0, 50),
      message: String(message).trim().slice(0, 2000),
    };

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Email inválido" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact email:", { 
      name: sanitizedData.name, 
      email: sanitizedData.email, 
      phone: sanitizedData.phone 
    });

    // Escapar HTML para prevenir XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    // Enviar email para o escritório
    const emailResponse = await resend.emails.send({
      from: "Contato Site <nao-responda@adrianoecoutoadv.com>",
      to: ["jose@adrianoecoutoadv.com"],
      subject: `Novo contato de ${escapeHtml(sanitizedData.name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F766E;">Novo Contato do Site</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${escapeHtml(sanitizedData.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(sanitizedData.email)}</p>
            <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(sanitizedData.phone)}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${escapeHtml(sanitizedData.message)}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Esta mensagem foi enviada através do formulário de contato do site Adriano & Couto Advocacia.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
