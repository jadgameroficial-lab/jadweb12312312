import Link from "next/link";

export const metadata = { title: "Termos de Uso | JAD WEB" };

export default function TermosDeUso() {
  return <main className="legal-page">
    <header className="legal-header"><Link className="legal-wordmark jad-logo-type" href="/">JAD</Link><Link href="/">Voltar ao site</Link></header>
    <article className="legal-content">
      <span className="kicker">Documento legal</span>
      <h1>Termos de Uso</h1>
      <p className="legal-updated">Atualizados em 13 de agosto de 2026</p>
      <section><h2>1. Aceitação</h2><p>Ao acessar este site, você concorda em utilizá-lo de forma lícita e de acordo com estes termos.</p></section>
      <section><h2>2. Conteúdo do site</h2><p>As informações apresentadas têm caráter institucional e podem ser atualizadas a qualquer momento. Propostas comerciais e contratos específicos prevalecem sobre informações gerais do site.</p></section>
      <section><h2>3. Propriedade intelectual</h2><p>Textos, identidade visual, projetos, imagens e demais conteúdos pertencem à JAD WEB ou são utilizados com autorização. A reprodução depende de autorização prévia.</p></section>
      <section><h2>4. Uso permitido</h2><p>Não é permitido tentar comprometer a segurança, interferir no funcionamento, coletar dados indevidamente ou utilizar o conteúdo para fins ilícitos.</p></section>
      <section><h2>5. Links e serviços externos</h2><p>O site pode direcionar para serviços externos, como WhatsApp. O uso desses serviços também está sujeito aos termos e políticas de seus responsáveis.</p></section>
      <section><h2>6. Limitação de responsabilidade</h2><p>Empregamos esforços para manter o site disponível e correto, mas não garantimos funcionamento ininterrupto nem nos responsabilizamos por indisponibilidades fora do nosso controle.</p></section>
      <section><h2>7. Contato</h2><p>Em caso de dúvida sobre estes termos, escreva para <a href="mailto:contato@jadweb.com.br">contato@jadweb.com.br</a>.</p></section>
    </article>
  </main>;
}
