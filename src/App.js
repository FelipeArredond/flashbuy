import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/protectedRoutes';
import { ScanProduct } from './components/ScanProductComponent';

const api = "http://localhost:5001/users"

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path={'/'} element={<LogComponent/>}/>
                    <Route path='/modal' element={<ScanProduct/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                        
                    </Route>      
                </Routes> 
            </div>
        </div>
    );
}
export default App;
