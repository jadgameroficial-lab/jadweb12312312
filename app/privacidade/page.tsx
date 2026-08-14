import Link from "next/link";

export const metadata = { title: "Política de Privacidade | JAD WEB" };

export default function Privacidade() {
  return <main className="legal-page">
    <header className="legal-header"><Link className="legal-wordmark jad-logo-type" href="/">JAD</Link><Link href="/">Voltar ao site</Link></header>
    <article className="legal-content">
      <span className="kicker">Documento legal</span>
      <h1>Política de Privacidade</h1>
      <p className="legal-updated">Atualizada em 13 de agosto de 2026</p>
      <section><h2>1. Sobre esta política</h2><p>Esta política explica como a JAD WEB trata dados pessoais enviados por visitantes em seus canais de contato.</p></section>
      <section><h2>2. Dados que podemos receber</h2><p>Podemos receber nome, telefone, endereço de e-mail, informações sobre o projeto e dados técnicos básicos de acesso ao site.</p></section>
      <section><h2>3. Como usamos os dados</h2><p>Usamos essas informações para responder solicitações, preparar diagnósticos e propostas, prestar serviços, manter a segurança do site e cumprir obrigações legais.</p></section>
      <section><h2>4. Compartilhamento</h2><p>Os dados podem ser processados por fornecedores essenciais de hospedagem, comunicação e infraestrutura. Não comercializamos dados pessoais.</p></section>
      <section><h2>5. Armazenamento e segurança</h2><p>Mantemos os dados somente pelo período necessário para as finalidades informadas e adotamos medidas razoáveis de segurança para protegê-los.</p></section>
      <section><h2>6. Seus direitos</h2><p>Você pode solicitar confirmação do tratamento, acesso, correção, exclusão ou outras providências previstas na legislação aplicável.</p></section>
      <section><h2>7. Contato</h2><p>Para dúvidas ou solicitações relacionadas à privacidade, escreva para <a href="mailto:contato@jadweb.com.br">contato@jadweb.com.br</a>.</p></section>
    </article>
  </main>;
}
