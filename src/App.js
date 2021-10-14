import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Home     from './components/pages/Home'
import Sobre    from './components/pages/Sobre'
import Skills   from './components/pages/Skills'
import Works    from './components/pages/Works'
import Contato  from './components/pages/Contato'
import './App.sass'


function App() {
  document.title = 'Henrique | Dev'
  return (
    <>
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/'         exact component= {Home} />
            <Route path='/sobre'    exact component= {Sobre} />
            <Route path='/skills'   exact component= {Skills} />
            <Route path='/works'    exact component= {Works} />
            <Route path='/contato'  exact component= {Contato} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
