<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Estructura de la interfaz de la aplicación. Caso de estudio: Servicio de publicación de posts

    p(data-aos="fade-up") Por lo regular, cuando se quiere hacer un proyecto nuevo de software, es normal que se realicen sketchs, bocetos o dibujos rápidos para tener una imagen visual de cómo será la interfaz gráfica del sistema. Esto ayuda mucho a los equipos de desarrolladores y diseñadores a plasmar una visión concreta de cómo será el proyecto en realidad, y todo inicia desde un boceto en papel. Mientras se realiza esta tarea a lápiz, se realizan cambios, se hacen correcciones o “tachones”, se tienen mejores ideas y estos sketchs se convierten en el prototipo del proyecto final, en definitiva, en Mockups.

    .col-md-10.mt-5.row
      .col-md-7.mb-3
        figure
          img.image_floating(data-aos="zoom-in-right" src="@/assets/curso/tema3/1.svg")
      .col-md-5
        figure.mt-5
          img(data-aos="fade-in" src="@/assets/curso/tema3/2.svg" style="max-width:80px;")
        p.mt-5 #[strong.h4 A todo este proceso se le denomina Wireframing que no es más que la creación de la estructura de una interfaz gráfica.] En ese sentido una de las mejores herramientas para crear prototipos, bocetos o wireframes es Balsamiq Mockups, por lo que se inicia con la instalación:

        br
        br
        figure.mt-5
          img(data-aos="zoom-in-up" src="@/assets/curso/tema3/3.svg" style="max-width:55px;")


    br
    .col-md-10.mt-5(data-aos="fade-up")
      a.anexo.caja_flotante_azul(href="https://balsamiq.cloud/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p(style="color:initial;") Se utilizará #[strong(style="color:initial;") Balsamiq] en el modo de servicio en la nube #[strong(style="word-break:break-all;color:initial;") (versión de prueba): https://balsamiq.cloud/]

    p.mt-5 Los pasos de instalación son muy sencillos, es solo registrarse y dar clic en un nuevo proyecto, como se muestran en las siguientes imágenes:

    div.mt-5
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title).indicador__container(active="true")
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Instalación de #[br] Balsamiq 
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Registro
            b-card-text
              figure
                img(src="@/assets/curso/tema3/4.png")
                figcaption Panel de instalación Balsamiq Cloud

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Creación del espacio
            b-card-text
              figure
                img(src="@/assets/curso/tema3/5.png")
                figcaption Panel de creación de espacio en Balsamiq Cloud

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Creación del primer proyecto
            b-card-text
              figure
                img(src="@/assets/curso/tema3/6.png")
                figcaption Panel de creación de proyecto en Balsamiq Cloud

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Diseño de la estructura de la interfaz
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Con esta herramienta es posible generar de manera estructural las vistas de la aplicación. De este modo solo se describe en palabras de cuántas vistas son necesarias, cuántos objetos de interacción son necesarios. Es decir, solo se presenta una propuesta de la estructura de la interfaz de la aplicación. De esta manera, esta actividad comúnmente se hace a lápiz y papel, no obstante, con Balsamiq se puede hacer esta tarea sin mayor dificultad como se presenta en la siguiente ilustración:
              figure.mt-3
                img(src="@/assets/curso/tema3/7.png")
                figcaption Diseño de la estructura de la interfaz

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Creación de las vistas del sistema
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Como el caso de estudio para este componente formativo es un servicio básico de publicación de Posts, se tendrán dos vistas para esta aplicación. Por lo tanto, se ha diseñado que la aplicación Web sea responsive y se toma como plataforma un dispositivo móvil (tablet). Al respecto la barra de herramientas de Balsamiq proporciona todo para esta primera tarea. Por lo que en la sección de material de apoyo se deja un video que abarca las bondades de esta herramienta. A continuación, se muestran las vistas de la aplicación:
              .row.mt-3
                .col-md-6.mb-3
                  figure
                    img(src="@/assets/curso/tema3/8.png")
                .col-md-6.mb-3
                  figure
                    img(src="@/assets/curso/tema3/9.png")
              
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Para este caso se realizan dos vistas, la primera es solo un formulario, el cual tiene tres (3) objetos de interacción. El primero de ellos es una caja de texto en la cual se digita el título, el segundo es un área de texto donde se describe el contenido del post y por último se tiene un botón el cual envía esos datos a una segunda vista. Desde Balsamiq se puede generar este tipo de interacción para que se genere la navegación de una vista a otra de manera inmediata revisando las opciones del objeto button.

                p.mt-3 Por otra parte, se tiene la segunda vista la cual muestra de manera ordenada la lista de post publicada por el usuario, con el formato como se detalla en esa ilustración, se resalta que la fecha, el sistema debe tomarla de manera automática cuando se hace la publicación.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
.anexo *
  color: #12263f !important
.card
  border:0 !important
.card-header
  background-color: #F3F9FF !important
.nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.nav-pills
  border-top: 9px #B4E2F8 solid !important
.nav-link:first-child
  border-top:0px !important
.nav-link.active
  font-weight:bold !important
.card-body
  padding: 0px
</style>
