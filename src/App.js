
import './App.css';
import BoutonAjouter from './composants/BoutonAjouter/BoutonAjouter';
import Searchbar from './composants/SearchBar/Searchbar';
import Table from './composants/Table/Table';


function App() {
  return (
    <div className='container mx-auto' >
      <div className="   flex items-center justify-between mt-9 w-100">
      <div>
      <Searchbar/>
      </div>
      <div>
      <BoutonAjouter/>
      </div>
      </div>

      
      <div className='mt-9 '>
        <Table/>
      </div>
    </div>
  );
}

export default App;
