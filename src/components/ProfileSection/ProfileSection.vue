<template>
  <section class="profile-section-content">
    <div class="profile-section-image">
      <img class="profile-section-image-profile" src="@/assets/images/image_profile.webp">
    </div>
    <div class="profile-section-paragraph">
      <h1 class="profile-section-paragraph-title">Yanis BELKADI</h1>
      <p class="profile-section-paragraph-introduction">Je suis Yanis, développeur front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et JavaScript.</p>
      <p class="profile-section-paragraph-details">Actuellement en dernière année d'études supérieures (+5) en alternance au sein d'une entreprise dynamique, développant un SaaS applicatif innovant.</p>
      <p class="profile-section-paragraph-heading">Prestations :</p>
      <p class="profile-section-paragraph-services1">-> Landing page / Site vitrine, totalement responsive.</p>
      <p class="profile-section-paragraph-services2">-> Webapps en Vue.Js.</p>
      <p class="profile-section-paragraph-services3">-> Fonctionnalités en Vue.Js.</p>
      <p class="profile-section-paragraph-end">Disponible pour des missions en freelance.</p>
    </div>

    <BadgeWork
      isOpen
    ></BadgeWork>
  </section>
</template>

<script setup lang="ts">
  import BadgeWork from "@/components/BadgeWork/BadgeWork.vue";
</script>

<style lang="scss">
  @import 'ProfileSection';
</style>
