<template>
  <div class="medium-card">
    <div class="medium-card__left-side">
      <div class="medium-card__icon">
        <img class="medium-card__icon-image" :src="imageUrl" :alt="altText">
      </div>
      <div class="medium-card__paragraph">
        <p class="medium-card__paragraph-title">{{ title }}</p>
        <p class="medium-card__paragraph-text">{{ text }}</p>
      </div>
      <div class="medium-card__command">
        <button class="medium-card__command-button">{{ buttonText }}</button>
      </div>
    </div>
    <div class="medium-card__right-side">
      <div class="medium-card__images">

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { defineProps } from 'vue';
  import {types} from "sass";
  import String = types.String;

  const props = defineProps({
    imageUrl: String,
    altText: String,
    title: String,
    text: String,
    buttonText: String
  });
</script>

<style>
  @import 'MediumContent.scss';
</style>
