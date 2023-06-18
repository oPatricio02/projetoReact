import './Colaborador.css'
                            //Desesntruturando o objeto para somente os campos q eu preciso
    const Colaborador = ({nome , cargo ,imagem, corDeFundo}) =>
    {
        return(
            <div className='colaborador'>
                <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                    <img src={imagem} alt={nome}/>
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>
            </div> 

        )
    }

    export default Colaborador