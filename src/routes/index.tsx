
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from '@/Layouts/Default'
import VerticalLayout from '@/Layouts/Vertical'
import HorizontalLayout from '@/Layouts/Horizontal'


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
    //  根据 ThemeSettings.layout.type.vertical 来决定使用VerticalLayout还是HorizontalLayout 作为</Layout>

    const Layout =
    settings.layout.type === ThemeSettings.layout.type.vertical
    ? VerticalLayout
    : HorizontalLayout

    return (
    <React.Fragment>
        <Routes>
            <Route>
                {/* map 只要是不需要登录就可访问的页面 */}
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
                {/* 只要是未认证的页面都跳转到 /auth/login?next=$route.path , 否则加载</Layout> */}
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