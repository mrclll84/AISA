<template>
  <div class="container">
    <h1 class="text-h5">Конфигуратор кофемашины</h1>

    <div class="row">
      <div class="col-6">
        <!-- Форма выбора опций -->
        <q-form
            class="row q-col-gutter-lg column conf-container"
            @submit.prevent="addToCart"
        >
          <div class="col-6">
            <q-select
                filled
                v-model="selectedSize"
                :options="['Стандартный', 'Увеличенный']"
                label="Размер кофемашины:"
            />
          </div>


          <div class="col-6">
            <q-select
                filled
                v-model="selectedDrinkCount"
                :options="['6 напитков', '8 напитков', '12 напитков']"
                label="Количество напитков:"
            />
          </div>

          <div class="col-12">
            <q-btn
                color="primary"
                type="submit"
            >
              Добавить в хранилище
            </q-btn>
          </div>

        </q-form>
      </div>

      <div class="col-6">
        <div class="row">
          <div class="col-6 conf-container">
            <q-img
                src="https://ir.ozone.ru/s3/multimedia-f/c1000/6558080439.jpg"
                :ratio="10/+parseInt(selectedDrinkCount)"
                :style="{
                  transform: `scale(${selectedSize === 'Стандартный' ? '1' : '1.2'})`
                }"
            />
          </div>
        </div>

      </div>

    </div>

    <!-- Отображение выбранных опций -->
    <h2 class="text-h5">Выбранная конфигурация:</h2>
    <p>Размер: {{ selectedSize }}</p>
    <p>Количество напитков: {{ selectedDrinkCount }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from "axios";
import {useQuasar} from "quasar";

const $q = useQuasar();
const selectedSize = ref('Стандартный');
const selectedDrinkCount = ref('6 напитков');

async function addToCart() {
  try {
    // Отправить выбранные опции на сервер и добавить в корзину
    const configuration = {
      size: selectedSize.value,
      drinkCount: selectedDrinkCount.value,
    };

    await axios.post('/api/configurations', configuration)
    $q.notify({
      message: 'Кофемашина успешно добавлена',
      type: 'positive',
    })

    // После успешной отправки, можно очистить выбранные опции:
    selectedSize.value = 'Стандартный';
    selectedDrinkCount.value = '6 напитков';

    // Вместо этого можно также обновить локальное хранилище с данными о конфигурациях.
  } catch (e) {
    console.error(e)
  }
}
</script>

<style lang="scss">
.conf-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>