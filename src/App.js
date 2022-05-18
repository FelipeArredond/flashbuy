import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/protectedRoutes';
import { ScanProduct } from './components/ScanProductComponent';

export const api = "http://localhost:5000/products"

const App = () => {
    return(
        <div>
            console.log('hello')
            hello
        </div>
    );
}
export default App;
