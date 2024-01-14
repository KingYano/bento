<template>
  <div class="single-card">
    <div class="single-card__icon">
      <img class="single-card__icon-image" :src="imageUrl" :alt="altText">
    </div>
    <div class="single-card__title">
      <p class="single-card__title-text">{{ text }}</p>
    </div>
    <div class="single-card__command">
      <button class="single-card__command-button">{{ buttonText }}</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: String,
  altText: String,
  text: String,
  buttonText: String
});
</script>

<style>
  @import './SingleInfo.scss';
</style>
