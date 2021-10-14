import external from '../Functions'

function Works() {
  return (
    <section className='works page'>
      <div className='section_descriptor'>portfolio</div>

      <div className='cards-container'>
        <div className="card" id="vyag" onClick={external}>

          <picture className="card__media">
            <h1 className="click">acessar</h1>
            <div className="card__overlay"></div>

            <img src="images/vyag.png" alt="1" className="card__image"></img>
          </picture>
          <span className="card__description"><span>vyag</span><br></br>agencia espacial com viagens para a
          terra.<br></br></span>

        </div>
        <div className="card" id="climacheca" onClick={external}>
          <picture className="card__media">
            <h1 className="click">acessar</h1>
            <div className="card__overlay"></div>
            <img src="images/clima.png" alt="1" className="card__image"></img>
          </picture>
          <span className="card__description"><span>ClimaCheca</span><br></br>consulta o clima atual de uma cidade.<br></br>
          </span>
        </div>
      </div>

      <h3>Mais a caminho...</h3>
    </section>
  )
}

export default Works
