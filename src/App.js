import { Route, Routes } from 'react-router-dom';
import LogComponent from './components/LogComponent';
import ProductScanComponent from './components/ProductScanComponent';
import {products} from "./shared/products";

const App = () => {
    return(
        <div>
            <div className="mainpage">
                <Routes>
                    <Route path='/home' element={<LogComponent/>}/>
                    <Route path='/scan' element={<ProductScanComponent products={products}/>}/>   
                </Routes> 
            </div>
        </div>
    );
}
export default App;
