import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../api';
import { PhotoItem } from '../components/photoItem';
import { TypeAlbums } from '../types/typeAlbums';
import { typePhoto } from '../types/typePhoto';





export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<typePhoto[]>([]);
    const [albumInfo, setAlbumInfo] = useState<TypeAlbums>({id: 0, title: '', userId: 0});


    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    const loadPhotos = async(id: string) => {
        setLoading(true);
        const photos = await Api.getChoiceAlbums(id);
        setPhotos(photos);
        setLoading(false);
    }

    const loadAlbumInfo = async(id:string) => {
        const albumInfo = await Api.getAlbum(id);
        setAlbumInfo(albumInfo);

    }

    const handleBackButton = () => {
        navigate(-1);
        
    }
    
    return (
        <div className="App">
            <button onClick={handleBackButton} >Voltar</button>
            
            {loading &&
              <h4>Carregando...</h4>
            }
            <div>
            
            {!loading && photos.length > 0 &&
            photos.map((item, index) => (
                <PhotoItem 
                key={index}
                data={item} 
                 /> 
            ))}
            </div>
        </div>
      );

}