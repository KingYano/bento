<template>
<section class="portfolio-section-content">
  <div class="portfolio-section-social">
    <h2 class="portfolio-section-social-title">Mes Réseaux<span> (contactez-moi)</span></h2>
    <div class="portfolio-section-social-cards">
      <NormalContent
          :imageUrl="imageLogoLkn"
          imageAlt="Logo Linkedin"
          text="Yanis Belkadi"
          buttonText="Se connecter"
          buttonLink="https://www.linkedin.com/in/yanis-belkadi-746727209/"
      ></NormalContent>

      <NormalContent
          :imageUrl="imageLogoGit"
          imageAlt="Logo Github"
          text="Yanis Belkadi"
          buttonText="Suivre"
          buttonLink="https://github.com/KingYano"
      ></NormalContent>

      <MediumContent
          :imageUrl="imageLogoArt"
          imageAlt="Logo Artstation"
          title="YoungHotBlood"
          text="@younghotblood"
          buttonText="S'abonner"
          buttonLink="https://www.artstation.com/younghotblood"
          :multipleImage="false"
          :singleImageUrl="imageSocialArt"
          singleImageAlt="Image de profile Arstation"
      ></MediumContent>

      <MediumContent
          :imageUrl="imageLogoInsta"
          imageAlt="Logo Instagram"
          title="YoungHotBlood"
          text="@youngh0tblood"
          buttonText="Suivre"
          buttonLink="https://www.instagram.com/youngh0tblood/"
          multipleImage
          :imagesUrlFirst="imageInstaFirst"
          :imagesUrlSecond="imageInstaSecond"
          :imagesUrlThird="imageInstaThree"
          :imagesUrlFour="imageInstaFour"
      ></MediumContent>

      <SmallContent
          isLink
          :imageUrl="imageLogoMail"
          imageAlt="Logo mail"
          text="belkadi.yanis.l@gmail.com"
          textHref="mailto:belkadi.yanis.l@gmail.com"
      ></SmallContent>
    </div>
  </div>

  <div class="portfolio-section-projects">
    <h2 class="portfolio-section-projects-title">Mes projets</h2>
    <div class="portfolio-section-projects-cards">
      <MediumProject
          imageRightSide
          title="Ghost Runner"
          text="Jeu de course où les joueurs contrôlent un fantôme pour esquiver des obstacles avec une vitesse et une difficulté croissantes, présentant des visuels de Bedimcode et des graphiques générés par l\'IA de DALL·E 3."
          buttonText="Ouvrir le projet"
          buttonLink="https://github.com/KingYano/halloween_game"
          :singleImageUrl="imageProjectGhost"
          singleImageAlt="Image de la page d'accueil du projet Ghost Runner"
      ></MediumProject>

      <MediumProject
          :imageRightSide="false"
          title="Arcane Quizz"
          text="Créez un quiz sur la série Netflix Arcane avec 8 questions pour tester les connaissances des fans avec une esthétique inspirée d\'Arcane."
          buttonText="Ouvrir le projet"
          buttonLink="https://github.com/KingYano/arcane-quizz"
          :singleImageUrl="imageProjectArcane"
          singleImageAlt="Image de la page d'accueil du projet Arcane"
      ></MediumProject>
    </div>
  </div>

  <div class="portfolio-section-map">
    <h2 class="portfolio-section-map-title">Localisation</h2>
    <div class="portfolio-section-map-cards">
      <LargeContent
          :isImage="false"
      ></LargeContent>
    </div>
  </div>

  <div class="portfolio-section-copyright">
    <p>©Yanis Belkadi - 2024</p>
    <p>V◦1.01</p>
  </div>
</section>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import NormalContent from "@/components/Card/NormalContent/NormalContent.vue";
  import SmallContent from "@/components/Card/SmallContent/SmallContent.vue";
  import MediumContent from "@/components/Card/MediumContent/MediumContent.vue";
  import LargeContent from "@/components/Card/LargeContent/LargeContent.vue";
  import MediumProject from "@/components/Card/MediumProject/MediumProject.vue";

  import imageLogoLknSrc from '@/assets/logo/logo_lkn.webp';
  import imageLogoGitSrc from '@/assets/logo/logo_github.webp';
  import imageLogoArtSrc from '@/assets/logo/logo_arstation.webp';
  import imageLogoInstaSrc from '@/assets/logo/logo_instagram.webp';
  import imageLogoMailSrc from '@/assets/logo/logo_mail.webp';

  import imageSocialArtSrc from '@/assets/images/projects/image_arstation.webp';
  import imageInstaFirstSrc from '@/assets/images/instagram/image_insta_01.webp';
  import imageInstaSecondSrc from '@/assets/images/instagram/image_insta_02.webp';
  import imageInstaThreeSrc from '@/assets/images/instagram/image_insta_03.webp';
  import imageInstaFourSrc from '@/assets/images/instagram/image_insta_04.webp';

  import imageProjectArcaneSrc from '@/assets/images/projects/image_arcane.webp';
  import imageProjectGhostSrc from '@/assets/images/projects/image_halloween.webp';

  import imageMapSrc from '@/assets/images/map/image_map.png';

  const props = defineProps({
    isOpen: Boolean,
    status: String,
  });

  const imageLogoLkn = ref(imageLogoLknSrc);
  const imageLogoGit = ref(imageLogoGitSrc);
  const imageLogoArt = ref(imageLogoArtSrc);
  const imageLogoInsta = ref(imageLogoInstaSrc);
  const imageLogoMail = ref(imageLogoMailSrc);

  const imageSocialArt = ref(imageSocialArtSrc);
  const imageInstaFirst = ref(imageInstaFirstSrc);
  const imageInstaSecond = ref(imageInstaSecondSrc);
  const imageInstaThree = ref(imageInstaThreeSrc);
  const imageInstaFour = ref(imageInstaFourSrc);


  const imageProjectArcane = ref(imageProjectArcaneSrc);
  const imageProjectGhost = ref(imageProjectGhostSrc);
  const imageMap = ref(imageMapSrc);



</script>

<style lang="scss">
  @import 'PortfolioSection';
</style>
