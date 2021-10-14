const external = (e) => {
  const websites = {
    github: 'https://github.com/heenrik3',
    linkedin: 'https://www.linkedin.com/in/henrik3-dev/',
    vyag: 'https://vyag.vercel.app/',
    climacheca: 'https://climacheca.000webhostapp.com/'
  }
  const el = e.currentTarget

  window.open(`${websites[el.id]}`)
}
export default external
