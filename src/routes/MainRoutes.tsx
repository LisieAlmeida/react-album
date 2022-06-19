import { Route, Routes, useRoutes } from "react-router-dom"
import { Album } from "../pages/Album"
import { Home } from "../pages/Home"
import { Page404 } from "../pages/Page404"

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element:<Home/>},
        {path: '/albums/album', element: <Album/>},
        {path: '*', element: <Page404 />}   

    ])
}