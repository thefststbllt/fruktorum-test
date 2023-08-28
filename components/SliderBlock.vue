<template lang="pug">
.slider-block
  Swiper.slider-block__wrapper(:loop="true" :modules="swiperModules" :navigation="navigationOpt" :pagination="paginationOpt")
    SwiperSlide.slider-block__item(v-for="(slide, idx) in blockData")
      img.slider-block__image(:src="slide" :alt="'Слайд ' + (idx+1)")
    .swiper-button-prev.slider-block__btn.slider-block__btn--prev
    .swiper-button-next.slider-block__btn.slider-block__btn--next
</template>


<script>
export default {
  name: 'SliderBlock',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const blockData = ref(props.data);
    const swiperModules = [SwiperNavigation, SwiperPagination];
    const navigationOpt = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    const paginationOpt = {
      horizontalClass: 'swiper-pagination',
      type: 'fraction'
    }

    return {
      blockData,
      swiperModules,
      navigationOpt,
      paginationOpt
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.slider-block {
  width: 100%;

  .swiper {
    width: 100%;
    padding: 0 0 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: block;
    width: 60px;
    height: 60px;
    background-color: $color-nero;
    border-radius: 2px;
    position: absolute;
    top: calc(50% - 30px);

    &::before,
    &::after {
      color: $color-gainsboro;
      font-size: 20px;
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 5px);
    }

    .swiper-button-next {
      &::after {
        left: unset;
        right: calc(50% - 5px);
      }
    }
  }

  .swiper-pagination {
    @include body1;
    bottom: 0;
  }

  @media (max-width: $bp-1367) {
    &__image {
      width: $vp-1024;
    }
  }

  @media (max-width: $bp-1199) {
    &__image {
      width: $vp-768;
    }
  }

  @media (max-width: $bp-1023) {
    .swiper-button-prev,
    .swiper-button-next {
      background-color: transparent;
      border-radius: 50%;
      box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.5);
      top: calc(50% - 30px);
      transition: $tr-default;

      &::before,
      &::after {
        color: $color-free-speech-blue;
        font-size: 30px;
        top: calc(50% - 15px);
        left: calc(50% - 10px);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        transition: $tr-default;

        &::before,
        &::after {
          color: $color-nero;
        }
      }

      .swiper-button-next {
        &::after {
          left: unset;
          right: calc(50% - 10px);
        }
      }
    }

    &__image {
      width: $vp-640;
    }
  }

  @media (max-width: $bp-767) {
    &__image {
      width: 100%;
    }
  }
}
</style>