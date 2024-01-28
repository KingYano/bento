<template>
  <div class="small-card">
    <div class="small-card__icon">
      <img class="small-card__icon-image" loading="lazy" :src="imageUrl" :alt="imageAlt">
    </div>
    <div class="small-card__title">
      <a v-if="isLink" class="small-card__title-link" target="_blank" :href="textHref">{{ text }}</a>
      <p v-else class="small-card__title-text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    imageUrl: String,
    imageAlt: String,
    text: String,
    textHref: String,
    isLink: Boolean,
  });
</script>

<style>
  @import 'SmallContent.scss';
</style>
