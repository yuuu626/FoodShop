<template>
  <div class="bg-image">
    <v-container>
      <div
        id="navbar"
        class="w-100 d-flex justify-content-center align-items-center mt-6"
      >
        <router-link to="/">
          <v-avatar
            size="large"
          >
            <v-img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" />
          </v-avatar>
        </router-link>
        <v-spacer />

        <v-btn
          style="color: white !important;"
          class="bg-transparent"
          prepend-icon="mdi-account-circle-outline"
          variant="flat"
          @click=" login = !login"
        >
          ACCOUNT
        </v-btn>
        <v-btn
          stacked
          class="bg-transparent"
          variant="flat"
          height="44"
          style="color: white !important;"
          @click=" cart = !cart"
        >
          <v-badge
            color="second"
            :content="cartStore.cartItemCount"
          >
            <v-icon>
              mdi-cart-outline
            </v-icon>
          </v-badge>
        </v-btn>
        <v-btn
          style="color: white !important;"
          class="bg-transparent"
          icon="mdi-menu"
          variant="flat"
          rounded="0"
          size="small"
          @click=" drawer = !drawer"
        />
      </div>
      
      <v-row class="text-center text-white mt-15">
        <v-col
          cols="12"
          xl="5"
          class="mx-auto"
        >
          <h1 class="text-h3 mx-5">
            Discover the best food & drinks in <span class="font-weight-bold">New York</span>
          </h1>
        </v-col>
        <v-col cols="12">
          <h2
            class="font-weight-regular"
            style="font-size: 20px;"
          >
            The meals you love, delivered with care
          </h2>
        </v-col>
        <v-col
          cols="12"
          lg="7"
          class="mx-auto"
        >
          <div class="d-flex rounded bg-white flex-wrap">
            <div class="d-flex align-center ps-5">
              <v-icon
                color="third"
                icon="mdi-map-marker"
              /> 
              <span class="me-10 text-third">New York</span>
            </div> 
            <v-btn
              prepend-icon="mdi-crosshairs-gps"
              height="48"
              rounded="0"
              variant="flat"
            >
              Locate me
            </v-btn>
            <v-text-field
              placeholder="Search for restaurant"
              density="comfortable"
              hide-details
              single-line
              rounded="0"
              class="flex-1 ps-5"
              variant="plain"
              style="width: 200px;"
            />
            <v-btn
              height="48"
              rounded="e-true s-0"
              color="#d23f57"
              elevation="0"
              class="text-capitalize text-h6 font-weight-regular"
            >
              Search
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="w-100 bg-second">
    <v-container>
      <v-row class="my-lg-12">
        <v-col
          v-for="card in cards.slice(0, 4)"
          :key="card"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <router-link
            to="/FoodMenu"
            class="text-decoration-none"
          >
            <Card
              :src="card.img"
              :sec="false"
              :desc="false"
              class="text-center "
            >
              <template #title>
                {{ card.title }}
              </template>
            </Card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div id="Collections">
    <v-container class="my-10">
      <v-row class="my-4">
        <v-col cols="12">
          <v-col cols="12">
            <v-row no-gutters>
              <v-col
                cols="12"
                md="10"
                lg="10"
              >
                <h2>Collections</h2>
                <div class="d-flex">
                  <h5 class=" text-grey-darken-1 font-weight-regular">
                    Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends
                  </h5>
                </div>
              </v-col>
              <v-col
                cols="12"
                md="2"
                lg="2"
                class="mt-md-auto"
              >
                <router-link
                  to="/"
                  class="text-decoration-none"
                >
                  <h4
                    style=" color:#d23f57;"
                    class="font-weight-regular text-md-end"
                  >
                    View all collections
                  </h4>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
        <v-col
          v-for="item in collectImg"
          :key="item"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <router-link to="/ResturantTwoColumn">
            <v-card rounded="lg">
              <v-img
                :src="item.img"
                class="position-relative"
              >
                <div class="position-absolute bottom-0 ma-4 text-white">
                  <h4>{{ item.title }}</h4>
                  <p class="text-body-2">
                    30 Places
                    <v-icon
                      icon="mdi-chevron-right"
                      size="small"
                    />
                  </p>
                </div>
              </v-img>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div
    id="BrowseByCuisine"
  >
    <v-container>
      <v-row class="mt-5 mb-15">
        <v-col cols="12">
          <h2>Browse By Cuisine</h2>
        </v-col>
        <v-col
          v-for="item in circleImage"
          :key="item"
          cols="12"
          sm="6"
          md="4"
          lg="2"
        >
          <router-link
            to="/FoodMenu"
            class="text-decoration-none"
          >
            <v-img
              :src="item.img"
              rounded="circle"
              height="150"
            />
            <p class="text-center font-weight-black text-third">
              {{ item.title }}
            </p>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div
    id="PopularNearYou"
  >
    <v-container>
      <v-row class="mt-5 mb-15">
        <v-col cols="12">
          <h2>Popular Near You</h2>
        </v-col>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <router-link
            to="/FoodMenu"
            class="text-decoration-none"
          >
            <Card
              :src="card.img"
              :title="card.title"
              :disc="card.discount"
            />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div
    id="contact"
    class="bg-second"
  >
    <v-container>
      <v-row class="mt-5 mb-15">
        <v-col
          cols="12"
          md="4"
        >
          <v-img
            src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png"
            class="mx-auto ml-md-auto me-md-0"
            style="width:170px"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
        >
          <div class="mx-5 mx-sm-10">
            <h1
              style="font-size: 40px;"
            >
              Get the Mobile App
            </h1>
            <p class="text-third text-body-1">
              We will send you a link, open it on your phone to download the app
            </p>
            <v-radio-group
              color="primary"  
              inline
              hide-details=""
            >
              <v-radio
                label="Email"
                value="radio-1"
              />
              <v-radio
                label="Phone"
                value="radio-2"
              />
            </v-radio-group>
            <div class="d-flex align-center w-xl-75">
              <v-text-field
                placeholder="Email"
                density="compact"
                bg-color="white"
                hide-details
                single-line
                rounded="s-true e-0"
                variant="outlined"
              />
              <v-btn
                height="40"
                rounded="e-true s-0"
                color="#d23f57"
                elevation="0"
              >
                Search
              </v-btn>
            </div>
            <p class="mt-4 mb-2 text-third">
              Download App from
            </p>
            <div class="d-flex flex-wrap">
              <div
                class="me-4 rounded-0"
              >
                <img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                >
              </div> 
              <div
                class="rounded-0"
              >
                <img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- 登入視窗 -->
  <LoginDialog v-model="login" />
  <!-- 側邊欄 -->
  <SideBar v-model="drawer" />
  <CartSidebar v-model="cart" />
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

const cards = ref([
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Starbucks',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Mughal Masala',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',title:'Woondal',discount:false},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',title:'Red Chillies',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',title:'Starbucks',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',title:'Mughal Masala',discount:false},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/21.eee29b5.jpg',title:'Woondal',discount:false},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg',title:'Red Chillies',discount:true}
])

const collectImg = ref([
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/5.8a5927f.png',title:'Most Searched of 2020'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.729f74b.png',title:'Best Openings of 2020'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/7.ea86fb7.png',title:'Trending This Week'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/8.d53c60b.png',title:'Best Of New York'}
])

const circleImage = ref([
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/9.1c1a4aa.png',title:'Italian'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png',title:'Chinesse'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png',title:'Japanesse'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png',title:'Indian'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/13.b85d0c1.png',title:'Thai Food'},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png',title:'Mexican'},
  ])
const drawer = ref(false)
const login = ref(false)
const cart = ref(false)
</script>
<style scoped>
.bg-image{
  width: 100%;
  height: 65vh;
  background: url(https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png);
  background-size: cover;
}
</style>