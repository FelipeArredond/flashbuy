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
            <h1>Works</h1>
            {/*<h3>Works</h3>
            <div className="mainpage">
                <Routes>
                    <Route path={'/'} element={<LogComponent/>}/>
                    <Route path='/modal' element={<ScanProduct/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                        
                    </Route>      
                </Routes> 
        </div>*/}
        </div>
    );
}
export default App;
