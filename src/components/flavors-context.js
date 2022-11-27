import React, { createContext, useContext, useState } from 'react';
import { useAuth } from '../firebase/auth';

export const FlavorsContext = createContext({});

const FlavorsContextProvider = (props) => {
    const [flavorsList, setFlavorsList] = useState({});
    const { authUser, isLoading } = useAuth();
    const [isLoadingFlavors, setIsLoadingFlavors] = useState(true);
    const [flavors, setFlavors] = useState({});

    return (
        <FlavorsContext.Provider value={{ flavorsList, setFlavorsList }}>
            {props.children}
        </FlavorsContext.Provider>
    );
};

export const useFlavorsContextProvider = () => {
    const ctx = useContext(FlavorsContext);
    return [ctx.flavorsList, ctx.setFlavorsList];
};

export default FlavorsContextProvider;
