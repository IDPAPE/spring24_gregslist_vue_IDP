import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        // console.log('got houses', response.data)
        AppState.houses = response.data.map(house => new House(house))
        // console.log(AppState.houses)
    }

    async deleteHouse(id) {
        const indexToSplice = AppState.houses.findIndex(house => house.id == id)
        await api.delete(`api/houses/${id}`)
        AppState.houses.splice(indexToSplice, 1)
    }

    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        // console.log('creating house', response.data)
        AppState.houses.push(new House(response.data))
    }
}

export const housesService = new HousesService()