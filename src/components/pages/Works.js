import external from '../Functions'

const cardsData = [
  {
    id: 'adivinhenumero',
    title: 'Adivinhe meu número',
    description: 'tente adivinhar o número sorteado.',
  },
  {
    id: 'roleodado',
    title: 'Role o dado!',
    description: 'quem chegar a 100 pontos primeiro, vence!',
  },
  {
    id: 'vyag',
    title: 'vyag',
    description: 'agencia espacial com viagens para a terra.',
  },
  {
    id: 'climacheca',
    title: 'climacheca',
    description: 'consulta o clima atual de uma cidade.',
  },
]

const cardTemplate = (data, index) => {
  return (
    <div className="card" id={data.id} onClick={external} key={index}>
      <picture className="card__media">
        <h1 className="click">acessar</h1>
        <div className="card__overlay"></div>

        <img
          src={`images/${data.id}.png`}
          alt="portfolio exemplo"
          className="card__image"
        ></img>
      </picture>
      <span className="card__description">
        <span>{data.title}</span>
        <br></br>
        {data.description}
        <br></br>
      </span>
    </div>
  )
}

function Works() {
  const cards = cardsData.map((data, index) => cardTemplate(data, index))

  return (
    <section className="works page">
      <div className="section_descriptor">portfolio</div>

      <div className="cards-container">{cards}</div>
    </section>
  )
}

export default Works

// <div className="card" id="vyag" onClick={external}>
//   <picture className="card__media">
//     <h1 className="click">acessar</h1>
//     <div className="card__overlay"></div>
//
//     <img src="images/vyag.png" alt="1" className="card__image"></img>
//   </picture>
//   <span className="card__description">
//     <span>vyag</span>
//     <br></br>agencia espacial com viagens para a terra.<br></br>
//   </span>
// </div>
// <div className="card" id="climacheca" onClick={external}>
//   <picture className="card__media">
//     <h1 className="click">acessar</h1>
//     <div className="card__overlay"></div>
//     <img src="images/clima.png" alt="1" className="card__image"></img>
//   </picture>
//   <span className="card__description">
//     <span>ClimaCheca</span>
//     <br></br>consulta o clima atual de uma cidade.<br></br>
//   </span>
// </div>
