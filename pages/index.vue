<template lang="pug">
div.app__main-inner.main-block.wrapper
  h1.visually-hidden Главная страница
  component(:is="useComponent(item.type)" v-for="item in pageBlocks.body" :data="item.data" class="main-block__item")
</template>

<script setup>
import { useFetch } from 'nuxt/app';
import { useRoute } from 'vue-router';
import usePageData from '../composables/usePageData';
import useComponent from '../composables/useComponent';
import { API_PATH } from '../utils/variables';

const route = useRoute();
const { data } = await useFetch(API_PATH + route.path);
const pageBlocks = ref(data.value);
const { pageTitle, pageName, pageContent } = usePageData(data.value.meta);

useHead({
  title: pageTitle,
  meta: [
    {
      name: pageName,
      content: pageContent,
    }
  ],
})

</script>

<style lang="scss">
.main-block {
  &__item {
    width: 100%;
    .article-list-block__title {
      visibility: hidden;
      position: absolute;
    }
  }
}
</style>