import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../api";
import { typePhoto } from "../types/typePhoto";

export const Photo = () => {
    let params = useParams();
    let navigate = useNavigate();

    
    const [photoInfo, setPhotoInfo] = useState<typePhoto>();

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id)
        }
    }) 

    const loadPhoto = async (id:string) => {
        
        let photo = await Api.getPhotos(id);
        setPhotoInfo(photo);
        
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            

            {photoInfo && 
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photoInfo.title}</p>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </> 
             }
        </div>
    );
}