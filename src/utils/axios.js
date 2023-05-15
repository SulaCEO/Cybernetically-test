import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.iex.cloud/v1/data/core/stock_collection'
})

export default instance;