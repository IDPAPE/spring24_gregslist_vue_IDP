<script setup>
import { AppState } from '../AppState.js';
import {computed, onMounted} from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import HouseCard from '../components/HouseCard.vue';
import { Modal } from 'bootstrap';

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
  <div class="container">
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-4 col-12 mt-4">
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

  <HouseFormModal />
</template>


<style scoped></style>