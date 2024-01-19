<template>
  <div class="large-card">
    <div v-if="isImage" class="large-card__picture">
      <img class="large-card__picture-img" :src="imageUrl" :alt="imageAlt">
    </div>
    <div v-else class="large-card__map">
      <img class="large-card__map-img" :src="imageUrl" :alt="imageAlt">
      <div class="large-card__map-focus">
        <img src="@/assets/images/map/image_focus.webp">
      </div>
      <div class="large-card__map-location">
        <p>{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    isImage: Boolean,
    imageUrl: String,
    imageAlt: String,
    location: String,
  });
</script>

<style>
  @import 'LargeContent.scss';
</style>
