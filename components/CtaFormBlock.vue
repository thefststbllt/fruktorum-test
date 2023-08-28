<template lang="pug">
section.cta-form-block
  NuxtImg(class="cta-form-block__picture" :src="'/images/image-form.jpg'" alt="Wide-smile-girl")
  h2.cta-form-block__title Стань участником проекта
  form.cta-form-block__form.form
    label.cta-form-block__form-field.form__field(v-for="item in formFields")
      input(:name="item.name" :placeholder="item.placeholder" autocomplete="on" required)
    Button(:class-name="'cta-form-block__button'" text="Присоединиться")
</template>

<script>
export default {
  name: 'CtaFormBlock',
  props: {
    data: {}
  },
  setup() {
    const formFields = [
      {
        name: 'name',
        placeholder: 'Имя'
      },
      {
        name: 'phone',
        placeholder: 'Телефон'
      },
      {
        name: 'email',
        placeholder: 'Email'
      }
    ];

    return {
      formFields
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.cta-form-block {
  display: grid;
  grid-template-columns: [startCLine] 1fr [middleCLine] 1fr [endCLine];
  grid-template-rows: [startRLine] min-content [middleRLine] 1fr [endRLine];
  column-gap: 60px;
  background-color: $color-nero;
  padding: 60px;
  border-radius: 2px;

  &__picture {
    grid-area: startRLine/ startCLine / endRLine/ middleCLine;
    align-self: center;
  }

  &__title {
    @include title-h2;
    max-width: 100%;
    color: $color-default-white;
    margin: 0 0 50px;
  }

  &__form {
    display: grid;
    padding: 0;
  }

  &__form-field {
    display: block;
    width: max-content;

    &:not(:last-of-type) {
      margin: 0 0 25px;
    }

    &:last-of-type {
      margin: 0 0 50px;
    }
  }

  @media(max-width: $bp-1367) {
    grid-template-columns: 1fr;

    &__picture {
      width: 100%;
      grid-area: unset;
      margin: 0 0 25px;
    }

    &__button {
      margin: 0 0 0 auto;
    }
  }

  @media(max-width: $bp-1199) {
    &__picture {
      margin: 0 0 50px;
    }

    &__form {
      align-items: center;
    }

    &__form-field {
      &:last-of-type {
        margin: 0;
      }
    }

    &__button {
      margin: 0 0 0 auto;
    }
  }

  @media(max-width: $bp-1023) {
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__form-field {
      width: 100%;

      &:last-of-type {
        margin: 0 0 75px;
      }
    }

    &__button {
      margin: 0;
      width: 100%;
      max-width: unset;
    }
  }

  @media(max-width: $bp-767) {
    &__picture {
      margin: 0 0 20px;
    }

    padding: 20px;
  }
}
</style>