<template>
  <v-container>
    <v-breadcrumbs
      :items="items"
      class="pl-0 mt-12 mb-1 mb-md-2 text-body-2"
    >
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
    <v-row dense>
      <v-col
        cols="12"
        lg="6"
      >
        <v-img
          src="https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png"
          height="100%"
          cover
        />
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <v-row dense>
          <v-col
            v-for="img in imgs"
            :key="img"
            cols="6"
          >
            <v-img :src="img" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-row justify-space-between">
          <h1 class="mb-3">
            Starbucks
          </h1>
          <div class="d-flex align-content-center">
            <v-rating
              :model-value="5"
              density="compact"
              size="small"
              color="yellow-darken-2"
              readonly
            />
            <span class="text-body-2 pt-1">4.5 
              <span class="text-grey-lighten-1">(1004)</span>
            </span>
          </div>
        </div>
        
        <p class="text-third mb-3">
          Coffee, signature roasts, light bite, quick bite, fast foods
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-map-marker"
            size="x-small"
          />
          The Dorothy Ross Friedman Residence, NY, US -
          <router-link to="/FoodMenu">
            <span class="text-third">Show Map</span>
          </router-link> 
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-clock-outline"
            size="x-small"
          />
          <span class="text-primary"> Open Now </span>
          - Sun - Mon: 9am - 10pm
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-earth"
            size="x-small"
          />
          <router-link
            to="/FoodMenu"
            class="text-decoration-none"
          >
            <span class="text-third"> www.starbucks.com</span>
          </router-link>
        </p>
      </v-col>
    </v-row>
    <v-tabs
      v-model="tab"
      align-tabs="start"
      color="primary"
    >
      <v-tab
        value="option-1"
        class="text-capitalize"
      >
        Order Online
      </v-tab>
      <v-tab
        value="option-2"
        class="text-capitalize"
      >
        Book A Table
      </v-tab>
      <v-tab
        value="option-3"
        class="text-capitalize"
      >
        Reviews
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        value="option-1"
      >
        <!-- 大尺寸篩選 -->
        <div class="d-flex flex-row">
          <div
            class="d-none d-md-flex flex-column"
            style="width: 280px; border-right: 1px solid #BDBDBD;"
          >
            <v-btn
              v-for="(item, index) in category"
              :key="index"
              height="40"
              text
              variant="text"
              rounded="0"
              class=" text-left justify-start text-capitalize text-third"
              :class="{'selected': selectedIndex === index}"
              @click="filterByCategory(item, index)"
            >
              {{ item }}
            </v-btn>
          </div>


          
          <!-- 商品展示 -->
          <div class="w-100">
            <v-container>
              <div class="pa-5 d-md-none">
                <v-btn
                  prepend-icon="mdi-menu"
                  class="text-capitalize"
                  color="primary"
                  @click="drawer = !drawer"
                >
                  Categories
                </v-btn>
              </div>
              <h3 class="mb-3 pl-8">
                {{ selected }}
              </h3>
              <v-card
                v-for="product in filteredProducts"
                :key="product.title"
                class="pa-5 pt-0"
                variant="text"
              >
                <v-row>
                  <v-col
                    cols="12"
                    lg="10"
                  >
                    <v-row
                      class="d-flex flex-row mx-auto"
                    >
                      <v-col
                        cols="6"
                        sm="4"
                        md="4"
                        lg="3"
                        xl="2"
                      >
                        <v-img
                          :src="product.img"
                          width="150px"
                          height="150px"
                          class="rounded"
                          cover
                        />
                      </v-col>
                      <v-col
                        cols="6"
                        sm="6"
                        md="5"
                        lg="8"
                        xl="8"
                      >
                        <h4 class="mt-1">
                          {{ product.title }}(Full)
                        </h4>
                        <v-chip
                          density="compact"
                          size="small"
                          class="my-2"
                        >
                          {{ product.cate }}
                        </v-chip>
                        <div class="d-flex justify-content-center align-center">
                          <v-rating
                            :model-value="5"
                            density="compact"
                            size="x-small"
                            color="yellow-darken-2"
                            readonly
                          /> 
                          <span
                            style="line-height: 24px;font-size: 12px;"
                            class="ml-2 text-third"
                          >(57)</span>
                        </div>
                        <p
                          style="font-size: 12px;"
                          class="my-2"
                        >
                          <span
                            class="text-decoration-line-through"
                          >${{ product.price }}</span>
                          ${{ product.discount }}
                          <span class="text-primary">10% off</span>
                        </p>
                        <p
                          style="font-size: 12px;"
                          class="text-third"
                        >
                          (4 Pcs mutton in chicken keema gravy)
                        </p>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                        md="3"
                        lg="1"
                        class="my-auto"
                      >
                        <div>
                          <v-btn
                            variant="outlined"
                            color="primary"
                            class="mb-5 mb-sm-0"
                            :width="$vuetify.display.xs?'40px':''"
                            @click="addToCart(product)"
                          >
                            ADD +
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </div>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="option-2">
        <v-row class="my-3 flex-column flex-lg-row">
          <v-col
            cols="12"
            lg="6"
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="select"
                  density="compact"
                  label="Select Date"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="select"
                  density="compact"
                  label="Number Of Guests"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col
                v-for="label in labels"
                :key="label"
                cols="12"
                sm="6"
              >
                <v-text-field
                  :label="label"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  variant="flat"
                >
                  BOOK
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png"
              style="width: 385px;"
              class="mx-auto"
            />
          </v-col>
        </v-row>
      </v-tabs-window-item>
      <v-tabs-window-item value="option-3">
        <v-row>
          <v-col
            cols="12"
            lg="6"
          >
            <Comment>
              <template #img>
                <v-row class="d-flex flex-row my-2">
                  <v-col cols="6">
                    <v-img
                      src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png"
                    />
                  </v-col>
                </v-row>
              </template>
            </Comment>
            <div class="d-flex flex-row mt-5">
              <v-avatar size="small">
                <v-img
                  alt="John"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png"
                />
              </v-avatar>              
              <h4 class="ml-4 my-auto text-body-2 font-weight-medium">
                Emmet McDermott
              </h4>
            </div>
            <h4 class="font-weight-regular text-third my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
            </h4>
            <div class="d-flex flex-row mt-5">
              <v-avatar size="small">
                <v-img
                  alt="John"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png"
                />
              </v-avatar>              
              <h4 class="ml-4 my-auto text-body-2 font-weight-medium">
                Emmet McDermott
              </h4>
            </div>
            <h4 class="font-weight-regular text-third my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
            </h4>
            <v-divider class="mt-5" />
            <Comment
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/13.35cd907.jpg"
            />
            <Comment
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/9.19544e8.jpg"
            />
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png"
              class="mx-auto"
              style="width:500px;"
            />
          </v-col>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
  <!-- 小尺寸篩選 -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    style="position:fixed;height: 100%;"
  >
    <v-toolbar
      class="px-2 bg-white"
      density="comfortable"
    >
      <v-btn
        class="ml-auto"
        icon="mdi-close"
        @click="closeSidebar()"
      />
    </v-toolbar>
    <v-list-item
      v-for="(item, index) in category"
      :key="index"
      height="50"
      text
      variant="text"
      rounded="0"
      class=" text-left justify-start text-capitalize"
      :class="{'selected': selectedIndex === index}"
      @click="filterByCategory(item, index)"
    >
      {{ item }}
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import Comment from '@/components/Comment.vue'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useSnackbar } from 'vuetify-use-dialog'
const createSnackbar = useSnackbar()
const cartStore = useCartStore();
const addToCart = (product) => {
  cartStore.addItem(product);
  createSnackbar({
      text: '成功加入購物車',
      snackbarProps: {
        color: 'primary'
      }
    })
};
const items = ref([
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'New York',
    disabled: false,
    href: '/',
  },
  {
    title: 'Resturants',
    disabled: true
  }
])

