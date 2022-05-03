import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/protectedRoutes';

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path='/log' element={<LogComponent/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/scan' element={<ProductScanComponent />}/> 
                    </Route>      
                </Routes> 
            </div>
        </div>
    );
}
export default App;
