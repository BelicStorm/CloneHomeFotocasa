import { useState } from 'react'

const Navbar = () => {
  return (
    <div data-v-dda875ec="" className="" style={{ top: "0px" }}>
      <div data-v-dda875ec="" className="main-menu-container fixed-top is-transparent">
        <nav data-v-dda875ec="" id="main-menu" className="navbar navbar-expand-lg">
          <a data-v-dda875ec="" href="/" className="navbar-brand">
            <img data-v-dda875ec="" src="https://www.tecnocasa.es/img/logo/tecnocasa-es-color.svg" alt="tecnocasa" height="60" className="navbar-logo dddd" />

          </a>
          <ul data-v-dda875ec="" className="navbar-nav list-inline float-right menu-desk">
            <li data-v-dda875ec="" className="list-inline-item nav-item "><a data-v-dda875ec=""
              href="https://blog.tecnocasa.es/" target="&quot;_blank&quot;" className="nav-link blog">

              Blog
            </a></li>
            <li data-v-dda875ec="" className="list-inline-item nav-item "><a data-v-dda875ec=""
              href="https://www.tecnocasa.es/vender-casa.html" className="nav-link vender-casa">

              Vender casa
            </a></li>
            <li data-v-dda875ec="" className="list-inline-item nav-item "><a data-v-dda875ec=""
              href="https://www.tecnocasa.es" className="nav-link evaluation">

              Comprar casa
            </a></li>
            <li data-v-dda875ec="" className="list-inline-item nav-item "><a data-v-dda875ec=""
              href="https://kiron.es/" target="&quot;_blank&quot;" className="nav-link hipotecas">

              Hipotecas
            </a></li>
            <li data-v-dda875ec="" className="list-inline-item nav-item "><a data-v-dda875ec=""
              href="https://www.tecnocasa.es/agencias-inmobiliarias.html" className="nav-link agency">

              Buscar agencia inmobiliaria
            </a></li>
            <li data-v-dda875ec="" className="list-inline-item nav-item accedi"><a data-v-dda875ec="" href="#"
              className="nav-link">
              Login
            </a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const HomeHeroSection = () => {
  return (
    <div className="home-hero tecnocasa-5">
      <div className="container home">
        <div className="text-center claim"><span>
          Estrena <strong>tu nuevo hogar</strong></span>
          <h1>
            Se encuentra entre los más de <strong>7.789</strong> pisos en venta o alquiler en las inmobiliarias
            Tecnocasa
          </h1>
        </div>
        <div className="search-bar mx-auto">
          <div className="contract-buttons">
            <a className="btn active">
              Comprar
            </a>
            <a className="btn">
              Alquilar
            </a>
            <a className="btn">
              Vender
            </a>
          </div>
          <form method="get" action="https://www.tecnocasa.es/immobili/ricerca" className="search-bar-form">
            <div className="base-estates-fields">
              <input type="hidden" name="results_type" />
              <input type="hidden" name="id" value="0" />
              <input type="hidden" name="city" />
              <input type="hidden" name="contract" value="acquis" />
              <input type="hidden" name="districts" />
              <input type="hidden" name="quarters" />
              <input type="hidden" name="placeholder" />
              <input type="hidden" name="province" />
              <input type="hidden" name="region" />
              <input type="hidden" name="sector" value="res" />
            </div>
            <div id="geo-autocomplete" className="geo-autocomplete">
              <input type="text" placeholder="Ciudad, provincia, distrito, barrio o referencia" className="form-control" />
              <div id="badge-autocomplete" className="badge-autocomplete" style={{ display: "none" }}>
                <div className="badge-autocomplete-text"><span title="Área seleccionada">Área
                  seleccionada</span>
                  <img src="https://www.tecnocasa.es/img/icons/tecnocasa/search.svg" height="10" width="10" />
                </div>
              </div>
              <ul className="geo-autocomplete-results" style={{ display: "none" }}>

              </ul>
              <div data-v-39c68346="" role="dialog"
                className="modal bottom-modal districts-list-modal">

                <div data-v-39c68346="" className="modal-backdrop fade"></div>
              </div>
            </div>
            <div className="search-icon">
              <img src="https://www.tecnocasa.es/img/icons/tecnocasa/search.svg" alt="Cerca" height="25" width="23" />
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="m-auto mt-3 claim-vita">
            <div data-v-40704c29="" className="masked-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const HomeAdvertisingSection = () => {
  return (
    <section className="advertising advertising-es mb-2">
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h2>Nuestra selección de pisos con encanto y de ocasión</h2>
          </div>
        </div>
        <div className="row p-0">
          <div className="col-xs-12 col-lg-4 box" style={{ margin: "30px 0px" }}>
            <div className="d-flex align-items-start flex-column h-100">
              <div className="w-100">
                <img src="https://www.tecnocasa.es/img/services/aticos-tecnocasa.jpg" alt="Áticos para disfrutar de las vistas"
                  className="w-100 rounded rounded-24" style={{ border: "1px solid #f3f3f3", height: "325px" }} /></div>
              <h3>
                Áticos para disfrutar de las vistas
              </h3>
              <div>
                Los áticos son las viviendas perfectas si buscas espacio al aire libre pero no quieres mudarte a las
                afueras. Busca entre los mejores áticos con buenas vistas y mucha privacidad.
              </div>
              <div className="mt-auto">
                <a href="/aticos-en-venta.html" className="btn btn-outline-success mt-2">Áticos en venta</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-4 box" style={{ margin: "30px 0px" }}>
            <div className="d-flex align-items-start flex-column h-100">
              <div className="w-100">
                <img src="https://www.tecnocasa.es/img/services/aticos-tecnocasa.jpg" alt="Áticos para disfrutar de las vistas"
                  className="w-100 rounded rounded-24" style={{ border: "1px solid #f3f3f3", height: "325px" }} /></div>
              <h3>
                Áticos para disfrutar de las vistas
              </h3>
              <div>
                Los áticos son las viviendas perfectas si buscas espacio al aire libre pero no quieres mudarte a las
                afueras. Busca entre los mejores áticos con buenas vistas y mucha privacidad.
              </div>
              <div className="mt-auto">
                <a href="/aticos-en-venta.html" className="btn btn-outline-success mt-2">Áticos en venta</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-4 box" style={{ margin: "30px 0px" }}>
            <div className="d-flex align-items-start flex-column h-100">
              <div className="w-100">
                <img src="https://www.tecnocasa.es/img/services/aticos-tecnocasa.jpg" alt="Áticos para disfrutar de las vistas"
                  className="w-100 rounded rounded-24" style={{ border: "1px solid #f3f3f3", height: "325px" }} /></div>
              <h3>
                Áticos para disfrutar de las vistas
              </h3>
              <div>
                Los áticos son las viviendas perfectas si buscas espacio al aire libre pero no quieres mudarte a las
                afueras. Busca entre los mejores áticos con buenas vistas y mucha privacidad.
              </div>
              <div className="mt-auto">
                <a href="/aticos-en-venta.html" className="btn btn-outline-success mt-2">Áticos en venta</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
const HomeSellSection = () => {
  return (
    <section className="vender-piso d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 vender-piso-bg"></div>
          <div className="col-lg-5">
            <h2>Vender piso es algo más que poner un anuncio online</h2>
            <div className="mt-2 mb-1">
              En Tecnocasa nos tomamos muy en serio la venta de tu casa. Por eso tendrás un profesional que
              gestionará todo el proceso y se dedicará a ti en exclusiva.
            </div>

            <a href="https://vender-piso.tecnocasa.es/" className='btn btn-network btn-md' target="_blank">Vende tucasa</a>

          </div>
        </div>
      </div>
    </section>
  );
}
const HomeServicesSection = () => {
  return (
    <section className="home-services">
      <div className="container services">
        <h2 className="text-center">Servicios Tecnocasa</h2>
        <div className="VueCarousel">
          <div className="VueCarousel-wrapper">
            <div className="VueCarousel-inner"
              style={{ transform: "translate(0px, 0px)", transition: "transform 0.5s ease 0s", flexBasis: "476px", visibility: "visible", height: "auto" }}>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active" style={{ width: "444px" }}>
                <div className="carousel-card mx-auto px-1 text-center">
                  <div className="img-service"><img src="https://www.tecnocasa.es/img/services/valuta-casa_es.jpg" alt="Vender casa"
                    className='rounded rounded-circle' /></div>
                  <div className="p-3">
                    <h2>Vender casa</h2>
                    <p>Pídenos ya una valoración gratis y te diremos cuánto vale tu casa para que puedas
                      venderla cuanto antes.</p>
                    <a href="/vender-casa.html" className="btn btn-success btn-md">Saber más</a>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active VueCarousel-slide-center" style={{ width: "444px" }}>
                <div className="carousel-card mx-auto px-1 text-center">
                  <div className="img-service"><img src="https://www.tecnocasa.es/img/services/visita-in-comodita.jpg" alt="Hipotecas"
                    className='rounded rounded-circle' /></div>
                  <div className="p-3">
                    <h2>Hipotecas</h2>
                    <p>Kìron, la red de intermediarios de crédito del Grupo Tecnocasa, te busca la hipoteca
                      hasta el 100%.</p> <a href="https://www.kiron.es"
                        className="btn btn-success btn-md">Saber más</a>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active" style={{ width: "444px" }}>
                <div className="carousel-card mx-auto px-1 text-center">
                  <div className="img-service"><img src="https://www.tecnocasa.es/img/services/lavora-con-noi.jpg"
                    alt="¡Trabaja con nosotros!" className='rounded rounded-circle' /></div>
                  <div className="p-3">
                    <h2>¡Trabaja con nosotros!</h2>
                    <p>Únete a nuestro equipo. Buscamos agentes inmobiliarios e intermediarios de crédito en
                      toda España.</p> <a href="https://empleo.tecnocasa.es" target="_blank"
                        className="btn btn-success btn-md">Saber más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const HomeNewsSection = () => {
  return (
    <section className="home-news">
      <div className="container">
        <div className="VueCarousel">
          <div className="VueCarousel-wrapper">
            <div className="VueCarousel-inner caroueselNews">
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active">
                <div className="carousel-card d-flex flex-column">
                  <div className="mx-auto">
                    <img src="https://www.tecnocasa.es/img/services/vender-piso-con-hipoteca.jpg"
                      alt="Vender piso con hipoteca: ¿Qué opciones tengo?"
                      className="card-news mx-auto d-block" /></div>
                  <div>
                    <h4>Vender piso con hipoteca: ¿Qué opciones tengo?</h4>
                  </div>
                  <div>
                    <p>Si quieres vender tu piso, pero todavía estás pagando la hipoteca, puede que no
                      tengas muy claro cómo debes actuar. Si este es tu caso, no te preocupes, te
                      explicamos cuáles son tus opciones.</p>
                  </div>
                  <div className="mt-auto"><a
                    href="https://blog.tecnocasa.es/vender-casa/vender-piso-con-hipoteca/"
                    target="_blank">
                    Saber más
                  </a></div>
                </div>
              </div>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active">
                <div className="carousel-card d-flex flex-column">
                  <div className="mx-auto"><img src="https://www.tecnocasa.es/img/services/tasacion-vivienda-3.jpg"
                    alt="Tasación: Qué es, quién la hace y para qué sirve"
                    className="card-news mx-auto d-block" /></div>
                  <div>
                    <h4>Tasación: Qué es, quién la hace y para qué sirve</h4>
                  </div>
                  <div>
                    <p>Si estás pensando en comprar o vender una vivienda seguro que la palabra tasación te
                      suena. Pero, ¿qué es una tasación? ¿quién la hace? ¿para qué sirve?</p>
                  </div>
                  <div className="mt-auto"><a href="https://blog.tecnocasa.es/vender-casa/tasacion-vivienda/"
                    target="_blank">
                    Saber más
                  </a></div>
                </div>
              </div>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active">
                <div className="carousel-card d-flex flex-column">
                  <div className="mx-auto"><img src="https://www.tecnocasa.es/img/services/como-vender-mi-piso-rapido.jpg"
                    alt="¿Quieres una tasación de tu vivienda?" className="card-news mx-auto d-block" /></div>
                  <div>
                    <h4>¿Quieres una tasación de tu vivienda?</h4>
                  </div>
                  <div>
                    <div>En Tecnocasa te damos el precio real de tu vivienda gratis. Gracias a nuestra
                      experiencia te podemos ayudar a sacar la mejor rentabilidad para la venta de tu
                      piso.&nbsp;</div>
                  </div>
                  <div className="mt-auto"><a href="https://vender-piso.tecnocasa.es/tasacion-vivienda/"
                    target="_blank">
                    Saber más
                  </a></div>
                </div>
              </div>
              <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active">
                <div className="carousel-card d-flex flex-column">
                  <div className="mx-auto"><img src="https://www.tecnocasa.es/img/services/decorar-paredes-sin-hacer-agujeros.jpg"
                    alt="Cómo decorar las paredes sin hacer agujeros" className="card-news mx-auto d-block" />
                  </div>
                  <div>
                    <h4>Cómo decorar las paredes sin hacer agujeros</h4>
                  </div>
                  <div>
                    <p>Hoy en día hay multitud de soluciones y grandes ideas para decorar las paredes de
                      casa de forma rápida, sencilla y con un gran impacto visual. Y todo ello sin
                      taladro, sin agujeros y sin grandes boquetes en la pared.</p>
                    <p>&nbsp;</p>
                  </div>
                  <div className="mt-auto"><a
                    href="https://blog.tecnocasa.es/decoracion/decorar-sin-hacer-agujeros/"
                    target="_blank">
                    Saber más
                  </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const HomeRevistaSection = () => {
  return (
    <section className="revista d-flex align-items-center mt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 text-center"><img src="https://www.tecnocasa.es/img/services/img-2.svg" className="pb-1" /></div>
          <div className="col-xl-6 pt-4">
            <h3>Consulta online las propuestas inmobiliarias de la revista Tecnocasa</h3>
            <div className="mt-1 mb-1">
              Consulta nuestra revista inmobiliaria directamente desde tu dispositivo móvil u ordenador. Si
              quieres una revista impresa, acércate a tu oficina <strong>Tecnocasa</strong> y recoge una copia
              gratuita de la publicación de mayor distribución del sector inmobiliario.
            </div>
            <div className="btn btn-network btn-md">Navegar por la revista</div>
          </div>
        </div>
      </div>
    </section>
  );
}
const HomePage = () => {
  return (
    <div className='home'>
      <HomeHeroSection />
      <HomeAdvertisingSection />
      <HomeSellSection />
      <HomeServicesSection />
      <HomeNewsSection />
      <HomeRevistaSection />
    </div>
  );
}

const SeoSection = () => {
  return (
    <div className="seo-hub container-fluid seo-static pt-3 pb-3">


      <div className="show-more-content">
        <div className="container static-gup ">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div className="static-block p-2 flex-fill">
              <h2>Pisos en venta</h2>
              <div>
                <ul>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/almeria/almeria.html">Pisos
                    en venta Almería</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/cadiz/cadiz.html">Pisos
                    en venta Cádiz</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/cordoba/cordoba.html">Pisos
                    en venta Córdoba</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/granada/granada.html">Pisos
                    en venta Granada</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/huelva/huelva.html">Pisos
                    en venta Huelva</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/jaen/jaen.html">Pisos en
                    venta Jaén</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/malaga/malaga.html">Pisos
                    en venta Málaga</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/andalucia/sevilla/sevilla.html">Pisos
                    en venta Sevilla</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/aragon/zaragoza/zaragoza.html">Pisos
                    en venta Zaragoza</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/canarias/santa-cruz-de-tenerife/santa-cruz-de-tenerife.html">Pisos
                    en venta Santa Cruz<br />de Tenerife</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/castilla-y-leon/valladolid/valladolid.html">Pisos
                    en venta Valladolid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/castilla-la-mancha/toledo/toledo.html">Pisos
                    en venta Toledo</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/cataluna/barcelona/barcelona.html">Pisos
                    en venta Barcelona</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/cataluna/gerona/girona.html">Pisos
                    en venta Girona</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/cataluna/tarragona/tarragona.html">Pisos
                    en venta Tarragona</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/comunidad-de-madrid/madrid/madrid.html">Pisos
                    en venta Madrid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/comunidad-valenciana/alicante/alicante.html">Pisos
                    en venta Alicante</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/piso/comunidad-valenciana/valencia/valencia.html">Pisos
                    en venta Valencia</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/extremadura/badajoz/badajoz.html">Pisos
                    en venta Badajoz</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/piso/pais-vasco/bizkaia/bilbao.html">Pisos
                    en venta Bilbao</a></li>
                </ul>
              </div>
            </div>
            <div className="static-block p-2 flex-fill">
              <h2>Casas en venta</h2>
              <div>
                <ul>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/almeria/almeria.html">Casas
                    en venta Almería</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/cadiz/cadiz.html">Casas
                    en venta Cádiz</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/cordoba/cordoba.html">Casas
                    en venta Córdoba</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/granada/granada.html">Casas
                    en venta Granada</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/huelva/huelva.html">Casas
                    en venta Huelva</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/jaen/jaen.html">Casas en
                    venta Jaén</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/malaga/malaga.html">Casas
                    en venta Málaga</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/andalucia/sevilla/sevilla.html">Casas
                    en venta Sevilla</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/aragon/zaragoza/zaragoza.html">Casas
                    en venta Zaragoza</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/canarias/santa-cruz-de-tenerife/santa-cruz-de-tenerife.html">Casas
                    en venta Santa Cruz<br />de Tenerife</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/castilla-y-leon/valladolid/valladolid.html">Casas
                    en venta Valladolid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/castilla-la-mancha/toledo/toledo.html">Casas
                    en venta Toledo</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/cataluna/barcelona/barcelona.html">Casas
                    en venta Barcelona</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/cataluna/gerona/girona.html">Casas
                    en venta Girona</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/cataluna/tarragona/tarragona.html">Casas
                    en venta Tarragona</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/comunidad-de-madrid/madrid/madrid.html">Casas
                    en venta Madrid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/comunidad-valenciana/alicante/alicante.html">Casas
                    en venta Alicante</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/venta/casa/comunidad-valenciana/valencia/valencia.html">Casas
                    en venta Valencia</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/extremadura/badajoz/badajoz.html">Casas
                    en venta Badajoz</a></li>
                  <li><a href="https://www.tecnocasa.es/venta/casa/pais-vasco/bizkaia/bilbao.html">Casas
                    en venta Bilbao</a></li>
                </ul>
              </div>
            </div>
            <div className="static-block p-2 flex-fill">
              <h2>Vender</h2>
              <div>
                <ul>
                  <li><a href="https://vender-piso.tecnocasa.es" target="_blank">Vender piso</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/barcelona/" target="_blank">Vender
                    piso Barcelona</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/madrid/" target="_blank">Vender piso
                    Madrid</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/valencia/" target="_blank">Vender piso
                    Valencia</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/zaragoza/" target="_blank">Vender piso
                    Zaragoza</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/tasacion-vivienda"
                    target="_blank">Tasación vivienda</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/tasacion-de-vivienda-en-barcelona/"
                    target="_blank">Tasación vivienda Barcelona</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/tasacion-de-vivienda-en-madrid/"
                    target="_blank">Tasación vivienda Madrid</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/tasacion-de-vivienda-en-valencia/"
                    target="_blank">Tasación vivienda Valencia</a></li>
                  <li><a href="https://vender-piso.tecnocasa.es/tasacion-de-vivienda-en-zaragoza/"
                    target="_blank">Tasación vivienda Zaragoza</a></li>
                </ul>
              </div>
            </div>
            <div className="static-block p-2 flex-fill">
              <h2>Pisos en alquiler</h2>
              <div>
                <ul>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/andalucia/cordoba/cordoba.html">Pisos
                    en alquiler Córdoba</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/andalucia/granada/granada.html">Pisos
                    en alquiler Granada</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/andalucia/malaga/malaga.html">Pisos
                    en alquiler Málaga</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/andalucia/sevilla/sevilla.html">Pisos
                    en alquiler Sevilla</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/aragon/zaragoza/zaragoza.html">Pisos
                    en alquiler Zaragoza</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/canarias/santa-cruz-de-tenerife/santa-cruz-de-tenerife.html">Pisos
                    en alquiler Santa Cruz<br />de Tenerife</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/castilla-y-leon/valladolid/valladolid.html">Pisos
                    en alquiler Valladolid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/castilla-la-mancha/toledo/toledo.html">Pisos
                    en alquiler Toledo</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/cataluna/barcelona/barcelona.html">Pisos
                    en alquiler Barcelona</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/comunidad-de-madrid/madrid/madrid.html">Pisos
                    en alquiler Madrid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/comunidad-valenciana/alicante/alicante.html">Pisos
                    en alquiler Alicante</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/alquiler/inmuebles/comunidad-valenciana/valencia/valencia.html">Pisos
                    en alquiler Valencia</a></li>
                </ul>
              </div>
            </div>
            <div className="static-block p-2 flex-fill">
              <h2>Inmobiliarias Tecnocasa</h2>
              <div>
                <ul>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/almeria/almeria.html">Inmobiliarias
                    Almería</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/cadiz/cadiz.html">Inmobiliarias
                    Cádiz</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/cordoba/cordoba.html">Inmobiliarias
                    Córdoba</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/granada/granada.html">Inmobiliarias
                    Granada</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/huelva/huelva.html">Inmobiliarias
                    Huelva</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/jaen/jaen.html">Inmobiliarias
                    Jaén</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/malaga/malaga.html">Inmobiliarias
                    Málaga</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/sevilla/sevilla.html">Inmobiliarias
                    Sevilla</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/zaragoza/zaragoza.html">Inmobiliarias
                    Zaragoza</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/santa-cruz-de-tenerife/santa-cruz-de-tenerife.html">Inmobiliarias
                    Santa Cruz<br />de Tenerife</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/valladolid/valladolid.html">Inmobiliarias
                    Valladolid</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/toledo/toledo.html">Inmobiliarias
                    Toledo</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/barcelona/barcelona.html">Inmobiliarias
                    Barcelona</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/gerona/girona.html">Inmobiliarias
                    Girona</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/tarragona/tarragona.html">Inmobiliarias
                    Tarragona</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/madrid/madrid.html">Inmobiliarias
                    Madrid</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/alicante/alicante.html">Inmobiliarias
                    Alicante</a></li>
                  <li><a
                    href="https://www.tecnocasa.es/agencias-inmobiliarias/valencia/valencia.html">Inmobiliarias
                    Valencia</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/badajoz/badajoz.html">Inmobiliarias
                    Badajoz</a></li>
                  <li><a href="https://www.tecnocasa.es/agencias-inmobiliarias/bizkaia/bilbao.html">Inmobiliarias
                    Bilbao</a></li>
                </ul>
              </div>
            </div>
            <div className="static-block p-2 flex-fill">
              <h2>Hipotecas</h2>
              <div>
                <ul>
                  <li><a href="https://www.kiron.es/hipotecas" target="_blank">Mejores hipotecas</a>
                  </li>
                  <li><a href="https://www.kiron.es/primera-vivienda" target="_blank">Hipotecas
                    100%</a></li>
                  <li><a href="https://www.kiron.es/alquilar-o-comprar" target="_blank">Simula si es
                    mejor<br />comprar o alquilar</a></li>
                  <li><a href="https://www.kiron.es/calcula-tu-cuota" target="_blank">Simulador
                    hipotecas<br />calcula la cuota</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-2">
            <div><img alt="Tecnocasa Group" src="https://www.tecnocasa.es/img/logo/tecnocasaGroup_es.svg" width="134" height="40" /></div>
            <div className="social-desk mt-1"><a rel="noopener" href="https://www.facebook.com/grupotecnocasa"
              target="_blank">
              <img alt="facebook" src="https://www.tecnocasa.es/img/icons/facebook.svg" height="35" width="35" /></a> <a
                rel="noopener" href="https://www.instagram.com/tecnocasa_espana" target="_blank">
                <img alt="instagram" src="https://www.tecnocasa.es/img/icons/instagram.svg" height="35" width="35" /></a></div>
          </div>
          <div className="col-xs-12 col-lg-3">
            <div className="footer-links">
              <h4><img alt="company" src="https://www.tecnocasa.es/img/icons/company.svg" width="21" height="21" />
                Sobre el Grupo Tecnocasa
              </h4>
              <ul>
                <li><a rel="noopener" href="https://www.tecnocasa.es/contacta/sedes.html">
                  Donde estamos
                </a></li>
                <li><a rel="noopener" href="https://www.tecnocasagroup.com/dovesiamo/"
                  target="&quot;_blank&quot;">
                  En el mundo
                </a></li>
                <li><a rel="noopener" href="https://empleo.tecnocasa.es" target="&quot;_blank&quot;">
                  Trabaja con nosotros
                </a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-lg-3">
            <div className="footer-links">
              <h4><img alt="news" src="https://www.tecnocasa.es/img/icons/news.svg" width="18" height="16" />
                News
              </h4>
              <ul>
                <li><a rel="noopener" href="https://prensa.tecnocasa.es" target="_blank">Noticias del grupo</a>
                </li>
              </ul>
              <div className="footer-links mt-1">
                <h4>
                  <img alt="contacts" src="https://www.tecnocasa.es/img/icons/contacts.svg" width="19" height="19" />
                  Sede Nacional
                </h4>
                <ul>
                  <li><a rel="noopener" href="https://www.tecnocasa.es" target="_blank">www.tecnocasa.es</a>
                  </li>
                  <li><a rel="noopener" href="https://www.tecnorete.es" target="_blank">www.tecnorete.es</a>
                  </li>
                  <li><a rel="noopener" href="https://www.kiron.es" target="_blank">kiron.es</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-4 foreign-sites">
            <div className="footer-links world">
              <h4>Tecnocasa en el mundo</h4> <a rel="noopener" href="https://www.tecnocasa.it"
                target="_blank">Italia</a>,
              <a rel="noopener" href="https://www.tecnocasa.es" target="_blank">España</a>,
              <a rel="noopener" href="https://www.tecnocasa.hu" target="_blank">Hungria</a>,
              <a rel="noopener" href="https://www.tecnocasa.es/mexico.html" target="_blank">México</a>,
              <a rel="noopener" href="https://www.tecnocasa.es/polonia.html" target="_blank">Polonia</a>,
              <a rel="noopener" href="https://www.tecnocasa.fr" target="_blank">Francia</a>,
              <a rel="noopener" href="https://www.tecnocasa.de" target="_blank">Alemania</a>,
              <a rel="noopener" href="https://www.tecnocasa.tn" target="_blank">Túnez</a>,
              <a rel="noopener" href="https://www.tecnocasa.es/tailandia.html" target="_blank">Tailandia</a>,
              <a rel="noopener" href="https://sanmarino1.tecnocasa.it/sanmarino/sanmarino/"
                target="_blank">República de San Marino</a> <a href="https://login4.tecnocasa.com/"
                  target="_blank" className="btn btn-intranet">Login Intranet</a> <a id="cookie-settings-btn"
                    className="btn btn-intranet">Configurar cookies</a>
            </div>
            <div className="social">
              <hr />
              <div className="social-mobile mt-1"><a rel="noopener" href="https://www.facebook.com/grupotecnocasa"
                target="_blank"><img alt="facebook" src="https://www.tecnocasa.es/img/icons/facebook.svg" height="45"
                  width="45" /></a> <a rel="noopener" href="https://www.instagram.com/tecnocasa_espana"
                    target="_blank"><img alt="instagram" src="https://www.tecnocasa.es/img/icons/instagram.svg" height="45"
                      width="45" /></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col legal">
          2024

          Franchising Ibérico Tecnocasa S.A.
          CIF A60592367 - C/ Pallars, nº 1-3 Parque de Negocios Mas Blau II, El Prat de Llobregat
          (Barcelona-España)
          Red en franquicia - Cada sociedad franquiciada tiene su propio titular y es independiente del
          franquiciador.
          <br /> <span className="policy-links"><a
            href="https://www.tecnocasa.es/legal/politicadeprivacidad.html">Política de privacidad</a>
            |
            <a href="https://www.tecnocasa.es/legal/avisolegal.html">Aviso legal</a>
            |
            <a href="https://www.tecnocasa.es/privacy/cookies.html">Cookie Policy</a>
            |
            <a href="https://www.tecnocasa.es/legal/consumidor.html">Información al consumidor</a></span>
        </div>
      </div>
    </div>
  );
}




function App() {

  return (
    <div>
        <Navbar/>
        <HomePage/>
        <SeoSection/>
        <Footer/>
    </div>
  )
}

export default App
