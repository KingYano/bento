<template>
  <p>Hello World</p>
  <SingleInfo
    :imageUrl="'./src/assets/logo.svg'"
    :text="'Yanis Belkadi'"
    :buttonText="'Se connecter'"
  ></SingleInfo>

</template>

<script setup lang="ts">
  import SingleInfo from "./components/Card/SingleInfo/SingleInfo.vue";
</script>

<style lang="scss">

</style>
