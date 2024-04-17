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
  <div class="d-flex col justify-content-between p-3 pb-0">
    <h1>Houses Page!</h1>
    <button v-if="account" type="button" class="btn btn-success border-dark" data-bs-toggle="modal"
          data-bs-target="#houseFormModal">Post House</button>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-3 col-12 mt-4">
        <HouseCard :house="house"/>
      </div>
    </div>
  </div>

  <HouseFormModal />
</template>


<style scoped></style>