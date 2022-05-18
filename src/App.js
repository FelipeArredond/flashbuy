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
                <Routes>
                    <Route path={'/'} element={<LogComponent/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                        <Route path='/modal' element={<ScanProduct/>}/>
                    </Route>      
                </Routes> 
        </div>
    );
}
export default App;
