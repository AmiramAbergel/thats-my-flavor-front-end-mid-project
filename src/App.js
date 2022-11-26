import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home';
import Flavors from './pages/Flavors';
import MapView from './pages/MapView';
import RandFlavor from './pages/RandFlavor';

function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    path='/'
                    element={<Navigate replace to='/home'></Navigate>}
                />
                <Route path='/home' element={<Home />} />
                <Route path='/flavors' element={<Flavors />} />
                <Route path='/rand-flavor' element={<RandFlavor />} />
                <Route path='/map' element={<MapView />} />
            </Routes>
        </Layout>
    );
}

export default App;
