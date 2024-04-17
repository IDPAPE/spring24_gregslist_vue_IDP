<script setup>
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop.js';
import { ref } from 'vue';
import { housesService } from '../services/HousesService.js';

const houseData = ref({
    imgUrl : '',
    price : 0,
    bedrooms : 0,
    bathrooms : 0,
    levels : 0,
    description : '',
    year : 0,

})

async function createHouse(){

try {

  await housesService.createHouse(houseData.value)

    houseData.value={
        imgUrl : '',
        price : 0,
        bedrooms : 0,
        bathrooms : 0,
        levels : 0,
        description : '',
        year : 0,
    }
    Modal.getOrCreateInstance('#houseFormModal').hide()
}
catch (error){
  Pop.error(error);
}

    
}

</script>


<template>

<div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="houseModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <form id="houses-form" @submit.prevent="createHouse()" class="row">
        <div class="col-12">
            <h1>Create New Listing</h1>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="house-img">Image Url</label>
                <input v-model="houseData.imgUrl" id="house-img" type="text" name="imgUrl" required class="form-control">
            </div>
            <div class="col-4">
                <label for="house-price">Price</label>
                <input v-model="houseData.price" type="number" id="house-price" name="price" required class="form-control">
            </div>
            <div class="col-4">
                <label for="house-year">Year Built</label>
                <input v-model="houseData.year" type="number" id="house-year" name="year" required class="form-control">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-3">
                <label for="bedrooms">Bedrooms</label>
                <input v-model="houseData.bedrooms" type="number" id="bedrooms" name="bedrooms" required class="form-control">
            </div>
            <div class="col-3">
                <label for="bathrooms">Bathrooms</label>
                <input v-model="houseData.bathrooms" type="number" id="bathrooms" name="bathrooms" required class="form-control">
            </div>
            <div class="col-3">
                <label for="levels">levels</label>
                <input v-model="houseData.levels" type="number" id="levels" name="levels" required class="form-control">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10">
                <label for="description">Description</label>
                <input v-model="houseData.description" type="text" id="description" name="description" required class="form-control">
            </div>
        </div>
        <div class="row justify-content-end">
            <div class=" col-2 mt-3 ">
                <button type="submit" class="btn btn-rounded border-dark">Submit</button>
            </div>
        </div>
    </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>


<style lang="scss" scoped>

</style>