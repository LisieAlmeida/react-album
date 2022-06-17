import { useEffect, useState } from 'react'
import './App.css'
import { AlbumItem } from './components/albumItem'
import { Header } from './components/Header'
import { TypeAlbums } from './types/typeAlbums'
import { Api } from './api';


function App() {

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
      <Header />
        {loading &&
          <h4>Carregando...</h4>
        }
        <div className="albumList">
        {!loading && albums.length > 0 &&
        albums.map((item, index) => (
          <AlbumItem data={item} />
        ))}

        
        </div>


      aaaa
    </div>
  )
}

export default App
