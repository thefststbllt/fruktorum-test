<template lang="pug">
section.article-intro-block
  img.article-intro-block__picture(:src="blockData.image" :alt="blockData.title" width="541" height="580")
  .article-intro-block__title-field
    h1.article-intro-block__title {{ blockData.title }}
    .article-intro-block__info-wrapper
      span.article-intro-block__info-item
        IconClocks
        span.article-intro-block__info-text {{ blockData.reading_time + ' мин время чтения' }}
      span.article-intro-block__info-item
        IconEye
        span.article-intro-block__info-text {{ blockData.views_count + ' прочитали статью' }}
    p.article-intro-block__description {{ blockData.short_description }}
</template>

<script>
import IconClocks from '~/assets/icons/ui/icon-clocks.svg';
import IconEye from '~/assets/icons/ui/icon-eye.svg';

export default {
  name: 'ArticleIntroBlock',
  components: {
    IconClocks,
    IconEye
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const blockData = ref(props.data);

    return {
      blockData
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.article-intro-block {
  width: 100%;
  display: grid;
  grid-template-columns: 541px 1fr;
  gap: 30px;

  &__picture {
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 2px 220px 2px 2px;
  }

  &__title-field {
    height: min-content;
    align-self: center;
  }

  &__title {
    @include title-h1;
    margin: 0 0 30px;
  }

  &__info-wrapper {
    @include body2;
    color: $color-bali-hai;
    display: flex;
    flex-direction: column;
    margin: 0 0 50px;
  }

  &__info-item {
    display: flex;
    align-items: center;

    svg {
      margin: 0 8px 0 0;
    }

    &:not(:last-child) {
      margin: 0 0 4px;
    }
  }

  &__description {
    @include body1;
  }

  @media (max-width: $bp-1199) {
    grid-template-columns: 1fr;

    &__picture {
      align-self: end;
      border-radius: 2px 100px 2px 2px;
    }

    &__title-field {
      order: -1;
    }

    &__info-item {
      svg {
        height: 32px;
        width: 32px;
        margin: 0 16px 0 0;
      }
    }
  }

  @media (max-width: $bp-767) {
    &__title {
      word-break: break-word;
    }
  }
}
</style>