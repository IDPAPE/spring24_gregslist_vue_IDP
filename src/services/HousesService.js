import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        console.log('got houses', response.data)
    }
}

export const housesService = new HousesService()