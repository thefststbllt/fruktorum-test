<template lang="pug">
section.text-block(v-html="blockData")
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TextBlock',
  props: {
    data: {
      type: String,
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

.text-block {
  @include body1;
  width: 66%;
  margin-left: auto;
  margin-right: auto;

  h2 {
    @include title-h2;
    margin: 0 0 50px;
  }

  p {
    &:not(:last-of-type) {
      margin: 0 0 15px;
    }

    &:last-of-type {
      margin: 20px 0 0;
    }
  }

  ul {
    padding: 0 0 0 115px;
    li {
      display: flex;
      position: relative;
      padding: 0 0 0 20px;

      &::before {
        @include pseudoEl($color-nero, 8px, 1px, 45deg, true, 4px);
      }
    }
  }

  blockquote {
    margin: 40px 0 0;
    padding: 0 0 0 116px;
    position: relative;

    &::before {
      @include pseudoEl(transparent, 80px, 0, 0deg, true, 50%);
      background: url("/assets/icons/ui/icon-quotes.svg") no-repeat;
    }

    p,
    p:last-of-type {
      @include body1(true);
      margin: 0;
    }

    footer {
      @include body2;
      color: $color-bali-hai;
      margin: 20px 0 0;
      word-break: normal;
      white-space: normal;
    }
  }
  @media(max-width: $bp-1199) {
    width: 80%;
  }

  @media(max-width: $bp-1023) {
    width: 100%;
  }
}

</style>