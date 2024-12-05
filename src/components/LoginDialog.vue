<template>
  <v-dialog
    max-width="450"
  >
    <v-card
      class="d-flex flex-column"
    >
      <v-container class="py-5 px-8">
        <div class="mt-2 mb-5 text-center">
          <h3>Welcome To Ecommerce</h3>
          <h5>Log in with email & password</h5>
        </div>
        <p class="text-body-2">
          Email or Phone Number
        </p>
        <v-text-field
          placeholder="example@mail"
          variant="outlined"
          density="compact"
        />
        <p class="text-body-2">
          Password
        </p>
        <v-text-field
          placeholder="example@mail"
          variant="outlined"
          density="compact"
        />
        <LongButton />
        <div class="d-flex align-center px-15">
          <v-divider />
          <span class="mx-4">on</span>
          <v-divider />
        </div>
        <LongButton
          color="indigo-darken-1"
          prepend-icon="mdi-facebook"
          text="Continue With Facebook"
        />
        <LongButton
          color="blue-darken-1"
          prepend-icon="mdi-google"
          text="Continue With Google"
        />
        <div class="text-center text-body-2 mt-2 mb-7">
          Don't have account? 
          <span class="text-decoration-underline">Sign Up</span>
        </div>
      </v-container>
      <div class="w-100 bg-second text-center pa-5">
        <span class="text-third">Forgot Your Password</span>
        <span class="mx-2 text-decoration-underline">Reset It</span>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup>

</script>