import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"ed507e3115ad4bf68ef9fa9eab95fceb"
    }
})