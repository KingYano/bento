<template>
  <div class="medium-card">
    <div class="medium-card__left-side">
      <div class="medium-card__icon">
        <img class="medium-card__icon-image" :src="imageUrl" :alt="imageAlt">
      </div>
      <div class="medium-card__paragraph">
        <p class="medium-card__paragraph-title">{{ title }}</p>
        <p class="medium-card__paragraph-text">{{ text }}</p>
      </div>
      <div class="medium-card__command">
        <button class="medium-card__command-button"><a class="medium-card__command-link" target="_blank" :href="buttonLink">{{ buttonText }}</a></button>
      </div>
    </div>
    <div class="medium-card__right-side">
      <div v-if="multipleImage" class="medium-card__multiple-images">
        <img :src="imagesUrlFirst" :alt="imagesAltFirst">
        <img :src="imagesUrlSecond" :alt="imagesAltSecond">
        <img :src="imagesUrlThird" :alt="imageAltThird">
        <img :src="imagesUrlFour" :alt="imagesAltFour">
      </div>
      <div v-else class="medium-card__single-images">
        <img :src="singleImageUrl" :alt="singleImageAlt">
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    imageUrl: String,
    imageAlt: String,
    title: String,
    text: String,
    buttonText: String,
    buttonLink: String,
    multipleImage: Boolean,
    imagesUrlFirst: String,
    imagesAltFirst: String,
    imagesUrlSecond: String,
    imagesAltSecond: String,
    imagesUrlThird: String,
    imageAltThird: String,
    imagesUrlFour: String,
    imagesAltFour: String,
    singleImageUrl: String,
    singleImageAlt: String
  });
</script>

<style>
  @import 'MediumContent.scss';
</style>
