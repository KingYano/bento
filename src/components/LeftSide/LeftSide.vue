<template>
  <section class="left-side-content">
    <div class="left-side-image">
      <img class="left-side-image-profile" src="@/assets/images/image_profile.webp">
    </div>
    <div class="left-side-paragraph">
      <h1 class="left-side-paragraph-title">Yanis BELKADI</h1>
      <p class="left-side-paragraph-introduction">Je suis Yanis, développeur web front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et Javascript.</p>
      <p class="left-side-paragraph-details">Actuellement en dernière année d’étude (+5) en alternance  au sein d'une entreprise dynamique, développant un SaaS applicatif innovant. au sein d'une entreprise dynamique, développant un SaaS applicatif innovant.</p>
      <p class="left-side-paragraph-heading">Prestations :</p>
      <p class="left-side-paragraph-services">-> Landing page / Site vitrine, totalement responsive en Html/Css/Js.</p>
      <p class="left-side-paragraph-services">-> Webapps en Vue.Js.</p>
      <p class="left-side-paragraph-services">-> Fonctionnalités en Vue.Js.</p>
    </div>

    <BadgeWork
      :isOpen="false"
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
