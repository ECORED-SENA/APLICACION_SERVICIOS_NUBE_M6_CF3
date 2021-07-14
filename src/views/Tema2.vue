<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Sistema de interacción en plataformas software

    .row
      .col-md-6.mb-3.mt-5
        p(data-aos="fade-up") #[strong Este sistema se puede llegar a definir como un conjunto de componentes que ofrecen diversas respuestas para las necesidades de un usuario, cuando este navega por la plataforma software.] Es decir, es el diseño de cada acción del usuario sobre un sitio web o sobre una app, como por ejemplo la acción de clickear, de hacer scrolling, de utilizar algún gesto (navegación basada en gestos) como ampliar o disminuir. Cada acción predetermina una respuesta sobre la aplicación desarrollada, a lo cual se le concibe como un sistema de interacción.

        p.mt-3(data-aos="fade-up") #[strong De manera adicional, en el caso de las páginas de interacción, se les permite a los usuarios escribir, dibujar, editar, borrar y realizar todo tipo de acciones.] Pueden llegar a ser muy simples (como el caso de la página de inicio de Google) o muy complejas, reuniendo a la vez varios elementos de interacción. En el caso de las páginas simples se trata de páginas en las que es fundamental esta simplicidad. Frecuentemente las páginas más complejas requieren un tiempo de aprendizaje mayor para que el usuario se familiarice con las mismas, antes de sacarles provecho.

      .col-md-6
        figure.p-3
          img.image_floating(data-aos="zoom-in-left" src="@/assets/curso/tema2/1.svg")

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5(data-aos="fade-up" style="background-color: #F3F9FF;")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h5 En la actualidad, varios de los sitios que comúnmente se visitan tienen propiedades relacionadas a los cambios que nacen del ajuste móvil de los últimos años. Según el artículo Digital Guide indica que:
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Las páginas web han de ser hoy más eficientes e intuitivas aún para poder sobrevivir en un mercado online con una enorme competencia, ya sea en el PC de escritorio, la tablet o el teléfono móvil. El sobrecargado diseño de la década de los años 2000 ya es historia: la nueva máxima es la concentración en lo esencial. (IONOS, 2021).

    br
    .row.mt-5
      .col-md-5
        figure
          img.image_floating(data-aos="zoom-in-right" src="@/assets/curso/tema2/2.svg")

      .col-md-7.mb-3
        p(data-aos="fade-up") Este tipo de tendencia es una realidad, se ha notado que casi la gran mayoría de consultas, o actividades se realizan a través de la internet, como pedir un domicilio, hacer un pago o transacción bancaria, leer un libro, consultar un correo electrónico o si no asistir a una reunión virtual. #[strong Por lo regular y de manera natural los diseños, e interacciones están siendo “arrastrados” al enfoque móvil, solo por la experiencia y cultura de los usuarios.]

        p.mt-3(data-aos="fade-up") En ese sentido, sigue siendo de importancia crucial que las páginas web sean #[strong fáciles de usar y que esa tendencia a la usabilidad y accesibilidad] sea un elemento decisivo lo cual estaría dentro del marco de un #[strong diseño responsivo]. De esta manera, el diseño web moderno permite que una página o sitio web sea capaz de “responder o reaccionar” al dispositivo con el que se conecta la persona y presente correctamente el contenido. Al respecto no se debe entender que es la sola adaptación del contenido, sino del cambio de la interfaz en general en procura de generar una mayor usabilidad y por defecto una mejor experiencia.

    .cajon.color-acento-botones.p-4.mb-4.mt-5.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      p En este orden de ideas, abarcando de manera sucinta estos dos conceptos, se pretende realizar como caso de estudio, la estructura y maquetación de la interfaz de un servicio de publicación de posts. Por lo tanto, lo primero que se utilizará será una herramienta de prototipado rápido llamada Balsamiq Mockups que se verá en el siguiente apartado.



</template>

<script>
export default {
  name: 'Tema2',
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
</style>
