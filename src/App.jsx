const events = [
  { day: '05', month: 'SET', title: 'Encontro de moradores', meta: '19h30 · Espaço comunitário' },
  { day: '12', month: 'SET', title: 'Ação de cuidado do bairro', meta: '09h00 · Rua Aroazes' },
  { day: '26', month: 'SET', title: 'Manhã em família', meta: '10h00 · Área de lazer' },
]

const news = [
  { tag: 'Comunicado', title: 'AMA reforça canais de atendimento aos moradores', date: '24 ago 2026' },
  { tag: 'Mobilidade', title: 'Confira a grade atualizada do transporte da região', date: '22 ago 2026' },
  { tag: 'Comunidade', title: 'Novas parcerias e benefícios para associados', date: '18 ago 2026' },
]

const partners = ['Hotel Parceiro', 'Pousada Parceira', 'Clínica Parceira', 'Serviço Local']

function Logo() {
  return (
    <a className="brand" href="#topo" aria-label="AMA Villas da Barra - início">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span><strong>AMA</strong><small>Villas da Barra</small></span>
    </a>
  )
}

function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="section-heading">
      <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>
      {action && <a className="text-link" href="#">{action} →</a>}
    </div>
  )
}

function App() {
  return (
    <div id="topo">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#ama">A AMA</a><a href="#eventos">Comunidade</a><a href="#lazer">AMA Lazer</a><a href="#noticias">Notícias</a><a href="#contato">Contato</a>
          </nav>
          <a className="header-cta" href="#associe">Associe-se</a>
        </div>
      </header>

      <main>
        <section className="hero" id="ama">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow light">Associação · Comunidade · Qualidade de vida</span>
              <h1>Unindo moradores e <em>fortalecendo a região.</em></h1>
              <p>Informação, benefícios e iniciativas para tornar Villas da Barra um lugar cada vez melhor para viver.</p>
              <div className="hero-actions"><a className="button button-light" href="#institucional">Conheça a AMA</a><a className="button button-outline" href="#associe">Quero me associar</a></div>
            </div>
            <div className="hero-media">
              <img src="./mock/hero-villas-da-barra.svg" alt="Ilustração da comunidade Villas da Barra" />
              <div className="hero-badge"><strong>Villas da Barra</strong><span>Juntos construindo uma região melhor</span></div>
            </div>
          </div>
        </section>

        <section className="quick-links" aria-label="Acessos rápidos">
          <div className="container quick-grid">
            <a href="#"><strong>Transporte</strong><span>Horários atualizados</span></a><a href="#"><strong>Condomínios</strong><span>Conheça os associados</span></a><a href="#"><strong>Classificados</strong><span>Moradores e parceiros</span></a><a href="#contato"><strong>Fale com a AMA</strong><span>WhatsApp e atendimento</span></a>
          </div>
        </section>

        <section className="section" id="eventos">
          <div className="container">
            <SectionTitle eyebrow="Agenda comunitária" title="Próximos eventos" action="Ver todos os eventos" />
            <div className="events-layout">
              <article className="featured-event card-image">
                <img src="./mock/eventos-comunidade.svg" alt="Ilustração de encontro comunitário" />
                <div className="image-overlay"><span>Comunidade</span><h3>Participe da vida do nosso bairro</h3><p>Encontros, ações e atividades que aproximam moradores e parceiros.</p></div>
              </article>
              <div className="event-list">
                {events.map((event) => <article className="event-row" key={event.title}><div className="date-box"><strong>{event.day}</strong><span>{event.month}</span></div><div><h3>{event.title}</h3><p>{event.meta}</p></div><span className="arrow">→</span></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="noticias">
          <div className="container">
            <SectionTitle eyebrow="Acompanhe a região" title="Últimas notícias" action="Ver todas as notícias" />
            <div className="news-grid">{news.map((item) => <article className="news-card" key={item.title}><span className="news-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.date}</p><a href="#">Ler notícia →</a></article>)}</div>
          </div>
        </section>

        <section className="section" id="parceiros">
          <div className="container"><SectionTitle eyebrow="Rede local" title="Parceiros da AMA" /><p className="section-lead">Empresas e serviços que caminham junto com a comunidade.</p><div className="partners-row">{partners.map((partner) => <div className="partner-logo" key={partner}>{partner}</div>)}</div></div>
        </section>

        <section className="section leisure-section" id="lazer">
          <div className="container split-panel">
            <div className="split-copy"><span className="eyebrow light">Benefícios para associados</span><h2>AMA Lazer</h2><p>Um catálogo de hotéis, pousadas e futuros restaurantes parceiros com condições especiais para associados.</p><div className="benefit-pills"><span>Descontos exclusivos</span><span>Experiências especiais</span><span>Mais economia</span></div><a className="button button-light" href="#">Conhecer benefícios</a></div>
            <div className="split-media"><img src="./mock/ama-lazer.svg" alt="Ilustração do catálogo AMA Lazer" /></div>
          </div>
        </section>

        <section className="section" id="retrospectiva">
          <div className="container retrospective-grid">
            <div className="retrospective-media"><img src="./mock/retrospectiva-ama.svg" alt="Ilustração da retrospectiva da AMA" /></div>
            <div className="retrospective-copy"><span className="eyebrow">Memória da associação</span><h2>Retrospectiva da AMA</h2><p>Acompanhe mês a mês as principais ações, conquistas e iniciativas realizadas pela associação.</p><div className="timeline"><button className="active">AGO</button><button>JUL</button><button>JUN</button><button>MAI</button></div><a className="text-link" href="#">Ver retrospectiva completa →</a></div>
          </div>
        </section>

        <section className="social-band" id="contato"><div className="container social-inner"><div><span className="eyebrow light">Fique conectado</span><h2>A AMA mais perto de você.</h2></div><div className="social-actions"><a className="button button-light" href="#">WhatsApp</a><a className="button button-outline" href="#">Instagram</a></div></div></section>
      </main>

      <footer className="site-footer" id="associe">
        <div className="container footer-grid"><div><Logo /><p>Associação de Moradores da Rua Aroazes — Villas da Barra.</p></div><div><strong>A AMA</strong><a href="#">História</a><a href="#">Missão</a><a href="#">Diretoria</a><a href="#">Estatuto</a></div><div><strong>Comunidade</strong><a href="#eventos">Eventos</a><a href="#">Transporte</a><a href="#">Classificados</a><a href="#retrospectiva">Retrospectiva</a></div><div><strong>Contato</strong><span>villasdabarra.adm@gmail.com</span><span>(21) 96454-4860</span></div></div>
        <div className="container copyright">© 2026 AMA Villas da Barra. Protótipo de redesign.</div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/5521964544860" aria-label="Falar com a AMA pelo WhatsApp">WA</a>
    </div>
  )
}

export default App
