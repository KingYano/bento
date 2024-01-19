<template>
  <div class="medium-project-card" :class="!imageRightSide ? 'medium-project-card-reverse' : 'medium-project-card-normal'">
    <div :class="{'medium-card__left-side': imageRightSide, 'medium-card__right-side': !imageRightSide}">
      <div class="medium-card__paragraph">
        <p class="medium-card__paragraph-title">{{ title }}</p>
        <p class="medium-card__paragraph-text">{{ text }}</p>
      </div>
      <div class="medium-card__command">
        <button tabindex="-1" class="medium-card__command-button"><a class="medium-card__command-link" target="_blank" :href="buttonLink">{{ buttonText }}</a></button>
      </div>
    </div>
    <div :class="{'medium-card__right-side': imageRightSide, 'medium-card__left-side': !imageRightSide}">
      <div class="medium-card__single-images">
        <img :src="singleImageUrl" :alt="singleImageAlt">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  imageRightSide: Boolean,
  title: String,
  text: String,
  buttonText: String,
  buttonLink: String,
  singleImageUrl: String,
  singleImageAlt: String
});
</script>

<style>
@import 'MediumProject.scss';
</style>
