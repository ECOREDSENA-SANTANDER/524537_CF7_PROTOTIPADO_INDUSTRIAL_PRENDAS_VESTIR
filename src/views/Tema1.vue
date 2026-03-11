<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Escalado manual de prendas
    
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Introducción y conceptualización - escalado

    .row.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja2.p-4
          .row.justify-content-center
            .col-lg-8.col-md-12.col-12
              h4.mb-4.negro.my-4 ¿Qué es el escalado?
              p.mb-0 Es el método o técnica implementada para ampliar o reducir proporcionalmente un patrón base, molde o trazo de una talla a otra. Las proporciones se identifican de acuerdo con el cuadro de tallas o medidas estandarizadas, para llevar a cabo un escalado se implementan planos cartesianos que permiten identificar puntos de referencia, en las medidas de largos, anchos y contornos con sus proporciones que se diferencian entre una talla y otra.
            .col-lg-3.col-md-8.col-8
              img.img-a.img-t(src='@/assets/curso/tema1/img1.svg', alt='tema1')
              
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Plano cartesiano

    p.mb-4 Está formado por dos rectas perpendiculares, una horizontal y otra vertical que se entrecruzan en un punto.
    
    .row.justify-content-center.mb-4
      .col-lg-12.col-md-12.col-12
        .caja3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.col-8
              img.img-a.img-t(src='@/assets/curso/tema1/img2.png', alt='la figura presenta un plano cartesiano, resaltando el punto de origen, el eje X y el eje Y.')
            .col-lg-7.col-md-12.col-12
              ul.lista-ul--color.f-1
                li.mb-4.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 #[b La recta horizontal, ] es llamada eje de las abscisas o de las equis #[b (X)]
                li.mb-4.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 #[b La recta vertical, ]  eje de las ordenadas o de las yes #[b (Y)]
                li.mb-0.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 #[b El punto donde se cortan ] recibe el nombre de origen #[b (punto cero o punto muerto)]
    
    p.mb-4 #[b El plano cartesiano tiene como finalidad describir la posición de puntos,] los cuales se representan por sus coordenadas o pares ordenados. Para la implementación del plano cartesiano trabajaremos con el #[b sistema de medidas de mayor dominio.]  
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .caja2.rad.p-4
          p.mb-0.text-center Sistema de medida universal: #[b metro - centímetro - milímetro]
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .caja4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.col-8
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img3.svg', alt='tema1')
            .col-lg-7.col-md-12.col-12
              p.mb-4.negro Ejemplo:
              p.mb-4 #[b Considerando que el ancho es representado por la línea X, y el largo por la línea Y.]
              p.mb-4 Si tomamos como punto de partida 
                strong el punto de origen 
                | al hablar de reducir o aumentar, podríamos acudir a los espacios negativos o positivos del plano cartesiano, según corresponda.
              .row.justify-content-center
                .col-lg-6.col-md-6.col-12
                  .caja2.rad.p-4.mb-3
                    p.mb-3.negro.text-center Aumenta
                      .cajablanca.radi.mb-4
                        p.mb-4.negro.text-center Ancho: 3 - Largo: 1
                      .cajablanca.radi.mb-4
                        p.mb-4.negro.text-center Ancho: 1 - Largo: 3
                .col-lg-6.col-md-6.col-12
                  .caja2.rad.p-4.mb-3
                    p.mb-3.negro.text-center Reduce
                      .cajablanca.radi.mb-4
                        p.mb-4.negro.text-center Ancho: -3 - Largo: -1
                      .cajablanca.radi.mb-4
                        p.mb-4.negro.text-center.my-4 Ancho: -1 - Largo: -3
    p.mb-4 En las siguientes gráficas se presenta la ubicación de los puntos en el plano cartesiano:
    
    .row.align-items-center.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .titulo-sexto.color-secundario
          h5 Figura 1. 
          | Ubicación de los puntos en el plano cartesiano
    
    .row.justify-content-center.mb-2(data-aos="zoom-in-left")(alt='La figura presenta 3 gráficas del plano cartesiano: la primera describe el cuadrante I como positivo-aumenta, y el cuadrante III como negativo-reduce. La siguiente gráfica nombra el eje de las X como ancho y el eje de las Y como largo. La tercera grafica presenta la ubicación de 4 coordenadas sobre el plano.')
      .col-lg-12.col-md-12.col-12
        .row.justify-content-center
          .col-lg-4.col-md-12.col-12.mb-4
            .caja31.p-3
              img.img-a.img-t(src='@/assets/curso/tema1/img4.svg', alt='tema1')
          .col-lg-4.col-md-12.col-12.mb-4
            .caja31.p-3
              img.img-a.img-t(src='@/assets/curso/tema1/img5.svg', alt='tema1')
          .col-lg-4.col-md-12.col-12.mb-4
            .caja31.p-3
              img.img-a.img-t(src='@/assets/curso/tema1/img6.svg', alt='tema1')

    p.mb-4 Para entender cómo funciona el escalado desde el  plano cartesiano, se toma como referencia un cuadrado, el cual es el molde base o talla base a trabajar, su ubicación en el plano se presenta en la siguiente figura:
    
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.col-md-12.col-12.mb-4
        .titulo-sexto.color-secundario
          h5 Figura 2. 
          | Punto de origen
        img.img-a.img-t(src='@/assets/curso/tema1/im50.svg', alt='La figura presenta un cuadrado ubicado en el centro del plano cartesiano, formado por las coordenada: (2,2)(-2,2)(-2,-2) y 2,-2).')
    
    p.mb-4 Para mayor comprensión de este cuadrado, se  deben dibujar dos cuadrados más, en total serían tres cuadrados donde el primero es el punto intermedio entre los otros dos, así como se presenta en la siguiente figura:
    
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4.col-md-12.col-12.mb-4
        .titulo-sexto.color-secundario
          h5 Figura 3. 
          | Tres cuadrados
        img.img-a.img-t(src='@/assets/curso/tema1/im51.svg', alt='La figura presenta la ubicación de los tres cuadrados sobre el plano cartesiano.')
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .caja22.rad.p-2
          .row.justify-content-center
            .col-lg-5.col-md-12.col-12
              ul.lista-ul--color
                li.mb-0.my-3.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 La diferencia de #[b ancho] es 2 cm
            .col-lg-5.col-md-12.col-12
              ul.lista-ul--color
                li.mb-0.my-3.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 La diferencia de #[b alto] es 2 cm
    
    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .row.justify-content-center.align-items-center
          .col-2
            .avatar
              img.d-none.d-lg-block(src="@/assets/curso/tema1/img7.svg")
          .col-lg-10.col-md-12.col-12.caj.p-3
            .row
              .col-1
              .col-10
                p.my-2 Se debe sacar un cuadrado más pequeño y un cuadrado más grande. Recuerde que todos los lados del cuadrado deben quedar iguales.
    
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Análisis sobre plano cartesiano

    p.mb-0 #[b Ubicación en plano cartesiano:] punto de origen
    p.mb-4 #[b Distribución desde punto de origen:] 1 cm a cada lado
    
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.col-12
        .caja22.rad.p-2
          .row.justify-content-center
            .col-lg-5.col-md-12.col-12
              ul.lista-ul--color
                li.mb-0.my-3.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 Aumento por largo eje #[b Y: 2 cm]
            .col-lg-5.col-md-12.col-12
              ul.lista-ul--color
                li.mb-0.my-3.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 Aumento por ancho eje #[b X: 2 cm]
    p.mb-4 Puntos para tener en cuenta: en este caso, por el punto de origen y el incremento de la figura, no se contemplan puntos como negativos o positivos, únicamente los lados que deben aumentar.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img8.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Análisis sobre plano cartesiano
              p.mb-2.text-white Revisa el documento que pueden resultar útil para aprender más sobre el análisis sobre plano cartesiano en la carpeta de anexos.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Analisis_sobre_plano_cartesiano.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Conclusiones
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .row.justify-content-center.mb-0
          .col-lg-8.col-md-12.col-12
            .cajon.color-primario.p-4.mb-4
              p.mb-0 El manejo del punto de origen - punto cero - punto muerto, es el primer acercamiento a la comprensión de trasladar, modificar, mover puntos de referencia o construcción.
            p.mb-4 El concepto de positivo o negativo sobre el plano depende del punto de origen; aplicar en escalado se refiere a cada vez que se trabaja una medida sobre el plano cartesiano:
            .row.justify-content-center.mb-0
              .col-lg-9.col-md-12.col-12
                .caja22.rad.p-2
                  .row.justify-content-center
                    .col-lg-5.col-md-12.col-12
                      ul.lista-ul--color
                        li.mb-0.my-3.d-flex
                          i.fas.fa-chevron-right
                          p.mb-0 #[b Negativa:] reducción
                    .col-lg-5.col-md-12.col-12
                      ul.lista-ul--color
                        li.mb-0.my-3.d-flex
                          i.fas.fa-chevron-right
                          p.mb-0 #[b Positiva:] aumento
          
          .col-lg-4.col-md-8.col-8
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img9.png', alt='tema1')

    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Proporciones
    
    p.mb-3(data-aos="fade-right") En escalado son medidas de los aumentos o disminuciones secuenciales para obtener tallas mayores o menores, moldes o bases.
    p.mb-4(data-aos="fade-right") Se debe identificar la diferencia en unidades de medida usada, es decir, centímetros, entre talla y talla, en cada medida del cuerpo (largos, anchos, contornos). La medida identificada como diferencia es sobre la que se hace el análisis de construcción, dependiendo el tipo de plano, molde o trazo.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .caja4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.col-8
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img3.svg', alt='tema1')
            .col-lg-7.col-md-12.col-12
              p.mb-4.negro Ejemplo:
              p.mb-4 Para identificar las proporciones a usar se debe trabajar con las siguientes medidas. En este caso el punto base o el punto de partida es el mediano, la diferencia entre medida y medida es: 
                strong 2 cm para aumentar y -2 cm para reducir.
              p.mb-4 Para aplicar el escalado se trabaja con las proporciones, no con la diferencia.
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-11.col-md-12.col-12
                  .titulo-sexto.color-secundario
                    h5 Tabla 1. 
                    | Proporciones
              .row.justify-content-center.align-items-center
                .col-lg-11.col-md-12.col-12
                  .tabla-a.tabl.color-acento-contenido
                    table.pad1(alt=' la figura presenta la ubicación de los tres cuadrados sobre el plano cartesiano.')
                      thead
                        tr
                          th.text-white Medidas
                          th.text-white Pequeño
                          th.text-white Mediano
                          th.text-white Grande
                      tbody
                        tr.cy
                          td.text-center.hor Largo
                          td.text-center.hor 2
                          td.text-center.hor
                            .row.justify-content-center
                              .col-lg-3.col-md-3.col-3
                                img.wi.my-3(src='@/assets/curso/tema1/fi.png', alt='tema1')
                              .col-lg-5.col-md-5.col-6
                                .bgrr.p-2
                                  p.mb-0 4
                              .col-lg-3.col-md-3.col-3
                                img.wi.my-3(src='@/assets/curso/tema1/fd.png', alt='tema1')
                          td.text-center.hor 6
                        tr.cy
                          td.text-center Ancho
                          td.text-center 2
                          td.text-center 
                            .row.justify-content-center
                              .col-lg-3.col-md-3.col-3
                                img.wi.my-3(src='@/assets/curso/tema1/fi.png', alt='tema1')
                              .col-lg-5.col-md-5.col-6
                                .bgrr.p-2
                                  p.mb-0 4
                              .col-lg-3.col-md-3.col-3
                                img.wi.my-3(src='@/assets/curso/tema1/fd.png', alt='tema1')
                                
                          td.text-center 6
                        tr.cy
                          td.text-center.hor
                          td.text-center.hor 
                          td.text-center.hor #[.or -2 cm &nbsp;&nbsp;&nbsp;2 cm]
                          td.text-center.hor
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Cómo identificar las proporciones 
            

    p.mb-5(data-aos="fade-right") Si la diferencia entre una medida y otra es de 2 cm. La proporción equivale a #[b la manera en la que se aplica en el plano,] es decir:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.col-md-12.col-12
        .row.align-items-center
          .col-lg-4.mnl-1.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img11.png', alt='')
          .col-lg-9.col-md-12.col-12
            .caja5p.p-4.ps-lg-5
              p.mb-0.ps-lg-5
              ul.lista-ul--color.my-3
                li.mb-4.mx-4.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 #[b Si sobre el plano se aplica la medida completa,] dicha medida equivale a una proporción, entonces una proporción será 2 cm.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 #[b Si sobre el plano se aplica la mitad de la medida, ]  esto equivale a 1/2 proporción, 1/2 proporción será 1 cm.
    
        
    TabsC.color-primario.mb-4(data-aos="zoom-in-left")
      .py-3.py-md-4.bg26.px-3(titulo="Plano completo")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            .titulo-sexto.color-secundario
              h5 Figura 4. 
              | Plano completo
            img.img-a.img-t(src='@/assets/curso/tema1/img41.svg', alt='La figura presenta un plano completo con un cuadrado dibujado con el centro justo en el punto de origen (0,0).')
          .col-lg-7.col-md-12.my-3
            p.mb-4 En este caso se aplica #[b una proporción] porque en el plano se está trabajando la medida total.
            .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  .titulo-sexto.color-secundario
                    h5 Tabla 2. 
                    | Proporción completa
            .row.justify-content-center
              .col-lg-12.col-md-12
                .tabla-a.tabla-peque
                  table.text-center
                    thead
                      tr.bl
                        th.text-white.h4 #[b Medidas]
                        th.text-white.h4 #[b Dif. x talla]
                        th.text-white.h4 #[b Proporción]
                        th.text-white.h4 #[b Medida aplicar en escalado]
                    tbody
                      tr.p-1
                        td.text-center Largo
                        td.text-center 2 cm
                        td.text-center Completa
                        td.text-center 2 cm

                      tr.p-1
                        td.text-center.ba Ancho
                        td.text-center.ba 2 cm
                        td.text-center.ba Completa
                        td.text-center.ba 2 cm
            


      .py-3.py-md-4.bg26.px-3(titulo="Plano por mitad")
        .row.justify-content-center
          .col-lg-5.col-md-12.my-3
            .titulo-sexto.color-secundario
              h5 Figura 5. 
              | Plano por la mitad
            img.img-a.img-t(src='@/assets/curso/tema1/img42.svg', alt='La figura presenta un plano con medio cuadrado dibujado, en la parte derecha del plano.')
          .col-lg-7.col-md-12.my-3
            p.mb-4 En este caso en el ancho se debe aplicar 1/2 proporción, porque en el plano se está trabajando la mitad de la medida total.
            .row.justify-content-center(data-aos="zoom-in-left")
              .col-lg-12.col-md-12.col-12
                .titulo-sexto.color-secundario
                  h5 Tabla 3. 
                  | Proporción media
            .row.justify-content-center
              .col-lg-12.col-md-12
                .tabla-a.tabla-peque
                  table.text-center
                    thead
                      tr.bl
                        th.text-white.h4 #[b Medidas]
                        th.text-white.h4 #[b Dif. x talla]
                        th.text-white.h4 #[b Proporción]
                        th.text-white.h4 #[b Medida aplicar en escalado]
                    tbody
                      tr.p-1
                        td.text-center Largo
                        td.text-center 2 cm
                        td.text-center Completa
                        td.text-center 1 cm

                      tr.p-1
                        td.text-center.ba Ancho
                        td.text-center.ba 2 cm
                        td.text-center.ba 1/1
                        td.text-center.ba 1 cm
          
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .caja2.p-4
          .row.justify-content-center
            .col-lg-6.col-md-12.col-12
              p.mt-4.negro Ejercicio de análisis 
              p.mb-4 Realice el #[b escalado de la siguiente figura] teniendo en cuenta:
              ul.lista-ul--color.f-1
                li.mb-1.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 El cuadro de tallas asignado
                li.mb-1.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 La talla base y las medidas
                li.mb-1.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 Las diferencias entre talla y talla
                li.mb-1.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 La asignación de proporciones, según tipo de plano a trabajar
                li.mb-1.d-flex
                  i.fas.fa-chevron-right
                  p.mb-0 El punto de origen sobre el plano cartesiano y la ubicación de la figura
            .col-lg-5.col-md-8.col-8
              img.img-a.img-t(src='@/assets/curso/tema1/img12.svg', alt='tema1')
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-12.col-12.mb-4
        .titulo-sexto.color-secundario
          h5 Figura 6. 
          | Cuadro de tallas asignado
        img.img-a.img-t(data-aos="fade-right")(src='@/assets/curso/tema1/im12.svg', alt='La figura presenta el cuadro de tallas y adicionalmente un diagrama con la descripción de cada medida.')

            
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4
        .tabla-a.tabla-peque(alt='La tabla expone los resultados de aplicar las fórmulas para diferentes medidas corporales a partir de una estatura total de 1.70 m y un tórax máximo de 90 cm. La cadera se calcula sumando 8 cm al tórax máximo, resultando en 98 cm. El pecho se obtiene restando 4 cm al tórax máximo, dando 86 cm. La cintura se determina restando 28 cm de la medida de la cadera, resultando en 70 cm. La estatura 7a cervical útil se calcula restando 20 cm de la estatura total, resultando en 1.50 m. Finalmente, el largo de brazo se calcula como 4/10 de la estatura 7aC, que resulta en 60 cm. ')
          table.text-center
            thead.ru
              tr.bl
                th.text-white.h4 #[b Medidas]
                th.text-white.h4 #[b XS]
                th.text-white.h4 #[b S]
                th.text-white.h4 #[b M]
                th.text-white.h4 #[b L]
                th.text-white.h4 #[b XL]
            tbody
              tr.p-1
                td.text-center.bla Largo T.
                td.text-center.bla 5.5
                td.text-center.bla 6
                td.text-center.bla 6.5
                td.text-center.bla 7
                td.text-center.bla 7.5
              tr.p-1
                td.text-center.ba Largo 1
                td.text-center.ba 2
                td.text-center.ba 2.25
                td.text-center.ba 2.5
                td.text-center.ba 2.75
                td.text-center.ba 3
              tr
                td.text-center.bla Largo 2
                td.text-center.bla 3.5
                td.text-center.bla 3.75
                td.text-center.bla 4
                td.text-center.bla 4.25
                td.text-center.bla 4.5
              tr
                td.text-center.ba A.a
                td.text-center.ba 3
                td.text-center.ba 5
                td.text-center.ba 7
                td.text-center.ba 9
                td.text-center.ba 11
              tr
                td.text-center.bla B.b
                td.text-center.bla 6
                td.text-center.bla 8
                td.text-center.bla 10
                td.text-center.bla 12
                td.text-center.bla 14
              tr
                td.text-center.ba A.c
                td.text-center.ba 5
                td.text-center.ba 7
                td.text-center.ba 9
                td.text-center.ba 11
                td.text-center.ba 13

      .col-lg-6.col-md-12.mb-4
        .tabla-a.tabla-peque(alt='La tabla expone los resultados de aplicar las fórmulas para diferentes medidas corporales a partir de una estatura total de 1.70 m y un tórax máximo de 90 cm. La cadera se calcula sumando 8 cm al tórax máximo, resultando en 98 cm. El pecho se obtiene restando 4 cm al tórax máximo, dando 86 cm. La cintura se determina restando 28 cm de la medida de la cadera, resultando en 70 cm. La estatura 7a cervical útil se calcula restando 20 cm de la estatura total, resultando en 1.50 m. Finalmente, el largo de brazo se calcula como 4/10 de la estatura 7aC, que resulta en 60 cm. ')
          table.text-center
            thead
              tr.bl
                th.text-white.h4 #[b Medidas]
                th.text-white.h4 #[b Dif. x talla]
                th.text-white.h4 #[b Prop. x medida]
                th.text-white.h4 #[b Medida aplicar en escalado]
            tbody
            tr
              td.text-center.bla Largo T.
              td.text-center.bla 0.5 cm
              td.text-center.bla 1 proporción
              td.text-center.bla 0.25 cm
            tr
              td.text-center.ba Largo 1
              td.text-center.ba 0.25 cm
              td.text-center.ba 1 proporción
              td.text-center.ba 0.25 cm
            tr
              td.text-center.bla Largo 2
              td.text-center.bla 0.25 cm
              td.text-center.bla 1 proporción
              td.text-center.bla 0.25 cm
            tr
              td.text-center.ba A.a
              td.text-center.ba 2 cm
              td.text-center.ba 1/2 proporción
              td.text-center.ba 1 cm
            tr
              td.text-center.bla B.b
              td.text-center.bla 2 cm
              td.text-center.bla 1/2 proporción
              td.text-center.bla 1 cm
            tr
              td.text-center.ba A.c
              td.text-center.ba 2 cm
              td.text-center.ba 1/2 proporción
              td.text-center.ba 1 cm
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12            
        .caja5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.col-md-12.col-12
              .titulo-sexto.color-secundario
                h5 Figura 7. 
                | Punto de origen 1
              img.img-a.img-t(src='@/assets/curso/tema1/img13.svg', alt='La figura presenta una pieza de una prenda ubicada en un plano donde se destaca el punto de origen (0,0), adicionalmente se señalan los cm de aumento en cada vértice de la pieza.')
            .col-lg-6.col-md-12.col-12
              p.mb-4.my-5 En este caso que el punto de origen está en un punto que divide el largo total.
              p.mb-2 Se debe tomar la proporción y aplicar mitad hacia arriba - mitad hacia abajo para el largo total y no perder la proporción de la figura.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12            
        .caja5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.col-md-12.col-12
              .titulo-sexto.color-secundario
                h5 Figura 8. 
                | Punto de origen 2
              img.img-a.img-t(src='@/assets/curso/tema1/img14.svg', alt='La figura presenta una pieza de una prenda ubicada en un plano donde se destaca el punto de origen (0,0) en uno de los vértices, adicionalmente se señalan los cm de aumento de la talla M a la L en cada vértice de la pieza.')
            .col-lg-6.col-md-12.col-12
              p.mb-4.my-5 En este caso que el punto de origen está en un punto base de construcción.
              p.mb-2 Se debe tomar la proporción y aplicar toda hacia arriba para largo total y no perder la proporción de la figura.
              p.mb-0 Sin embargo, debe tener en cuenta el vértice A.b modifica a su altura, para no perder la proporción de la figura.

    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Tipos de escalado

    TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-4.bg26.px-3(titulo="Escalado monobásico")
        .row.justify-content-center
          .col-lg-4.col-md-8.col-8.my-3
            img.img-a.img-t(src='@/assets/curso/tema1/img43.png', alt='')
          .col-lg-7.col-md-12.my-3
            p.mb-0 Partiendo de tallas base se obtienen las demás por aumento o reducción.
            p.mb-0 En este caso los incrementos entre tallas se mantienen constantes en toda la serie.
            p.mb-4 Crecimiento de estatura se produce aumentando ancho y largos, llamándose también escalado de crecimiento real.
            ul.lista-ul--color.f-1
              li.mb-4.d-flex.mx-0
                i.fas.fa-chevron-right
                p #[b Simple o relativo/diferencial:] se aplica cuando los incrementos de tallas varían dentro de la serie ejemplo, no se produce incremento de estatura, solo anchos.
              li.mb-0.d-flex.mx-0
                i.fas.fa-chevron-right
                p #[b Compuesto o absoluto proporcional:] los incrementos entre tallas se mantienen constantes en toda la serie, por ejemplo, se produce incremento de estatura, se aumenta anchos y largos, llamado también escalado de crecimiento real.
      .py-3.py-md-4.bg26.px-3(titulo="Escalado bibásico")
        .row.justify-content-center
          .col-lg-4.col-md-8.col-8.my-3
            img.img-a.img-t(src='@/assets/curso/tema1/img44.png', alt='')
          .col-lg-7.col-md-12.my-3
            p.mb-4 Tomamos dos tallas básicas para obtener una intermedia, lo ideal es disponer de dos patrones, talla prototipo y talla límite.
            p.mb-4 Superponer patrón prototipo en el patrón límite con base en líneas comunes, una horizontal y una vertical.
            p.mb-0 Las tallas intermedias se trazan uniendo los vértices de ambos patrones por medio de puntos y dividiéndolos por el número de patrones a hallar.
      .py-3.py-md-4.bg26.px-3(titulo="Escalado tribásico")
        .row.justify-content-center
          .col-lg-4.col-md-8.col-8.my-3
            img.img-a.img-t(src='@/assets/curso/tema1/img45.png', alt='')
          .col-lg-7.col-md-12.my-3
            p.mb-0 Se toman tres tallas para obtener una intermedia, por ejemplo, 10 – 14 – 18 para obtener la intermedia 12 - 16.

    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Análisis de cuadros de tallas
      
    p.mb-4(data-aos="fade-right") Para el análisis de cuadros de tallas se determina:
    
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2 Límites
              p La más pequeña y la más grande. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img46.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2 Frecuencia
              p Aumento de medida talla a talla (secuencial y no secuencial - constantes y variables).
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img47.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2 Incremento
              p Magnitud de crecimiento de la medida talla por talla. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img48.svg')})`}")

    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.col-12
        .caja2.rad.p-4
          p.mb-0 El análisis de los anteriores dará como resultado: 
            strong valores – proporciones - rupturas de talla.
    
    p.mb-4 En este caso se hace el análisis desde la talla base hasta la ruptura, identificando las medidas aplicar en el escalado del patrón base.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img20.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Cuadro de tallas femeninas
              p.mb-2.text-white Revisa el documento que pueden resultar útil  para aprender más sobre el cuadro de tallas femeninas. (Revisar página 20).
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.scribd.com/document/279036173/Manual-de-Patronaje-Basico-Sena" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img21.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Tallas de 6 a 14
              p.mb-2.text-white Revisa el documento que pueden resultar útil  para aprender más sobre las Tallas de 6 a 14. (Revisar página 84).
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.scribd.com/document/279036173/Manual-de-Patronaje-Basico-Sena" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .ia.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/tema1/ia.svg', alt='')
        h2.mb-0.mx-2 Procedimiento de escalado

    p.mb-4(data-aos="fade-right") A continuación, se presentan ejemplos de escalado en diferentes prendas, cabe resaltar que para iniciar el proceso de escalado es necesario tener en cuenta una serie de operaciones previas como lo son:
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-9.col-md-12.col-12
        .row.align-items-center
          .col-lg-4.mnl-2.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/tema1/img22.png', alt='')
          .col-lg-9.col-md-12.col-12
            .caja5pw.p-3.ps-lg-5
              p.mb-0.ps-lg-5.tr
              ul.lista-ul--color.f-1.my-0
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Definir la metodología y lógica de construcción de la prenda.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Conocer la pieza que se va a escalar.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Definir si es un básico o es un desarrollo de diseño.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Definir si se va a incluir margen de costura.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Definir el tipo de escalado que se va a trabajar.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right
                  | Analizar el cuadro de tallas.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right.mb-0
                  | Analizar la diferencia por talla e identificar la medida a aplicar en el escalado.
                li.mb-0.mx-4.d-flex
                  i.fas.fa-chevron-right.mb-0
                  | Analizar los puntos de escalado que se van a referenciar o modificar.
  
    Separador 
    #t_1_1.titulo-segundo.mb-4
      h2 1.1 Escalado de falda

    p.mb-4(data-aos="zoom-in-left") Para iniciar el proceso de escalado se debe tener en cuenta el procedimiento anteriormente mencionado y las especificaciones para trabajar en esta prenda, haciendo claridad que es un molde que no tiene margen de costura y tampoco es una prenda. Importante verificar por ejemplo el escaldo en las pinzas, y que las medidas sean iguales en lateral delantero y posterior, entre otras.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-YYkMqxaJfg?si=tntlvF1mIUOoNlqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Escalado De Falda Femenino
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img23.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Plantilla escalado de falda 
              p.mb-2.text-white La plantilla que puede resultar útil  para aprender más sobre el escalado de falda.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plantilla_escalado_de_falda.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    Separador 
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Escalado de base con pinzas - superior
    
    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-md-12.col-12
        .row.justify-content-center.align-items-center
          .col-2
            .avatar
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img49.svg")
          .col-lg-10.col-md-12.col-12.caj.p-2
            .row
              .col-1
              .col-10
                p.my-3(data-aos="zoom-in-left") El proceso de escalado debe ser seguido conforme a lo planteado anteriormente, haciendo claridad que es un molde que no tiene margen de costura y tampoco es una prenda. Es importante analizar el escalado de pinzas, además verificaciones en medidas laterales, cintura, entre otras. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5w_UnxRLOBQ?si=e2QvetrlparUOtWa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Escalado De Base Con Pinzas Superior
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img24.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Escalado de base con pinzas - superior
              p.mb-2.text-white Revisa el documento que pueden resultar útil  para aprender más sobre el escalado de base con pinzas - superior.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Escalado_de_base_con_pinzas_superior.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    Separador 
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Escalado de básico de pantalón

    .row.justify-content-center.mb-4
      .col-lg-1.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img25.svg', alt='tema1')
      .col-lg-11.col-md-12.col-12
        p.mb-0(data-aos="zoom-in-left") En el caso de trabajar un básico de pantalón, se sigue el procedimiento de escalado, quiere decir un molde que no tiene margen de costura, ni es una prenda. Para este caso es importante verificar todas las medidas y su correspondencia tanto en posterior y delantero, por ejemplo, que las medidas de los laterales sean iguales, además en la entrepierna; otro lado de especial atención es el tiro, para que no afecte la horma de la prenda.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sgGEl_vjJTc?si=EcXiXWbOoh3GVwDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. ESCALADO DE BÁSICO DE PANTALÓN
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img26.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Escalado de básico de pantalón
              p.mb-2.text-white Revisa el documento que pueden resultar útil  para aprender más sobre el escalado de básico de pantalón.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Escalado_de_básico_de_pantalón.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    Separador 
    #t_1_4.titulo-segundo.mb-4
      h2 1.4 Escalado cortes, manga, cuello

    p.mb-4(data-aos="zoom-in-left") Como se ha mencionado en los anteriores escalados trabajados se debe seguir el procedimiento para estos casos, se hace referencia a prendas que ya han sido modificadas, que pueden tener margen de costura y validaciones como producto final. 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.col-md-12.col-12
        .cajon.color-primario.p-4
          p.mb-0 Es importante analizar la simetría requerida en las piezas, en el caso de cortes la distribución de las proporciones a escalar.
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_GM6Ni5lDW8?si=muadyKU5HtcWPxaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Cortes manga cuello escalado
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img27.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white Escalado cortes, manga, cuello
              p.mb-2.text-white Revisa el documento (análisis del escalado de acuerdo al cuadro de tallas) que pueden resultar útil  para aprender más sobre el escalado cortes, manga, cuello. 
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Escalado_de_base_con_pinzas_superior.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    Separador 
    #t_1_5.titulo-segundo.mb-4
      h2 1.5 Base superior masculina - análisis de escalado bibásico
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-12.col-md-12.col-12
        .row.justify-content-center.mb-4
          .col-lg-8.col-md-12.col-12
            p.mb-4(data-aos="zoom-in-left") En la metodología del #[b manual de patronaje SENA] se identifican análisis y modificaciones en cada una de las líneas, la línea femenina tiene un manejo diferente en masculino e infantil, en infantil y  masculino se suele trabajar medidas deducidas, partiendo en la mayoría de las ocasiones con solo dos medidas del cuerpo y dejando de lado el cuadro de tallas. 
            p.mb-4(data-aos="zoom-in-left") Con el fin de explorar y afianzar las diferentes formas y técnicas de escalado se abordará un escalado bibásico tomando como referencia dos moldes de diferentes tallas o en su defecto tallas de por medio, en el video “Base superior masculina – análisis de escalado bibásico” podrá identificar la manera de hacer el trazo y el análisis de los aspectos a trabajar.
            .cajon.color-primario.p-4
              p.mb-0 Este tipo de escalado se implementa para evitar el análisis del cuadro de tallas, se realiza el análisis desde la construcción o de la parte anatómica lógica del molde, despiece o la pieza. 
          .col-lg-4.col-md-8.col-8
            img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in-left")(src='@/assets/curso/tema1/img28.png', alt='tema1')
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pMZ7Uxb1cl8?si=I_eNzxV9nGJrEgrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Base Superior Masculina Análisis De Escalado Bibásico
    
    Separador 
    #t_1_6.titulo-segundo.mb-5
      h2 1.6 Análisis y construcción de cuadro de tallas masculino - dxt escalado

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-8.col-8
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img30.png', alt='tema1')
      .col-lg-8.col-md-12.col-12
        p.mb-4(data-aos="zoom-in-left") En la metodología del manual de patronaje SENA la línea de masculino e infantil se debe identificar bajo la fórmula o el tipo de construcción de los planos o moldes para poder tener las medidas e incrementos por talla que se van a trabajar en el escalado, si bien se identifica en el manual un cuadro de tallas para cada una de estas líneas, se debe tener en cuenta que desde la construcción, por lo menos en las bases superiores, no se trabaja con el cuadro de tallas, es decir, que se debe hacer la construcción y el análisis del cuadro de tallas basándose en las fórmulas que indica cada una de las construcciones de las bases que se están trabajando, con el fin de poder identificar las diferencias por tallas que se van a aplicar en el escalado.
        p.mb-0(data-aos="zoom-in-left") Ya después de tener la construcción del cuadro de tallas o identificar las tallas reales que se aplican sobre el trazo o molde se debe hacer el análisis de los puntos y movimientos de escalado que se van a referenciar o modificar.

    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/KcHaLNoyFVI?si=jHAmhuKiAFODs9Nx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Análisis Y Construcción De Cuadro De Tallas Masculino Dxt Escalado
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-1.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img31.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1.text-white(data-aos="zoom-in-left") Análisis y construcción de cuadro de tallas masculino
              p.mb-2.text-white(data-aos="zoom-in-left") Revisa el documento que pueden resultar útil  para aprender más sobre el análisis y construcción de cuadro de tallas masculino.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Análisis_y _construcción_de_cuadro_de_tallas_masculino.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    Separador 
    #t_1_7.titulo-segundo.color-primario.mb-5
      h2 1.7 Modificación de moldes - análisis sobre medidas
    
    .row.mb-4.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .row.justify-content-center.align-items-center.mb-0
          .col-2
            .avatar
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema1/img7.svg")
          .col-lg-10.col-md-12.col-12.caj.p-2
            .row
              .col-1
              .col-10
                p.my-3 Para el desarrollo de prendas y escalado de moldes se debe tener en cuenta que en algunas ocasiones se hace un análisis sobre medidas o sobre requerimientos de clientes específicos, algunas de ellas pueden ser modificaciones por talles, por anchos o por contornos. Este tipo de modificaciones se deben tener en cuenta al momento de realizar las prendas.

    
    p.mb-4(data-aos="zoom-in-left") En el presente video se podrá encontrar una explicación general sobre cómo y de qué manera se puede implementar este tipo de modificaciones, con mayor relevancia en los moldes que se han desarrollado a lo largo del programa.
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12
        figure(data-aos="fade-right").py-2
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/AD1BNSkDZOY?si=53iUJctgMarEzq_f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Modificación De Moldes Análisis Sobre Medidas

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
