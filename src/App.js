import RoutesPrincial from "./../src/routes/RouterPrincipal";
import './App.css';
import {ListFavProvider} from "../src/contex/favList"
function App() {
  return (
    <div className="App">
      <ListFavProvider>
        <RoutesPrincial/>        
      </ListFavProvider>

    </div>
  );
}

export default App;
