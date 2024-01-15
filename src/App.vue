<template>
  <p>Hello World</p>
  <NormalContent
    :imageUrl="'./src/assets/logo.svg'"
    :text="'Yanis Belkadi'"
    :buttonText="'Se connecter'"
  ></NormalContent>

  <SmallContent
    :isLink="true"
    :imageUrl="'./src/assets/logo.svg'"
    :text="'belkadi.yanis.l@gmail.com'"
    :textHref="'mailto:belkadi.yanis.l@gmail.com'"
  ></SmallContent>

</template>

<script setup lang="ts">
import NormalContent from "@/components/Card/NormalContent/NormalContent.vue";
import SmallContent from "@/components/Card/SmallContent/SmallContent.vue";
</script>

<style lang="scss">

</style>
