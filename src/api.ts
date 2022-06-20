import axios, {Axios } from "axios";
import { TypeAlbums } from "./types/typeAlbums";

type Props = {
    data: TypeAlbums;
}

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const Api = {
    
    getAlbums: async() => {
        let response = await http('/albums');
        return response.data;
    },
    getAlbum: async(id:string) => {
        let response = await http(`/albums/${id}`);
        return response.data;
    },
    getChoiceAlbums: async(id: string) => {
        let response  =await http(`/albums/${id}/photos`);
        return response.data;
    },
    getPhotos: async(id:string) => {
        let response = await http(`/photos/${id}`);
        return response.data;
    } 
}