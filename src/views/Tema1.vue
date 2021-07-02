<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Sistema de navegación en plataformas software

    p Un sistema de navegación permite que un usuario se pueda mover libremente por las diferentes secciones que soporta una plataforma. Esto no es un simple tema de navegación.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5(data-aos="fade-up" style="background-color: #F3F9FF;")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg" style="max-width:200px;display:inline;")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Un apasionado de la lectura entra en una biblioteca en busca de un ejemplar antiguo del Quijote. Un joven empresario entra en una web de viajes, en busca de un vuelo ida y vuelta a Perú. Estos pueden ser dos escenarios reales, para dos personas hipotéticas en busca de información. Por lo que, antes de comenzar a diseñar cualquier sistema de navegación web o móvil se debe tener claro cómo busca la gente.

    p.mt-5 #[strong Ahora, se dará a conocer la búsqueda de información, la navegación por sitios web y dispositivos móviles.]

    AcordionA.mt-5(data-aos="fade-up" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="En busca de la información")
        .col-md-8.mb-4.mb-md-0.p-4
          p Saber cómo buscan las personas información online presenta problemas y desafíos. La disponibilidad inmediata de los recursos en la red permite a las personas cambiar el rumbo de su búsqueda sobre la marcha. Existe una estrategia de búsqueda, en la cual a medida que se localiza nueva información el curso de la investigación de la persona puede variar.

          p.mt-3 Se suele buscar con agilidad, y es frecuente que los usuarios puedan vagar de una página a otra con el peligro de perderse en la profundidad de una jerarquía web. La manera de buscar y la frecuencia con la que el usuario puede perderse en este proceso son aspectos que deben ser tenidos en cuenta a la hora de diseñar los sistemas de navegación web (Calvo, 2015).
      
        .col-md-4.p-4
          figure.p-5
            img.imagen_flotante_animada(src='@/assets/curso/tema1/2.svg', alt='Avatar')

      .row(titulo="Navegar por sitios web")
        .col-md-8.mb-4.mb-md-0.p-4
          p La información no solo se busca, se experimenta. El término «experiencia» implica que las emociones juegan un papel clave junto con la conducta y la cognición.

          p.mt-3 Las personas ya no pueden ser vistas como seres racionales que se comportan de forma sistemática y ordenada a la hora de buscar información, teniendo en cuenta su papel crítico en la web. Al respecto muchos de los sitios tienen en la barra de navegación etiquetas o secciones con los siguientes títulos (Inicio, servicios, nosotros, acerca de y contactos), esta distribución del contenido que hace parte de la arquitectura de la información de un sistema interactivo software debe evaluarse, primeramente.
      
        .col-md-4.p-4
          figure.p-5
            img.imagen_flotante_animada(src='@/assets/curso/tema1/3.svg', alt='Avatar')

      .row(titulo="Patrón tradicional para el diseño de navegación de un sitio Web")
        .col-md-8.mb-4.mb-md-0.p-4
          p Se debe tener siempre presente que el diseño de la navegación influye en gran medida en la experiencia de los usuarios al interactuar con el sitio. Por un lado, los diseñadores deben dedicar el tiempo necesario para familiarizarse con los patrones de búsqueda de sus usuarios, sus emociones, reacciones, etc. Por otro, les ayudará a decidir mejor qué tipo de navegación se desea y es la más adecuada para el sitio y escoger entre varias opciones disponibles.

          .row.mt-5.p-3(style="background-color: #4DD0E1;border-radius: 10px;")
            .col-md-8
              h4.text-white.mt-2 Navegación Web
            .col-md-4.indicador__container.text-center(style="transform:none;")
              button.color-acento-botones(@click="modal1 = true") Ver imagen
              .indicador--click(v-if="mostrarIndicador")
          
          ModalA(:abrir-modal.sync="modal1")
            figure
              img(src='@/assets/curso/tema1/6.svg', alt='Imagen')

        .col-md-4.p-4
          figure.p-5
            img.imagen_flotante_animada(src='@/assets/curso/tema1/4.svg', alt='Avatar')

      .row(titulo="Navegar por aplicaciones móviles")
        .col-md-8.mb-4.mb-md-0.p-4
          p La navegación en una aplicación móvil debe ser intuitiva y predecible, es más, debe ser de fácil recordación. Tanto para usuarios nuevos como para quienes vuelven a usarla debe ser simple de descubrir y recordar cómo moverse en las distintas secciones o vistas con comodidad. No obstante, lograr que la navegación sea descubrible y accesible puede ser todo un reto por las limitaciones de las pantallas pequeñas y a su vez, se presenta la necesidad de priorizar el contenido sobre los componentes de la interfaz. En la actualidad existen distintos patrones de navegación que apuntan a resolver este mismo problema de diferentes modos, pero todos tienen, en algún aspecto, problemas de usabilidad (Ferraris, 2018).

          p.mt-3 Es necesario realizar al menos una técnica de prototipado rápido que hará que la navegación entre las vistas del software y la interacción sean mucho más fáciles. Por lo tanto, se ve que hay una correlación entre la navegación entre las distintas vistas que tiene un sitio o app con la o las acciones que debe hacer la persona o el usuario, que es mayormente conocido como sistemas de interacción.
      
        .col-md-4.p-4
          figure.p-5
            img.imagen_flotante_animada(src='@/assets/curso/tema1/5.svg', alt='Avatar')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(19px 14px 5px #e4e4e4)
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important

@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(0 25px 15px rgba(0,0,0,0.1))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
</style>
