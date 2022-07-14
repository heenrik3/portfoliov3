function Sobre() {
  const texto =
    'me chamo luis henrique. \n' +
    'sou graduando em análise e \n' +
    'desenvolvimento de sistemas pela uerj-zo. \n\n' +
    'Estou iniciando uma nova jornada em tecnologia \n' +
    'da informação e estou ansioso para ter minha \n' +
    'primeira oportunidade nesse novo caminho! \n\n' +
    'Além da universidade, recentemente comecei uma \n' +
    'especialização com curso profissional de \n' +
    'Suporte em TI do Google. \n\n' +
    'Atualmente, busco por uma oportunidade de estágio \n' +
    'em desenvolvimento front-end ou Suporte. \n'

  return (
    <section className="sobre page">
      <div className="section_descriptor">sobre</div>
      <span className="sobre_text">{texto}</span>
    </section>
  )
}

export default Sobre
