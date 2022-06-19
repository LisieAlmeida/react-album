import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AlbumItem } from '../components/albumItem'
import { TypeAlbums } from '../types/typeAlbums'
import { Api } from '../api';


export const Home = () => {
    const [albums, setAlbums] = useState<TypeAlbums[]>([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      loadAlbums();
    }, []);
  
    const loadAlbums = async () => {
      setLoading(true);
      let json = await Api.getAlbums();
      setLoading(false);
      setAlbums(json);
    }
    console.log(albums);
    
    return (
      <div className="App">
          {loading &&
            <h4>Carregando...</h4>
          }
          <div className="albumList">
          {!loading && albums.length > 0 &&
          albums.map((item, index) => (
              <AlbumItem data={item} /> 
          ))}
          </div>
      </div>
    );
}