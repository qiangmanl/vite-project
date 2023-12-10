
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from '@/Layouts/Default'
import VerticalLayout from '@/Layouts/Vertical'
// import HorizontalLayout from '../Layouts/Horizontal'

import {
	authProtectedFlattenRoutes,
    publicProtectedFlattenRoutes
} from './Routes'

import {
    ThemeSettings,
    useAuthContext,
	useThemeContext
} from '../context'
interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
	const { settings } = useThemeContext()
	const { isAuthenticated } = useAuthContext()
    const Layout =
    settings.layout.type === ThemeSettings.layout.type.vertical
    ? VerticalLayout
    : VerticalLayout
    return (
    <React.Fragment>
        <Routes>
            <Route>
                {publicProtectedFlattenRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <DefaultLayout {...props}>{route.element}</DefaultLayout>
                        }
                        key={idx}
                    />
                ))}
            </Route>
            <Route>
                {authProtectedFlattenRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            isAuthenticated === false ? (
                                <Navigate
                                    to={{
                                        pathname: '/auth/login',
                                        search: 'next=' + route.path,
                                    }}
                                />
                            ) : (
                                <Layout {...props}>{route.element}</Layout>
                            )
                        }
                        key={idx}
                    />
                ))}
            </Route>
        </Routes>
    </React.Fragment>
    )
}




export default AllRoutes