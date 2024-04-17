<script setup>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';

const account = computed(()=>AppState.account)

async function deleteHouse(id){
    try {
      const confirmation = await Pop.confirm('are you sure you want to delete this house?')
      if(confirmation == false) return
      await housesService.deleteHouse(id)
    }
    catch (error){
      Pop.error(error);
    }
}

defineProps({
    house: House
})
</script>


<template>
<div class="card text-start">
          <img class="card-img-top image-format" :src="house.imgUrl" alt="Title"/>
          <div class="card-body">
            <h4 class="card-title">${{ house.price }}</h4>
            <hr/>
            <p class="card-text">Beds: {{ house.bedrooms }} | Baths: {{ house.bathrooms }} | Levels: {{ house.levels }}</p>
            <p>{{ house.description }}</p>
            <p>Built: {{ house.year }} | Listed: {{ house.createdAt.toDateString() }}</p>
            <button v-if="house.creatorId == account?.id" @click="deleteHouse(house.id)" class="btn btn-danger">delete</button>
          </div>
        </div>
</template>


<style lang="scss" scoped>

.image-format{
    height:30dvh
}
</style>