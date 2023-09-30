<template>
  <div class="row column">

    <q-img
        src="https://ir.ozone.ru/s3/multimedia-f/c1000/6558080439.jpg"
        :ratio="10/+parseInt(item.selectedDrinkCount)"
        style="height: 200px; background-position: center; background-size: contain;"
    />

    <p>Размер: {{ item.size }}</p>
    <p>Количество напитков: {{ item.drinkCount }}</p>
    <p>Количество: {{ item.count }}</p>


    <div class="row justify-between">
      <q-btn
          class="col-5"
          color="negative"
          @click="decrease"
      >
        -
      </q-btn>
      <q-btn
          class="col-5"
          color="positive"
          @click="increase"
      >
        +
      </q-btn>
    </div>
  </div>
</template>

<script setup>
defineProps(
    {
      item: Object, // Объект товара в корзине
    },
)
const emit = defineEmits(['increase', 'decrease'])
function increase() {
  emit('increase'); // Известить родительский компонент об увеличении количества
}
function decrease() {
  emit('decrease'); // Известить родительский компонент об уменьшении количества
}
</script>

<style scoped>

</style>