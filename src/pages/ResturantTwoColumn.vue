<template>
  <v-container>
    <v-breadcrumbs
      :items="items"
      class="pl-0 mt-12 mb-5 text-body-2"
    >
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
    <v-tabs
      v-model="tab"
      color="primary"
    >
      <v-tab
        value="Delivery"
        class="text-capitalize"
      >
        Delivery
      </v-tab>
      <v-tab
        value="Dining Out"
        class="text-capitalize"
      >
        Dining Out
      </v-tab>
      <v-tab
        value="Nightlife"
        class="text-capitalize"
      >
        Nightlife
      </v-tab>
      <v-spacer />
      <v-btn
        text="RESET"
        color="primary"
        @click="clear()"
      />
    </v-tabs>

    <v-card-text>
      <v-tabs-window
        v-model="tab"
      >
        <v-tabs-window-item
          v-for="item in tabName"
          :key="item"
          :value="item"
        >
          <v-row>
            <v-col
              cols="12"
              class="d-flex flex-row"
            >
              <div
                class="d-none d-md-flex flex-column "
                style="width: 280px;border-right: 1px solid #BDBDBD;"
              >
                <h4>Categories</h4>
                <div
                  v-for="label in labels"
                  :key="label"
                >
                  <v-checkbox
                    v-model="selectedCategories"
                    :label="label"
                    :value="label"
                    density="comfortable"
                    hide-details
                    style="height: 30px;"
                  />
                </div>
                <h4 class="mt-5">
                  Star
                </h4>
                <div
                  v-for="i in [5, 4, 3, 2, 1]"
                  :key="i"
                >
                  <v-checkbox
                    v-model="selectedStar"
                    :label="`${i}+`"
                    :value="i"
                    density="comfortable"
                    hide-details
                    style="height: 30px;"
                  />
                </div>
                <h4 class="mt-5">
                  Sort By
                </h4>
                <div>
                  <v-radio-group
                    v-for="radio in radios"
                    :key="radio"
                    v-model="selectedSortBy"
                    column
                    density="comfortable"
                    hide-details
                  >
                    <v-radio
                      color="red"
                      :label="radio"
                      :value="radio"
                    />
                  </v-radio-group>
                </div>
                <h4 class="mt-5">
                  Cost per person
                </h4>
                <div class="my-15 pl-4">
                  <v-range-slider
                    v-model="range"
                    step="10"
                    color="primary"
                    thumb-label="always"
                    width="180"
                    thumb-size="10"
                    track-size="2"
                  />
                </div>
              </div>
              
              <div class="px-10 px-md-0 px-lg-10 w-100">
                <v-col
                  cols="12"
                  class="d-md-none"
                >
                  <v-btn
                    prepend-icon="mdi-menu"
                    text="Categories"
                    color="primary"
                    @click="drawer = !drawer"
                  />
                  <v-navigation-drawer
                    v-model="drawer"
                    temporary
                  >
                    <div
                      class="d-flex flex-column"
                    >
                      <h4>Categories</h4>
                      <div
                        v-for="label in labels"
                        :key="label"
                      >
                        <v-checkbox
                          v-model="selectedCategories"
                          :label="label"
                          :value="label"
                          density="comfortable"
                          hide-details
                          style="height: 30px;"
                        />
                      </div>
                      <h4 class="mt-5">
                        Star
                      </h4>
                      <div
                        v-for="i in 5"
                        :key="i"
                      >
                        <v-checkbox
                          v-model="selectedStar"
                          :label="`${i}+`"
                          :value="i"
                          density="comfortable"
                          hide-details
                          style="height: 30px;"
                        />
                      </div>
                      <h4 class="mt-5">
                        Sort By
                      </h4>
                      <div>
                        <v-radio-group
                          v-for="radio in radios"
                          :key="radio"
                          v-model="selectedSortBy"
                          column
                          density="comfortable"
                          hide-details
                        >
                          <v-radio
                            color="red"
                            :label="radio"
                            :value="radio"
                          />
                        </v-radio-group>
                      </div>
                      <h4 class="mt-5">
                        Cost per person
                      </h4>
                      <div class="my-15 pl-4">
                        <v-range-slider
                          v-model="range"
                          step="10"
                          color="primary"
                          thumb-label="always"
                          width="180"
                          thumb-size="10"
                          track-size="2"
                        />
                      </div>
                    </div>
                  </v-navigation-drawer>
                </v-col>
                <v-col cols="12">
                  <h3 class="mb-5">
                    184 Delivery Restaurants in New York
                  </h3>
                </v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col
                      v-if="isEmpty"
                      cols="12"
                      class="text-center"
                    >
                      <h1 class="text-grey-lighten-1 text-h2 font-weight-medium my-15">
                        No products match your filter criteria
                      </h1>
                    </v-col>
                    <v-col
                      v-for="card in filteredCards"
                      :key="card"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <router-link
                        to="/FoodMenu"
                        class="text-decoration-none"
                      >
                        <Card
                          :src="card.img"
                          :title="card.title"
                          :star="card.star"
                          :price="`$${card.price}`"
                          :disc="card.discount"
                        />
                      </router-link>
                    </v-col>
                  </v-row>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-container>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
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
]);

