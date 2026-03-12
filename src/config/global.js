export default {
  global: {
    Name: 'Escalado digital',
    Description:
      'Al finalizar todo el proceso de patronaje hasta el punto de prototipado se lleva a cabo el proceso de escalado, este se realiza después de la verificación y validación de los moldes que se quieren trabajar, el escalado se puede trabajar de manera digital o manual, en cualquiera de los dos casos siempre se debe tener como punto de partida el cuadro de tallas para poder hacer el análisis detallado de las prendas, cada empresa, marca o industria trabaja medidas, análisis y cuadros de tallas diferentes, lo que hace necesario el reconocimiento de estas.',
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
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Escalado manual de prendas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Escalado de falda',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Escalado de base con pinzas - superior',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Escalado de básico de pantalón',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escalado cortes, manga, cuello',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Base superior masculina - análisis de escalado bibásico',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Análisis y construcción de cuadro de tallas masculino - dxt escalado',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Modificación de moldes - análisis sobre medidas',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Escalado en Optitex',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Escalado Masculino',
      referencia: 'Gaviria F., (2018). Manual escalado masculino',
      tipo: 'Documento',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/5245/patronaje_escalado_linea_masculina.pdf;sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Escalado',
      significado: 'Adaptación a una determinada escala o marcas de medida.',
    },
    {
      termino: 'Escalado bibásico',
      significado: 'Se toman dos tallas básicas para obtener una intermedia.',
    },
    {
      termino: 'Escalado monobásico',
      significado:
        'Partiendo de tallas base se obtienen las demás por aumento o reducción.',
    },
    {
      termino: 'Escalado simple',
      significado:
        'Se aplica cuando los incrementos de tallas varían dentro de la serie.',
    },
    {
      termino: 'Optitex',
      significado:
        'Empresa que ofrece soluciones de software para el diseño, la visualización y la producción de ropa en 2D y 3D.',
    },
    {
      termino: 'Plano cartesiano',
      significado:
        'Dos rectas numéricas perpendiculares, una horizontal y otra vertical, que se cortan en un punto llamado origen o punto cero.',
    },
    {
      termino: 'Proporciones',
      significado:
        'En escalado son medidas de los aumentos o disminuciones secuenciales para obtener tallas mayores o menores, moldes o bases.',
    },
    {
      termino: 'Talla',
      significado:
        'Medida convencional usada en la fabricación y venta de prendas de vestir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA.',
      link:
        'https://www.scribd.com/document/279036173/Manual-de-Patronaje-Basico-Sena',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
      link:
        'https://www.harpersbazaar.mx/cuerpo-mente/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda: dibujo plano.',
      link: '',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA.',
      link:
        'https://www.scribd.com/document/394130880/Laver-James-Breve-Historia-Del-Traje-y-La-Moda-pdf',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book].',
      link: '',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso.',
      link: '',
    },
    {
      referencia:
        'Vélez, M., García M., Hincapié L. (1996). Patronaje y escalado línea interior y deportiva. Servicio Nacional de Aprendizaje SENA. ',
      link:
        'https://www.scribd.com/document/574961362/SENA-Patronaje-y-escalado-Linea-interior-deportiva',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
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
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Instructora técnica',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
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
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
