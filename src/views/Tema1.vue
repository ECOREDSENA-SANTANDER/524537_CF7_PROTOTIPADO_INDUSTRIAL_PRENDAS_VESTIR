<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Control de calidad
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.d-flex.flex-column
        .mb-3 Con el crecimiento de la industrialización, se requería ejercer control en los procesos para disminuir los desperdicios y los reprocesos en la producción, cada vez con niveles de unidades más altas, necesitando estandarizar las características del producto fabricado.
        .mb-0 A partir de lo mencionado, revisar la producción proporciona una mayor confianza por parte del cliente, mejora la competitividad y sirve como una herramienta en la administración de la empresa.
    
    p.text-center.mb-4(data-aos="fade") Es importante mencionar los principios de calidad para el control de la misma:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-5.d-none.d-lg-block
        img.mb-cus(src='@/assets/curso/temas/tema1/img_2.svg', alt='')
      .col-lg-6
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-plus
            span.mb-0 Mejora continua.
          li
            i.fas.fa-plus
            span.mb-0 Evitar inspecciones masivas.
          li
            i.fas.fa-plus
            span.mb-0 Relación de precio y calidad.
          li
            i.fas.fa-plus
            span.mb-0 Métodos modernos de capacitación y entrenamiento.
          li
            i.fas.fa-plus
            span.mb-0 Exigencia de la competitividad.
          li.d-flex
            i.fas.fa-plus
            p.mb-0 Identificación del trabajador con sus funciones y su aporte a la calidad.
          li
            i.fas.fa-plus
            span.mb-0 Eliminación de barreras entre áreas.
          li
            i.fas.fa-plus
            span.mb-0 Establecer ruta de calidad.
    p.text-center.mb-0(data-aos="fade") Acciones que permiten encaminar la empresa hacia el proceso de control de calidad.


    Separador  
    #t_1_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade")
      h2 1.1 Concepto de calidad

    p.mb-4(data-aos="fade") Existen varias definiciones, y cada persona puede determinar un concepto propio, además de tener en cuenta las definiciones de los estudiosos en el tema, entre los cuales se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-10.bg07.p-5
        LineaTiempoB.color-acento-contenido(:datos="datosLineaTiempoB")(data-aos="fade")
    .cajon.color-primario.p-4.mb-5(data-aos="fade")
      p.mb-0.fw-bold Al tener en cuenta los términos de los estudiosos, se puede determinar que satisfacción, cliente, necesidades, mercado y expectativas son las palabras comunes que engloban el concepto para concluir que la calidad es el nivel de satisfacción del cliente, cumpliendo con los requisitos, es decir, con las necesidades y expectativas del cliente.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Concepto de control de calidad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-9
        p.mb-4 Una vez que se tienen definidos los objetivos y los requisitos de calidad del producto, se deben controlar las variaciones de esas características, cualidades o especificaciones exigidas por el cliente o de acuerdo con la norma.
        p.mb-4 Mejor llamado control estadístico de la calidad, es el proceso conformado por una serie de técnicas para analizar el comportamiento de las variaciones de los requisitos del producto, con el fin de establecer acciones que mejoren su calidad, en pro de aumentar las ventas y la productividad de la empresa.
        .cajon.color-primario.p-4.mb-4
          h5.mb-0 El control de calidad no solo está encaminado a las inspecciones del producto terminado; también es importante realizar las inspecciones del producto durante el proceso de producción.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img_8.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-4
        p.mb-3 El cliente es la persona que adquiere el producto o servicio, puede o no utilizarlo y es quien paga por ello.
        ul.lista-ul--color.fa-ul
          li.color-primario
            i.fas.fa-plus
            span.mb-0 #[b Interno:] trabajador.
          li.color-primario
            i.fas.fa-plus
            span.mb-0 #[b Externo:] recibe el producto. Tener en cuenta que quien lo usa es el consumidor del mismo.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img_9.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-9
        .tarjeta.bg1.p-3
          .row.justify-content-around.align-items-center
            .col-lg-2.d-none.d-lg-block
              img.px-lg-3(src="@/assets/curso/temas/tema1/img_10.svg")
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-0 ¿Qué es un requisito?
                  p.mb-0 Es la traducción de las necesidades y expectativas del cliente y se presenta en tres niveles:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-primario.h-100.p-5
          .tarjeta-numerada__numero
            .h2 A
          h4 Necesidades
          p Principal objetivo del producto; si no existen, generan insatisfacción.
          ul.lista-ul--color.mb-0
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Ser funcional.
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Resolver el problema.
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Entrega oportuna.
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Respetar precio acordado.
            li.color-primario.d-flex.mb-0
              i.fas.fa-plus
              p.mb-0 Tiempo de duración de vida útil.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-secundario.h-100.p-5
          .tarjeta-numerada__numero
            .h2 B
          h4 Expectativas
          p Si se presentan en mayor medida, genera satisfacción.
          ul.lista-ul--color.mb-0
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Darle importancia al cliente.
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Trato cordial y amable al cliente.
            li.color-primario.d-flex.mb-0
              i.fas.fa-plus
              p.mb-0 Hacer sentir importante al cliente.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-acento-contenido.h-100.p-5
          .tarjeta-numerada__numero
            .h2 C
          h4 Superar expectativas
          p No esperado por el cliente (sorprenderle gratamente), incrementa el grado de satisfacción.
          ul.lista-ul--color.mb-0
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Asistencia técnica.
            li.color-primario.d-flex
              i.fas.fa-plus
              p.mb-0 Descuentos.
            li.color-primario.d-flex.mb-0
              i.fas.fa-plus
              p.mb-0 Tiempos de entrega.
    
    .fullview
      .row.justify-content-center.align-items-center.mb-5.p-5(data-aos="fade")
        .col-lg-3
          img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img_11.svg")
        .col-lg-7
          p.mb-4 Existen tipos de requisitos relacionados con:
          ul.lista-ul--color.fa-lista.mb-0
            li.d-flex
              i.fas.fa-plus
              span.mb-0 Función del producto: referencia a su desempeño, responde a la pregunta ¿para qué sirve?
            li
              i.fas.fa-plus
              span.mb-0 Características técnicas: cantidades, peso, tamaño, color, entre otras.
            li
              i.fas.fa-plus
              span.mb-0 Condiciones de pago y precio.
            li
              i.fas.fa-plus
              span.mb-0 Plazos de entrega.
            li
              i.fas.fa-plus
              span.mb-0 Especificaciones dadas por el cliente.
            li
              i.fas.fa-plus
              span.mb-0 Mantenimientos y vida útil: instrucciones de uso y términos de garantía.
            li
              i.fas.fa-plus
              span.mb-0 Legales: leyes y normas (rotulados, materiales, uso y residuos).
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-9           
        .cajon.color-primario.p-4
          p.fw-bold.mb-0 Conforme con lo mencionado anteriormente, también podemos clasificar los requisitos de acuerdo con las características directas del producto, de la organización o de los externos, como el cliente y la normatividad.
    
    p.text-center.mb-5 Dado que se presentan variaciones en los productos, es preciso permitir tolerancias, que son márgenes permisibles de variación y aceptación.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Antecedentes y evolución del control de calidad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-9
        p Al ubicarse de manera temporal en el cambio de la fabricación artesanal a la industrialización, derivado de la Revolución Industrial y de los cambios en la producción masificada, se presentó un auge en la industria del automóvil liderada por Henry Ford en la década de 1910, en la que se daban los inicios de la calidad en las inspecciones del producto terminado.
        p Con el avance de la tecnología, de los estudios del trabajo y de la implementación de técnicas para aumentar la productividad, que buscaba la estandarización del producto, la calidad ganó importancia dentro del desempeño del negocio; es decir, a partir de los niveles de calidad del producto, se empezó a satisfacer al cliente. Hoy en día, derivado de la cuarta Revolución Industrial, el proceso de control de calidad se viene automatizando para el análisis y predicción de fallas, sin olvidar que las personas siguen haciendo parte del proceso, al gestionar de manera integral la cadena de suministro.	
      .col-lg-3
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img_12.png")
    
    SlyderA(tipo='b').bgi-1.p-sm-cus.p-lg-5.mb-5
      .row.justify-content-center.px-5
        .col-lg-4
          h4.mb-5 Inspecciones
          ul.lista-ul--color
              li.color-primario
                i.fas.fa-plus
                span.mb-0 A partir de la década de 1910.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Especialización del trabajo.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Inspecciones de producto terminado.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_13.png")
      .row.justify-content-center.px-5.pt-5
        .col-lg-4
          h4.mb-5 Control de calidad
          ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span A partir de la Segunda Guerra Mundial, en los años 40.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Estudios de métodos y tiempos para mejorar eficiencia.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Procesos más especializados.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Desarrollo de estándares.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Uso de métodos de medición.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Muestreos, gráficos, sistema de información, manuales, instructivos, formatos.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_14.png")
    
      .row.justify-content-center.px-5
        .col-lg-4
          h4.mb-5 Aseguramiento de calidad
          ul.lista-ul--color
              li.color-primario
                i.fas.fa-plus
                span.mb-0 A partir de los años 60.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Garantía de calidad.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Cumplir con estándares.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Reducir defectos.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Creación de sistemas de calidad.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Auditorías internas y externas.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_15.png")
      .row.justify-content-center.px-5
        .col-lg-4
          h4.mb-5 Gestión de calidad
          ul.lista-ul--color
              li.color-primario
                i.fas.fa-plus
                span.mb-0 A partir de los años 80.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Participación de la dirección de la empresa.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Mejora continua.
              li.color-primario
                i.fas.fa-plus
                span.mb-0 Satisfacción del cliente.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_16.png")
      .row.justify-content-center.px-5
        .col-lg-4
          h4.mb-5 Calidad total
          ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  Círculos de calidad: trabajo en equipo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Desarrollo personal: capacitación y entrenamiento.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Se involucra a todas las áreas y a todas las personas de la empresa.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_17.png")
      .row.justify-content-center.px-5
        .col-lg-4
          h4.mb-5 Excelencia de la igualdad
          ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span Suma de teorías y prácticas de calidad.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Liderazgo en el mercado.
              li.color-primario.d-flex
                i.fas.fa-plus
                span Involucran los procesos. Mejora continua.
        .col-lg-8.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/img_18.png")

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-9
        .tarjeta.bg2.p-3
          .row.justify-content-around.align-items-center
            .col-lg-1.col-md-2.col-3
              img(src="@/assets/template/icono-pdf-2.svg")
            .col-lg-10.col-md-10.col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Revisar el artículo para complementar la información.
                .col-sm-auto
                  a.boton.color-boton(:href="obtenerLink('/downloads/Anexos/Complementario_14_3_Articulo.pdf')" target="_blank")
                    span.text-sistm Descargar
                    i.fas.fa-file-download.text-sistm
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Control de calidad en la industria textil y confección
    
    p Se controla la calidad con el fin de mantener y corregir los defectos, errores o no conformidad que se presentan durante la producción de la prenda. Por tanto, se desarrolla según las variables y atributos del producto.

    p.text-center.mb-4 Los beneficios de implementar las herramientas para el control de calidad son:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img_19.svg")
      .col-lg-4
        ul.lista-ul--color
          li.color-primario
            i.fas.fa-plus
            span.mb-0 Reducción de costos.
          li.color-primario
            i.fas.fa-plus
            span.mb-0 Reducción de defectos.
          li.color-primario.d-flex
            i.fas.fa-plus
            span Obtención de productos estandarizados.
          li.color-primario
            i.fas.fa-plus
            span.mb-0 Disminución de desperdicios.
          li.color-primario
            i.fas.fa-plus
            span.mb-0 Mejoras en los procesos.
          li.color-primario
            i.fas.fa-plus
            span.mb-0 Aumento de la productividad.
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-9
        .cajon.color-primario.p-4
          p.mb-0.fw-bold De acuerdo con lo anterior, el control de la calidad en la industria se realiza en los procesos y en los recursos que intervienen en la producción de la prenda, desde su diseño y patronaje; la materia prima, en este caso la tela; los insumos, entre los que se destaca el hilo, el empaque, el embalaje y la entrega al cliente asociados a las características de cada proceso y de cada material.

    p.mb-5.text-center El control de calidad se realiza en las siguientes fases:

    .row.justify-content-start.mt-5.mb-cus-4
      .col-lg-11.position-relative
        .avatar
          img(src="@/assets/curso/temas/tema1/img_110.svg").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_111.svg", alt="alt").img100
            .col.d-flex
              p.w-50-cus #[b Planificación:] se establece un plan y programa de calidad, las técnicas y métodos a utilizar, la muestra y el lote.
        .crd.crd--avatarHorizontal.crd--second.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_112.svg")
            .col
              p.w-50-cus #[b Alistamiento de los recursos:] alistar instrumentos de medición como cintas métricas, calibradores y plantillas.
        .crd.crd--avatarHorizontal.crd--third.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_113.svg")
            .col
              p.w-50-cus Implementación de la técnica, se verifica si se presentan defectos.
        .crd.crd--avatarHorizontal.crd--fourth.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_114.svg")
            .col
              p.w-50-cus Registros de mediciones y controles.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_115.svg")
            .col
              p.w-40-cus Análisis y definición de acciones correctivas, análisis de causas de defectos.
    
    p.text-center.mb-5 Mejora continua, con el fin de prever ocurrencias de la no conformidad y facilitar la toma de decisiones.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Automatización de control de calidad en la industria textil y confección
    
    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-9
        p.mb-4 La calidad 4.0 está relacionada con la revolución digital, teniendo en cuenta las tecnologías #[em big data], inteligencia artificial, #[em machine learning, deep learning] e  internet de las cosas. La automatización de los procesos proporciona agilidad, más seguridad en los datos porque disminuye la presentación de información incorrecta, y más conocimiento sobre cada área de la empresa.
        p.mb-4 La implementación básica se refiere a la utilización de #[em software] especializado, de herramientas de calidad como los programas SPSS, #[em Statgraphics Centurion] o SAS, de recursos relacionados con  internet  de las cosas, por ejemplo, la geolocalización con aplicaciones con códigos QR, y las relacionadas con las herramientas #[em Lean Manufacturing].
        .cajon.color-primario.p-4
          p.fw-bold.mb-0 Con la integración de datos y su tratamiento avanzado se pueden simular los procesos para mejorar la gestión de calidad. Además, las personas encargadas directamente de la calidad pueden desarrollar actividades de manera remota, sin necesidad de su presencia #[em in situ] en la empresa. También puede apoyar la planificación de auditorías en el mejoramiento de la implementación de la metodología 5S.
      .col-lg-3
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img_20.png")


    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Gestión de calidad total    
    p.mb-4 Para realizar una correcta gestión de la calidad en la empresa, se debe tener en cuenta los siguientes enfoques:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-4
        img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img_21.png")
      .col-lg-8
        ol.lista-ol--cuadro.color-secundario.fa-lista
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold A
            span.mb-0 #[b Enfoque al cliente:] conocer al cliente, requisitos y expectativas.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold B
            span.mb-0 #[b Enfoque estratégico:] establecer objetivo de calidad como clave para la empresa e incluirlo en su visión.
          li
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold C
            span.mb-0 #[b Liderazgo enfocado:] compromiso positivo de la dirección de la empresa.
          li
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold D
            span.mb-0 #[b Enfoque en procesos:] control de los procesos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold E
            span.mb-0 #[b Orientación a las personas:] involucrar al personal y ofrecerle capacitación permanente, con el fin de aumentar el nivel de compromiso y satisfacción del cliente interno.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold F
            span.mb-0 #[b Enfoque científico:] evaluación de la calidad con evidencias y datos, aplicación del método científico.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.text-sistm.fw-bold G
            span.mb-0 #[b Mejora continua, innovación y aprendizaje:] todo proceso es susceptible de mejoras; no consiste solo en corregir, sino en actuar de forma proactiva.
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
            p.mb-0.fw-bold La comunicación interna también debe estar bien organizada, contar con un sistema de comunicación adecuado para evitar duplicidades de información que afecten negativamente la gestión de la calidad.
    
    p.mb-4 Para reconocer la gestión en los procesos, se debe tener en cuenta el ciclo de Deming, sobre el cual se construyen los sistemas de gestión. En la siguiente figura se aprecia cómo se constituye el ciclo de calidad para la mejora continua.

    .row(data-aos="fade")
      .col-md-10.col-lg-6.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Ciclo de #[em Deming]
        figure  
          img(src='@/assets/curso/temas/tema1/img_22.svg', alt='Diagrama circular del ciclo de Deming (PHVA) con cuatro etapas: planear, hacer, verificar y actuar, representadas por flechas en secuencia continua.')
       
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5(data-aos="fade")
      .col-lg-9
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
            h3.mb-0.ms-2 Cultura de la calidad
        p.mb-4 Son los principios de calidad que rigen la forma de actuar de las personas que hacen parte de la organización, para que interactúen entre ellas y así lograr en equipo los objetivos propuestos.
        p Esta base definida en términos de valores y hábitos, del quehacer diario de todos los que trabajan en la empresa, requiere para su implementación la capacitación efectiva y constante, la interacción a través de una comunicación asertiva y eficaz para seguir construyendo una cultura de la calidad sólida; la metodología utilizada son los círculos de calidad desarrollados por Kauro Ishikawa. En la siguiente figura se aprecian sus componentes:
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img_23.png')
    
    .fullview-blue.px-4.px-md-2
      .row.mb-5(data-aos="fade")
        .col-md-10.col-lg-8.mx-auto.p-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Círculos de calidad
          figure
            img(src='@/assets/curso/temas/tema1/img_24.svg', alt='Diagrama de círculos de calidad con mejora continua, participación voluntaria, reuniones programadas y equipos de 3 a 15 personas.')
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Metodología de mejoramiento continuo   
    p La metodología se encuentra enmarcada dentro del ciclo de mejoramiento continuo, en el que se desarrollan trece pasos. De manera que todo el personal involucrado en la empresa debe participar para que el mejoramiento sea constante, ya que es un trabajo diario.
    p.mb-4 Los elementos del #[em Kaizen] son:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-6.col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg1.h-100.p-4
          .row.justify-content-center.mb-3
            .col-sm-2.col-md-6.col-lg-10
              img.img-accord-cus-2(src='@/assets/curso/temas/tema1/img_25.svg')
          h5.text-center.mb-0 Trabajo en equipo
      .col-6.col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg1.h-100.p-4
          .row.justify-content-center.mb-3
            .col-sm-2.col-md-6.col-lg-10
              img.img-accord-cus-2(src='@/assets/curso/temas/tema1/img_26.svg')
          h5.text-center.mb-0 Disciplina personal
      .col-6.col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg1.h-100.p-4
          .row.justify-content-center.mb-3
            .col-sm-2.col-md-6.col-lg-10
              img.img-accord-cus-2(src='@/assets/curso/temas/tema1/img_27.svg')
          h5.text-center.mb-0 Moral mejorada
      .col-6.col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg1.h-100.p-4
          .row.justify-content-center.mb-3
            .col-sm-2.col-md-6.col-lg-10
              img.img-accord-cus-2(src='@/assets/curso/temas/tema1/img_116.svg')
          h5.text-center.mb-0 Círculos de calidad
      .col-6.col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg1.h-100.p-4
          .row.justify-content-center.mb-3
            .col-sm-2.col-md-6.col-lg-10
              img.img-accord-cus-2(src='@/assets/curso/temas/tema1/img_29.svg')
          h5.text-center.mb-0 Sugerencias para las mejoras

    p Para conocer sobre la metodología #[em Kaizen], leer la estrategia #[em Kaizen] ubicada en las referencias bibliográficas (Lefcovich, 2009).
    p.mb-4 La estrategia #[em Kaizen] fue desarrollada en Japón una vez terminada la II Guerra Mundial, la cual inicia con el análisis del problema; en la siguiente figura se pueden consultar los diferentes aspectos a tener en cuenta: 
    
    .bg3.p-4.mb-5
      .row.justify-content-center
        .col-lg-9
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Proceso para la solución de problemas
          figure
            img(src='@/assets/curso/temas/tema1/img_30.svg', alt='Ilustración de una cabeza con cerebro y engranajes, rodeada de herramientas de calidad como liderazgo, Six Sigma y análisis de fallas.')
    
    p.mb-4 A continuación, se presentan los 13 pasos de la metodología, descritos en la siguiente tabla:
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1.
      span Pasos de la metodología #[em Kaizen]
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade")
      .tabla-b__header
        h5.mb-0 Pasos de la metodología #[em Kaizen]
      table
        tr
          td(rowspan="10").fw-bold.br-bb-td Planear
        tr.bg-tr-odd
          td.br-bl-td.fw-bold.w-col-1 1
          td.br-bl-td.w-col-2 Identificar el área que requiere mejora.
          td.br-bl-td Utilizar 5S y mapeo de flujo de valor.
        tr.bg-tr-even
          td.fw-bold.br-bl-td.w-col-1 2
          td.br-bl-td  Identificar/clarificar el objetivo #[em Kaizen].
          td.br-bl-td  Mejorar servicio, reducir defectos, mejorar productividad, entre otros.
        tr.bg-tr-odd
          td.fw-bold.br-bl-td.w-col-1  3
          td.br-bl-td  Identificar los miembros del equipo #[em Kaizen].
          td.br-bl-td  Nombrar líder del equipo, miembros de la misma área y de diferente área.
        tr.bg-tr-even
          td.fw-bold.br-bl-td.w-col-1 4
          td.br-bl-td  Completar hoja de preparación del #[em Kaizen].
          td.br-bl-td  Realizar el guion de desarrollo del evento; debe ser aprobado por el líder de área.
        tr.bg-tr-odd
          td.fw-bold.br-bl-td.w-col-1 5
          td.br-bl-td  Entender la situación actual.
          td.br-bl-td  Documentar el flujo de información, calcular #[em takt time], diagrama espagueti y documentación.
        tr.bg-tr-even
          td.fw-bold.br-bl-td.w-col-1 6
          td.br-bl-td  Imaginar una situación ideal.
          td.br-bl-td  Producir al ritmo #[em takt time], introducir técnica #[em poka yoke], eliminar tiempos de espera, analizar movimientos.
        tr.bg-tr-odd
          td.fw-bold.br-bl-td.w-col-1 7
          td.br-bl-td  Cuantificar los resultados esperados.
          td.br-bl-td  Determinar mediciones del evento, calcular resultados esperados.
        tr.bg-tr-even
          td.fw-bold.br-bl-td.w-col-1 8
          td.br-bl-td  Desarrollar estrategia #[em Kaizen].
          td.br-bl-td  Identificar obstáculos, utilizar simulaciones y pruebas.
        tr.bg-tr-odd
          td.fw-bold.br-bl-td.w-col-1 9
          td.br-bl-td   Desarrollar plan de acciones #[em Kaizen].
          td.br-bl-td  Documentar acciones, identificar recursos requeridos, establecer responsabilidades, fechas y tiempos.
        tr.bg-tr-even
          td(rowspan="4").fw-bold.br-bb-td Hacer
        tr.bg-tr-even
          td.fw-bold.br-bl-td.bt-td.w-col-1 10
          td.br-bl-td.bt-td  Implementar #[em Kaizen].
          td.br-bl-td.bt-td  Desarrollar el evento según lo planeado, mejorar métodos, modificar #[em layout], consultar comportamientos, realizar cambios.
        tr.bg-tr-odd
          td.fw-bold.br-bl-td.w-col-1 11
          td.br-bl-td  Verificar los resultados a corto plazo.
          td.br-bl-td  Seguimiento a los colaboradores, verificar progreso, seguimiento al proceso.
        tr.bg-tr-even
          td.fw-bold.br-bl-td.w-col-1 12
          td.br-bl-td  Documentar actividades #[em Kaizen].
          td.br-bl-td  Preparar formatos, registrar información, realizar registros fotográficos.
        tr.bg-tr-odd
          td.fw-bold Verificar#[br]Actuar
          td.fw-bold.br-bl-td.bt-td.w-col-1 13
          td.br-bl-td.bt-td  Confirmar los resultados a largo plazo.
          td.br-bl-td.bt-td Realizar seguimiento con programa (a cargo del responsable del evento), presentar resultados y estandarizar; si no se obtiene el resultado deseado, volver a iniciar.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 #[em Six sigma ]
    
    p.mb-4 Es un modelo de gestión; el objetivo es el mejoramiento de los procesos. Se conoce por su sigla en inglés DMAIC, cuya traducción está asociada a definir, medir, analizar, mejorar y controlar.

    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
              img(src='@/assets/curso/temas/tema1/img_31.svg')
          .tarjeta.color-cus.p-3(x="8%" y="100%" numero="+")
            p.mb-0.text-center El objetivo del problema o defecto a validar, además de los miembros del programa.
          .tarjeta.color-cus.p-3(x="30%" y="100%" numero="+")
            p.mb-0.text-center Entender el problema o defecto.
          .tarjeta.color-cus.p-3(x="50%" y="100%" numero="+")
            p.mb-0.text-center Investigar causas reales del problema o defecto.
          .tarjeta.color-cus.p-3(x="72%" y="100%" numero="+")
            p.mb-0.text-center Determinar las mejoras.
          .tarjeta.color-cus.p-3(x="92%" y="100%" numero="+")
            p.mb-0.text-center Tomar medidas para mantener el progreso, estimación en términos económicos y en relación con el nivel de satisfacción del cliente. 
  
    p.mb-5 En cada fase se utilizan herramientas para el análisis y creación de gráficos como histogramas, diagrama causa-efecto, Pareto, gráficos de tendencias, análisis de correlación, capacidad del proceso, gráficos de control, entre otros.
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Costos de calidad
    
    p La meta general de la empresa es ser rentable y obtener ganancias; por eso la relación de la calidad con el precio se debe analizar, concientizando al personal sobre su importancia.
    p.mb-4 Es importante entender y concientizar al personal sobre el control de los costos de calidad. En la siguiente figura se pueden consultar los tipos de costos de calidad.

    .row.mb-5(data-aos="fade")
      .col-lg-9.mx-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4.
          span Tipos de costos de calidad
        figure
          img(src='@/assets/curso/temas/tema1/img_32.svg', alt='Diagrama comparativo entre costo de calidad y costo de no calidad, con actividades de prevención, evaluación y fallos internos y externos.')
    
    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-8
        .subt.mb-4(data-aos="fade-right")
          .d-flex.align-items-center.mb-1
            img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
            h3.mb-0.ms-2 Sistema de gestión de la calidad, Norma ISO 9001, versión 2015
        p.mb-4 El sistema de gestión de la calidad es una herramienta administrativa, cuenta con una estructura organizada para integrar todos los procesos e incluye los elementos necesarios para lograr cumplir las necesidades y expectativas del cliente. Obtener la certificación es evidenciar la capacidad que tiene la empresa, para cumplir con los requisitos. Una vez certificada la empresa su vigencia es de tres años, con auditorías de seguimiento, y una vez pasados los tres años, se debe realizar una auditoría de renovación.
        .cajon.color-primario.p-4.mb-4
          p.mb-0.fw-bold La certificación es una constancia de valor a nivel internacional. El enfoque de la norma está basado en los riesgos, a través de los cuales la empresa demuestra la gestión de los riesgos y determina las acciones que pueden afectar la capacidad de proporcionar satisfacción al cliente y obtener los resultados esperados de la empresa.
      .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_33.svg')
    
    .row.justify-content-center.align-items-center.mb-4.bg02(data-aos="fade")
      .col-lg-10
        p.mb-0.py-4 La norma especifica qué debe hacerse, pero no cómo hacerlo. Para la norma es primordial que la información se encuentre documentada.
    
    .row.justify-content-center.align-items-center.mt-0.bg03.py-4.px-4.px-md-2(data-aos="fade")
      .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_34.png')
      .col-lg-6
        h3.titulo-tercero(data-aos="fade") Introducción
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-6
            ul.lista-ul--color.fa-ul
              li
                i.fas.fa-plus
                span.mb-0 Objeto y campo de aplicación.
              li
                i.fas.fa-plus
                span.mb-0 Referencias normativas.
              li
                i.fas.fa-plus
                span.mb-0 Términos y definiciones.
              li
                i.fas.fa-plus
                span.mb-0 Contexto de la organización.
              li
                i.fas.fa-plus
                span.mb-0 Liderazgo.
          .col-md-6.col-lg-6
            ul.lista-ul--color.fa-ul
              li
                i.fas.fa-plus
                span.mb-0 Planificación.
              li
                i.fas.fa-plus
                span.mb-0 Apoyo.
              li
                i.fas.fa-plus
                span.mb-0 Operación.
              li
                i.fas.fa-plus
                span.mb-0 Evaluación del desempeño.
              li
                i.fas.fa-plus
                span.mb-0 Mejora.
        img(src='@/assets/curso/temas/tema1/img_35.svg')
    
    
    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Puntos de control en el proceso de confección    
    
    p.mb-5 A continuación, se describen los diferentes puntos de control:
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Puntos de control en patronaje
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img_36.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 Se debe establecer diferencia entre los puntos de control y los puntos de control crítico para asegurar la garantía de calidad de la prenda. Una vez que se analiza el flujo de los procesos mediante los diagramas de árbol y flujogramas, se determina en el proceso y en la prenda los puntos a inspeccionar según su relevancia y así se establece la clasificación.

    p En el patronaje se debe inspeccionar número de piezas, ancho de costuras, medidas de patrón y de prenda terminada. Además, en las medidas en cortes para unión de piezas, cada lado a unir debe corresponder; se debe disponer del tiempo necesario para realizar la revisión, sea en un patrón manual o en el programa especializado.
    p.mb-5 En el momento de desarrollo del producto se debe realizar la inspección, de tal forma que se compare junto con la muestra, y así pueda ser aprobado y pasar a los procesos de producción.
    
    .fullview-purple.px-5
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
          h3.mb-0.ms-2 Puntos de control en trazo y corte
      p Una vez desarrollado el trazo, antes de imprimir en el caso de que sea digital, y antes de realizar el extendido de la tela, se debe inspeccionar el trazo, revisando la correspondencia de piezas y distribución de tallas, teniendo en cuenta la orden de producción, el ancho de trazo y el ancho de tela.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-9
          p.mb-4 El corte se debe revisar una vez que, se termina de extender. Antes de iniciar el corte de las unidades de capas y alineación del tendido, se debe inspeccionar la apariencia de la tela; también se debe tener cuidado con la separación del corte, sobre todo si se han extendido diferentes rollos de tela en el mismo corte, y verificar el cumplimiento de tiempos de reposo.	
          .cajon.color-primario.p-4
            p.mb-0.fw-bold En la separación, etiquetado y paqueteo de las piezas, el inspector de calidad debe revisar el corte de las piezas, al comparar con el patronaje de la pieza, contar las piezas del paquete y verificar el sistema de amarre y rotulado. Es importante disponer de un puesto de trabajo para la inspección, con excelente luz y limpieza para determinar defectos en la tela y en el corte de las piezas. Es necesaria la correcta disposición de las piezas para evitar contaminaciones del paquete con otros colores de estas u otras referencias.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_37.png')
          
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_38.png')
        .col-lg-7
          .subt.mb-4(data-aos="fade-right")
            .d-flex.align-items-center.mb-1
              img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
              h3.mb-0.ms-2 Puntos de control en confección
          p.mb-0 Al tener en cuenta que los procesos dentro de la confección de las prendas comprenden operaciones de preparación, ensamble y terminados, del mismo modo se establecen puntos de control en estas áreas; por tanto, es importante determinar los puestos de calidad en donde se realizarán las inspecciones por parte del inspector de calidad. En el caso de que el sistema de la planta sea modular, cada módulo debe disponer del puesto de calidad con las herramientas para realizar las mediciones y formatos definidos, además de una ubicación estratégica dentro del área.
    
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7 
          .subt.mb-4(data-aos="fade-right")
            .d-flex.align-items-center.mb-1
              img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
              h3.mb-0.ms-2 Puntos de control en el producto en proceso
          p.mb-3 Aunque es muy importante el autocontrol que ejerce cada operario sobre lo que realiza para garantizar la calidad de su trabajo, de igual manera se deben llevar a cabo las inspecciones denominadas “en pie de máquina”; estas se realizan mientras la persona desarrolla las operaciones en su puesto de trabajo, con el fin de detectar de manera temprana defectos y establecer acciones de mejora.
          .cajon.color-primario.p-4.mb-4
              p.mb-0.fw-bold Cuando en el producto se realizan procesos de estampación o bordados, se requiere establecer puntos de control de esos procesos, que son considerados críticos.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_108.png')
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_40.png')
        .col-lg-7
          .subt.mb-4(data-aos="fade-right")
            .d-flex.align-items-center.mb-1
              img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
              h3.mb-0.ms-2 Puntos de control en el producto terminado
          p.mb-0 Al finalizar la confección en cada módulo de producción o línea de la referencia, se revisa el producto terminado antes de realizar procesos de planchado, de lavandería, empaque y embalaje; pero igualmente se debe inspeccionar una vez se realice el planchado, si es requerido, y su empaque. Se deben establecer las medidas para la atención de prendas que no fueron aceptadas en las inspecciones y las acciones para su tratamiento.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .subt.mb-4(data-aos="fade-right")
            .d-flex.align-items-center.mb-1
              img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
              h3.mb-0.ms-2 Puntos de control en confección de lote piloto
          p.mb-4 El lote piloto son unidades que se confeccionan con el fin de simular la producción de una referencia nueva; desarrollado el nuevo producto, es necesario realizar simulaciones para prever fallas en la producción; la información proporcionada una vez se realice el pilotaje brinda confianza sobre la viabilidad del producto y señala las estrategias a efectuar en el momento de la producción de la prenda.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_109.png')
      
      .row.justify-content-center.align-items-center(data-aos="fade")
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img_42.png')
        .col-lg-7
          .subt.mb-4(data-aos="fade-right")
            .d-flex.align-items-center.mb-1
              img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
              h3.mb-0.ms-2 Puntos de control en compra de materiales e insumos
          p.mb-4 En las áreas de bodegas y almacenes se deben realizar las inspecciones necesarias antes de la integración del producto, donde se realiza el alistamiento de los insumos necesarios para la confección y se integran al paquete de las unidades cortadas según las unidades establecidas.
          .cajon.color-primario.p-4.mb-4
            p.mb-0.fw-bold En el caso de las telas, se puede apoyar su control con equipos como revisadores para inspeccionar los defectos.
        
    
    Separador  
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Control de calidad en patronaje    
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img_43.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-4 El control de los procesos consiste en comprender cuáles son las variaciones en las características del producto, encontrar las causas y tomar las decisiones para controlar la variabilidad, eliminando los errores, estandarizando el proceso y estableciendo mejoras para tener una variabilidad controlada.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0.fw-bold En el proceso de patronaje, la persona responsable del patronaje de la prenda, junto con el auditor de calidad, realizan la revisión del paquete de moldes o patrones que comprenden la pieza. Es importante revisarlos en físico, a pesar de que se desarrolle la prenda en un software especializado.

    p.text-center.mb-5 Una vez que se desarrolla la prenda, la validación de los patrones debe estar contenida en un documento de revisión de patronaje.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Requisitos de calidad en patronaje
    
    p Los productos tienen variables y atributos; las variables son características cuantitativas y los atributos son las cualidades no cuantificables, los cuales constituyen los requisitos de una prenda.
    p.mb-4 Los requisitos, además, están clasificados de la siguiente manera:
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-sm-4.col-md-10.col-lg-8
                img.img-accord-cus(src='@/assets/curso/temas/tema1/img_44.svg')
          h5.text-center.mb-2 Explícitos
          p.text-center.mb-0 Declarados por el cliente, según sus expectativas.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-sm-4.col-md-10.col-lg-8
                img.img-accord-cus(src='@/assets/curso/temas/tema1/img_45.svg')
          h5.text-center.mb-2 Implícitos
          p.text-center.mb-0 Necesarios para que cumplan su función.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-sm-4.col-md-10.col-lg-8
                img.img-accord-cus(src='@/assets/curso/temas/tema1/img_46.svg')
          h5.text-center.mb-2 Legales o reglamentarios
          p.text-center.mb-0 De acuerdo con el cumplimiento de las leyes.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg4.p-4.h-100
          .row.justify-content-center.mb-3
            .col-sm-4.col-md-10.col-lg-8
                img.img-accord-cus(src='@/assets/curso/temas/tema1/img_47.svg')
          h5.text-center.mb-2 Relacionados con la empresa
          p.text-center.mb-0 Según las políticas de la empresa.
    
    p.mb-4 Los requisitos para revisar en patronaje son:
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--verde" data-aos="zoom-in-left")
      .row(titulo="Medidas")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_48.svg')
            .col-lg-9.col-md-10
              p.mb-0 Del patrón con costuras y sin costuras para comparar medidas con la prenda terminada y correspondencia con la talla; además, se debe revisar que las medidas de las piezas sean iguales al unir y que tengan simetría; se pueden superponer las piezas para consultar que coincidan sus longitudes.
      .row(titulo="Cantidad de piezas")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_49.svg')
            .col-lg-9.col-md-10
              p.mb-0 Correspondencia de piezas respecto al diseño y al dibujo plano del patrón.
      .row(titulo="Señalización de pieza")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_50.svg')
            .col-lg-9.col-md-10
              p.mb-0 Debe contener identificación de la prenda, no se debe prestar a dualidades de información; además, debe indicar la cantidad a cortar en cada pieza.
      .row(titulo="Aplomos")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_51.svg')
            .col-lg-9.col-md-10
              p.mb-0 Indicación clara de las líneas de aplomo de cada pieza.
      .row(titulo="Costuras")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_52.svg')
            .col-lg-9.col-md-10
              p.mb-0 Márgenes de costura en cada pieza, y la correspondencia con la pieza a unir; por ejemplo, si en el hombro de la pieza del delantero el ancho es de 1 cm de margen de costura, en el hombro posterior debe corresponder a la misma medida.
      .row(titulo="Piquetes y puntos")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_54.svg')
            .col-lg-9.col-md-10
              p.mb-0 Existencia de puntos y piquetes, alineando las piezas y correspondiendo la unión de puntos y piquetes.
      .row(titulo="Plantillas")
        .col-12
          .row.justify-content-center
            .col-4.col-md-2.col-lg-2.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/tema1/img_55.svg')
            .col-lg-9.col-md-10
              p.mb-0 Funcionalidad de la plantilla y sus medidas.  
    
   
    Separador  
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.5 Control de calidad en trazo y corte    
    
    p.mb-4 En cada una de las actividades que se llevan a cabo en el área de trazo y corte se establecen controles para revisar y garantizar la calidad de las prendas.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-9
        p.mb-5 Las personas encargadas de cada actividad en el área deben establecer comunicación permanente y abierta para coordinar el proceso, debido a que el error en esta área se replica igualmente en la producción; por ello, es importante detectar el problema a tiempo, siendo primordial contar con la trazabilidad de la producción para ubicar fácilmente cada lote, poder intervenir oportunamente los productos a corregir y dar respuesta rápida con el fin de solucionar los inconvenientes presentados.
        .cajon.color-primario.p-4
          p.mb-0.fw-bold Los documentos utilizados en el área para controlar el corte, además de la orden de producción, son las inspecciones en corte para revisar cada actividad. También un formato que se puede anexar en el paqueteo en el que se validen las unidades de cada pieza en cada uno de los paquetes, siendo un apoyo visual importante en el alistamiento del proceso de confección.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img_56.png')

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Requisitos de calidad en trazo y corte
    
    p.mb-4 Los requisitos a revisar en cada actividad son:
    
    TabsC.color-acento-botones(data-aos="fade")
      .py-4.py-md-5(titulo="Trazo")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_57.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Alineación de piezas: ] cada pieza debe estar contenida en el trazo conforme a la línea de aplomo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Organización de piezas: ] con el fin de controlar los rendimientos de telas, es importante la disposición de las piezas, colocando una al lado de la otra y aprovechando líneas o curvas compartidas entre las piezas.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Cantidad de piezas: ] contar el número de piezas que corresponda a cada talla del producto.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Ancho de trazo: ] conforme al ancho útil de la tela.
      .py-4.py-md-5(titulo="Tendido")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_58.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Alineación de capas: ] respetar el margen colocado a partir de la base, es decir, la primera capa. También en los extremos debe alcanzar a cubrir el largo del trazo, sobre todo en trazos escalonados.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Uniformidad de tendido: ] el extendido de cada capa no debe tener arrugas.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Cantidad de capas: ] antes de cortar se debe contar el número de capas para que correspondan a las unidades a cortar, según la distribución del trazo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Tiempos de reposo: ] sobre todo en tejidos de punto para evitar encogimiento, se tiene en cuenta la ficha técnica de la tela y se valida con pruebas que confirmen niveles de encogimiento, que se desarrollan una vez finalicen los tiempos de reposo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Lado de tela: ] a partir del tipo de trazo se debe respetar el derecho de la tela.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Tela: ] defectos de tela, marcas, piques, marras, entre otras. Cuidar la combinación de rollos y de colores para evitar contaminación entre los colores, debido a los residuos de las fibras en el corte del tejido.
      .py-4.py-md-5(titulo="Corte")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_59.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Uniformidad: ] respetar el trazo de cada pieza, obedeciendo a curvas y rectas según sea el caso de cada parte de la pieza.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Simetrías: ] mantener las simetrías de cada pieza sosteniendo el colchón o bloque de telas, evitando que se corra para que no afecte la disposición de las capas inferiores.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Piquetes y puntos: ] ubicación de piquetes y en profundidad no mayor a 0,4 cm; en los puntos evitar que se corra la ubicación, y debe tener un tamaño razonable.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Corte de piezas de forro y entretela: ] revisar el material y que las piezas se corten conforme a la ficha técnica y a la programación de la producción.
      .py-4.py-md-5(titulo="Etiquetado")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_60.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Ubicación: ] se coloca en el revés de la tela, en un lugar visible sin que afecte el ensamble.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Descripción: ] la información debe corresponder a cada pieza, contener el número consecutivo de la misma en orden, según el tendido; además, debe incluir talla y referencia.
      .py-4.py-md-5(titulo="Fusionado")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_61.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Temperatura: ] que corresponda con el material a fusionar.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Tiempo: ] duración en la fusionadora.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Presión: ] ejercida en cada pieza para que la unión sea uniforme.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Alineación y posición: ] que se encuentre derecha y teniendo en cuenta si se debe dejar el ancho de costura.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Limpieza de la máquina: ] para evitar manchas en las prendas fusionadas.
      .py-4.py-md-5(titulo="Paqueteado")
        .row.justify-content-center.align-items-center
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img_62.svg')
          .col-lg-8.px-sm-cus
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Cantidad:] unidades de acuerdo con lo determinado para incorporar a la producción, 10 o 20; se prefieren paquetes pequeños que facilitan el manejo, o más unidades según lo establecido por la empresa.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Amarre:] en el doblado, incluir todas las piezas del paquete, con un amarre resistente.
              li.color-primario.d-flex
                i.fas.fa-plus
                span  #[b Identificación:] rotulado de cada paquete con tarjetas que indiquen la información necesaria, como talla, número de lote, cantidad, entre otras, que precisen el contenido del paquete.


    Separador  
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.6 Control de calidad en confección    
    
    p.mb-4 Tiene en cuenta la distribución de las operaciones, es decir, la hoja de ruta: operaciones de preparación, ensamble y terminados; cada proceso tiene un método, un tiempo estándar, descripción de la maquinaria, pies, guías, fólderes y aditamentos que se deben revisar.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-9
        p.mb-4 En los puntos de revisión se realizan inspecciones, en las que se retienen prendas o piezas con defectos para analizar las causas y determinar acciones; así mismo, la revisión se lleva a cabo en los puestos de trabajo, donde la responsabilidad es de cada operario con el acompañamiento y apoyo del auditor de calidad en pie de máquina. Conforme corresponda a la inspección, se utilizan los formatos de producto terminado y en proceso.
        .cajon.color-acento-contenido.p-4
          p.mb-0.fw-bold Otros factores a tener en cuenta, además de los anteriormente mencionados, que son directos al proceso, son los factores ambientales como la iluminación, ventilación, temperatura, ruido, espacio, aseo, entre otros; y también los relacionados con el recurso humano, como la capacitación del personal y las relaciones interpersonales, aspectos que inciden en los resultados de los productos, y por ende, en la calidad de estos.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img_63.png')
    
    p.mb-4 También se pueden realizar pruebas o ensayos en laboratorios especializados que evalúen la prenda según normas nacionales e internacionales, una de ellas es la prueba de uso, en la que se compara los resultados planteados frente a los obtenidos.
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-8
        .tarjeta.bg02.px-5.py-4
          .row.justify-content-around.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/tema1/img_64.svg")
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 En las pruebas se analizan las fibras, en cuanto a la cantidad, colorimétrica, peso, composición, cambios dimensionales después del lavado, resistencia a la rotura y al desgarre, elongación y elasticidad de la tela, recuperación a las arrugas, resistencia a la abrasión, solidez al color con el frote, al agua, al planchado, resistencia a la formación de motas (#[em pilling]), entre otras.
    
    p.text-center.mb-5 En la siguiente tabla se presentan algunos ensayos con la norma relacionada que se pueden realizar a la prenda.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Pruebas de calidad en laboratorios para prenda terminada
        .tabla-b.color-acento-contenido.mb-4
          .tabla-b__header.bg-tx
            h3.mb-0 Pruebas de calidad en laboratorios para prenda terminada
          table.table-xl
            thead
              tr
                th.bg-theader Ensayo
                th.bg-theader Norma vigente / recomendada
            tbody
              tr
                td.br-cn-td Análisis cualitativo de fibras.
                td AATCC TM20 - 2021
              tr
                td.br-cn-td Análisis cuantitativo de fibras.
                td AATCC TM20A - 2025
              tr
                td.br-cn-td Cambio de sesgo u oblicuidad en telas después de lavado doméstico.
                td AATCC TM179 - 2025
              tr
                td.br-cn-td Deformación por torsión de costuras en prendas antes y después de lavado doméstico.
                td AATCC TM207 - 2025
              tr
                td.br-cn-td Cambios dimensionales en prendas después de lavado doméstico.
                td AATCC TM150 - 2025
              tr
                td.br-cn-td Cambios dimensionales en telas después de lavado doméstico.
                td AATCC TM135 - 2025
              tr
                td.br-cn-td Determinación de la absorción de textiles.
                td AATCC TM79 - 2025
              tr
                td.br-cn-td Determinación de la humedad en textiles.
                td ASTM D2654 - 22
              tr
                td.br-cn-td Determinación de la masa por unidad de área de tela.
                td ASTM D3776/D3776M - 20(2025)
              tr
                td.br-cn-td Determinación de la elongación de tejidos elásticos angostos.
                td ASTM D5278/D5278M - 26
              tr
                td.br-cn-td Determinación de la recuperación de arrugas en tejidos planos.
                td AATCC TM66 - 2017e2 / AATCC TM128 - 2017e2
              tr
                td.br-cn-td Determinación de la resistencia a la formación de motas —pilling— por tambor aleatorio.
                td ASTM D3512/D3512M - 22
              tr
                td.br-cn-td Determinación de la resistencia a la formación de motas —pilling— por Martindale.
                td ASTM D4970/D4970M - 22(2026)
              tr
                td.br-cn-td Determinación de la resistencia a la penetración del agua por presión hidrostática.
                td ISO 811:2018 / AATCC TM127-2017(2018) e
              tr
                td.br-cn-td Determinación de la resistencia al deslizamiento de los hilos en costura de tejido plano. Método de abertura fija.
                td ISO 13936 - 1:2004
              tr
                td.br-cn-td Determinación de la resistencia al deslizamiento de los hilos en costura de tejido plano. Método de carga fija.
                td ISO 13936 - 2:2004
              tr
                td.br-cn-td Determinación de la resistencia al estallido de textiles.
                td ASTM D3787 - 16(2020) / ASTM D3786/D3786M - 18(2023) / ASTM D6797 - 24
              tr
                td.br-cn-td Determinación de la resistencia de las telas al desgarre por lengüeta.
                td ASTM D2261 - 13(2024)
              tr
                td.br-cn-td Determinación de la resistencia de las telas al desgarre por péndulo Elmendorf.
                td ASTM D1424 - 25
              tr
                td.br-cn-td Determinación de la resistencia al desgarre trapezoidal.
                td ASTM D5587 - 15(2024)
              tr
                td.br-cn-td Determinación de la resistencia de las telas al enganche —método de la maza—.
                td ASTM D3939/D3939M - 26
              tr
                td.br-cn-td Determinación de la solidez del color al calor seco, excluyendo planchado.
                td AATCC TM117 - 2024
              tr
                td.br-cn-td Determinación de la solidez del color al planchado o prensado en caliente.
                td ISO 105-X11:2026 / AATCC TM133 - 2020e
              tr
                td.br-cn-td Determinación de la solidez del color a los disolventes orgánicos.
                td ISO 105 - X05:1994
              tr
                td.br-cn-td Determinación de la solidez del color al lavado en seco con percloroetileno.
                td ISO 105 - D01:2010 / AATCC TM132 - 2004e3(2013) e3
              tr
                td.br-cn-td Determinación de la solidez del color al agua clorada de piscina.
                td ISO 105 - E03:2010 / AATCC TM162 - 2011e2
              tr
                td.br-cn-td Determinación de la solidez del color al agua de mar.
                td ISO 105-E02:2013 / AATCC TM106 - 2025
              tr
                td.br-cn-td Determinación de la solidez del color al agua.
                td ISO 105 - E01:2013 / AATCC TM107 - 2022e
              tr
                td.br-cn-td Determinación de la solidez del color a la transpiración.
                td AATCC TM15 - 2021e
              tr
                td.br-cn-td Determinación de la solidez del color al frote con crockmeter.
                td AATCC TM8 - 2016e (2022) e
              tr
                td.br-cn-td Determinación de la solidez del color al frote circular.
                td AATCC TM116 - 2018e (2022) e
              tr
                td.br-cn-td Determinación de la solidez del color al lavado acelerado.
                td AATCC TM61 - 2013e (2020) e2
              tr
                td.br-cn-td Determinación de la solidez del color a la luz artificial tipo luz día.
                td ISO 105 - B02:2014
              tr
                td.br-cn-td Determinación del ancho de las telas.
                td ASTM D3774 - 18(2024)
              tr
                td.br-cn-td Determinación del arco y sesgo en telas planas y de punto.
                td ASTM D3882 - 08(2025)
              tr
                td.br-cn-td Determinación del número de hilos de urdimbre y trama en tejidos planos.
                td ASTM D3775 - 17(2023)
              tr
                td.br-cn-td Determinación del número de columnas y pasadas en tejidos de punto por trama.
                td ASTM D8007 - 24
              tr
                td.br-cn-td Determinación del título o número del hilo en especímenes de longitud corta.
                td ASTM D1059 - 17(2022)
              tr
                td.br-cn-td Determinación de la densidad lineal del hilo por el método de madeja.
                td ASTM D1907/D1907M - 12(2025)
              tr
                td.br-cn-td Determinación del espesor de materiales textiles.
                td ASTM D1777 - 26
              tr
                td.br-cn-td Evaluación colorimétrica instrumental de textiles.
                td AATCC EP6 - 2021
              tr
                td.br-cn-td Evaluación visual de diferencia de color en textiles.
                td AATCC EP9 - 2025
              tr
                td.br-cn-td Evaluación con escala gris para cambio de color y manchado.
                td AATCC EP1 - 2025 / AATCC EP2 - 2025
              tr
                td.br-cn-td Flamabilidad de textiles para prendas en ángulo de 45°.
                td ASTM D1230-25
              tr
                td.br-cn-td Resistencia a la llama en textiles. Ensayo vertical.
                td ASTM D6413/D6413M - 22
              tr
                td.br-cn-td Determinación de rigidez o longitud de flexión de telas.
                td ASTM D1388 - 23
              tr
                td.br-cn-td Medición de la permeabilidad de los textiles al vapor de agua para control de calidad.
                td ISO 15496:2018 / AATCC TM204 - 2025
              tr
                td.br-cn-td Transporte de humedad líquida en textiles.
                td AATCC TM195 - 2011e2 (2017) e5
              tr
                td.br-cn-td Absorción y transporte vertical u horizontal de humedad por análisis de imagen.
                td AATCC TM217 - 2025
              tr
                td.br-cn-td Determinación de la resistencia a la abrasión por Martindale.
                td ASTM D4966 - 22(2026)
              tr
                td.br-cn-td Determinación de la resistencia a la abrasión por plataforma rotatoria.
                td ASTM D3884 - 22
              tr
                td.br-cn-td Determinación de la resistencia a la abrasión por método Accelerotor.
                td AATCC TM93 - 2019
              tr
                td.br-cn-td Determinación de la resistencia a la rotura y elongación de telas. Método de agarre.
                td ASTM D5034 - 21(2025)
              tr
                td.br-cn-td Determinación de la resistencia a la rotura y elongación de telas. Método de tira.
                td ASTM D5035 - 11(2024)
              tr
                td.br-cn-td Determinación de la resistencia de costuras en telas de tejido plano.
                td ASTM D1683/D1683M - 22
              tr
                td.br-cn-td Determinación de las propiedades de estiramiento de tejidos de punto de bajo poder.
                td ASTM D2594/D2594M - 21
              tr
                td.br-cn-td Determinación de las propiedades de estiramiento de telas tejidas con hilos extensibles.
                td ASTM D3107 - 26
              tr
                td.br-cn-td Determinación de pH del extracto acuoso de textiles procesados en húmedo.
                td AATCC TM81 - 2022
              tr
                td.br-cn-td Determinación de porcentaje de rizo y contracción en tejidos planos.
                td ASTM D3883 - 04(2020)
              tr
                td.br-cn-td Determinación del contenido de formaldehído libre e hidrolizado en textiles.
                td ISO 14184 - 1:2011
              tr
                td.br-cn-td Evaluación y clasificación de protección solar en prendas.
                td AS/NZS 4399:2020
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de la masa por unidad de área.
                td ISO 9073 - 1:2023
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación del espesor.
                td ISO 9073 - 2:1995
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de resistencia a la tensión y elongación.
                td ISO 9073 - 3:2023
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de la resistencia al desgarre trapezoidal.
                td ISO 9073 - 4:2021
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de resistencia a la penetración mecánica por estallido de bola.
                td ISO 9073 - 5:2025
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de absorción.
                td ISO 9073 - 6:2025
              tr
                td.br-cn-td Métodos de ensayo para telas no tejidas. Determinación de longitud de flexión.
                td ISO 9073 - 7:2024
              tr
                td.br-cn-td Repelencia al agua por rociado.
                td AATCC TM22 - 2024 / ISO 4920:2012
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Requisitos de calidad en confección
    
    p.mb-4 Los requisitos que se deben cumplir en la confección y que son objeto de control son:
    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema1/img_65.svg")
      .col-lg-9
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Costura:] simetría, sin recogidos ni prenses, costuras rectas, respetar márgenes de costura, costura uniforme, marquilla de acuerdo con el cuidado de la prenda, remates uniformes, clase de costuras.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Tela:] con colores uniformes, tela sin arrugas, sin imperfecciones.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Ambiente del taller:] orden y limpieza en piso, puestos de trabajo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Ajuste de maquinaria:] mantenimiento de la máquina y uso de aditamentos, pies, guías y fólderes, agujas, altura de dientes, presión del pie prénsatela, enhebrado, devanado de hilo, tensión del hilo.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Operario:] manipulación del material, métodos utilizados en la operación.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Instrucciones de cuidado y terminados:] según la norma, tener en cuenta los símbolos y la composición del material, incluidos en la etiqueta adherida en la prenda.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-8
        .tarjeta.bg02.p-3
          .row.justify-content-around.align-items-center
            .col-lg-2.d-none.d-lg-block
              img.w-75(src="@/assets/curso/temas/tema1/img_104.svg")
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se presentan imágenes descriptivas de los defectos que pueden existir en las costuras, textiles e insumos:
  
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5.
          span Listado de defectos
        figure
          img(src="@/assets/curso/temas/tema1/img_105.svg", alt='Ejemplos de defectos en costuras textiles: falta de tensión, recogidos, saltos de puntada, hilos sueltos, roturas y problemas de simetría.')

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6.
          span Defectos en textiles
        figure
          img(src="@/assets/curso/temas/tema1/img_106.svg", alt='Ejemplos de defectos en telas, como manchas, motas, contaminación, agujeros, fallas de aguja, lycra rota, tejido barrado, nudos, quiebres y NEPS.')

    .row.justify-content-center(data-aos="fade")
      .col-md-6.col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Defectos en insumos
        figure
          img(src="@/assets/curso/temas/tema1/img_107.svg", alt='Defectos en insumos textiles: una cremallera rota y la rotura de un cordón o cinta.')


    Separador  
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.7 Control de calidad en terminados   
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-9
        p En los terminados se incluyen procesos de planchado, empaque, embalaje y procesos de acabados como lavandería, estampación y bordado.
        p.mb-5 Puede ser que los procesos de acabados se desarrollen de manera externa a la empresa, es decir, contratando los servicios; por ello la importancia de los puntos de control cuando ingresan a la planta; se deben validar las prendas o piezas una vez que se realicen los procesos.
        .cajon.color-primario.p-4
          p.mb-0.fw-bold El planchado es la última operación del proceso de producción; es necesario que las personas responsables de esta sección tengan los criterios claros para evaluar las prendas que pasarán a esta operación, para la posterior entrega al cliente.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/img_94.png') 
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Requisitos de calidad en acabados
    
    p.mb-4 Los requisitos a revisar en cada una de las actividades del proceso de acabados son:
    
    .row.justify-content-around.align-items-center(data-aos="fade")
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema1/img_95.svg")
      .col-lg-9
        .row.justify-content-between.align-items-center
          .col.mb-3.mb-sm-0
            ul.lista-ul--color
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Planchado:] uniforme, quiebres según lo especificado, si se debe doblar, que no genere arrugas, control en la temperatura para que no queme, limpieza, además del control en la presión y la humedad.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Empaque:] según lo establecido por la empresa, utilizar los recursos como el gancho, bolsa y etiqueta correspondiente.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Embalaje:] tener en cuenta el pedido del cliente, utilizando materiales como cajas, cinta de amarre o zuncho, cinta adhesiva, tensor para la cinta de amarre. Rotular para identificar el contenido, organizar el contenido.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Estampados:] uniformidad del dibujo y colores, posición y ubicación.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Bordados:] tensión del hilo, colores y letras que correspondan al diseño, posición y ubicación.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Rebordados:] alineación y ubicación al colocar pedrería u otros; el diseño debe corresponder al rebordado realizado.
              li.color-primario.d-flex
                i.fas.fa-plus
                span #[b Lavandería:] uniformidad de colores, que el proceso corresponda al solicitado, sin dañar costuras o tejido de la tela.

    
    Separador  
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.8 Control de calidad en insumos, materiales y textiles    
    
    p.mb-4 La comunicación con la cadena de abastecimiento es muy importante para solucionar de manera eficiente los problemas derivados que puedan ocurrir en la producción de las prendas.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img_96.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los espacios disponibles para recibir los diferentes elementos deben cumplir condiciones óptimas de ventilación, iluminación, seguridad, aseo y organización, ya que esto puede afectar los requerimientos de calidad en la cadena productiva. El control de inventarios está relacionado directamente con el control de calidad, para generar mejoras en toda la gestión de la empresa.
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-9
        .cajon.color-primario.p-4
          p.mb-0.fw-bold.px-4 En las entradas del proceso de producción, uno de los recursos son los insumos y materias primas; las revisiones respectivas responden a uno de los principios de calidad, que es hacer las cosas bien desde el principio, asegurando el flujo de los procesos. Así mismo, al finalizar las operaciones de producción, se requieren materiales para la entrega del producto al cliente, los cuales de igual manera se deben validar.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Control de calidad en insumos
    
    p.mb-4 Los requisitos necesarios para cumplir con las solicitudes de insumos son:
    
    .tarjeta--container.row.mb-5(data-aos="fade")
      .col-md-6.col-lg-6.tarjeta.color-primario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/tema1/img_97.png', alt='')
        h4.text-center Disponibilidad
        p.mb-0.text-center El tiempo de obtención para su uso.
      .col-md-6.col-lg-6.tarjeta.color-secundario.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/tema1/img_98.png', alt='')
        h4.text-center Características propias
        p.mb-0.text-center Funcionalidad, composición, tamaño, peso, color, uniformidad de sus características.
    
    p.mb-4 En los casos de hilos se analizan propiedades como elasticidad, flexibilidad, durabilidad, resistencia a rotura, tenacidad, solidez al color, uniformidad de tono y grosor. En los elásticos es importante realizar pruebas de recuperación de su longitud, teniendo en cuenta el reposo y la tensión ejercida en su elongación.
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        .tarjeta.bg02.px-5.py-4
          .row.justify-content-around.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/tema1/img_104.svg")
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Es importante controlar desperdicios generados en la producción de los insumos, los cuales inciden en el costo del producto, de allí la importancia del control de los consumos en la planta.
     
    p.mb-5.text-center La siguiente tabla presenta pruebas especializadas que se realizan para evaluar características de algunos insumos:
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 3.
      span Pruebas de calidad en laboratorios para insumos
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade")
      .tabla-b__header.bg-tx
        h4.mb-0 Pruebas de calidad en laboratorios para insumos
      table.table-xl-2
        thead
          tr
            th.bg-theader.w-10-cus Insumo
            th.bg-theader Ensayo
            th.bg-theader Norma vigente / recomendada
        tbody
          tr
            td.br-bb-td(rowspan='13') Cremallera
            td.br-cn-td Análisis cualitativo de fibras textiles de la cinta.
            td AATCC TM20 - 2021
          tr
            td.br-cn-td Análisis cuantitativo de fibras textiles de la cinta.
            td AATCC TM20A - 2025
          tr
            td.br-cn-td Resistencia del freno o dispositivo de bloqueo del deslizador.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia del deslizador de tira simple en cierres separables.
            td EN 16732:2025
          tr
            td.br-cn-td Determinación de medidas y longitud del cierre.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia a la carga lateral del cierre.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia lateral del conjunto separable, pin y caja.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia de la paleta o tirador del deslizador.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia a la fijación del tope inferior por separación de la tira.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia del tope superior.
            td EN 16732:2025
          tr
            td.br-cn-td Resistencia de la caja retenedora.
            td EN 16732:2025
          tr
            td.br-cn-td Solidez del color al lavado en seco con percloroetileno.
            td ISO 105 - D01:2010 / AATCC TM132 - 2004e3 (2013) e3
          tr
            td.br-bb-td Determinación de metales extraíbles en componentes textiles o accesorios.
            td.bb-td EN 16711 - 2:2015          
          tr
            td.br-bb-td(rowspan='6') Botones
            td.br-cn-td Evaluación dimensional y pruebas generales para botones de confección.
            td BS 4162:1983
          tr
            td.br-cn-td Evaluación tono a tono o diferencia visual de color.
            td AATCC EP9 - 2025
          tr
            td.br-cn-td Solidez del color al planchado o prensado en caliente.
            td ISO 105 - X11:2026 / AATCC TM133 - 2020e
          tr
            td.br-cn-td Solidez del color al lavado en seco.
            td ISO 105 - D01:2010 / AATCC TM132 - 2004e3(2013) e3
          tr
            td.br-cn-td Resistencia y comportamiento frente a limpieza, abrasión o uso.
            td BS 4162:1983
          tr
            td.br-bb-td Determinación de metales extraíbles en botones o accesorios metálicos.
            td.bb-td EN 16711 - 2:2015         
          tr
            td.br-bb-td(rowspan='20') Hilos
            td.br-cn-td Análisis cualitativo de fibras.
            td AATCC TM20 - 2021
          tr
            td.br-cn-td Análisis cuantitativo de fibras.
            td AATCC TM20A - 2025
          tr
            td.br-cn-td Determinación de la densidad lineal del hilo por método de madeja.
            td ASTM D1907/D1907M - 12(2025)
          tr
            td.br-cn-td Determinación de la humedad en textiles.
            td ASTM D2654 - 22
          tr
            td.br-cn-td Determinación del encogimiento del hilo.
            td ASTM D2259 - 21
          tr
            td.br-cn-td Determinación de materias extraíbles en fibras, hilos o telas.
            td ASTM D2257 - 20
          tr
            td.br-cn-td Determinación de la pilosidad del hilo.
            td ASTM D5647 - 07(2025)
          tr
            td.br-cn-td Determinación de la uniformidad de hebras textiles mediante equipo de capacitancia.
            td ASTM D1425/D1425M - 14(2020)
          tr
            td.br-cn-td Ensayo de propiedades de tensión de hilos por método de hebra individual.
            td ASTM D2256/D2256M - 21
          tr
            td.br-cn-td Determinación de la solidez del color al agua de mar.
            td ISO 105 - E02:2013 / AATCC TM106 - 2025
          tr
            td.br-cn-td Determinación de la solidez del color al agua.
            td ISO 105 - E01:2013 / AATCC TM107 - 2022e
          tr
            td.br-cn-td Determinación de la solidez del color al lavado en seco.
            td ISO 105 - D01:2010 / AATCC TM132 - 2004e3(2013) e3
          tr
            td.br-cn-td Determinación de la solidez del color a la transpiración.
            td AATCC TM15 - 2021e
          tr
            td.br-cn-td Determinación de la solidez del color al frote lineal.
            td AATCC TM8 - 2016e (2022) e
          tr
            td.br-cn-td Determinación de la solidez del color al lavado acelerado.
            td AATCC TM61 - 2013e (2020) e2
          tr
            td.br-cn-td Determinación de la solidez del color a la luz artificial tipo luz día.
            td ISO 105 - B02:2014
          tr
            td.br-cn-td Determinación de torsión en hilos por método destorcido-retorcido.
            td ASTM D1422/D1422M - 13(2020)
          tr
            td.br-cn-td Determinación de torsión en hilos por conteo directo.
            td ASTM D1423/D1423M - 16(2022)
          tr
            td.br-cn-td Determinación de formaldehído libre e hidrolizado en textiles.
            td ISO 14184 - 1:2011
          tr
            td.br-bb-td Determinación de metales extraíbles en textiles.
            td.bb-td EN 16711 - 2:2015        

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Control de calidad de materiales
    
    p Los materiales que apoyan la producción, como es el caso, en mayor medida, de la papelería, sus especificaciones técnicas deben corresponder a su aplicación en el proceso productivo.
    p.mb-4 Para validar el uso de los materiales en las diferentes áreas, se inspeccionan los siguientes requisitos:
 
    .row.justify-content-center.align-content-center.mb-5(data-aos="fade")
        .col-lg-5.align-content-center.mb-3.mb-lg-0
          .tarjeta-avatar-b.align-content-center
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/img_99.png')
            .tarjeta.tarjeta--verde
              .p-4.py-lg-5.align-content-center
                h4.mt-3 Disponibilidad
                p.mb-0 El tiempo de obtención para su uso.
        .col-lg-5.align-content-center.mb-3.mb-lg-0
          .tarjeta-avatar-b.align-content-center
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/img_100.png')
            .tarjeta.tarjeta--verde
              .p-4.py-lg-5.align-content-center
                h4 Características propias
                p.mb-0 Funcionalidad, composición, tamaño, peso, color, uniformidad.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Control de calidad en textiles
    
    p En el caso de los textiles, teniendo en cuenta las propiedades asociadas a su composición, se realizan las inspecciones que pueden ser evidenciadas con detenimiento, pero es necesario realizar pruebas de laboratorio que garanticen la calidad para su utilización.
    p.mb-4 Se tienen en cuenta algunas de ellas, como se presenta en la siguiente tabla:
    
    .row.mb-5(data-aos="fade")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Pruebas de calidad en laboratorios para textiles
        .tabla-b.color-acento-contenido
          table.table-xl
            thead
              tr
                th.bg-theader Ensayo
                th.bg-theader Norma
            tbody
              tr 
                td.br-cn-td Análisis cualitativo de fibras textiles.
                td AATCC TM20 - 2021
              tr
                td.br-cn-td Análisis cuantitativo de composición de fibras textiles.
                td AATCC TM20A - 2025 / ISO 1833 - 1:2020 y partes aplicables según mezcla de fibras
              tr
                td.br-cn-td Coeficiente de fricción hilo-hilo.
                td ASTM D3412/D3412M - 13(2020)
              tr
                td.br-cn-td Determinación de la densidad lineal de fibras textiles.
                td ASTM D1577 - 07(2024) e1 / ISO 1973:2021
              tr
                td.br-cn-td Determinación de materias extraíbles en fibras, hilos y telas.
                td ASTM D2257 - 25
              tr
                td.br-cn-td Determinación de rizos por unidad de longitud en fibras discontinuas manufacturadas.
                td ASTM D3937 - 12(2024)
              tr
                td.br-cn-td Determinación de la resistencia a la tracción y alargamiento de fibras textiles individuales.
                td ASTM D3822/D3822M - 14(2020)
              tr
                td.br-cn-td.bb-td Determinación de formaldehído libre e hidrolizado en textiles.
                td.bb-td ISO 14184 - 1:2011

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-9
        p La tela es la materia prima que más consume la prenda, por eso se debe revisar la uniformidad del color, sin deshilados, huecos, motas, contaminación de otros hilos, textura de acuerdo con el tejido, es decir, que no tenga arrugas no relacionadas con su textura, limpieza, anchos de tela parejos y orillo de tela.
        p.mb-5 Es importante revisar el comportamiento del textil al contacto con el agua y las temperaturas, sobre todo las altas, dado el caso de que la pieza necesite que se le realicen fusionados y lo relacionado con el planchado. Al lavar la tela, se puede consultar la recuperación y formación de arrugas, la solidez del color para que no migre cuando se presenten combinaciones de colores en las piezas y el uso de insumos.
        .cajon.color-primario.p-4
          p.mb-0.fw-bold También se debe tener en cuenta en las fibras los efectos del contacto con bacterias y microorganismos, su incidencia en la durabilidad. Asimismo, el contacto con fluidos corporales como sangre, saliva o sudoración (Alonso, 2015).
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img_101.png') 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'W. Edwards Deming ',
        texto:
          'Refiere el significado de calidad a la elaboración de un producto a bajo costo con características medibles que satisfagan al cliente.',
        icono: require('@/assets/curso/temas/tema1/img_3.svg'),
      },
      {
        titulo: 'Kaoru Ishikawa',
        texto:
          'Resalta el control de todos los procesos y de las personas de la empresa involucradas para obtener un producto más útil, más económico, y que satisfaga al consumidor final.',
        icono: require('@/assets/curso/temas/tema1/img_3.svg'),
      },
      {
        titulo: 'Armand V. Feigenbaum',
        texto:
          'Comprendió que el inicio de la calidad se encuentra en el diseño del producto y finaliza cuando el consumidor lo utiliza.',
        icono: require('@/assets/curso/temas/tema1/img_4.svg'),
      },
      {
        titulo: 'M. Juran ',
        texto:
          'Define calidad como un conjunto de características que satisfacen al cliente, sin tener errores.',
        icono: require('@/assets/curso/temas/tema1/img_5.svg'),
      },
      {
        titulo: 'Philip B. Crosby ',
        texto:
          'Asoció el concepto de calidad al cumplimiento de requisitos y de normas.',
        icono: require('@/assets/curso/temas/tema1/img_6.svg'),
      },
      {
        titulo: 'Valls',
        texto:
          'Resalta que la calidad se relaciona con el cumplimiento de los requisitos del cliente para lograr el desarrollo de la empresa.',
        icono: require('@/assets/curso/temas/tema1/img_7.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
