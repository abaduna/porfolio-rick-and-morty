import RoutesPrincial from "./../src/routes/RouterPrincipal";
import './App.css';
import {listFavProvider} from "../src/contex/favList"
function App() {
  return (
    <div className="App">
      <listFavProvider>
        <RoutesPrincial/>        
      </listFavProvider>

    </div>
  );
}

export default App;
