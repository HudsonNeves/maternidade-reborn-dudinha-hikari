import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Menu,
  X,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Gift,
  Sparkles,
  ChevronDown,
  PackageCheck,
} from 'lucide-react'
import { whatsappLink } from './config'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`
const imagePath = (fileName: string) => assetPath(`images/bebes/${fileName}`)

const babies = [
  {
    name: 'Bebe Kit Harlow',
    type: 'Colecao especial',
    image: imagePath('Bebê Kit Harlow (1).png'),
    desc: 'Um encanto delicado para conhecer nos detalhes.',
  },
  {
    name: 'Bebe Reborn Ellie',
    type: 'Colecao especial',
    image: imagePath('Bebê Reborn Ellie (1).png'),
    desc: 'Expressao doce e acabamento cheio de carinho.',
  },
  {
    name: 'Bebe Reborn Joaquim',
    type: 'Colecao especial',
    image: imagePath('Bebê Reborn Joaquim (1).png'),
    desc: 'Um pequeno amor para guardar no coracao.',
  },
  {
    name: 'Bebe Reborn Kit April',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit April (1).png'),
    desc: 'Detalhes encantadores em uma composicao especial.',
  },
  {
    name: 'Bebe Reborn Kit Huxley Menina',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Huxley Menina (1).png'),
    desc: 'Delicadeza, presenca e muito afeto em cada detalhe.',
  },
  {
    name: 'Bebe Reborn Kit Joseph Acordado',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Joseph Acordado (1).png'),
    desc: 'Olhar acordado e cheio de personalidade.',
  },
  {
    name: 'Bebe Reborn Kit Kylin Menino',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Kylin Menino (1).png'),
    desc: 'Um modelo masculino com acabamento acolhedor.',
  },
  {
    name: 'Bebe Reborn Kit Li-hua',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Li-hua (1).png'),
    desc: 'Um encanto suave para se apaixonar de perto.',
  },
  {
    name: 'Bebe Reborn Kit Lisa Negra',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Lisa Negra (1).png'),
    desc: 'Beleza, representatividade e muito cuidado.',
  },
  {
    name: 'Bebe Reborn Kit Maizie',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Maizie (1).png'),
    desc: 'Feito para encantar em cada pequeno gesto.',
  },
  {
    name: 'Bebe Reborn Kit Mei Lien',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Mei Lien (1).png'),
    desc: 'Uma criacao especial, cheia de ternura.',
  },
  {
    name: 'Bebe Reborn Kit Phoenix',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Phoenix (1).png'),
    desc: 'Presenca marcante com toque delicado.',
  },
  {
    name: 'Bebe Reborn Kit Sam',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Sam (1).png'),
    desc: 'Pequeno, carinhoso e cheio de encanto.',
  },
  {
    name: 'Bebe Reborn Kit Shaya',
    type: 'Kit reborn',
    image: imagePath('Bebê Reborn Kit Shaya (1).png'),
    desc: 'Um carinho especial em forma de bebe reborn.',
  },
]

const questions = [
  {
    q: 'Como posso conhecer os bebes disponiveis?',
    a: 'Entre em contato com a maternidade para consultar os modelos disponiveis, receber mais fotos reais e esclarecer suas duvidas.',
  },
  {
    q: 'Posso solicitar mais fotos e detalhes?',
    a: 'Sim! Voce pode conversar com a maternidade para solicitar informacoes adicionais sobre o bebe de seu interesse.',
  },
  {
    q: 'Como funcionam o pagamento e a entrega?',
    a: 'As condicoes de pagamento, prazos e opcoes de entrega sao informados diretamente no atendimento, conforme a disponibilidade.',
  },
  {
    q: 'As fotos representam os modelos disponiveis?',
    a: 'As imagens do catalogo usam as fotos adicionadas ao projeto. Consulte a maternidade para confirmar disponibilidade atual e receber detalhes do modelo escolhido.',
  },
]

function ContactLink({
  children,
  className = '',
  message,
}: {
  children: React.ReactNode
  className?: string
  message?: string
}) {
  return (
    <a className={className} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <div className="announcement">
        Um universo de carinho, delicadeza e encanto <Heart size={12} fill="currentColor" />
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Dudinha Hikari - inicio">
            <img src={assetPath('images/logo.jpg')} alt="Logomarca original Maternidade Reborn Dudinha Hikari" />
            <span>
              <strong>Dudinha Hikari</strong>
              <small>MATERNIDADE REBORN</small>
            </span>
          </a>
          <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Navegacao principal">
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
            <a href="#colecao" onClick={() => setMenuOpen(false)}>
              Nossos bebes
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              A maternidade
            </a>
            <a href="#duvidas" onClick={() => setMenuOpen(false)}>
              Duvidas
            </a>
            <ContactLink className="mobile-contact">
              Fale conosco <ArrowUpRight size={15} />
            </ContactLink>
          </nav>
          <ContactLink className="header-contact">
            Fale conosco <ArrowUpRight size={16} />
          </ContactLink>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="eyebrow-line" /> BEM-VINDA AO NOSSO UNIVERSO
              </span>
              <h1>
                O encanto mora <em>nos pequenos</em> detalhes.
              </h1>
              <p>
                Um cantinho especial para quem acredita que o carinho transforma cada detalhe em uma lembranca
                inesquecivel.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#colecao">
                  Conheca nossos bebes <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#sobre">
                  Nossa historia <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-note">
                <Heart size={16} />
                <span>Feito com amor, pensado para encantar.</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <img src={imagePath('Bebê Reborn Kit Huxley Menina (1).png')} alt="Bebe reborn em destaque" />
              </div>
              <div className="hero-stamp">
                <Heart size={19} />
                <span>
                  Um carinho
                  <br />
                  especial
                </span>
              </div>
              <span className="hero-vertical">DUDINHA HIKARI - MATERNIDADE REBORN</span>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container values-grid">
            <div>
              <Heart size={21} />
              <span>Carinho em cada detalhe</span>
            </div>
            <div>
              <Sparkles size={21} />
              <span>Um universo de encanto</span>
            </div>
            <div>
              <Gift size={21} />
              <span>Momentos especiais</span>
            </div>
            <div>
              <ShieldCheck size={21} />
              <span>Atendimento acolhedor</span>
            </div>
          </div>
        </section>

        <section className="section collection" id="colecao">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">DESCUBRA ESSE UNIVERSO</span>
                <h2>
                  Pequenos encantos, <em>grandes emocoes.</em>
                </h2>
              </div>
              <p>Explore a delicadeza de cada criacao e encontre aquele bebe que vai conquistar seu coracao.</p>
            </div>
            <div className="product-grid">
              {babies.map((baby) => (
                <article className="product-card" key={baby.name}>
                  <div className="product-image">
                    <img src={baby.image} alt={`Foto do ${baby.name}`} loading="lazy" />
                    <span className="product-tag">{baby.type}</span>
                  </div>
                  <div className="product-info">
                    <div>
                      <h3>{baby.name}</h3>
                      <p>{baby.desc}</p>
                    </div>
                    <ContactLink className="circle-link" message={`Ola! Quero saber mais sobre ${baby.name}.`}>
                      <ArrowUpRight size={20} />
                    </ContactLink>
                  </div>
                </article>
              ))}
            </div>
            <div className="collection-bottom">
              <span>Gostou de algum bebe? Converse com a gente para saber mais.</span>
              <ContactLink className="text-link">
                Consultar disponibilidade <ArrowRight size={17} />
              </ContactLink>
            </div>
          </div>
        </section>

        <section className="story section" id="sobre">
          <div className="container story-grid">
            <div className="story-art">
              <div className="story-art-inner">
                <img src={assetPath('images/bebes/autora.jpg')} alt="Autora da Maternidade Reborn Dudinha Hikari" />
              </div>
              <span className="story-small-label">A AUTORA</span>
            </div>
            <div className="story-copy">
              <span className="eyebrow">MUITO MAIS QUE UMA MATERNIDADE</span>
              <h2>
                Um lugar onde o <em>carinho</em> ganha forma.
              </h2>
              <p>
                A Maternidade Reborn Dudinha Hikari e um universo dedicado a delicadeza, ao encanto e a emocao de cada
                pequeno detalhe.
              </p>
              <p>Aqui, queremos que cada visita seja acolhedora, especial e cheia de descobertas.</p>
              <ContactLink className="btn btn-outline">
                Converse com a maternidade <ArrowUpRight size={18} />
              </ContactLink>
            </div>
          </div>
        </section>

        <section className="section care">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">CUIDADO QUE VOCE SENTE</span>
              <h2>Cada detalhe importa.</h2>
              <p>Uma experiencia pensada para acolher, inspirar e ajudar voce a encontrar algo especial.</p>
            </div>
            <div className="care-grid">
              <div>
                <div className="care-icon">
                  <Heart />
                </div>
                <h3>Delicadeza</h3>
                <p>Uma apresentacao cuidadosa para valorizar cada detalhe.</p>
              </div>
              <div>
                <div className="care-icon">
                  <MessageCircle />
                </div>
                <h3>Proximidade</h3>
                <p>Atendimento para conhecer suas preferencias e esclarecer duvidas.</p>
              </div>
              <div>
                <div className="care-icon">
                  <PackageCheck />
                </div>
                <h3>Transparencia</h3>
                <p>Informacoes sobre disponibilidade, condicoes e entrega no atendimento.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="duvidas">
          <div className="container faq-grid">
            <div>
              <span className="eyebrow">ESTAMOS AQUI PARA AJUDAR</span>
              <h2>
                Duvidas <em>frequentes.</em>
              </h2>
              <p>Reunimos algumas respostas para tornar sua experiencia mais tranquila.</p>
              <ContactLink className="text-link">
                Ainda tem duvidas? Fale conosco <ArrowRight size={17} />
              </ContactLink>
            </div>
            <div className="faq-list">
              {questions.map((item, i) => (
                <div className="faq-item" key={item.q}>
                  <button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <ChevronDown size={19} className={openFaq === i ? 'rotated' : ''} />
                  </button>
                  {openFaq === i && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="container closing-inner">
            <span className="eyebrow">UM CONVITE ESPECIAL</span>
            <h2>
              Seu proximo encanto
              <br />
              pode estar <em>aqui.</em>
            </h2>
            <p>Venha conhecer nosso universo e descubra todos os detalhes com a gente.</p>
            <ContactLink className="btn btn-light">
              Fale com a Dudinha Hikari <ArrowUpRight size={18} />
            </ContactLink>
            <Heart className="closing-heart" size={100} strokeWidth={0.7} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={assetPath('images/logo.jpg')} alt="Maternidade Reborn Dudinha Hikari" />
              <div>
                <strong>Dudinha Hikari</strong>
                <span>Maternidade Reborn</span>
              </div>
            </div>
            <p>Um universo de delicadeza, afeto e pequenos encantos.</p>
            <div className="footer-social">
              <ContactLink className="social-button">
                <MessageCircle size={19} />
              </ContactLink>
              <a
                className="social-button"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - configure o perfil oficial"
              >
                <Instagram size={19} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Maternidade Reborn Dudinha Hikari.</span>
            <span>
              Feito com carinho <Heart size={12} />
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
