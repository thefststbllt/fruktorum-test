<template lang="pug">
section.image-block
  h2.visually-hidden Блок картинка
  img.image-block__picture(:src="blockData.src" :alt="blockData.caption")
  span(v-if="blockData.caption").image-block__caption {{ blockData.caption }}
</template>

<script>
export default {
  name: 'ImageBlock',
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

.image-block {
  display: flex;
  flex-direction: column;

  &__picture {
    width: 100%;
    border-radius: 2px 220px 2px 2px;
  }

  &__caption {
    @include body2;
    color: $color-bali-hai;
    align-self: end;
    text-align: end;
    margin: 15px 0 0;
  }

  @media(max-width: $bp-1199) {
    &:nth-of-type(2n + 1) &__picture {
      border-radius: 100px 2px 100px 2px;
    }

    &:nth-of-type(2n) &__picture {
      border-radius: 2px 100px 2px 100px;
    }
  }
}
</style>