<template lang="pug">
div.article-card
  img.article-card__pic(width="427" height="320" :src="imgPath" :alt="title")
  h3.article-card__title {{ title }}
  Button(:className="'article-card__button'" text="Читать" :link="articleLink")
</template>

<script>
import Button from './Button';

export default {
  name: 'ArticleCard',
  components: { Button },
  props: {
    imgPath: {
      type: String
    },
    title: {
      type: String
    },
    articleLink: {
      type: String
    }
  },
  setup() {

  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.article-card {
  display: flex;
  flex-direction: column;
  width: 427px;
  height: 100%;

  &__pic {
    display: block;
    margin: 0 0 20px;
    border-radius: 2px;
    object-fit: cover;
  }

  &__title {
    @include title-h3;
    margin: 0 0 30px;
  }

  &__button {
    margin: auto 0 0;
    text-align: center;
  }

  @media(max-width: $bp-1023) {
    width: 100%;

    &__pic {
      width: 100%;
      height: 75%;
      object-fit: contain;
    }

    &__title {
      word-break: break-word;
    }

    &__button {
      margin: auto 0 0 auto;
    }
  }

  @media (max-width: $bp-767) {
    &__button {
      margin: 0;
      width: 100%;
      max-width: unset;
    }
  }
}

</style>