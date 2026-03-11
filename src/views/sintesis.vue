<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El proceso de escalado es el último paso del patronaje, entendiendo los cuadros de tallas se realiza el análisis detallado de las prendas y se definen las medidas específicas para cada talla. Cada empresa tiene su propio cuadro de tallas, pero el proceso de escalado, sea digital o manual siempre es el mismo. En el siguiente diagrama se presentan los temas más significativos tratados dentro de este componente: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama presenta un resumen de los temas y conceptos trabajados en el componente, entre los cuales se encuentra: Escalados de diferentes prendas de vestir, análisis y construcción de cuadro de tallas, modificaciones de moldes y Escalado en Optitex")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
