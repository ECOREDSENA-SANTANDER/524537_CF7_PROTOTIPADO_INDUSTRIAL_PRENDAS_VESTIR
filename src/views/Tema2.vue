<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Escalado en Optitex
    
    .row.justify-content-center.mb-4
      .col-lg-1.col-md-12.col-12
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img1.svg', alt='tema1')
      .col-lg-11.col-md-12.col-12
        p.mb-0 A nivel general, el escalado digital o a través de un #[em software] de patronaje se trabaja de la misma manera o con el mismo análisis que se hace de forma manual, en esta ocasión únicamente se va a abordar la programación, herramientas y reconocimiento de la interfaz del programa Optitex para hacer cualquier tipo de escalado, de esta manera se tomará como referente la base de falda; sin embargo, estos mismos pasos y esta misma configuración aplica para cualquier tipo de base, prenda, trazo, molde o interpretación.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fbK-zaZa4d4?si=i-nYW7KgTXeRdhp7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. ESCALADO EN OPTITEX
    
    




</template>

<script>
export default {
  name: 'Tema2',
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