const tab= ref('Delivery');
const tabName = ref([
  'Delivery',
  'Dining Out',
  'Nightlife'
])
const labels = ref([
  'sushi',
  'salad',
  'dessert'
]);
const radios = ref([
  'Prise',
  'A-Z',
  'Star'
]);
const range = ref([0,100]);

const cards = ref([
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Starbucks',category:'salad', star:4, price:'50',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Mughal Masala',category:'sushi', star:4.3, price:'75',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',title:'Starbucks',category:'salad', star:5, price:'95',discount:false},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',title:'Mughal Masala',category:'salad', star:3.4, price:'60',discount:true},
  {img:'https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg',title:'Red Chillies',category:'dessert', star:3.8, price:'100',discount:true},
  {img:'https://imgs.699pic.com/images/600/169/053.jpg!list1x.v2',title:'cookie',category:'dessert', star:4.4, price:'30',discount:false}
]);
const drawer = ref(false)
const selectedCategories = ref([]);
const selectedSortBy = ref('Prise')
const selectedStar = ref([]);
const isEmpty = ref(false)

// 依條件篩選商品
const filteredCards = computed(() => {
    const filtered = cards.value.filter(card => {
    const categoryMatches = selectedCategories.value.length === 0 || selectedCategories.value.includes(card.category)
    const starMatches = selectedStar.value.length === 0 || selectedStar.value.some(star => card.star >= star)
    const priceMatches = card.price >= range.value[0] && card.price <= range.value[1]
    return categoryMatches && starMatches && priceMatches;
  });

  if (selectedSortBy.value === 'Prise') {
    return filtered.sort((a, b) => a.price - b.price) // 價格排序 升序
  } else if (selectedSortBy.value === 'A-Z') {
    return filtered.sort((a, b) => a.title.localeCompare(b.title)); // 字符串比較
  } else if (selectedSortBy.value === 'Star') {
    return filtered.sort((a, b) => b.star - a.star) // 星星排序
  }
  return filtered;
});

const clear = () =>{
  selectedCategories.value = []
  selectedStar.value = []
  range.value = [0,100]
  selectedSortBy.value = 'Prise'
}
watch(filteredCards, (newFiltered) => { // 確認符合條件的商品是否為空
  if (newFiltered.length === 0) {
    isEmpty.value = true;
  } else {
    isEmpty.value = false;
  }
});
</script>
<style scoped>
::v-deep  .v-slider-thumb__label{
  height: 35px;
  width: 35px;
  background: #d23f57;
  border: 1px solid #d23f57;
  border-radius: 50% 50% 0 50%;
  transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg) !important;
}

::v-deep .v-slider-thumb__label::before {
  display: none;
  
}
::v-deep .v-slider-thumb__label div{
    transform:rotate(-45deg) !important;
  }
</style>