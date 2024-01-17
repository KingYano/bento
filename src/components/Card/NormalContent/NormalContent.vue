<template>
  <div class="normal-card">
    <div class="normal-card__icon">
      <img class="normal-card__icon-image" :src="imageUrl" :alt="imageAlt">
    </div>
    <div class="normal-card__title">
      <p class="normal-card__title-text">{{ text }}</p>
    </div>
    <div class="normal-card__command">
    <button class="normal-card__command-button"><a class="normal-card__command-link" target="_blank" :href="buttonLink">{{ buttonText }}</a></button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    imageUrl: String,
    imageAlt: String,
    text: String,
    buttonText: String,
    buttonLink: String
  });
</script>

<style>
  @import 'NormalContent.scss';
</style>
