import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import ProtectedRoutes from './components/protectedRoutes';
import Receipt from './components/Receipt';

export const api = "http://localhost:53000/products"

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path={'/'} element={<LogComponent/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                        <Route path='/receipt' element={<Receipt/>}/>
                    </Route>      
                </Routes> 
            </div>
        </div>
    );
}
export default App;
