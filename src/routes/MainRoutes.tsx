import { Route, Routes, useRoutes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Page404 } from "../pages/Page404"

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element:<Home/>},
        {path: '*', element: <Page404 />}

    ])
}