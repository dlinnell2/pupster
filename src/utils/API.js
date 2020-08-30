import axios from "axios";

export default {
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getBreedList: function(){
        return axios.get("https://dog.ceo/api/breeds/list/all")
    },
    getBreedImages: function(breed){
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images/random/10")
    }
}