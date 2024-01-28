<template>
  <div class="medium-card">
    <div class="medium-card__left-side">
      <div class="medium-card__icon">
        <img class="medium-card__icon-image" loading="lazy" :src="imageUrl" :alt="imageAlt">
      </div>
      <div class="medium-card__paragraph">
        <p class="medium-card__paragraph-title">{{ title }}</p>
        <p class="medium-card__paragraph-text">{{ text }}</p>
      </div>
      <div class="medium-card__command">
        <button tabindex="-1" class="medium-card__command-button"><a class="medium-card__command-link" target="_blank" :href="buttonLink">{{ buttonText }}</a></button>
      </div>
    </div>
    <div class="medium-card__right-side">
      <div v-if="multipleImage" class="medium-card__multiple-images">
        <img :src="imagesUrlFirst" loading="lazy" :alt="imagesAltFirst">
        <img :src="imagesUrlSecond" loading="lazy" :alt="imagesAltSecond">
        <img :src="imagesUrlThird" loading="lazy" :alt="imagesAltThird">
        <img :src="imagesUrlFour" loading="lazy" :alt="imagesAltFour">
      </div>
      <div v-else class="medium-card__single-images">
        <img :src="singleImageUrl" loading="lazy" :alt="singleImageAlt">
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

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
    imagesAltThird: String,
    imagesUrlFour: String,
    imagesAltFour: String,
    singleImageUrl: String,
    singleImageAlt: String
  });
</script>

<style>
  @import 'MediumContent.scss';
</style>
