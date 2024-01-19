<template>
  <section class="left-side-content">
    <div class="left-side-image">
      <img class="left-side-image-profile" src="@/assets/images/image_profile.webp">
    </div>
    <div class="left-side-paragraph">
      <h1 class="left-side-paragraph-title">Yanis BELKADI</h1>
      <p class="left-side-paragraph-introduction">Je suis Yanis, développeur front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et Javascript.</p>
      <p class="left-side-paragraph-details">Actuellement en dernière année d'étude supérieur(+5) en alternance au sein d'une entreprise innovante, développant un SaaS applicatif innovant.</p>
      <p class="left-side-paragraph-heading">Prestations :</p>
      <p class="left-side-paragraph-services1">-> Landing page / Site vitrine, totalement responsive.</p>
      <p class="left-side-paragraph-services2">-> Webapps en Vue.Js.</p>
      <p class="left-side-paragraph-services3">-> Fonctionnalités en Vue.Js.</p>
      <p class="left-side-paragraph-end">Disponible pour des missions en freelance.</p>
    </div>

    <BadgeWork
      :isOpen="true"
      status="Open to Work"
    ></BadgeWork>

    <div class="left-side-copyright">
      <p>©Yanis Belkadi - 2024</p>
      <p>V◦1</p>
    </div>

  </section>
</template>

<script setup lang="ts">
  import BadgeWork from "@/components/BadgeWork/BadgeWork.vue";
</script>

<style lang="scss">
  @import 'LeftSide.scss';
</style>
