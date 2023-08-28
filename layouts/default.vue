<template lang="pug">
.app
  AppHeader.app__header
  main.app__main.wrapper
    slot
  AppFooter.app__footer
</template>

<script setup>
import Header from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  link: []
})
</script>

<style lang="scss">
@import "../assets/scss/index";
.app {
  font-family: $ff-default;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    &--with-mb {
      margin-bottom: 100px;
    }
  }

  &__footer {
    margin: auto 0 0;
  }
}
</style>