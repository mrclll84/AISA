<template>
  <div>
    <label for="size">Размер кофемашины:</label>
    <select v-model="selectedSize" id="size">
      <option value="standard">Стандартный</option>
      <option value="large">Увеличенный</option>
    </select>

    <label for="drinkCount">Количество напитков:</label>
    <select v-model="selectedDrinkCount" id="drinkCount">
      <option value="6">6 напитков</option>
      <option value="8">8 напитков</option>
      <option value="12">12 напитков</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  selectedSize: String,
  selectedDrinkCount: String,
})
</script>

<style scoped>

</style>