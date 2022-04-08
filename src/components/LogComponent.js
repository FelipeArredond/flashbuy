
const LogComponent = () => {
    return(
        <div className="mainContainerLog">
            <div className="container_log_component">
                <div className='tittle_container'>
                    <h1 className='tittle'> 
                        FlashBuy!
                    </h1>
                </div>
                <div className="form_log">
                    <div className="input_log"><input type={'text'} 
                    placeholder={'Nombre Completo'} 
                    className='input_logo_place'></input></div>
                    
                    <div className="input_log"><input type={'text'} 
                    placeholder={'Numero de Indetificacion'} 
                    className='input_logo_place'></input></div>

                    
                    <div className="log_btn">
                        <button><a>Ir a registrar productos!</a></button>
                    </div>
        
                </div>
            </div>
        </div>
    );
}

export default LogComponent;