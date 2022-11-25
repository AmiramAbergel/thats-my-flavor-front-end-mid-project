import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    path='/'
                    element={<Navigate replace to='/home'></Navigate>}
                />
                <Route path='/home' />
                <Route path='/flavors' />
                <Route path='/rand-flavor' />
                <Route path='/map' />
            </Routes>
        </Layout>
    );
}

export default App;
