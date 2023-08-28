<template lang="pug">
div.article-page
  component(:is="useComponent(item.type)" v-for="item in pageBlocks.body" :data="item.data" class="article-page__section")
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from 'nuxt/app';
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
      content: pageContent
    }
  ],
  link: []
})

</script>

<style lang="scss">
@import "../assets/scss/index";
.article-page {
  &__section {
    margin-bottom: 100px;

    &:last-of-type {
      margin-bottom: 200px;
    }
  }

  @media(max-width: $bp-1023) {
    &__section {
      margin-bottom: 50px;

      &:last-of-type {
        margin-bottom: 100px;
      }
    }
  }
}
</style>