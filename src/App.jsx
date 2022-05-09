import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Detail from './views/Detail';
import List from'./views/List';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App() {
  return (
<>
<Router>
  <Switch>
    <Route path="/characters/:id">
      <Detail />
    </Route>
    <Route path="/">
    <Header />
    <List />
    </Route>
  </Switch>
  </Router>
  </>
  )
}
