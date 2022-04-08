import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path='/home' element={<LogComponent/>}/>
                    <Route path='/scan' element={<ProductScanComponent/>}/>   
                </Routes> 
            </div>
        </div>
    );
}
export default App;
