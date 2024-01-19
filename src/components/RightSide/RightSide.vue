<template>
<section class="right-side-content">
  <div class="right-side-social">
    <h2 class="right-side-social-title">Mes Réseaux <span>(contactez-moi)</span></h2>
    <div class="right-side-social-position">
      <NormalContent
          :imageUrl="'./src/assets/logo/logo_lkn.webp'"
          text="Yanis Belkadi"
          buttonText="Se connecter"
          buttonLink="https://www.linkedin.com/in/yanis-belkadi-746727209/"
      ></NormalContent>

      <NormalContent
          :imageUrl="'./src/assets/logo/logo_github.webp'"
          text="Yanis Belkadi"
          buttonText="Suivre"
          buttonLink="https://github.com/KingYano"
      ></NormalContent>

      <MediumContent
          :imageUrl="'./src/assets/logo/logo_arstation.webp'"
          :title="'YoungHotBlood'"
          :text="'@younghotblood'"
          :buttonText="'S\'abonner'"
          :buttonLink="'https://www.artstation.com/younghotblood'"
          :multipleImage="false"
          singleImageUrl="./src/assets/images/projects/image_arstation.webp"
      ></MediumContent>

      <MediumContent
          :imageUrl="'./src/assets/logo/logo_instagram.webp'"
          :title="'YoungHotBlood'"
          :text="'@youngh0tblood'"
          :buttonText="'Suivre'"
          :buttonLink="'https://www.instagram.com/youngh0tblood/'"
          :multipleImage="true"
          :imagesUrlFirst="'./src/assets/images/instagram/image_insta_01.webp'"
          :imagesUrlSecond="'./src/assets/images/instagram/image_insta_02.webp'"
          :imagesUrlThird="'./src/assets/images/instagram/image_insta_03.webp'"
          :imagesUrlFour="'./src/assets/images/instagram/image_insta_04.webp'"
      ></MediumContent>

      <SmallContent
          :isLink="true"
          :imageUrl="'./src/assets/logo/logo_mail.webp'"
          :text="'belkadi.yanis.l@gmail.com'"
          :textHref="'mailto:belkadi.yanis.l@gmail.com'"
      ></SmallContent>
    </div>
  </div>


    <LargeContent
        :isImage="true"
        :imageUrl="'./src/assets/images/image_test.png'"
        :imageAlt="'alt de l\'image'"
    ></LargeContent>

    <MediumProject
        :imageRightSide="true"
        :imageUrl="'./src/assets/logo.svg'"
        :title="'YoungHotBlood'"
        :text="'Create a quiz about the Netflix series Arcane with 8 questions to test fan knowledge with an Arcane-inspired aesthetic.'"
        :buttonText="'S\'abonner'"
        :buttonLink="'https://github.com/KingYano'"
        :singleImageUrl="'./src/assets/images/image_test.png'"
    ></MediumProject>

    <MediumProject
        :imageRightSide="false"
        :imageUrl="'./src/assets/logo.svg'"
        :title="'YoungHotBlood'"
        :text="'Create a quiz about the Netflix series Arcane with 8 questions to test fan knowledge with an Arcane-inspired aesthetic.'"
        :buttonText="'S\'abonner'"
        :buttonLink="'https://github.com/KingYano'"
        :singleImageUrl="'./src/assets/images/image_test.png'"
    ></MediumProject>
</section>
</template>

<script setup lang="ts">
  import NormalContent from "@/components/Card/NormalContent/NormalContent.vue";
  import SmallContent from "@/components/Card/SmallContent/SmallContent.vue";
  import MediumContent from "@/components/Card/MediumContent/MediumContent.vue";
  import LargeContent from "@/components/Card/LargeContent/LargeContent.vue";
  import MediumProject from "@/components/Card/MediumProject/MediumProject.vue";

  const props = defineProps({
    isOpen: Boolean,
    status: String,
  });
</script>

<style lang="scss">
  @import 'RightSide.scss';
</style>
