export default {
  global: {
    Name: 'Requerimientos técnicos y prototipos',
    Description:
      'El control de calidad es un sistema integrado en las empresas para prevenir fallas y problemas en los procesos productivos y productos terminados; pero no es suficiente encontrar las fallas o defectos, el propósito es anticiparse al problema y suplir las deficiencias. En este componente se aborda el control de calidad sobre la base de las normas vigentes para el desarrollo de los productos; posteriormente, se profundiza en la elaboración de prototipos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        titulo: 'Control de calidad',
        numero: '1',
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        subMenu: [
          {
            titulo: 'Concepto de calidad',
            hash: 't_1_1',
            numero: '1.1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de la calidad total',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Puntos de control en el proceso de confección',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de calidad en patronaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Control de calidad en trazo y corte',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Control de calidad en confección',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Control de calidad en terminados',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Control de calidad en insumos, materiales y textiles',
            hash: 't_1_8',
          },
        ],
      },

      {
        titulo: 'Elaboración de prototipos en tejido de punto',
        nombreRuta: 'tema2',
        numero: '2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Confección <em>panty</em> femenino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Confección <em>boxer</em> masculino',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Confección de camiseta tipo polo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Confección de pantalón sudadera',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Elaboración de conjunto deportivo <i style="margin-right: 0 !important;">top</em> y <em>leggins</em>',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF7_524537_DU.zip',
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
  glosario: [
    {
      termino: 'Atributos del producto',
      significado:
        'son las cualidades o características del producto, como color, tamaño.',
    },
    {
      termino: 'Defecto',
      significado:
        'es una no conformidad en características requeridas por el cliente o una norma y que causa incumplimiento del requisito, y por tanto, insatisfacción del cliente.',
    },
    {
      termino: 'ISO (Organización Internacional de Normalización)',
      significado:
        'organismo internacional con sede en Ginebra, Suiza, integrado por organismos nacionales de normalización de más de 170 países. Su propósito es desarrollar y publicar normas internacionales que promuevan la calidad, la seguridad, la eficiencia y la estandarización de productos, servicios y procesos.',
    },
    {
      termino: 'Lote',
      significado:
        'número establecido de una producción, las cuales tienen características comunes y se agrupan dependiendo de un objetivo determinado.',
    },
    {
      termino: 'Mariposa',
      significado:
        'pieza del <em>panty</em> ubicada entre el tiro y la entrepierna para proteger y dar comodidad en la parte íntima femenina.',
    },
    {
      termino: 'Punto de control',
      significado:
        'son determinados con la metodología de árbol de decisión. Son las operaciones, fases o procesos que requieren realizar inspecciones para controlar la ocurrencia de defectos, lo cual es una medida preventiva.',
    },
    {
      termino: 'Punto de control crítico',
      significado:
        'operaciones, faces o procesos que requieren de riguroso control debido a que representan alto riesgo de presentar defectos, y por tanto, no cumplir con los requisitos.',
    },
    {
      termino: '<em>Sigma</em> (σ)',
      significado:
        'es una letra del alfabeto griego, utilizada para representar la desviación estándar (unidad estadística de medición); representa la dispersión o variabilidad de un conjunto de datos.',
    },
    {
      termino: 'Variables de calidad',
      significado:
        'cuantificación de las cualidades del producto. Ejemplo: carta de colores de la prenda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, F. (2015). Manual control de calidad en productos textiles y afines. ',
    },
    {
      referencia: 'ISO. (2015). Sistema de gestión de calidad 9001: 2015. ',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s. f.). Canal de YouTube.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema de recursos educativos digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro de Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
