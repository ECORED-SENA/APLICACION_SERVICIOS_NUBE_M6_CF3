export default {
  global: {
    componenteFormativo: 'Diseño aplicación web',
    descripcionCurso:
      'Este componente formativo brinda herramientas para la construcción de interfaces gráficas, especialmente para entornos web, por lo tanto, se presentarán conceptos y una guía base para la construcción desde cero de un proyecto a partir de una estrategia de caso de estudio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema de navegación en plataformas software',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de interacción en plataformas software',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estructura de la interfaz de la aplicación. Caso de estudio: Servicio de publicación de posts',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Construcción de la estructura del frontend',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Calvo, L. (2015). Sistemas de navegación. Sistemas de Navegación, Madrid, España.',
      link: '',
    },
    {
      referencia:
        'Curso Wordpress. (2014). Mapa del Sitio, Navegación y Contenidos. Curso WordPress Gratis.',
      link:
        'https://cursowpress.wordpress.com/mapa-del-sitio-y-estrategia-de-navegacion/',
    },
    {
      referencia:
        'Ferraris, J. C. (2018). Patrones básicos de Navegación en Apps Móviles. Medium.',
      link:
        'https://medium.com/@juancaferraris/patrones-b%C3%A1sicos-de-navegaci%C3%B3n-en-apps-m%C3%B3viles-5b0b160ed1bb',
    },
    {
      referencia:
        'IONOS. (2021). Tendencias de diseño web. IONOS Digital Guide.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/diseno-web/tendencias-de-diseno-web/',
    },
    {
      referencia: 'Materialize. (2021). Getting Started - Materialize.',
      link: 'https://materializecss.com/getting-started.html',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'La accesibilidad web hace referencia a un diseño web que permite que las personas con cierta limitación puedan percibir, entender, navegar e interactuar con la Web, aportando a su vez contenidos. La accesibilidad web además beneficia a otras personas, incluyendo a adultos mayores que han visto mermadas sus habilidades a consecuencia de la edad.',
    },
    {
      termino: 'Material Design',
      significado:
        'Se puede entender como un lineamiento o principio de diseño enfocado en la visualización del sistema operativo Android. Este concepto también abarca para el diseño en la web y en cualquier plataforma. Fue desarrollado por Google.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Dentro del contexto de la informática y tecnologías, es un concepto utilizado para mencionar la facilidad con que las personas pueden utilizar una herramienta software particular o cualquier otro objeto tecnológico fabricado por humanos con el fin de alcanzar un objetivo concreto o satisfacer una necesidad.',
    },
  ],
  complementario: [
    {
      texto:
        'UXTips. (2018). ¿Qué es Arquitectura de la Información? [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=twVvK1eYmig',
    },
    {
      texto:
        'yReyALD. (2020). BALSAMIQ MOCKUPS / Instalación y maquetación de una aplicación móvil - FACIL (música GOT de fondo) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=idX3aFx67Vc',
    },
    {
      texto:
        'Bluuweb! (2018). Materialize CSS Material Design Framework [Curso tutorial Español] [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YJKWkUi2r5g',
    },
    {
      texto: 'Materialize.Zip (1.0.0). (2021). [Framework CSS].',
      tipo: 'Archivos',
      link:
        'https://github.com/Dogfalo/materialize/releases/download/1.0.0/materialize-v1.0.0.zip',
    },
    {
      texto: 'Materialize. (2021). Getting Started - Materialize.',
      tipo: 'Guía de instalación',
      link: 'https://materializecss.com/getting-started.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
