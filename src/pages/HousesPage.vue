<script setup>
import { AppState } from '../AppState.js';
import {computed, onMounted} from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import HouseCard from '../components/HouseCard.vue';

const houses = computed(()=>AppState.houses)
const account = computed(()=>AppState.account)

async function getHouses(){
  try {
    await housesService.getHouses()
  }
  catch (error){
    Pop.error(error);
  }
}

onMounted(()=>{
  getHouses()
})

</script>


<template>
  <h1>Houses Page!</h1>
  <div class="container">
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-4">
        <HouseCard :house="house"/>
        <!-- <div class="card text-start">
          <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Body</p>
          </div>
        </div> -->
        
      </div>
    </div>

  </div>
</template>


<style scoped></style>