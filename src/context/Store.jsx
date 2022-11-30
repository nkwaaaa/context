/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
    products: [],
});

export default function Store({ children }) {
    const [products, setProducts] = useState(null);

    //setteo de los productos cuando se carga el componente
    useEffect(() => {
        setProducts(["vino", "pritty"]);
    }, []);

    return (
        <AppContext.Provider
            value={{
                products,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
