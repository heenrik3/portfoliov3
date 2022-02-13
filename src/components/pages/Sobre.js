function Sobre() {
  const bloco1 = 'me chamo luis henrique.'
  const bloco2 =
    'sou graduando em análise e desenvolvimento de sistemas pela uezo.'
  const bloco3 =
    'sempre curioso sobre tecnologia, decidi mergulhar nesse mundo.'
  const bloco4 =
    'todo dia tento adquirir um pouco mais de conhecimento porque eu acredito que sabedoria, é a chave fundamental no desenvolvimento humano e pode nos revelar as verdades ocultas.'
  const bloco5 =
    'atualmente, estudo o framework React. Pretendo trabalhar com o desenvolvimento.'

  // const texto =
  //   'me chamo luis henrique. ' +
  //   'sou graduando em análise e desenvolvimento de sistemas pela uezo. \n\n' +
  //   'sempre curioso sobre tecnologia, decidi mergulhar nesse mundo.' +
  //   'todo dia tento adquirir um pouco mais de conhecimento porque eu acredito que sabedoria,' +
  //   ' é a chave fundamental no desenvolvimento humano e pode nos revelar as verdades ocultas.' +
  //   'atualmente, estudo o framework React. Pretendo trabalhar com o desenvolvimento.'

  return (
    <section className="sobre page">
      <div className="section_descriptor">sobre</div>
      <span className="sobre_text">{bloco1}</span>
      <span className="sobre_text">{bloco2}</span>
      <span className="sobre_text">{bloco3}</span>
      <span className="sobre_text sobre_text--4">{bloco4}</span>
      <span className="sobre_text sobre_text--5">{bloco5}</span>
    </section>
  )
}

export default Sobre

// <span className="sobre_text">{texto}</span>
// <span className="sobre_text">{bloco2}</span>
// <span className="sobre_text">{bloco3}</span>
// <span className="sobre_text">{bloco4}</span>
// <span className="sobre_text">{bloco5}</span>
// <span className="sobre_text sobre_text--6">{bloco6}</span>
