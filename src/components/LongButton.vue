<template>
  <v-btn
    class="w-100 text-white my-2 text-capitalize font-weight-regular"
    :color="color"
  >
    {{ props.text }}
  </v-btn>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text:{
      type:String,
      default: 'Login'
  },
  color:{
      type:String,
      default:'primary'
  }
})
</script>