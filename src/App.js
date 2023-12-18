import { Route, Switch } from "react-router-dom";
import JokeDetails from "./components/pages/JokeDetails";
import AddJoke from "./components/pages/AddJoke";
import Jokes from "./components/pages/Jokes";

function App() {
  return <Switch>
    <Route path='/jokes' exact>
      <Jokes />
    </Route>
    <Route path='/jokes/:jokeId'>
      <JokeDetails />
    </Route>
    <Route path='/add-joke'>
      <AddJoke />
    </Route>
  </Switch>;
}

export default App;
