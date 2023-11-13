import './App.css';
import AjoutDepense from './Components/AjoutDepense';
import Header from './Components/Header';
import ListeDepenses from './Components/ListeDepenses';
import Statistique from './Components/Statistique';
function App() {
  return (
<div>
  <Header/>
  <Statistique/>
  <ListeDepenses/>
  <AjoutDepense/>
</div>
  );
}

export default App;
