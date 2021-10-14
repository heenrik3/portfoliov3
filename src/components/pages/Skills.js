const skills = {
  html5: 'fab fa-html5',
  css3: 'fab fa-css3-alt',
  sass: 'fab fa-sass',
  javascript: 'fab fa-js',
  react: 'fab fa-react',
  python: 'fab fa-python',
  git: 'fab fa-git-alt',
  figma: 'fab fa-figma'
}

function Skills() {
  return (
    <section className='skills page'>
      <div className='section_descriptor'>skills</div>
      <div className='skills-container'>
      <div className="skill">
        <i className={`skill__icon ${skills.html5}`}></i>
        <span className="skill__title">html5</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-css3-alt"></i>
        <span className="skill__title">css3</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-sass"></i>
        <span className="skill__title">sass</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-js"></i>
        <span className="skill__title">javascript</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-react"></i>
        <span className="skill__title">react</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-python"></i>
        <span className="skill__title">python</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-git-alt"></i>
        <span className="skill__title">git</span>
      </div>
      <div className="skill">
        <i className="skill__icon fab fa-figma"></i>
        <span className="skill__title">figma</span>
      </div>

      </div>
    </section>
  )
}

export default Skills
