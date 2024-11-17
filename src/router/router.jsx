import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Admin from '../admin/Admin.jsx'
import Dashboard from '../admin/pages/Dashboard.jsx'
import Home from '../pages/Home.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <h1>Login</h1>
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '',
                element: <h1>Admin home</h1>
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router