import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import Navbar from './components/Navbar';
import {products} from "./shared/products";
import ProtectedRoutes from './components/protectedRoutes';

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path='/log' element={<LogComponent/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent products={products}/>}/> 
                    </Route>      
                </Routes> 
            </div>
        </div>
    );
}
export default App;
