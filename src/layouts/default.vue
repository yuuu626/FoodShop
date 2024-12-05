<template>
  <Navbar
    v-if="showNavbar"
  />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
  <v-btn
    icon="mdi-chevron-up"
    color="primary"
    class="position-fixed"
    style="right: 16px;bottom: 16px;"
    size="small"
    elevation="5"
    @click="scrollTo()"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
const route = useRoute();
const scrollTo = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const showNavbar = ref(true);
const handleScroll = () => {
  if (route.path === '/'){
    showNavbar.value = window.scrollY > window.innerHeight / 2;
  }else{
    showNavbar.value = true
  }
}

watch(()=> route.path,
(newPath)=>{
  if(newPath === '/'){
    showNavbar.value = false
  }else {
    showNavbar.value = true
  }
})
onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll);
    handleScroll()
  }
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>
<style scoped>

</style>