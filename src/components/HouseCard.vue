<script setup>
import { House } from '../models/House.js';


defineProps({
    house: House
})
</script>


<template>
<div class="card text-start">
          <img class="card-img-top" :src="house.imgUrl" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">Beds: {{ house.bedrooms }} | Baths: {{ house.bathrooms }}</h4>
            <p class="card-text">Body</p>
          </div>
        </div>
</template>


<style lang="scss" scoped>

</style>