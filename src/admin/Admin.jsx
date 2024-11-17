import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <header>
                <h1>Admin header</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <h1>Admin footer</h1>
            </footer>
        </>
    )
}

export default Admin