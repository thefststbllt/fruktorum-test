<template lang="pug">
button.button(:class="getButtonClass(link)" v-if="!link" type="button") {{ text }}
NuxtLink.button(:class="getButtonClass(link)" v-if="link" :to="link") {{ text }}
component(:is="")
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    },
    className: {
      type: String
    }
  },
  setup(props) {
    const getButtonClass = (isLink) => {
      if (isLink) {
        return 'button--black' + ' ' + props.className;
      }
      return 'button--default' + ' ' + props.className;
    }

    return {
      getButtonClass
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/index';

.button {
  @include body1();
  display: block;
  width: max-content;
  max-width: 400px;
  word-break: break-word;
  color: $color-default-white;
  text-decoration: none;
  padding: 10px 50px;
  border-radius: 2px;
  cursor: pointer;
  transition: $tr-default;

  &:hover {
    transition: $tr-default;
  }

  &--default {
    background-color: $color-free-speech-blue;

    &:hover {
      background-color: transparent;
      box-shadow: inset 0 0 1px 1px $color-free-speech-blue;
    }
  }

  &--black {
    background-color: $color-nero;

    &:hover {
      background-color: $color-free-speech-blue;
    }
  }

  @media(max-width: $bp-1023) {
    padding: 20px 60px;
  }
}
</style>