import axios, {Axios } from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {
    getAlbums: async() => {
        let response = await http.get('/albums');
        return response.data;
    }
}