const imgs = ref([
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png',
])

const products = ref([
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Starbucks',cate:'Recomended',price:150,discount:120},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Mughal Masala',cate:'DPB Special Combos',price:130,discount:110},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',title:'Salad',cate:'Chineese Starters',price:80,discount:70},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',title:'Mughal Masala',cate:'Chinese Main Course',price:68,discount:58},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg',title:'Red Chillies',cate:'Indian Main Course',price:70,discount:65},
  {img:'https://imgs.699pic.com/images/600/169/053.jpg!list1x.v2',title:'Cookie',cate:'Rice & Pulao',price:80,discount:60},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png',title:'Hamburger',cate:'Recomended',price:90,discount:85},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png',title:'Spaghetti',cate:'Pasta',price:40,discount:35},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png',title:'Pasta',cate:'Pasta',price:50,discount:45},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png',title:'Gnocchi',cate:'Pasta',price:55,discount:50},
  {img:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/329605/64d988a20911786c.jpg',title:'Birthday Cake',cate:'Desserts',price:70,discount:65},
  {img:'https://assets.blog.engoo.com/wp-content/uploads/sites/3/2017/10/08092749/shutterstock_1659922546.jpg',title:'Donburi',cate:'Rice & Pulao',price:75,discount:70},  
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hmcnCcm7eMlmevp9lsZYlPegFX6w60ZIpeGmXXizGy5S-9PYRTCMXkcBpoUTDhrHGYk&usqp=CAU',title:'Tomato beef soup',cate:'Soup & wonton',price:80,discount:75}
])
	
const tab = ref('option-1')
const category = ref([
  'Recomended',
  'Pasta',
  'DPB Special Combos',
  'Chineese Starters',
  'Chinese Main Course',
  'Indian Main Course',
  'Rice & Pulao',
  'Desserts',
  'Soup & wonton',
])
const select = ref([
  'Foo',
  'Bar',
  'Fizz',
  'Buzz'
])
const labels = ref([
  'First Name',
  'Last Name',
  'Email',
  'Phone'
])
const drawer =ref(false);
const filteredProducts = ref(products.value);
const selected =ref ('Recomended')
const selectedIndex =ref(null)


const filterByCategory = (category,index) => {
  filteredProducts.value = products.value.filter(
    product => product.cate.includes(category)
  )
  selected.value = category
  selectedIndex.value = index

};
const closeSidebar = () => {
  drawer.value = false;
};
</script>
<style scoped>
::v-deep .v-btn__overlay{
  background: #d23f57;
}
.selected {
  border-right: 3px solid #d23f57 ;
}
</style>