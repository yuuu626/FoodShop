<template>
  <v-toolbar
    class="position-fixed top-0 bg-white"
    style="z-index: 1005;"
    :class="{'shadow': scroll}"
  >
    <v-container class="d-flex align-center">
      <div class="d-flex">
        <router-link to="/">
          <v-avatar
            size="large"
          >
            <v-img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" />
          </v-avatar>
        </router-link>
        <div
          class="flex-grow-1 rounded bg-white border-sm ms-8 my-auto d-none d-md-flex"
        >
          <div
            class="d-flex align-center ps-5 text-third"
          >
            <v-icon icon="mdi-map-marker" /> 
            <span class="me-2">New York</span>
          </div> 
          <v-btn
            height="38px"
            rounded="0"
            variant="flat"
          >
            <v-icon
              icon="mdi-crosshairs-gps"
              color="third"
            />
          </v-btn>
          <v-text-field
            width="20vw"
            placeholder="Search for restaurant"
            density="compact"
            hide-details
            single-line
            variant="plain"
          />
          <v-btn
            icon="mdi-magnify"
            height="40px"
            color="third"
            elevation="0"
            size="small"
            rounded="0"
          />
        </div>
      </div>
      <v-spacer />
      <div>
        <v-btn
          v-if="$vuetify.display.xs"
          class="bg-transparent"
          icon="mdi-account-circle-outline"
          variant="flat"
          size="large"
          rounded="0"
          @click=" login = !login"
        />
        <v-btn
          v-else
          class="bg-transparent"
          prepend-icon="mdi-account-circle-outline"
          variant="flat"
          :text="!$vuetify.display.xs ? 'ACCOUNT' : ''"
          size="large"
          @click=" login = !login"
        />
        <v-btn
          stacked
          class="bg-transparent"
          variant="flat"
          height="44"
          @click=" cart = !cart"
        >
          <v-badge
            color="error"
            :content="cartStore.cartItemCount"
          >
            <v-icon>
              mdi-cart-outline
            </v-icon>
          </v-badge>
        </v-btn>
        <v-btn
          class="bg-transparent"
          icon="mdi-menu"
          variant="flat"
          rounded="0"
          size="small"
          @click=" drawer = !drawer"
        />
      </div>
    </v-container>
  </v-toolbar>
  <LoginDialog v-model="login" />
  <!-- 側邊欄 -->
  <SideBar v-model="drawer" />
  <CartSidebar v-model="cart" />
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const drawer = ref(false)
const login = ref(false)
const cart = ref(false)
const scroll = ref(false);
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const handleScroll = () => {
  if (window.scrollY > 64) { // 滾動超過64px
    scroll.value = true;
  } else {
    scroll.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.v-toolbar.shadow{
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
}
</style>