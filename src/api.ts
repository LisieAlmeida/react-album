import axios, {Axios } from "axios";
import { TypeAlbums } from "./types/typeAlbums";

type Props = {
    data: TypeAlbums;
}

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {
    
    getAlbums: async() => {
        let response = await http.get('/albums');
        return response.data;
    },
    getChoiceAlbums: async({data}:Props) => {
        const idAlbum = data.id;
        let response  =await http.get(`/albums/${idAlbum}/photos`)
        return response.data;
    }
}