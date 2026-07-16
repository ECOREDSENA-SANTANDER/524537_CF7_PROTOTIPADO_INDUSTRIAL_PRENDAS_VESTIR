<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      #Actividad                
        <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Requerimientos técnicos y prototipos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los fundamentos técnicos relacionados con control de calidad, requisitos de patronaje, trazo, corte, confección, terminados, insumos y elaboración de prototipos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡Excelente! Ha superado la actividad',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito central del control de calidad en el desarrollo de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prevenir fallas del proceso y asegurar requisitos del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar diseños del catálogo y reducir fichas existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar maquinaria disponible y eliminar registros internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar colores comerciales y omitir inspecciones técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del control de calidad como sistema preventivo orientado a reducir fallas, reprocesos y no conformidades durante la producción.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Qué relación establece la calidad entre producto, cliente y requisitos técnicos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La calidad depende solo del precio final asignado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad reemplaza las normas por criterios visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La calidad satisface necesidades, expectativas y requisitos definidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La calidad elimina controles cuando existe buen diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce apropiación del concepto de calidad como cumplimiento de requisitos y satisfacción de necesidades y expectativas del cliente.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 3,
          texto:
            '¿Qué caracteriza al control estadístico de la calidad en confección industrial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar registros técnicos y revisar solamente muestras finales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar variaciones del producto para definir acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cambiar fichas técnicas por apreciaciones visuales del inspector.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar tiempos de producción sin revisar causas reales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio del control estadístico de calidad como análisis de variaciones para mejorar procesos, productividad y conformidad del producto.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Cuál opción corresponde a una fase del control de calidad en la industria textil?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustitución del patronaje por decisiones comerciales generales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Selección de vitrinas según tendencia de consumo vigente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminación de formatos para acelerar la línea productiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Planificación de técnicas, muestras, registros y acciones correctivas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de las fases del control de calidad, desde la planificación y alistamiento hasta el registro, análisis y mejora.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 5,
          texto:
            '¿Qué aporta la automatización al control de calidad en confección y textil?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Optimiza la gestión de datos, reduce errores y permite análisis predictivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye toda inspección técnica por criterios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina auditorías internas y formatos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide revisar procesos por ausencia de trazabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el aporte de la calidad 4.0 al análisis de datos, la trazabilidad y la predicción de fallas en los procesos productivos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Cuál enfoque pertenece a la gestión de la calidad total en una empresa?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar únicamente prendas terminadas antes del empaque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir comunicación interna para evitar reportes duplicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar procesos, personas, liderazgo y mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Asignar inspección solo al área de ventas externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la gestión de calidad total como integración de cliente, liderazgo, procesos, personas, evidencia y mejora continua.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumple el ciclo de Deming dentro de la mejora continua?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ordenar colores y materiales según temporada comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planear, hacer, verificar y actuar sobre procesos evaluados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suprimir mediciones cuando los defectos son mínimos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Separar áreas productivas para evitar responsabilidades compartidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación del ciclo PHVA como base para planear, ejecutar, verificar resultados y actuar sobre oportunidades de mejora.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Qué finalidad tienen los círculos de calidad dentro de la cultura organizacional?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir precios de venta y campañas comerciales externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar auditorías mediante decisiones individuales rápidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clasificar prendas terminadas sin participación del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover trabajo en equipo, participación y mejora del producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la cultura de calidad como participación organizada del personal para analizar problemas y proponer mejoras en equipo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 9,
          texto:
            '¿Qué representa la metodología Kaizen dentro del mejoramiento continuo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una auditoría final aplicada solo al producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un método para eliminar trazabilidad en producción continua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una estrategia diaria de mejora con participación del personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un sistema exclusivo para fijar costos de empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de Kaizen como metodología de mejora continua basada en disciplina, trabajo en equipo y solución sistemática de problemas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 10,
          texto:
            '¿Qué busca el modelo Six Sigma mediante la aplicación del ciclo DMAIC?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir, medir, analizar, mejorar y controlar procesos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar, marcar, ampliar, industrializar y confeccionar moldes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar, maquilar, auditar, inspeccionar y cortar piezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Distribuir, mover, alistar, integrar y clasificar materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio del modelo Six Sigma como herramienta para reducir variabilidad y mejorar procesos mediante las fases DMAIC.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la diferencia entre costos de calidad y costos de no calidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos corresponden únicamente a compras de materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ambos se calculan solo al finalizar la confección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los costos de calidad se asocian con actividades de prevención y evaluación; los costos de no calidad se generan por fallos internos o externos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los costos de no calidad reducen defectos mediante mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la diferencia entre costos de prevención y evaluación frente a pérdidas generadas por fallos internos o externos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 12,
          texto:
            '¿Qué propósito cumple la norma ISO 9001:2015 en sistemas de gestión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir estilos de colección según temporadas internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar maquinaria específica para prototipos deportivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Excluir documentación cuando existe experiencia operativa suficiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar procesos para cumplir requisitos y gestionar riesgos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la ISO 9001:2015 como sistema documentado para gestionar procesos, riesgos y satisfacción del cliente.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 13,
          texto:
            '¿Qué se inspecciona principalmente en el control de calidad de patronaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Medidas, piezas, señalización, aplomos, costuras y piquetes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Colores de vitrina, tendencia, precio, etiqueta y campaña.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Distribución de vendedores, inventario comercial y promociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fotografías del catálogo, empaque publicitario y exhibición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que el patronaje exige revisar correspondencia de medidas, cantidad de piezas, señalización, aplomos, márgenes y piquetes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 14,
          texto:
            '¿Qué aspecto debe verificarse durante el control de calidad en trazo y corte?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que las prendas se exhiban con accesorios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el planchado final reemplace controles anteriores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la alineación, capas, piquetes y paquetes correspondan.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que la ficha técnica se omita cuando existe muestra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación de los controles de trazo y corte relacionados con alineación, tendido, cantidad de capas, piquetes y paqueteado.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 15,
          texto:
            '¿Qué caracteriza las inspecciones en pie de máquina dentro del producto en proceso?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se realizan únicamente después del empaque final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituyen la ruta operacional por observación informal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitan registrar defectos para mantener la productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Detectan defectos durante la operación y permiten acciones tempranas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la inspección en pie de máquina como control oportuno para detectar defectos durante la confección.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 16,
          texto:
            '¿Para qué se confecciona un lote piloto en una referencia nueva?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para simular producción, prever fallas y validar viabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para reemplazar la ficha técnica por una prenda vendible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para eliminar controles cuando el diseño ya fue aprobado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para producir inventario sin revisar capacidad operativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el lote piloto como simulación productiva que permite anticipar fallas, ajustar procesos y validar la viabilidad del producto.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 17,
          texto:
            '¿Qué requisitos de confección son objeto de control durante el ensamble?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Precio, temporada, vitrina, publicidad y segmento comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Costuras uniformes, tela sin defectos y maquinaria ajustada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fotografía, empaque, catálogo, exhibición y promoción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño conceptual, tendencia, estilo y narrativa visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio de los requisitos de confección relacionados con costuras, condiciones del textil, maquinaria, operario e instrucciones de cuidado.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 18,
          texto:
            '¿Qué proceso hace parte del control de calidad en terminados?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir patronaje base y cuadro de tallas inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Interpretar tendencias para construir <em>moodboards</em> comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Validar planchado, empaque, embalaje, estampados y bordados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Calcular proporciones anatómicas para transformar moldes base.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del control en terminados como revisión de planchado, empaque, embalaje y procesos de acabados.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe revisarse en el control de calidad de insumos y textiles?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la presentación visual de la colección final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo la disponibilidad de proveedores sin pruebas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El precio comercial sin relación con propiedades del material.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Disponibilidad, características, solidez, resistencia y comportamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce que insumos y textiles requieren control de disponibilidad, características técnicas, resistencia, solidez y comportamiento frente al uso.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 20,
          texto:
            '¿Qué maquinaria se asocia con la elaboración de prototipos en tejido de punto?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Troqueladora, cortadora vertical, <em>plotter</em> y prensa manual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fileteadora, recubridora, zigzadora, presilladora y encauchadora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Fusionadora, extendedora, perforadora y cortadora automática.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bordadora, ojaladora, botonadora y máquina de grabado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación de la maquinaria empleada en prototipos de tejido de punto, especialmente en línea interior y deportiva.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra apropiación de los fundamentos técnicos relacionados con control de calidad, requisitos técnicos y elaboración de prototipos en prendas de vestir.',
      mensaje_final_reprobado:
        'No se ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad didáctica.',
    },
  }),
}
</script>
