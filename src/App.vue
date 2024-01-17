<template>
  <NormalContent
    :imageUrl="'./src/assets/logo.svg'"
    :text="'Yanis Belkadi'"
    :buttonText="'Se connecter'"
    :buttonLink="'https://github.com/KingYano'"
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
      :buttonLink="'https://github.com/KingYano'"
      :multipleImage="true"
      :singleImageUrl="'./src/assets/images/image_test.png'"
      :imagesUrlFirst="'./src/assets/images/image_test.png'"
      :imagesUrlSecond="'./src/assets/images/image_test.png'"
      :imagesUrlThird="'./src/assets/images/image_test.png'"
      :imagesUrlFour="'./src/assets/images/image_test.png'"
  ></MediumContent>

  <LargeContent
      :isImage="true"
      :imageUrl="'./src/assets/images/image_test.png'"
      :imageAlt="'alt de l\'image'"
  ></LargeContent>

</template>

<script setup lang="ts">
import NormalContent from "@/components/Card/NormalContent/NormalContent.vue";
import SmallContent from "@/components/Card/SmallContent/SmallContent.vue";
import MediumContent from "@/components/Card/MediumContent/MediumContent.vue";
import LargeContent from "@/components/Card/LargeContent/LargeContent.vue";
</script>

<style lang="scss">

</style>
