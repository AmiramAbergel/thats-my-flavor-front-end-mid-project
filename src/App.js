import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';

import { AuthUserProvider } from './firebase/auth';
import MainLayoutRoutes from './routes/MainLayuotRoutes';

function App() {
    return (
        <AuthUserProvider>
            <Routes>
                <Route
                    path='/'
                    element={<Navigate replace to='/home'></Navigate>}
                />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<MainLayoutRoutes />} />
            </Routes>
        </AuthUserProvider>
    );
}

export default App;
