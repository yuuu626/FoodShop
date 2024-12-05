<template>
  <div
    class="d-flex flex-row mt-5"
    v-bind="$attrs"
  >
    <v-avatar size="large">
      <v-img
        alt="John"
        :src="props.src"
      />
    </v-avatar>
    <div class="ml-5">
      <h4>Abriella Bond</h4>
      <p class="text-body-2 text-third">
        2 Reviews, 9 Followers
      </p>
    </div>
  </div>
    
  <div class="d-flex align-content-center my-1">
    <v-rating
      :model-value="5"
      density="compact"
      size="x-small"
      color="yellow-darken-2"
      readonly
    />
    <p class="text-body-2 font-weight-bold pt-1 ml-2">
      4.0 
      <span class="text-grey-lighten-1 font-weight-regular">3 Days Ago</span>
    </p>
  </div>
  <h4 class="font-weight-regular text-third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
  </h4>
  <slot name="img" />
  <div class="my-4">
    <span class="text-third text-body-2">
      4 Likes, 2 Comments
    </span>
  </div>
  <div class="mb-5">
    <v-btn
      prepend-icon="mdi-thumb-up-outline"
      size="x-small"
      variant="text"
      text="Like"
      color="third"
    />
    <v-btn
      prepend-icon="mdi-comment-text-outline"
      size="x-small"
      variant="text"
      text="Comment"
      color="third"
    />
  </div>
  <v-divider />
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  src:{
    type:String,
    default:'https://foodhub-nuxt.vercel.app/_nuxt/img/8.38098d6.png'
  }
})
</script>