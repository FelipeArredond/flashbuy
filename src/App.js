import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/protectedRoutes';
import { ScanProduct } from './components/ScanProductComponent';

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path='/modal' element={<ScanProduct/>}/>
                    <Route path='/' element={<LogComponent/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                        
                    </Route>      
                </Routes> 
            </div>
        </div>
    );
}
export default App;
