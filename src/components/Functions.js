const external = (e) => {
  const urls = {
    github: 'https://github.com/heenrik3',
    linkedin: 'https://www.linkedin.com/in/henrik3-dev/',
    // vyag: 'https://vyag.vercel.app/',
    // tarefas: 'https://material-tasks-app.netlify.app',
    notas: 'https://notethatit.netlify.app/',
    climacheca: 'https://climacheca.netlify.app/',
    adivinhenumero: 'https://adivinhenumero2.netlify.app',
    roleodado: 'https://roleodado.netlify.app',
    calculadora: 'https://calculadora1234.netlify.app/',
  }
  const el = e.currentTarget
  const url = urls[el.id]

  if (url) window.open(url)
}

export default external
