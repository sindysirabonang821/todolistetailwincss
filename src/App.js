
import { useState } from 'react';
import './App.css';
import BoutonAjouter from './composants/BoutonAjouter/BoutonAjouter';
import Searchbar from './composants/SearchBar/Searchbar';
import Table from './composants/Table/Table';



function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const ouvrirModal = () => setModalOpen(true);
  const fermerModal = () => setModalOpen(false);
  // enregistrement
  const [todo, setTodo] = useState("");
  const [todo2, setTodo2] = useState("");
  const [todolist, setTodolist] = useState([]);
  // filtre
  const [fileter,setfilter]=useState("")
  // modification
  const [selectedTask, setSelectedTask] = useState(null);



// fonction pour ajouter
  const add = ()=>{
    let recup = {
      value: todo,
      description: todo2,
    }

    
    let updat = [...todolist]
    updat.push(recup ) 

    setTodolist(updat)  
    setTodo("");
  setTodo2("");
  }  
  console.log(todolist);
  // fonction pour filtrer
  const filtered = todolist.filter(task =>
    task.value.toLowerCase().includes(fileter.toLowerCase())  );
    // fonction voir
    const voirDetails = (task) => {
      alert(`Tâche: ${task.value}\nDescription: ${task.description}`);
    };
    // fonction modifier
    const modifierTask = (task) => {
      setTodo(task.value);
      setTodo2(task.description);
      setSelectedTask(task);
      setModalOpen(true); // Ouvre la modal pour la modification
    };
  
    const saveChanges = () => {
      const updatedTodolist = todolist.map(task =>
        task === selectedTask ? { ...task, value: todo, description: todo2 } : task
      );
      setTodolist(updatedTodolist);
      setModalOpen(false);
      setTodo("");
      setTodo2("");
      setSelectedTask(null);
    };

    // fonction supprimer
    const Delete = (ToDelete) => {
      const updatedTodolist = todolist.filter(task => task !== ToDelete);
      setTodolist(updatedTodolist);
    };
  
  return (
    <div className='container mx-auto' >
      <div className=" flex items-center justify-between mt-9 w-100">
      <div>
      <Searchbar setfilter={setfilter} fileter={fileter}/>
      </div>
      <div>
      <BoutonAjouter onclick={ouvrirModal} titre="Ajouter" isModalOpen={isModalOpen}
      todo={todo} todo2={todo2}
       setTodo={setTodo} setTodo2={setTodo2} onclickadd={add} fermerModal={fermerModal} />
      </div>
      </div>

      
      <div className='mt-9 '>
        <Table todos={filtered}   voirDetails={voirDetails} modifierTask={modifierTask} deleteTask={Delete} />
      </div>

      {/* modification */}
      {isModalOpen && (
        <div className="modal">
          <h2>{selectedTask ? 'Modifier la Tâche' : 'Ajouter une Tâche'}</h2>
          <input 
            type="text" 
            value={todo} 
            onChange={e => setTodo(e.target.value)} 
            placeholder="Tâche" 
          />
          <input 
            type="text" 
            value={todo2} 
            onChange={e => setTodo2(e.target.value)} 
            placeholder="Description" 
          />
          <button onClick={selectedTask ? saveChanges : add}>
            {selectedTask ? 'Enregistrer les Changements' : 'Ajouter'}
          </button>
          <button onClick={() => setModalOpen(false)}>Annuler</button>
        </div>
      )}
      
    </div>
  );
}

export default App;
