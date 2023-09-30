<template>
  <div class="container">
    <h1 class="text-h5">Корзина</h1>
    <!-- Отображение добавленных товаров -->
    <div class="row q-col-gutter-lg">
      <div
          class="col-3"
          v-for="(item, index) in cart"
          :key="index"
      >
        <CartItem
            :item="item"
            @increase="increaseItemCount(index)"
            @decrease="decreaseItemCount(index)"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import {ref, onMounted} from "vue";
import axios from "axios";

const  cart = ref([]) // Здесь будет храниться список добавленных товаров

// Увеличение количества товара
function increaseItemCount(index) {
  cart.value[index].count++;
}

// Уменьшение количества товара
function decreaseItemCount(index) {
  if (cart.value[index].count > 1) {
    cart.value[index].count--;
  } else {
    // Если количество достигло 1, удалите товар из корзины
    cart.value.splice(index, 1);
  }
}

async function getData() {
  try {
    const response = await axios.get('/api/configurations')
    cart.value = response.data
  }
  catch (e) {
    console.error(e)
    cart.value = []
  }
}

onMounted(async () => {
  await getData()
})
</script>

<style scoped>

</style>