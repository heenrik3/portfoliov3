function Sobre() {
  let bloco1 = 'olá! ME CHAMO LUIS HENRIQUE.'
  let bloco2 = 'SOU GRADUANDO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS PELA UEZO.'
  let bloco3 = 'SEMPRE CURIOSO SOBRE TECNOLOGIA, DECIDI MERGULHAR NESSE MUNDO.'
  let bloco4 = 'TODO DIA TENTO ADQUIRIR UM POUCO MAIS DE CONHECIMENTO PORQUE EU ACREDITO QUE SABEDORIA, É A CHAVE FUNDAMENTAL NO DESENVOLVIMENTO HUMANO E PODE NOS REVELAR AS VERDADES OCULTAS.'
  let bloco5 = 'Atualmente, estudo o framework React.  Pretendo trabalhar com o desenvolvimento.' 
  let bloco6 = 'No tempo livre, gosto de brincar com desenvolvimento de webApps'
  return (
    <section className='sobre page'>
      <div className='section_descriptor'>sobre</div>
      <span className='sobre_text'>{bloco1}</span>
      <span className='sobre_text'>{bloco2}</span>
      <span className='sobre_text sobre_text--3'>{bloco3}</span>
      <span className='sobre_text sobre_text--4'>{bloco4}</span>
      <span className='sobre_text sobre_text--5'>{bloco5}</span>
      <span className='sobre_text sobre_text--6'>{bloco6}</span>
    </section>
  )
}

export default Sobre
