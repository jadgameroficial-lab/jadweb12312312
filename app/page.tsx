"use client";

import Image from "next/image";
import { FormEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa6";
import { SiCloudflare, SiFigma, SiGreensock, SiNextdotjs, SiNodedotjs, SiOpenai, SiReact, SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript, SiVercel } from "react-icons/si";
import { AppWindow, BrainCircuit, ChartNoAxesCombined, Compass, LayoutTemplate, PanelsTopLeft, Smartphone, Workflow } from "lucide-react";

const cases = [
  { title: "Almeida & Torres", type: "Branding · Site institucional", image: "/cases/advogados.png", tone: "case-sand" },
  { title: "Brasa 77", type: "Direção de arte · Experiência digital", image: "/cases/brasa.png", tone: "case-orange" },
  { title: "Nexora AI", type: "Produto digital · SaaS", image: "/cases/nexora.png", tone: "case-blue" },
  { title: "Clara Odontologia", type: "Estratégia · Site premium", image: "/cases/odonto.png", tone: "case-green" },
  { title: "Kōji", type: "Hospitalidade · Experiência imersiva", image: "/cases/koji.png", tone: "case-gold" },
  { title: "Nova Studio", type: "Portfólio · Direção criativa", image: "/cases/marketing.png", tone: "case-cobalt" },
];

const services = [
  { n: "01", title: "Sites premium", text: "Presenças digitais autorais, rápidas e construídas para transformar atenção em oportunidade." },
  { n: "02", title: "Produtos digitais", text: "SaaS, portais e dashboards que organizam operações complexas em experiências simples." },
  { n: "03", title: "Redesign estratégico", text: "Reposicionamos marcas e experiências que deixaram de representar a evolução do negócio." },
  { n: "04", title: "IA & automação", text: "Integrações inteligentes que reduzem tarefas manuais e ampliam capacidade de execução." },
];

const ecosystem = [
  { n: "01", icon: AppWindow, title: "Sites institucionais", text: "Presença profissional para gerar confiança." },
  { n: "02", icon: LayoutTemplate, title: "Landing pages", text: "Páginas focadas em conversão." },
  { n: "03", icon: PanelsTopLeft, title: "Sistemas SaaS", text: "Softwares sob medida para sua operação." },
  { n: "04", icon: Smartphone, title: "Aplicativos", text: "Android e iPhone." },
  { n: "05", icon: BrainCircuit, title: "Inteligência Artificial", text: "Assistentes inteligentes para atendimento e processos." },
  { n: "06", icon: Workflow, title: "Automações", text: "WhatsApp, CRM, vendas e operação." },
  { n: "07", icon: ChartNoAxesCombined, title: "Gestão de Tráfego", text: "Google Ads, Meta Ads e TikTok Ads." },
  { n: "08", icon: Compass, title: "Mentoria", text: "Estratégia de crescimento digital." },
];

const technologies = [
  { name: "NEXT.JS", icon: SiNextdotjs }, { name: "REACT", icon: SiReact }, { name: "TYPESCRIPT", icon: SiTypescript },
  { name: "TAILWIND CSS", icon: SiTailwindcss }, { name: "NODE.JS", icon: SiNodedotjs }, { name: "SUPABASE", icon: SiSupabase },
  { name: "VERCEL", icon: SiVercel }, { name: "CLOUDFLARE", icon: SiCloudflare }, { name: "OPENAI", icon: SiOpenai },
  { name: "GSAP", icon: SiGreensock }, { name: "THREE.JS", icon: SiThreedotjs }, { name: "FIGMA", icon: SiFigma },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function AnimatedNumber({ value, prefix = "", suffix = "", active = true }: { value: number; prefix?: string; suffix?: string; active?: boolean }) {
  const [display, setDisplay] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!active) return;
    const element = numberRef.current;
    if (!element) return;
    let animation = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(value);
        return;
      }
      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / 1450, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(value * eased));
        if (progress < 1) animation = window.requestAnimationFrame(animate);
      };
      animation = window.requestAnimationFrame(animate);
    }, { threshold: 0.55 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (animation) window.cancelAnimationFrame(animation);
    };
  }, [active, value]);

  return <span ref={numberRef} aria-label={`${prefix}${value}${suffix}`}>{prefix}{display}{suffix}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(1);
  const [preloaderLeaving, setPreloaderLeaving] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const caseRail = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let animation = 0;
    let progressTimer = 0;
    let completionTimer = 0;
    let exitTimer = 0;
    let doneTimer = 0;

    const begin = () => {
      const startedAt = performance.now();
      const updateProgress = (now = performance.now()) => {
        const progress = Math.min((now - startedAt) / 5000, 1);
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setLoadingProgress(Math.min(100, Math.max(1, Math.round(1 + eased * 99))));
      };

      const animate = (now: number) => {
        updateProgress(now);
        animation = window.requestAnimationFrame(animate);
      };

      progressTimer = window.setInterval(updateProgress, 80);
      animation = window.requestAnimationFrame(animate);
      completionTimer = window.setTimeout(() => {
        window.cancelAnimationFrame(animation);
        window.clearInterval(progressTimer);
        setLoadingProgress(100);
        exitTimer = window.setTimeout(() => {
          setPreloaderLeaving(true);
          document.body.style.overflow = "";
          doneTimer = window.setTimeout(() => setPreloaderDone(true), 1100);
        }, 420);
      }, 5000);
    };

    begin();
    return () => {
      document.body.style.overflow = "";
      if (animation) window.cancelAnimationFrame(animation);
      window.clearInterval(progressTimer);
      window.clearTimeout(completionTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useLayoutEffect(() => {
    if (!preloaderDone || !siteRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 800px)").matches;
    if (reducedMotion) {
      gsap.set("[data-reveal]", { clearProps: "all" });
      return;
    }

    const cleanups: Array<() => void> = [];
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-topbar", { autoAlpha: 0, y: -24, duration: 0.9 })
        .from(".hero-tag", { autoAlpha: 0, y: 18, duration: 0.65 }, "-=0.48")
        .from(".hero-portrait", { autoAlpha: 0, y: isMobile ? 40 : 85, scale: 0.94, duration: 1.25 }, "-=0.35")
        .from(".hero-line", { autoAlpha: 0, yPercent: 115, stagger: 0.11, duration: 0.9, ease: "power4.out" }, "-=0.92")
        .from(".hero-panel > p", { autoAlpha: 0, y: 22, stagger: 0.1, duration: 0.72 }, "-=0.48")
        .from(".hero-metric", { autoAlpha: 0, y: 18, scale: 0.96, stagger: 0.12, duration: 0.72 }, "-=0.42");

      gsap.from(".manifest .section-label", {
        autoAlpha: 0, y: 25, duration: 0.7,
        scrollTrigger: { trigger: ".manifest", start: "top 72%", once: true },
      });
      gsap.from(".manifest-copy > *", {
        autoAlpha: 0, y: isMobile ? 45 : 90, clipPath: "inset(100% 0 0 0)", stagger: 0.16, duration: 1.05, ease: "power4.out",
        scrollTrigger: { trigger: ".manifest-copy", start: "top 78%", once: true },
      });
      gsap.from(".manifest-bottom > *", {
        autoAlpha: 0, y: 45, stagger: 0.16, duration: 0.85,
        scrollTrigger: { trigger: ".manifest-bottom", start: "top 86%", once: true },
      });

      gsap.from(".cases-section .section-head > *", {
        autoAlpha: 0, y: 55, stagger: 0.15, duration: 0.85,
        scrollTrigger: { trigger: ".cases-section .section-head", start: "top 82%", once: true },
      });
      gsap.from(".case-card", {
        autoAlpha: 0, y: isMobile ? 45 : 85, scale: 0.965, rotationY: isMobile ? 0 : 5, transformPerspective: 1200,
        stagger: 0.13, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".case-rail", start: "top 84%", once: true },
      });

      gsap.from(".services-intro > *", {
        autoAlpha: 0, y: 45, stagger: 0.12, duration: 0.85,
        scrollTrigger: { trigger: ".services-section", start: "top 74%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
        gsap.from(card.children, {
          autoAlpha: 0, y: 30, stagger: 0.08, duration: 0.72, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 82%", once: true },
        });
      });

      gsap.from(".ecosystem-head > *", {
        autoAlpha: 0, y: 55, stagger: 0.14, duration: 0.9,
        scrollTrigger: { trigger: ".ecosystem-head", start: "top 82%", once: true },
      });
      gsap.from(".ecosystem-grid article", {
        autoAlpha: 0, y: isMobile ? 28 : 52, scale: 0.97, stagger: 0.075, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: ".ecosystem-grid", start: "top 80%", once: true },
      });

      gsap.from(".platform-copy > *", {
        autoAlpha: 0, x: isMobile ? 0 : -55, y: isMobile ? 30 : 0, stagger: 0.11, duration: 0.8,
        scrollTrigger: { trigger: ".platform-section", start: "top 75%", once: true },
      });
      gsap.from(".metrics-grid > div", {
        autoAlpha: 0, y: 35, scale: 0.94, stagger: 0.1, duration: 0.72,
        scrollTrigger: { trigger: ".metrics-grid", start: "top 82%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".metrics-grid strong").forEach((element) => {
        const finalText = element.textContent ?? "";
        const target = Number(finalText.replace(/[^0-9.]/g, ""));
        if (!Number.isFinite(target)) return;
        const decimals = finalText.includes(".") ? 1 : 0;
        const prefix = finalText.startsWith("<") ? "<" : finalText.startsWith("+") ? "+" : "";
        const suffix = finalText.endsWith("%") ? "%" : finalText.endsWith("s") ? "s" : "";
        const counter = { value: 0 };
        const tween = gsap.to(counter, {
          value: target, duration: 1.45, paused: true, ease: "power3.out",
          onUpdate: () => { element.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`; },
          onComplete: () => { element.textContent = finalText; },
        });
        ScrollTrigger.create({ trigger: element, start: "top 88%", once: true, onEnter: () => tween.play() });
      });

      gsap.from(".technology-head > *", {
        autoAlpha: 0, y: 30, stagger: 0.12, duration: 0.75,
        scrollTrigger: { trigger: ".technology-section", start: "top 84%", once: true },
      });
      const techTrack = document.querySelector<HTMLElement>(".technology-marquee > div");
      if (techTrack) {
        const marquee = gsap.to(techTrack, { xPercent: -50, duration: isMobile ? 26 : 34, ease: "none", repeat: -1 });
        const pause = () => marquee.pause();
        const play = () => marquee.play();
        techTrack.addEventListener("mouseenter", pause);
        techTrack.addEventListener("mouseleave", play);
        cleanups.push(() => {
          techTrack.removeEventListener("mouseenter", pause);
          techTrack.removeEventListener("mouseleave", play);
        });
      }

      gsap.from(".process-section .section-label, .process-title > *", {
        autoAlpha: 0, y: 50, stagger: 0.13, duration: 0.85,
        scrollTrigger: { trigger: ".process-section", start: "top 76%", once: true },
      });
      gsap.to(".process-progress", {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".process-list-wrap", start: "top 72%", end: "bottom 68%", scrub: 0.6 },
      });
      gsap.from(".process-list li > *", {
        autoAlpha: 0, x: isMobile ? 18 : 42, stagger: 0.045, duration: 0.72,
        scrollTrigger: { trigger: ".process-list", start: "top 80%", once: true },
      });

      gsap.from(".belief-section .kicker", {
        autoAlpha: 0, y: 25, duration: 0.7,
        scrollTrigger: { trigger: ".belief-section", start: "top 72%", once: true },
      });
      gsap.from(".belief-section h2", {
        autoAlpha: 0, y: isMobile ? 55 : 100, clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "power4.out",
        scrollTrigger: { trigger: ".belief-section h2", start: "top 86%", once: true },
      });

      gsap.from(".contact-copy > *", {
        autoAlpha: 0, x: isMobile ? 0 : -65, y: isMobile ? 35 : 0, stagger: 0.09, duration: 0.8,
        scrollTrigger: { trigger: ".contact-section", start: "top 74%", once: true },
      });
      gsap.from(".lead-form", {
        autoAlpha: 0, x: isMobile ? 0 : 65, y: isMobile ? 45 : 0, scale: 0.97, duration: 0.95,
        scrollTrigger: { trigger: ".lead-form", start: "top 86%", once: true },
      });
      gsap.from(".lead-form label, .lead-form button", {
        autoAlpha: 0, y: 22, stagger: 0.07, duration: 0.62,
        scrollTrigger: { trigger: ".lead-form", start: "top 78%", once: true },
      });
      gsap.from(".contact-info > *", {
        autoAlpha: 0, y: 24, stagger: 0.1, duration: 0.65,
        scrollTrigger: { trigger: ".contact-info", start: "top 92%", once: true },
      });

      if (window.matchMedia("(pointer: fine)").matches) {
        document.querySelectorAll<HTMLElement>(".magnetic").forEach((button) => {
          const move = (event: MouseEvent) => {
            const bounds = button.getBoundingClientRect();
            gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.17, y: (event.clientY - bounds.top - bounds.height / 2) * 0.17, duration: 0.35, ease: "power2.out" });
          };
          const leave = () => gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.4)" });
          button.addEventListener("mousemove", move);
          button.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            button.removeEventListener("mousemove", move);
            button.removeEventListener("mouseleave", leave);
          });
        });
      }
    }, siteRef);

    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [preloaderDone]);

  const slideCases = (direction: number) => caseRail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 780), behavior: "smooth" });

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, equipe JAD WEB! Quero solicitar um diagnóstico estratégico.",
      `Nome: ${form.get("name") || ""}`,
      `WhatsApp: ${form.get("phone") || ""}`,
      `Tipo de projeto: ${form.get("project") || ""}`,
      `Sobre o projeto: ${form.get("brief") || ""}`,
    ].join("\n");
    window.open(`https://wa.me/5547991100596?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return <main ref={siteRef} className={preloaderDone ? "site-ready" : "site-loading"}>
    {!preloaderDone && <div className={preloaderLeaving ? "preloader is-leaving" : "preloader"} role="status" aria-live="polite" aria-label={`Carregando ${loadingProgress}%`}>
      <div className="preloader-logo jad-logo-type" aria-hidden="true">JAD</div>
      <div className="preloader-bottom"><div className="preloader-track"><i style={{ transform: `scaleX(${loadingProgress / 100})` }} /></div><span>{String(loadingProgress).padStart(3, "0")}%</span></div>
    </div>}
    <section className="hero hero-v2" id="inicio">
      <div className="hero-sticky">
        <header className="topbar hero-topbar">
          <a className="hero-wordmark jad-logo-type" href="#inicio" aria-label="JAD WEB, início">JAD</a>
          <nav className={menuOpen ? "nav-pill hero-nav open" : "nav-pill hero-nav"} aria-label="Navegação principal">
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a><a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a><a href="#ecossistema" onClick={() => setMenuOpen(false)}>Ecossistema</a><a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
          </nav>
          <a className="hero-cta desktop-cta magnetic" href="#contato">Iniciar um projeto <Arrow /></a>
          <button className="menu-button hero-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">{menuOpen ? "Fechar" : "Menu"}</button>
        </header>

        <div className="hero-tag">Estratégia · Design · Tecnologia · IA</div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="hero-portrait-glow" />
          <Image src="/hero/jad-portrait.png" alt="" width={1000} height={1000} priority sizes="(max-width: 800px) 92vw, 48vw" />
        </div>

        <div className="hero-panel hero-panel-left">
          <h1><span className="hero-line-clip"><span className="hero-line">Você sonha.</span></span><span className="hero-line-clip muted"><span className="hero-line">Nós criamos.</span></span></h1>
          <p>Criamos sites premium e soluções personalizadas que unem estratégia, design, tecnologia e IA.</p>
          <div className="hero-metric"><i /> <strong><AnimatedNumber value={40} prefix="+" active={preloaderDone} /></strong><small>projetos em produção</small></div>
        </div>

        <div className="hero-panel hero-panel-right">
          <h2><span className="hero-line-clip"><span className="hero-line">De uma ideia.</span></span><span className="hero-line-clip muted"><span className="hero-line">Para uma presença.</span></span></h2>
          <p>Experiências digitais autorais, rápidas e prontas para transformar atenção em oportunidade.</p>
          <div className="hero-metric"><strong><AnimatedNumber value={98} suffix="%" active={preloaderDone} /></strong> <i /><small>performance média</small></div>
        </div>

      </div>
    </section>

    <section className="manifest section-dark" id="sobre">
      <div className="section-label" data-reveal><span>01</span> Manifesto</div>
      <div className="manifest-copy" data-reveal><p className="muted-line">Tudo começa como uma ideia.</p><h2>Nós transformamos<br />sonhos em <em>experiências.</em></h2></div>
      <div className="manifest-bottom" data-reveal><p>JAD significa Just a Dream. É o ponto de partida para produtos digitais que movem marcas, simplificam negócios e permanecem na memória.</p><div className="manifest-stats"><strong>4×</strong><span>pensamento integrado</span><small>Estratégia · Design<br />Tecnologia · IA</small></div></div>
    </section>

    <section className="cases-section" id="projetos">
      <div className="section-head" data-reveal><div><span className="kicker">02 · Trabalhos selecionados</span><h2>Sites que não<br />parecem <em>templates.</em></h2></div><div className="case-controls"><button onClick={() => slideCases(-1)} aria-label="Cases anteriores">←</button><button onClick={() => slideCases(1)} aria-label="Próximos cases">→</button></div></div>
      <div className="case-rail" ref={caseRail}>{cases.map((item, index) => <article className={`case-card ${item.tone}`} key={item.title} data-reveal><div className="case-meta"><span>0{index + 1}</span><span>{item.type}</span></div><div className="case-browser"><div className="browser-bar"><i /><i /><i /><span>jadweb.design/{item.title.toLowerCase().replaceAll(" ", "-")}</span></div><Image src={item.image} alt={`Projeto ${item.title}`} width={900} height={1200} sizes="(max-width: 800px) 82vw, 56vw" /></div><div className="case-name"><h3>{item.title}</h3><span>Ver projeto <Arrow /></span></div></article>)}</div>
    </section>

    <section className="services-section" id="solucoes">
      <div className="services-intro" data-reveal><span className="kicker">03 · Soluções</span><h2>Da primeira ideia<br />ao próximo <em>nível.</em></h2><p>Construímos a solução certa para o momento real do seu negócio, com clareza, intenção e identidade própria.</p></div>
      <div className="service-stack">{services.map((service) => <article className="service-card" key={service.n} data-reveal><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><button aria-label={`Saiba mais sobre ${service.title}`}><Arrow /></button></article>)}</div>
    </section>

    <section className="ecosystem-section section-dark" id="ecossistema">
      <div className="ecosystem-head" data-reveal><div><span className="kicker accent-kicker">● Nosso ecossistema</span><h2>Tudo que sua empresa<br /><em>precisa.</em></h2></div><p>Não vendemos apenas serviços isolados. Estruturamos, digitalizamos, automatizamos e escalamos o seu negócio dentro de um único sistema.</p></div>
      <div className="ecosystem-grid">{ecosystem.map((item) => { const Icon = item.icon; return <article key={item.n} data-reveal><span className="eco-number">{item.n}</span><span className="eco-icon" aria-hidden="true"><Icon strokeWidth={1.7} /></span><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div>
    </section>

    <section className="platform-section section-dark">
      <div className="platform-copy" data-reveal><span className="kicker accent-kicker">● Sobre a JAD Platform OS</span><p>Não criamos apenas sites. Construímos a infraestrutura digital que faz empresas crescerem: sites, sistemas, IA, automação e tráfego, tudo dentro de um único ecossistema.</p><p>Atuamos como o time técnico e estratégico da sua operação, cuidando de arquitetura, performance e experiência do início ao lançamento.</p><p>De uma landing page a um sistema operacional completo, cada entrega parte de um objetivo de negócio real: vender mais, atender melhor e crescer com consistência.</p></div>
      <div className="metrics-grid" data-reveal><div><strong>98%</strong><span>Lighthouse Performance médio</span></div><div><strong>&lt;1.2s</strong><span>Tempo de carregamento (LCP)</span></div><div><strong>+40</strong><span>Projetos em produção</span></div><div><strong>100%</strong><span>Responsivo, sem exceções</span></div></div>
    </section>

    <section className="technology-section" aria-label="Tecnologias que usamos">
      <div className="technology-head"><span className="kicker">Tecnologias que dominamos</span><p>Uma stack moderna para produtos rápidos, seguros e escaláveis.</p></div>
      <div className="technology-marquee"><div>{[...technologies, ...technologies].map((technology, index) => { const Icon = technology.icon; return <span key={`${technology.name}-${index}`}><Icon aria-hidden="true" />{technology.name}</span>; })}</div></div>
    </section>

    <section className="process-section section-dark" id="processo">
      <div className="section-label" data-reveal><span>04</span> Nosso processo</div>
      <div className="process-title" data-reveal><h2>Estratégia antes<br />do primeiro <em>pixel.</em></h2><p>Um processo colaborativo, transparente e preciso. Você acompanha cada decisão e entende por que ela existe.</p></div>
      <div className="process-list-wrap"><span className="process-progress" aria-hidden="true" /><ol className="process-list">{[["01","Imersão","Entendemos o negócio, o público e o resultado que precisa acontecer."],["02","Direção","Transformamos descobertas em estratégia, narrativa e direção visual."],["03","Criação","Desenhamos e desenvolvemos cada detalhe da experiência."],["04","Lançamento","Validamos, publicamos e deixamos a base pronta para continuar evoluindo."]].map(([n,title,text]) => <li key={n} data-reveal><span>{n}</span><h3>{title}</h3><p>{text}</p><i>↘</i></li>)}</ol></div>
    </section>

    <section className="belief-section"><p className="kicker" data-reveal>JAD · Just a Dream</p><h2 data-reveal>Não entregamos<br /><span>apenas páginas.</span><br />Criamos presença.</h2></section>

    <section className="contact-section" id="contato">
      <div className="contact-copy" data-reveal><span className="kicker">● Vamos conversar</span><h2>Sua empresa não<br />precisa apenas de um<br /><em>site.</em></h2><p>Ela precisa de um sistema completo para crescer. Preencha o formulário ao lado ou fale direto com a equipe pelo WhatsApp. Retornamos com um diagnóstico claro e objetivo.</p><div className="contact-badges"><span>Resposta em até 1 dia útil</span><span>Diagnóstico sem compromisso</span></div><a className="contact-direct magnetic" href="https://wa.me/5547991100596?text=Ol%C3%A1%2C%20equipe%20JAD%20WEB!%20Quero%20um%20diagn%C3%B3stico%20estrat%C3%A9gico." target="_blank" rel="noreferrer">Quero um diagnóstico estratégico <Arrow /></a></div>
      <form className="lead-form" onSubmit={submitLead} data-reveal><div className="field-row"><label>Nome<input name="name" placeholder="Seu nome" required /></label><label>WhatsApp<input name="phone" type="tel" placeholder="(47) 9 0000-0000" required /></label></div><label>Tipo de projeto<select name="project" defaultValue="Diagnóstico geral"><option>Diagnóstico geral</option><option>Site institucional</option><option>Landing page</option><option>Sistema SaaS</option><option>Aplicativo</option><option>Inteligência artificial</option><option>Automações</option><option>Gestão de tráfego</option><option>Mentoria</option><option>Outro</option></select></label><label>Conte um pouco sobre o projeto<textarea name="brief" placeholder="O que você precisa desenvolver?" rows={4} required /></label><button className="magnetic" type="submit">Enviar e continuar no WhatsApp <span>→</span></button></form>
      <div className="contact-info" data-reveal><span>Novos projetos</span><a href="mailto:contato@jadweb.com.br">contato@jadweb.com.br</a><p>Atendemos marcas e negócios em todo o Brasil.</p></div>
    </section>

    <div className="social-dock" aria-label="Contato pelo WhatsApp"><a className="whatsapp" href="https://wa.me/5547991100596?text=Ol%C3%A1%2C%20equipe%20JAD%20WEB!" target="_blank" rel="noreferrer" aria-label="Falar com a JAD WEB pelo WhatsApp"><FaWhatsapp aria-hidden="true" /></a></div>

    <footer><div className="footer-top"><div className="footer-partners" aria-label="JAD WEB e NEXUS"><a className="footer-wordmark jad-logo-type" href="#inicio" aria-label="JAD WEB, início">JAD</a><span aria-hidden="true">+</span><a className="footer-nexus" href="https://nex-virid.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visitar o site da NEXUS, empresa parceira">NEXUS</a></div><p>Estratégia · Design · Tecnologia · IA</p><a href="#inicio">Voltar ao topo ↑</a></div><div className="dream-line" aria-label="Just a Dream">JUST A DREAM</div><div className="footer-bottom"><span>© 2026 JAD WEB</span><nav className="footer-legal" aria-label="Links legais"><a href="/privacidade">Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></nav><span>Brasil · Trabalhando globalmente</span></div></footer>
  </main>;
}
