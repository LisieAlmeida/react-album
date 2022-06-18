import { useEffect, useState } from 'react'
import './App.css'
import { AlbumItem } from './components/albumItem'
import { Header } from './components/Header'
import { TypeAlbums } from './types/typeAlbums'
import { Api } from './api';
import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Page404 } from './pages/Page404'
import { MainRoutes } from './routes/MainRoutes'



function App() {
 
  
  return (
      <div>
        <Header />
        <MainRoutes />
        
        
      </div>
      

        
        


    
    
  )
}

export default App
