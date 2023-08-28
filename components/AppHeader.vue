<template lang="pug">
header.app-header
  NuxtLink(to="/" )
    Logo.app-header__logo

</template>

<script>
import Logo from '~/assets/icons/logo-test-blog.svg';

export default {
  name: 'AppHeader',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import "../assets/scss/index";

.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin: 0 0 30px;

  @media(max-width: $bp-1023) {
    margin: 0 0 60px;

    &__logo {
      width: 200px;
      height: auto;
    }
  }

  @media(max-width: $bp-1023) {
    margin: 0 0 100px;
    }
  }
</style>