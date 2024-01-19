<template>
<section class="right-side-content">
  <div class="right-side-social">
    <h2 class="right-side-social-title">Mes Réseaux<span> (contactez-moi)</span></h2>
    <div class="right-side-social-cards">
      <NormalContent
          imageUrl="./src/assets/logo/logo_lkn.webp"
          text="Yanis Belkadi"
          buttonText="Se connecter"
          buttonLink="https://www.linkedin.com/in/yanis-belkadi-746727209/"
      ></NormalContent>

      <NormalContent
          imageUrl="./src/assets/logo/logo_github.webp"
          text="Yanis Belkadi"
          buttonText="Suivre"
          buttonLink="https://github.com/KingYano"
      ></NormalContent>

      <MediumContent
          imageUrl="./src/assets/logo/logo_arstation.webp"
          title="YoungHotBlood"
          text="@younghotblood"
          buttonText="S\'abonner"
          buttonLink="https://www.artstation.com/younghotblood"
          :multipleImage="false"
          singleImageUrl="./src/assets/images/projects/image_arstation.webp"
      ></MediumContent>

      <MediumContent
          imageUrl="./src/assets/logo/logo_instagram.webp"
          title="YoungHotBlood"
          text="@youngh0tblood"
          buttonText="Suivre"
          buttonLink="https://www.instagram.com/youngh0tblood/"
          :multipleImage="true"
          imagesUrlFirst="./src/assets/images/instagram/image_insta_01.webp"
          imagesUrlSecond="./src/assets/images/instagram/image_insta_02.webp"
          imagesUrlThird="./src/assets/images/instagram/image_insta_03.webp"
          imagesUrlFour="./src/assets/images/instagram/image_insta_04.webp"
      ></MediumContent>

      <SmallContent
          :isLink="true"
          imageUrl="./src/assets/logo/logo_mail.webp"
          text="belkadi.yanis.l@gmail.com"
          textHref="mailto:belkadi.yanis.l@gmail.com"
      ></SmallContent>
    </div>
  </div>

  <div class="right-side-projects">
    <h2 class="right-side-projects-title">Mes projets</h2>
    <div class="right-side-projects-cards">
      <MediumProject
          :imageRightSide="true"
          title="Ghost Runner"
          text="Jeu de course où les joueurs contrôlent un fantôme pour esquiver des obstacles avec une vitesse et une difficulté croissantes, présentant des visuels de Bedimcode et des graphiques générés par l\'IA de DALL·E 3."
          buttonText="Ouvrir le projet"
          buttonLink="https://github.com/KingYano/halloween_game"
          singleImageUrl="./src/assets/images/projects/image_halloween.webp"
      ></MediumProject>

      <MediumProject
          :imageRightSide="false"
          title="Arcane Quizz"
          text="Créez un quiz sur la série Netflix Arcane avec 8 questions pour tester les connaissances des fans avec une esthétique inspirée d\'Arcane."
          buttonText="Ouvrir le projet"
          buttonLink="https://arcane-quizz.netlify.app/"
          singleImageUrl="./src/assets/images/projects/image_arcane.webp"
      ></MediumProject>
    </div>
  </div>

  <div class="right-side-map">
    <h2 class="right-side-map-title">Localisation</h2>
    <div class="right-side-map-cards">
      <LargeContent
          :isImage="false"
          imageUrl="./src/assets/images/map/image_map.png"
          imageAlt="alt de l\'image"
          location="Paris ◦ France"
      ></LargeContent>
    </div>
  </div>

  <div class="right-side-copyright">
    <p>©Yanis Belkadi - 2024</p>
    <p>V◦1</p>
  </div>
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
