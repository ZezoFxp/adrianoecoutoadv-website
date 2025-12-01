# ⚖️ Landing Page - Adriano & Couto Advocacia

## 📖 Sobre o Projeto

Este é um projeto acadêmico desenvolvido com o objetivo de criar uma presença digital moderna e responsiva para um escritório de advocacia. A aplicação consiste em uma Landing Page de alta performance focada em conversão e apresentação de serviços jurídicos.

O diferencial técnico deste projeto reside na integração de ferramentas de **desenvolvimento assistido por IA (Vibecoding)** para a interface e uma arquitetura robusta para o envio de formulários de contato e visando entregar o máximo de informações sobre o serviço do escritório.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando uma stack moderna focada em performance e experiência de desenvolvimento (DX):

* **[Lovable](https://lovable.dev/):** Utilizado para a prototipagem rápida e geração da base da interface (UI), acelerando o processo de design para código (**Lovable** que inclusive vem ganhando destaque no mercado de desenvolvimento).
* **[Vite](https://vitejs.dev/):** Build tool de nova geração, garantindo um ambiente de desenvolvimento extremamente rápido.
* **[TypeScript](https://www.typescriptlang.org/):** Para garantir a tipagem estática, segurança e escalabilidade do código.
* **[React](https://reactjs.org/):** Biblioteca para construção da interface do usuário.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utility-first para estilização ágil e responsiva.
* **[Resend API](https://resend.com/):** Solução moderna de e-mail utilizada no backend para processar os formulários de contato e encaminhar as mensagens diretamente para a caixa de entrada do escritório.

## ⚙️ Arquitetura e Funcionalidades

### Fluxo de Contato
A aplicação possui um "micro-backend" integrado para lidar com dados sensíveis de forma segura:

1.  **Formulário:** O usuário preenche os dados (Nome, Email, Telefone, Mensagem) na Landing Page.
2.  **Validação:** Os dados são validados no frontend (Zod/React Hook Form).
3.  **API Call:** O frontend envia uma requisição para a rota de API interna.
4.  **Resend:** O backend processa a requisição e utiliza a API do **Resend** para disparar o e-mail formatado para o setor responsável do escritório.

## 🎨 Layout e Design

O layout foi concebido para transmitir seriedade, confiança e profissionalismo, atributos essenciais para a área jurídica. A utilização do **Lovable** permitiu iterar rapidamente sobre componentes visuais como:
* Hero Section com Call to Action (CTA) claro.
* Seção de Áreas de Atuação.
* Formulário de Contato acessível.

Desenvolvido por Jose Messias Bandeira da Silva 🎓