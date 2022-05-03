import { useState } from "react";
import ProtectedRoutes, { login } from "./protectedRoutes";
import { Link } from "react-router-dom";



const LogComponent = () => {

    const [userName, setUserName] = useState(
        {
            name: ''
        }
    );

    const [userId, setUserId] = useState(
        {
            idUser: ''
        }
    );

    const handleChangeName = e =>{
        setUserName({
            name: e.target.value
        })
    }

    const handleChangeId = e =>{
        setUserId({
            idUser: e.target.value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if(userName.name === '' || userId.idUser === ''){
            alert('Porfavor digitar todos tus datos.')
        }else{
            login()
        }
    }

    return(
        <div className="mainContainerLog">
            <div className="container_log_component">
                <div className='tittle_container'>
                    <h1 className='tittle'> 
                        FlashBuy!
                    </h1>
                </div>
                <div className="form_log" onSubmit={handleSubmit}>
                    <div className="input_log"><input type={'text'} 
                    placeholder={'Nombre Completo'} 
                    className='input_logo_place' onChange={handleChangeName}></input></div>
                    <div className="input_log"><input type={'text'} 
                    placeholder={'Numero de Indetificacion'} 
                    className='input_logo_place' onChange={handleChangeId}></input></div>
                    <div className="log_btn">
                        <button type="submit" onClick={handleSubmit}>
                            <Link to={'/scan'}>Ir a registrar productos!</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogComponent;