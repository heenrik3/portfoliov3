const skillsData = [
  { title: 'html5', icon: 'fab fa-html5' },
  { title: 'css3', icon: 'fab fa-css3-alt' },
  { title: 'sass', icon: 'fab fa-sass' },
  { title: 'javascript', icon: 'fab fa-js-square' },
  { title: 'react', icon: 'fab fa-react' },
  { title: 'python', icon: 'fab fa-python' },
  { title: 'linux', icon: 'fab fa-linux' },
  { title: 'windows', icon: 'fab fa-windows' },
]

function skillTemplate(data, index) {
  return (
    <div className="skill" key={index}>
      <i className={`skill__icon ${data.icon}`}></i>
      <span className="skill__title">{data.title}</span>
    </div>
  )
}

function Skills() {
  const skills_data = skillsData.map((item, index) => {
    return skillTemplate(item, index)
  })

  return (
    <section className="skills page">
      <div className="section_descriptor">skills</div>
      <div className="skills-container">{skills_data}</div>
    </section>
  )
}

export default Skills
