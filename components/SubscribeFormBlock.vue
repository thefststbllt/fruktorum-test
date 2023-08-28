<template lang="pug">
form.form
  h2.form__title Подпишись на рассылку
  label.form__field
    input(type="text" placeholder="Email" name="Email" autocomplete="on" required)
  Button(:class-name="'form__button'" text="Подписаться")
</template>

<script>
import Button from './Button';

export default {
  name: 'SubscribeFormBlock',
  components: {
    Button
  },
  props: {
    data: {}
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.form {
  display: flex;
  align-items: flex-end;
  background-color: $color-nero;
  padding: 27px 30px;
  border-radius: 2px;

  &__title {
    @include title-h3;
    color: white;
    align-self: center;
  }

  &__field {
    margin: 0 37px 0 auto;

    input {
      @include body1;
      color: $color-default-white;
      width: 353px;
      padding: 2px 8px;
      border-bottom: 1px solid $color-bali-hai;
      transition: $tr-default;

      &::placeholder {
        color: $color-bali-hai;
      }

      &:active,
      &:focus {
        border-color: $color-free-speech-blue;
        transition: $tr-default;
      }

      &:valid {
        border-color: $color-default-white;
      }
    }
  }

  @media(max-width: $bp-1367) {
    padding: 27px 60px;
  }

  @media(max-width: $bp-1199) {
    padding: 27px 30px;
  }

  @media(max-width: $bp-1023) {
    flex-direction: column;
    align-items: center;
    padding: 54px 40px;

    &__title {
      margin: 0 0 50px;
      text-align: center;
    }

    &__field {
      margin: 0;
      width: 60%;

      input {
        width: 100%;
        padding: 20px;
      }
    }

    &__button {
      margin: 50px 0 0 ;
    }
  }

  @media(max-width: $bp-767) {
    width: 100%;
    padding: 54px 20px;

    &__title {
      word-break: break-word;
    }

    &__field {
      width: 100%;

      input {
        width: 100%;
        padding: 20px;
      }
    }

    &__button {
      margin: 70px 0 0 ;
      width: 100%;
      max-width: unset;
    }
  }
}
</style>