<template lang="pug">
section.article-list-block
  h2.article-list-block__title {{ title }}
  ul.article-list-block__list
    li.article-list-block__item(v-for="item in articles")
      ArticleCard(class="article-list-block__card" :img-path="item.image" :title="item.title" :article-link="item.link")
</template>

<script>
import ArticleCard from '/components/ArticleCard';
import { useRoute } from 'vue-router';

export default {
  name: 'ArticleListBlock',
  components: { ArticleCard },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { title, articles } = props.data;
    const route = useRoute();

    return {
      title,
      articles,
      route
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.article-list-block {
  margin-bottom: 200px;

  &__title {
    @include title-h2;
    margin: 0 0 50px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: min-content;
    margin: 0 auto;
  }

  &__item {
    width: 100%;
    display: block;
  }

  @media(max-width: $bp-1367) {
    &__title {
      margin: 0 0 50px 60px;
    }

    &__list {
      width: 884px;
      display: flex;
      flex-wrap: wrap;
      gap: 0;
    }

    &__item {
      width: min-content;

      &:nth-child(2n + 1) {
        margin-right: 30px;
      }

      &:not(:nth-child(-n+2)) {
        margin-top: 30px;
      }
    }
  }

  @media(max-width: $bp-1199) {
    &__title {
      margin: 0 0 50px;
    }

    &__list {
      display: grid;
      gap: 30px;
      grid-template-columns: 1fr 1fr;
    }

    &__item {
      width: 100%;

      &:nth-child(2n + 1),
      &:not(:nth-child(-n+2)) {
        margin-right: 0;
      }
    }
  }

  @media(max-width: $bp-1023) {
    &__list {
      width: 100%;
      gap: 100px;
      grid-template-columns: 1fr;
    }
  }

  @media(max-width: $bp-767) {
    &__list {
      gap: 70px;
    }
  }
}
</style>