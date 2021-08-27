<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Construcción de la estructura del frontend

    p(data-aos="fade-up") Para el desarrollo de la estructura del frontend, el cual para el alcance de este componente formativo estará solo dedicado a las tecnologías de HTML5 y CSS3, se utilizará un framework de maquetación el cual se llama Materialize. Al respecto es un framework CSS que permite crear sitios y aplicaciones web con los principios de #[strong Material Design]. La versión estándar del framework contiene CSS y JavaScript y trae los CSS listos para trabajar.

    .col-md-11.m-auto.mt-5.row
      .col-md-5.mb-3
        figure
          img.image_floating(data-aos="zoom-in-right" src="@/assets/curso/tema4/primero.svg")
      .col-md-7.p-5
        figure.mt-5
          img(data-aos="fade-in" src="@/assets/curso/tema3/2.svg" style="max-width:80px;")
        p.mt-5 #[strong.h4 De manera adicional, esta herramienta trae consigo las buenas prácticas para el desarrollo del frontend,] permitiendo que la aplicación sea más eficiente y rápida al momento del despliegue, por otra parte, es un framework que es responsivo a cualquier tamaño de dispositivo.

        br
        br
        figure.mt-3
          img(data-aos="zoom-in-up" src="@/assets/curso/tema3/3.svg" style="max-width:55px;")


    p.mt-5(data-aos="fade-up") A continuación, se describen los pasos para la instalación y manejo del framework (Materialize, 2021):

    div.mt-5
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title).indicador__container(active="true")
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Instalación de #[br] Materialize 
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Instalación de Materialize
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Hay varias maneras de instalar el framework, para este caso se utilizará la descarga de los archivos, la cual se encuentra en el enlace que se dejará en la sección de material de apoyo con el nombre de “Descarga de archivos Materialize”. Al descargar la carpeta se encuentra una estructura de directorios muy parecida según la guía que presenta Materialize en su página:

              figure.mt-3
                img(src="@/assets/curso/tema4/1.png")
                figcaption Estructura de directorios de Materialize

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Proyecto de Materialize en Visual Studio Code
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Ahora lo que se debe hacer es incorporar o llamar a esa carpeta desde un entorno de desarrollo integrado, para el caso de ejemplo se utilizará Visual Studio Code, como se muestra a continuación:

              figure.col-md-5.mt-3
                img(src="@/assets/curso/tema4/2.png")
                figcaption Proyecto de Materialize en Visual Studio Code

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Configuración del proyecto
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Siguiendo la guía que indica el framework, la cual puede ser consultada en el link que se deja en la sección de material de apoyo con el nombre de “Guía rápida de Materialize”; se crea un archivo llamado index.html en la raíz de la estructura de directorios con la siguiente información, además se puede observar el llamado a los archivos de hojas de estilos y de javascript, los cuales dan el funcionamiento y la apariencia a la interfaz que se elabore:
              figure.mt-3
                img(src="@/assets/curso/tema4/3.png")
                figcaption Archivo index.html de la guía de Materialize

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Desarrollo del proyecto (primera vista)
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Hasta el momento se tienen listos tanto el framework como el entorno para realizar las vistas del caso de estudio realizado en este componente formativo. Por lo que es necesario referirse nuevamente a la primera vista diseñada en la unidad uno para revisar los componentes necesarios para el desarrollo.

                p.mt-3 En la primera vista, se necesita de:
                ul.mt-2
                  li 
                    i.lista-ul__vineta
                    | Título
                  li 
                    i.lista-ul__vineta
                    | Formulario que consta de 2 cajas de texto y un botón.

              figure.mt-3
                img(src="@/assets/curso/tema4/4.png")

              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Para este caso de la maquetación se necesita dimensionar el grid o rejilla, que lo que hace es mantener el contenido de forma organizada y estructurada. Para esto se llama a la clase container que permite centrar el contenido de la página. Esta clase se establece en aproximadamente el 70% del ancho de la ventana. Ayudando a centrar y contener el contenido de la página.

                p.mt-3 De manera adicional, en el código se muestra el uso de los colores, por lo que el título de la página utiliza el atributo orange-text, proporcionando el color naranja al texto “Publica tu Post”, según se muestra a continuación:

              figure.mt-3
                img(src="@/assets/curso/tema4/5.png")

              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Ahora se continúa con el desarrollo del formulario, el cual consta de dos (2) inputs, uno que será el título del Post y el otro que será del área de texto, según se muestra en la siguiente ilustración:

              figure.mt-3
                img(src="@/assets/curso/tema4/6.png")

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Resultado de la primera vista
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Como se alcanza a observar en el código, se sigue con la estructura tradicional de un formulario en HTML. Lo que cambia son los atributos de las clases que sirven para centrar los inputs o para mejorar la apariencia de cada uno de los objetos de interacción. Por ejemplo, el atributo #[strong col offset-s4 s4] se utiliza en cada una de las etiquetas permitiendo que cada componente del formulario se encuentre centrado.
              figure.mt-3
                img(src="@/assets/curso/tema4/7.png")
                figcaption Resultado de la primera vista

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Desarrollo de la segunda vista
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Para esta parte se utiliza el concepto de listas en HTML, como se muestra en el siguiente código de HTML:
              figure.mt-3
                img(src="@/assets/curso/tema4/8.png")
                figcaption Código HTML - Desarrollo de listas desordenadas

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Resultado de la segunda vista
            b-card-text
              .p-4.mt-2(data-aos="fade-up" style="background-color:#F6F6F6;")
                p En el código HTML anterior, se presenta la estructura normal de una lista desordenada en la cual los únicos cambios radican en el uso de los atributos que hacen parte de la naturaleza del framework. Por lo que el resultado esperado se evidencia en la siguiente ilustración:
              figure.mt-3
                img(src="@/assets/curso/tema4/9.png")
                figcaption Resultado de la segunda vista



</template>

<script>
export default {
  name: 'Tema4',
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
