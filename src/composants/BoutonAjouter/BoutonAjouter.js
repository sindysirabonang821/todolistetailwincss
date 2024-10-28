import React, { useState } from 'react';

function BoutonAjouter(){
  const [isModalOpen, setModalOpen] = useState(false);
  const ouvrirModal = () => setModalOpen(true);
  const fermerModal = () => setModalOpen(false);
// enregistrement 
const [todo,setTodo]=useState('')
const[todolist,setTodolist]=useState([])
const add=(e)=>{
    e.preventDefault()
    console.log(todo);
    setTodolist(todo)
    setTodo('')
}
  return (
    <div>
      <button 
        onClick={ouvrirModal} 
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Ajouter
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <button 
              onClick={fermerModal} 
              className="absolute top-2 right-2"
            >
              {/* &times; */}
            </button>
            <h2 className="text-lg font-bold">Ajouter un élément</h2>
            <input type="text" placeholder="saisir une tache" className=" rounded-md border border-black-100 ring-1 ring-gray-300" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <br/>
            <button 
              onClick={add} 
              className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
            >
              Ajouter
            </button>
            <button 
              onClick={fermerModal} 
              className="mt-4 bg-red-500 text-white px-3 py-1 rounded ms-2"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoutonAjouter;
