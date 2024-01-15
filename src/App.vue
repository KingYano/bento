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

  <MediumContent
      :imageUrl="'./src/assets/logo.svg'"
      :title="'YoungHotBlood'"
      :text="'@younghotblood'"
      :buttonText="'S\'abonner'"
      :multipleImage="true"
      :singleImageUrl="'./src/assets/images/image_test.png'"
      :imagesUrlFirst="'./src/assets/images/image_test.png'"
      :imagesUrlSecond="'./src/assets/images/image_test.png'"
      :imagesUrlThird="'./src/assets/images/image_test.png'"
      :imagesUrlFour="'./src/assets/images/image_test.png'"
  ></MediumContent>

</template>

<script setup lang="ts">
import NormalContent from "@/components/Card/NormalContent/NormalContent.vue";
import SmallContent from "@/components/Card/SmallContent/SmallContent.vue";
import MediumContent from "@/components/Card/MediumContent/MediumContent.vue";
</script>

<style lang="scss">

</style>
