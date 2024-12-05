import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);  // 購物車的商品列表
    const cartItemCount = computed(()=>{ 
      return items.value.reduce((total, item) => total + item.quantity, 0) // 計算購物車內商品數量
    }) 
    
    const addItem = (product) => { // 加入購物車
      const existingProduct = items.value.find(item => item.title === product.title)
      if (existingProduct) {
        existingProduct.quantity += 1  // 已經存在，數量加 1
      } else {
        items.value.push({ ...product, quantity: 1 }) // 新增商品且數量設為1
      }
  };

  const removeItem = (productTitle) => { // 移除商品
    items.value = items.value.filter(
      item => item.title !== productTitle
    )
  };

  const updateQuantity = (productTitle, quantity) => { // 更新商品數量
    const product = items.value.find(
      item => item.title === productTitle
    )
    if (product) {
      product.quantity = quantity
    }
  };

  const totalPrice = computed(() => { // 購物車總價錢
    return items.value.reduce(
      (total, item) => total + item.discount * item.quantity, 0 // 初始 total 為 0
    )
  })


  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    totalPrice,
    cartItemCount
  };
});