import { Route, Routes, useRoutes } from "react-router-dom"
import { Album } from "../pages/Album"
import { Home } from "../pages/Home"
import { Page404 } from "../pages/Page404"
import { Photo } from "../pages/Photo"

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element:<Home/>},
        {path: '/album/:id', element: <Album/>},
        {path: '/photo/:id', element: <Photo/>},
        {path: '*', element:<Page404/>}
      

    ])
}