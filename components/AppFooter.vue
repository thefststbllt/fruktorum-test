<template lang="pug">
footer.app-footer
  .app-footer__wrapper.wrapper
    .app-footer__main-info
      .app-footer__about
        NuxtLink(class="app-footer__logo-link" to="/")
          Logo.app-footer__logo
        p.app-footer__description
          | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения
          | и актуальные тенденции, раскрывая мир эстетики и креативности
      .app-footer__socials
        span.app-footer__email
          span.app-footer__email-label email
          a(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
        ul.app-footer__socials-list
          li(v-for="item in socialLinks")
            a(:href="item.src")
              component(:is="item.icon")
    SubscribeFormBlock.app-footer__form
</template>

<script>
import Logo from '~/assets/icons/logo-test-blog.svg';
import IconFacebook from '~/assets/icons/socials/icon-facebook.svg';
import IconVk from '~/assets/icons/socials/icon-vk.svg';
import IconInsta from '~/assets/icons/socials/icon-insta.svg';
import IconTelegram from '~/assets/icons/socials/icon-telegram.svg';
import SubscribeFormBlock from './SubscribeFormBlock.vue'

export default {
  name: 'AppFooter',
  components: {
    Logo,
    IconFacebook,
    IconVk,
    IconInsta,
    IconTelegram,
    SubscribeFormBlock
  },
  setup() {
    const socialLinks = [
      {
        src: 'facebook.com',
        icon: IconFacebook
      },
      {
        src: 'vk.com',
        icon: IconVk
      },
      {
        src: 'instagram.com',
        icon: IconInsta
      },
      {
        src: 'telegram.org',
        icon: IconTelegram
      }
    ];

    return {
      socialLinks
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.app-footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid $color-bali-hai;
  padding: 50px 0 0;

  &__main-info {
    display: grid;
    grid-template-columns: 1fr 312px;
    margin: 0 0 70px;
  }

  &__about {
    @include body2;
    color: $color-bali-hai;
    width: 430px;
  }

  &__logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content;
    margin: 0 0 20px;
  }

  &__description {
    @include body2;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__email {
    @include body2($ff-side-font);
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
  }

  &__email-label {
    @include body2;
    color: $color-bali-hai;
    margin: 0 0 2px;
  }

  &__socials-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: min-content;
      border-radius: 50%;
    }
  }

  @media(max-width: $bp-1199) {
    &__main-info {
      grid-template-columns: 1fr 1fr;
    }

    &__socials {
      align-items: flex-end;
      text-align: end;
    }

    a {
      max-width: 100%;
      word-break: break-word;
    }
  }

  @media(max-width: $bp-1023) {
    & .app-footer__wrapper {
      width: 100%;
    }

    &__main-info {
      grid-template-columns: 1fr;
      width: 768px;
      margin-left: auto;
      margin-right: auto;
    }

    &__about {
      margin: 0 0 70px;
      width: 100%;
    }

    &__description {
      word-break: break-word;
      width: 100%;
    }

    &__logo {
      width: 200px;
      height: auto;
    }

    &__socials {
      align-items: flex-start;
      text-align: start;
    }
  }

  @media(max-width: $bp-1023) {
    &__socials-list {
      svg {
        width: 45px;
        height: 45px;
      }
    }
  }

  @media(max-width: $bp-767) {
    &__logo-link {
      margin-left: auto;
      margin-right: auto;
    }

    &__about {
      text-align: center;
    }

    &__main-info {
      width: calc(100% - 40px);
    }

    &__socials {
      width: 100%;
      align-items: center;
    }

    &__email {
      word-break: break-word;
      align-items: center;
      margin: 0 0 50px;
    }

    &__email-label {
      margin: 0 0 10px;
    }

    &__socials-list {
      svg {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>