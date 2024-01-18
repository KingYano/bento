<template>
  <div class="badge-work" :class="isOpen ? 'badge-work-open' : 'badge-work-not-open'">
    <p class="badge-work-message">{{ status }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  isOpen: Boolean,
  status: String,
});
</script>

<style lang="scss">
  @import 'BadgeWork.scss';
</style>
