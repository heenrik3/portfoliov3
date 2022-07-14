import external from '../Functions'

const cardsData = [
  {
    id: 'notas',
    title: 'notas',
    description: 'aplicativo de anotações',
  },
  {
    id: 'climacheca',
    title: 'climacheca',
    description: 'consulta o clima atual de uma cidade.',
  },
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
    id: 'calculadora',
    title: 'calculadora',
    description: 'Uma calculadora para operações simples.',
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
