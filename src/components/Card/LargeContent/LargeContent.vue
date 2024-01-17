<template>
  <div class="large-card">
    <div v-if="isImage" class="large-card__picture">
      <img class="large-card__picture-img" :src="imageUrl" :alt="imageAlt">
    </div>
    <div v-else class="large-card__map">
      <img class="large-card__map-img" :src="imageUrl" :alt="imageAlt">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    isImage: Boolean,
    imageUrl: String,
    imageAlt: String,

  });
</script>

<style>
  @import 'LargeContent.scss';
</style>
