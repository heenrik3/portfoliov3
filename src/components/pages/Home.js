import external from '../Functions'

function Home() {
  return (
    <section className="home page">
      <div className="introducing">
        <img
          className="round-picture"
          src="images/me.png"
          alt="profile img"
        ></img>
        <div className="description">
          <h1>henrique</h1>
          <h2>Estudante de TI</h2>
          <div className="icon-container">
            <i
              className="icon icon--active fab fa-linkedin-in"
              id="linkedin"
              onClick={external}
            ></i>
            <i
              className="icon icon--active fab fa-github"
              id="github"
              onClick={external}
            ></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
