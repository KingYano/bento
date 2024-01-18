<template>
  <section class="left-side-content">
    <div class="left-side-image">
      <img class="left-side-image-profile" src="@/assets/images/image_profile.webp">
    </div>
    <div class="left-side-paragraph">
      <h1 class="left-side-paragraph-title">Yanis BELKADI</h1>
      <p>Je suis Yanis, développeur web front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et Javascript.</p>
      <p>Actuellement en dernière année d’étude (+5) en alternance  au sein d'une entreprise dynamique, développant un SaaS applicatif innovant. au sein d'une entreprise dynamique, développant un SaaS applicatif innovant.</p>
      <p>Prestations :</p>
      <p>-> Landing page / Site vitrine, totalement responsive en Html/Css/Js.</p>
      <p>-> Webapps en Vue.Js.</p>
      <p>-> Fonctionnalités en Vue.Js.</p>
    </div>

    <BadgeWork
      :isOpen="false"
      status="Open to Work"
    ></BadgeWork>

    <div class="left-side-copyright">
      <p>2024 - ©Yanis Belkadi V◦1</p>
    </div>

  </section>
</template>

<script setup lang="ts">

import BadgeWork from "@/components/BadgeWork/BadgeWork.vue";
</script>

<style lang="scss">
@import 'LeftSide.scss';
</style>
