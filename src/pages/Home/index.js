import React from "react";

import "./styles.css";

import Chat from "../../components/Chat";

function Home() {
  return (
    <>
      <div className="a11y-responsive a11y-toolbar ltr right">
        <ul className="a11y-toolbar-list">
          <li className="a11y-toolbar-list-item">
            <button
              type="button"
              className="a11y-toggle-contrast toggle-contrast"
              id="is_normal_contrast"
              aria-pressed="false"
            >
              <span className="offscreen">Alternar Alto Contraste</span>
              <span className="aticon aticon-adjust" aria-hidden="true"></span>
            </button>
          </li>
          <li className="a11y-toolbar-list-item">
            <button
              type="button"
              className="a11y-toggle-fontsize toggle-fontsize"
              id="is_normal_fontsize"
              aria-pressed="false"
            >
              <span className="offscreen">Alternar Tamanho da Fonte</span>
              <span className="aticon aticon-font" aria-hidden="true"></span>
            </button>
          </li>
        </ul>
      </div>

      <header>
        <div id="redes-sociais">
          <div className="container">
            <div className="row">
              <div
                id="widget-acessibilidade"
                className="hidden-xs hidden-sm hidden-md col-lg-1"
              >
                <div className="a11y-responsive   ltr  right a11y-toolbar-widget">
                  <ul>
                    <li>
                      <button
                        type="button"
                        className="a11y-toggle-contrast toggle-contrast"
                        id="is_normal_contrast"
                        aria-pressed="false"
                      >
                        <span className="offscreen">
                          Alternar Alto Contraste
                        </span>
                        <span
                          className="aticon aticon-adjust"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="a11y-toggle-fontsize toggle-fontsize"
                        id="is_normal_fontsize"
                        aria-pressed="false"
                      >
                        <span className="offscreen">
                          Alternar Tamanho da Fonte
                        </span>
                        <span
                          className="aticon aticon-font"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden-xs hidden-sm hidden-md col-lg-4 menu-topo-esquerda"></div>
              <div
                id="itens-redes"
                className="col-xs-12 col-md-offset-8 col-md-3 col-lg-offset-0 col-lg-7"
              >
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/SemefManaus"
                      target="_blank"
                      title="Facebook"
                      className="icone-facebook"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SemefManaus"
                      target="_blank"
                      title="Twitter"
                      className="icone-twitter"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UClBl-ITqHBSRZZkQdTWLreA"
                      target="_blank"
                      title="Youtube"
                      className="icone-youtube"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/semefmanaus"
                      target="_blank"
                      title="Instagram"
                      className="icone-instagram"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bg_1" role="navigation">
          <div className="container">
            <div className="row">
              <div className="navbar-header col-sm-12 col-xs-12">
                <button
                  type="button"
                  className="navbar-toggle sb-toggle-left"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="row topo-bg">
                  <div id="logo" className="col-sm-5 col-md-4 col-xs-12">
                    <a
                      className="navbar-brand"
                      href="https://semef.manaus.am.gov.br/"
                      title="semef"
                    >
                      <img
                        src="./SEMEF_files/logo-pmm-2021.png"
                        className="img-responsive"
                      />
                    </a>
                  </div>

                  <div
                    id="busca"
                    className="col-sm-5 col-sm-offset-1 col-md-offset-4 col-md-4 col-lg-offset-5 col-lg-3 hidden-xs"
                  >
                    <form
                      role="search"
                      method="get"
                      className="form-pesquisa"
                      action="https://semef.manaus.am.gov.br/"
                    >
                      <div>
                        <input
                          type="text"
                          name="s"
                          className="col-xs-10 col-sm-10 col-md-8 col-lg-10 search-field"
                          placeholder="Pesquisar"
                          value=""
                        />
                        <button className="btn btn-busca" type="submit">
                          <span className="glyphicon glyphicon-search"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="barra-menu bg_2">
            <div className="container">
              <div className="row">
                <div
                  id="menu"
                  className="hidden-xs hidden-sm hidden-md col-lg-10"
                >
                  <ul className="nav navbar-nav">
                    <li id="menu-item-1183" className="dropdown">
                      <a href="http:/#">
                        A SEMEF<b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu">
                        <li id="menu-item-1177" className="">
                          <a href="https://semef.manaus.am.gov.br/a-semef/sobre-a-semef/">
                            Sobre a SEMEF
                          </a>
                        </li>
                        <li id="menu-item-1178" className="">
                          <a href="https://semef.manaus.am.gov.br/a-semef/estrutura-organizacional/">
                            Estrutura Organizacional
                          </a>
                        </li>
                        <li id="menu-item-1988" className="">
                          <a href="https://semef.manaus.am.gov.br/a-semef/equipe/">
                            Equipe
                          </a>
                        </li>
                        <li id="menu-item-1180" className="">
                          <a href="https://semef.manaus.am.gov.br/a-semef/acoes-e-metas/">
                            Ações e Metas
                          </a>
                        </li>
                        <li id="menu-item-1181" className="">
                          <a href="https://semef.manaus.am.gov.br/localizacao/">
                            Localização
                          </a>
                        </li>
                        <li id="menu-item-1182" className="">
                          <a href="https://semefatende.manaus.am.gov.br/contato">
                            Fale Conosco
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1184" className="dropdown">
                      <a href="http:/#">
                        Áreas<b className="caret"></b>
                      </a>
                      <ul className="dropdown-menu">
                        <li id="menu-item-1403" className="">
                          <a href="https://semef.manaus.am.gov.br/receita/">
                            Receita
                          </a>
                        </li>
                        <li id="menu-item-1456" className="">
                          <a href="https://semef.manaus.am.gov.br/tesouro/">
                            Tesouro
                          </a>
                        </li>
                        <li id="menu-item-1501" className="">
                          <a href="https://semef.manaus.am.gov.br/orcamento/">
                            Orçamento
                          </a>
                        </li>
                        <li id="menu-item-1633" className="">
                          <a href="https://semef.manaus.am.gov.br/gestao/">
                            Gestão
                          </a>
                        </li>
                        <li id="menu-item-1638" className="">
                          <a href="https://semef.manaus.am.gov.br/tecnologia-da-informacao/">
                            Tecnologia da Informação
                          </a>
                        </li>
                        <li id="menu-item-1668" className="">
                          <a href="https://semef.manaus.am.gov.br/ugcm/">
                            UGCM
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-3124" className="">
                      <a href="https://semef.manaus.am.gov.br/carf-m/">
                        CARF-M
                      </a>
                    </li>
                    <li id="menu-item-1186" className="">
                      <a href="https://transparencia.manaus.am.gov.br/transparencia/v2/#/home">
                        Transparência
                      </a>
                    </li>
                    <li id="menu-item-1187" className="">
                      <a href="http://dom.manaus.am.gov.br/">Diário Oficial</a>
                    </li>
                    <li id="menu-item-1188" className="">
                      <a href="http://www.manaus.am.gov.br/">Portal Manaus</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="row">
                    <div id="semef-atende2" className="col-xs-12">
                      <a
                        href="https://manausatende.manaus.am.gov.br/"
                        target="_blank"
                      >
                        <section
                          id="semef-atende2-section"
                          tabindex="-1"
                          className=" focusable"
                        >
                          Manaus Atende
                        </section>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="siderbarMenu"
                className="menu-slide sb-slidebar sb-left sb-momentum-scrolling sb-style-overlay"
                style={{ marginLeft: 395 + "px" }}
              >
                <div className="row">
                  <div className="col-xs-12 mob-header-menu">
                    <div className="col-xs-8">
                      <img
                        src="./SEMEF_files/logo-pmm-2021.png"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-xs-2 col-xs-offset-2">
                      <div className="fechar-menu sb-close">
                        <span>X</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <ul className="lst-menu1">
                      <li id="menu-item-1183" className="dropdown">
                        <a
                          href="http:/#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          A SEMEF
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-1177" className="">
                            <a href="https://semef.manaus.am.gov.br/a-semef/sobre-a-semef/">
                              Sobre a SEMEF
                            </a>
                          </li>
                          <li id="menu-item-1178" className="">
                            <a href="https://semef.manaus.am.gov.br/a-semef/estrutura-organizacional/">
                              Estrutura Organizacional
                            </a>
                          </li>
                          <li id="menu-item-1988" className="">
                            <a href="https://semef.manaus.am.gov.br/a-semef/equipe/">
                              Equipe
                            </a>
                          </li>
                          <li id="menu-item-1180" className="">
                            <a href="https://semef.manaus.am.gov.br/a-semef/acoes-e-metas/">
                              Ações e Metas
                            </a>
                          </li>
                          <li id="menu-item-1181" className="">
                            <a href="https://semef.manaus.am.gov.br/localizacao/">
                              Localização
                            </a>
                          </li>
                          <li id="menu-item-1182" className="">
                            <a href="https://semefatende.manaus.am.gov.br/contato">
                              Fale Conosco
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-1184" className="dropdown">
                        <a
                          href="http:/#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Áreas
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-1403" className="">
                            <a href="https://semef.manaus.am.gov.br/receita/">
                              Receita
                            </a>
                          </li>
                          <li id="menu-item-1456" className="">
                            <a href="https://semef.manaus.am.gov.br/tesouro/">
                              Tesouro
                            </a>
                          </li>
                          <li id="menu-item-1501" className="">
                            <a href="https://semef.manaus.am.gov.br/orcamento/">
                              Orçamento
                            </a>
                          </li>
                          <li id="menu-item-1633" className="">
                            <a href="https://semef.manaus.am.gov.br/gestao/">
                              Gestão
                            </a>
                          </li>
                          <li id="menu-item-1638" className="">
                            <a href="https://semef.manaus.am.gov.br/tecnologia-da-informacao/">
                              Tecnologia da Informação
                            </a>
                          </li>
                          <li id="menu-item-1668" className="">
                            <a href="https://semef.manaus.am.gov.br/ugcm/">
                              UGCM
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-3124" className="">
                        <a href="https://semef.manaus.am.gov.br/carf-m/">
                          CARF-M
                        </a>
                      </li>
                      <li id="menu-item-1186" className="">
                        <a href="https://transparencia.manaus.am.gov.br/transparencia/v2/#/home">
                          Transparência
                        </a>
                      </li>
                      <li id="menu-item-1187" className="">
                        <a href="http://dom.manaus.am.gov.br/">
                          Diário Oficial
                        </a>
                      </li>
                      <li id="menu-item-1188" className="">
                        <a href="http://www.manaus.am.gov.br/">Portal Manaus</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="backgroundConteudo"
        className="bg_modal"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          opacity: 0.5,
          display: "none",
        }}
        onclick="fecharModal();"
      ></div>

      <div className="container">
        <div className="row">
          <section
            id="noticias"
            className="col-sm-12 col-md-6 focusable"
            tabindex="-1"
          >
            <div className="row">
              <div className="col-sm-12">
                <div
                  id="destaques"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <a
                        href="https://semef.manaus.am.gov.br/noticia/campanha-nota-premiada-da-prefeitura-sorteia-r-112-mil-em-premios/"
                        title="Campanha ‘Nota Premiada’ da prefeitura sorteia R$ 112 mil em prêmios"
                      >
                        <img
                          className="first-slide"
                          src="./SEMEF_files/05.10.21-Campanha-‘Nota-Premiada-da-prefeitura-sorteia-R-112-mil-em-premios-720x407.png"
                          alt=""
                        />
                        <div className="carousel-caption">
                          <h5>
                            Campanha ‘Nota Premiada’ da prefeitura sorteia R$
                            112 mil em prêmios
                          </h5>
                        </div>
                      </a>
                    </div>

                    <div className="item">
                      <a
                        href="https://semef.manaus.am.gov.br/noticia/prefeitura-de-manaus-consolida-projeto-de-lei-orcamentaria-com-acoes-que-somam-r-71-bilhoes-para-2022/"
                        title="Prefeitura de Manaus consolida Projeto de Lei Orçamentária com ações que somam R$ 7,1 bilhões para 2022"
                      >
                        <img
                          className="first-slide"
                          src="./SEMEF_files/18.06.21-Projeto-de-Lei-das-Diretrizes-Orcamentarias-para-o-exercicio-de-2022-e-apresentado-em-audiencia-publica-virtual-a-CMM-720x407.png"
                          alt=""
                        />
                        <div className="carousel-caption">
                          <h5>
                            Prefeitura de Manaus consolida Projeto de Lei
                            Orçamentária com ações que somam R$ 7,1 bilhões para
                            2022
                          </h5>
                        </div>
                      </a>
                    </div>

                    <div className="item">
                      <a
                        href="https://semef.manaus.am.gov.br/noticia/prefeitura-anuncia-projeto-para-novo-refis-municipal-e-realiza-inovacoes-para-simplificar-legislacao-tributaria/"
                        title="Prefeitura anuncia projeto para novo Refis Municipal e realiza inovações para simplificar legislação tributária"
                      >
                        <img
                          className="first-slide"
                          src="./SEMEF_files/30.09.21-Prefeitura-anuncia-projeto-para-novo-Refis-Municipal-e-realiza-inovacoes-para-simplificar-legislacao-tributaria-720x407.png"
                          alt=""
                        />
                        <div className="carousel-caption">
                          <h5>
                            Prefeitura anuncia projeto para novo Refis Municipal
                            e realiza inovações para simplificar legislação
                            tributária
                          </h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="https://semef.manaus.am.gov.br/#destaques"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="glyphicon glyphicon-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="https://semef.manaus.am.gov.br/#destaques"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="glyphicon glyphicon-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="ultimas-noticias col-sm-6 col-md-3">
            <h3>Últimas Notícias</h3>
            <div className="row">
              <artcle className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/nona-parcela-do-iss-autonomo-vence-nesta-quinta-feira-30-9/"
                  title="Nona parcela do ISS Autônomo vence nesta quinta-feira, 30/9"
                >
                  <span>TRIBUTOS</span>
                  <h5>
                    Nona parcela do ISS Autônomo vence nesta quinta-feira, 30/9
                  </h5>
                </a>
              </artcle>
              <artcle className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/prefeitura-de-manaus-realiza-audiencia-publica-para-apresentacao-dos-projetos-de-leis-do-ppa-2022-2025-e-loa-2022/"
                  title="Prefeitura de Manaus realiza audiência pública para apresentação dos projetos de leis do PPA 2022-2025 e LOA 2022"
                >
                  <span>ORÇAMENTO</span>
                  <h5>
                    Prefeitura de Manaus realiza audiência pública para
                    apresentação dos projetos de leis do PPA 2022-2025 e LOA
                    2022
                  </h5>
                </a>
              </artcle>
              <artcle className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/contribuintes-aderem-aos-canais-de-atendimento-tributario-on-line-da-prefeitura-de-manaus/"
                  title="Contribuintes aderem aos canais de atendimento tributário on-line da Prefeitura de Manaus"
                >
                  <span>SERVIÇOS </span>
                  <h5>
                    Contribuintes aderem aos canais de atendimento tributário
                    on-line da Prefeitura de Manaus
                  </h5>
                </a>
              </artcle>
              <artcle className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/sorteados-da-nona-edicao-do-nota-premiada-manaus-recebem-premios/"
                  title="Sorteados da nona edição do ‘Nota Premiada Manaus’ recebem prêmios"
                >
                  <span>PREMIAÇÃO</span>
                  <h5>
                    Sorteados da nona edição do ‘Nota Premiada Manaus’ recebem
                    prêmios
                  </h5>
                </a>
              </artcle>
            </div>
          </div>

          <div className="ultimas-noticias ultimas-noticias-coluna2 col-sm-6 col-md-3">
            <div className="row">
              <article className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/prefeitura-de-manaus-lembra-contribuinte-que-6a-parcela-do-iptu-2021-vence-nesta-quarta-feira-15-9/"
                  title="Prefeitura de Manaus lembra contribuinte que 6ª parcela do IPTU 2021 vence nesta quarta-feira, 15/9"
                >
                  <span>TRIBUTOS</span>
                  <h5>
                    Prefeitura de Manaus lembra contribuinte que 6ª parcela do
                    IPTU 2021 vence nesta quarta-feira, 15/9
                  </h5>
                </a>
              </article>
              <article className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/prefeitura-de-manaus-disponibiliza-adesao-ao-domicilio-tributario-eletronico/"
                  title="Prefeitura de Manaus disponibiliza adesão ao Domicílio Tributário Eletrônico"
                >
                  <span>SISTEMA</span>
                  <h5>
                    Prefeitura de Manaus disponibiliza adesão ao Domicílio
                    Tributário Eletrônico
                  </h5>
                </a>
              </article>
              <article className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/prefeitura-divulga-os-primeiros-resultados-do-projeto-mapa-de-manaus/"
                  title="Prefeitura divulga os primeiros resultados do projeto Mapa de Manaus"
                >
                  <span>CADASTRO IMOBILIÁRIO</span>
                  <h5>
                    Prefeitura divulga os primeiros resultados do projeto Mapa
                    de Manaus
                  </h5>
                </a>
              </article>
              <article className="noticia col-xs-12">
                <a
                  href="https://semef.manaus.am.gov.br/noticia/prefeitura-sorteia-mais-27-participantes-da-campanha-nota-premiada/"
                  title="Prefeitura sorteia mais 27 participantes da campanha Nota Premiada"
                >
                  <span>CONTEMPLADOS</span>
                  <h5>
                    Prefeitura sorteia mais 27 participantes da campanha Nota
                    Premiada
                  </h5>
                </a>
              </article>

              <div className="col-sm-12 mais-noticias">
                <a
                  className="pull-right"
                  href="https://semef.manaus.am.gov.br/noticia/"
                  role="button"
                >
                  Mais notícias
                </a>
              </div>
            </div>
          </div>
          <div className="hidden-xs col-sm-12 banner-publicidade">
            <a
              href="https://semef.manaus.am.gov.br/servicos-on-line/"
              title="ATENDIMENTO TRIBUTÁRIO ON-LINE"
              target="_blank"
            >
              <img
                width="1100"
                height="90"
                src="./SEMEF_files/ATENDIMENTO-TRIBUTARIO-2.gif"
                className="img-responsive center-block wp-post-image"
                alt=""
                loading="lazy"
              />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
      <section id="banners" tabindex="-1" className=" focusable">
        <div className="container">
          <div
            id="carousel-banners"
            className="slider col-sm-12 slick-initialized slick-slider"
          >
            <span className="block banner-anterior glyphicon glyphicon-chevron-left slick-arrow"></span>
            <div aria-live="polite" className="slick-list draggable">
              <div
                className="slick-track transform: "
                style={{
                  opacity: 1,
                  width: 4560 + "px",
                }}
                role="listbox"
              >
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-6"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://semefatende.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/MANAUS_ATENDE_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://mapademanaus.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/MAPA_MANAUS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-4"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://nota.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/bannerNotaManaus.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-3"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://notapremiada.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/NOTA_PREMIADA_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-2"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://ppp.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/PPP_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="-1"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://transparencia.manaus.am.gov.br/transparencia/v2/#/home"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/INFORMACAO_TRANSPARENCIA_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide00"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/wp-content/uploads/2021/01/CALENDARIO-2021.png"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CALENDARIO_FISCAL_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide01"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/servicos-on-line/"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CANAIS-ON-LINE_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide02"
                >
                  <a
                    href="http://www2.manaus.am.gov.br/docs/portal/secretarias/manausatende/Carta%20de%20Servi%C3%A7os%20ao%20Usu%C3%A1rio%20SEMEF%202018.pdf"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CARTA_SERVICOS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-active"
                  data-slick-index="3"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide03"
                >
                  <a
                    href="http://compras.manaus.am.gov.br/publico"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/COMPRAS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-active"
                  data-slick-index="4"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide04"
                >
                  <a
                    href="http://www.concursosfcc.com.br/concursos/semef118/index.html"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CONCURSO_SEMEF_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-active"
                  data-slick-index="5"
                  aria-hidden="false"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide05"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/credenciamento-bancario"
                    target="_blank"
                    tabindex="0"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CREDENCIAMENTO_BANCARIO_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="6"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide06"
                >
                  <a
                    href="http://semefatende.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/MANAUS_ATENDE_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="7"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide07"
                >
                  <a
                    href="http://mapademanaus.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/MAPA_MANAUS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="8"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide08"
                >
                  <a
                    href="http://nota.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/bannerNotaManaus.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="9"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide09"
                >
                  <a
                    href="http://notapremiada.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/NOTA_PREMIADA_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="10"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide010"
                >
                  <a
                    href="http://ppp.manaus.am.gov.br/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/PPP_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide"
                  data-slick-index="11"
                  aria-hidden="true"
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide011"
                >
                  <a
                    href="http://transparencia.manaus.am.gov.br/transparencia/v2/#/home"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/INFORMACAO_TRANSPARENCIA_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="12"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/wp-content/uploads/2021/01/CALENDARIO-2021.png"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CALENDARIO_FISCAL_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="13"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/servicos-on-line/"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CANAIS-ON-LINE_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="14"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://www2.manaus.am.gov.br/docs/portal/secretarias/manausatende/Carta%20de%20Servi%C3%A7os%20ao%20Usu%C3%A1rio%20SEMEF%202018.pdf"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CARTA_SERVICOS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="15"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://compras.manaus.am.gov.br/publico"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/COMPRAS_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="16"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://www.concursosfcc.com.br/concursos/semef118/index.html"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CONCURSO_SEMEF_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div
                  className="w190 col-xs-6 col-sm-3 col-md-2 banner-item slick-slide slick-cloned"
                  data-slick-index="17"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <a
                    href="http://semef.manaus.am.gov.br/credenciamento-bancario"
                    target="_blank"
                    tabindex="-1"
                  >
                    <img
                      width="162"
                      height="92"
                      src="./SEMEF_files/CREDENCIAMENTO_BANCARIO_.png"
                      className="img-responsive wp-post-image"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>

            <span
              className="banner-proximo glyphicon glyphicon-chevron-right slick-arrow"
              style={{ display: "block" }}
            ></span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-bg bg_3">
          <div className="container">
            <div className="row">
              <div id="copy">
                <img src="./SEMEF_files/logo-pmm-2021-rodape.png" />
                <br />
                <span>
                  Ⓒ 2021 - Secretaria Municipal de Finanças e Tecnologia da
                  Informação - SEMEF <br />
                  Todos os direitos reservados.
                </span>
              </div>
            </div>
          </div>
          <div className="footer-infos">
            Av. Brasil, N° 2971 – Compensa I - CEP: 69036-110 - Ouvidoria:
            0800-092-0111
          </div>
        </div>
      </footer>

      <div
        id="lightboxOverlay"
        className="lightboxOverlay"
        style={{ display: "none" }}
      ></div>
      <div id="lightbox" className="lightbox" style={{ display: "none" }}>
        <div className="lb-outerContainer">
          <div className="lb-container">
            <img
              className="lb-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            <div className="lb-nav">
              <a className="lb-prev" href="https://semef.manaus.am.gov.br/"></a>
              <a className="lb-next" href="https://semef.manaus.am.gov.br/"></a>
            </div>
            <div className="lb-loader">
              <a className="lb-cancel"></a>
            </div>
          </div>
        </div>
        <div className="lb-dataContainer">
          <div className="lb-data">
            <div className="lb-details">
              <span className="lb-caption"></span>
              <span className="lb-number"></span>
            </div>
            <div className="lb-closeContainer">
              <a className="lb-close"></a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalEventos"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Eventos
              </h4>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="text-center">EVENTO</th>
                      <th className="text-center">LOCAL</th>
                      <th className="text-center">DATA</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chat />
    </>
  );
}

export default Home;
