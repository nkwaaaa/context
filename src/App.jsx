import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppContext } from "./context/Store";

function App() {
    const store = useAppContext();
    const products = store.products;

    return (
        <div className="App">
            <h1>Los productos son:</h1>
            {products && products.map((product) => <li> {product} </li>)}
        </div>
    );
}

export default App;
