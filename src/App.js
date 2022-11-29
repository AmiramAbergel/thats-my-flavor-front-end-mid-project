import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { AuthUserProvider } from './firebase/auth';
import MainLayoutRoutes from './routes/MainLayoutRoutes';
import { addOneTIme } from './firebase/DatabaseService';
import { DUMMY_FLAVS } from './utils/dummyData';
import { useState } from 'react';

function App() {
    // const [allDocs, setAllDocs] = useState(DUMMY_FLAVS);
    // console.log(allDocs);

    // allDocs.map(async (item) => await addOneTIme(item));

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
