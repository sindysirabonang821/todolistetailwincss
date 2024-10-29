import React, { useState } from "react";

function BoutonAjouter({onclick,titre,isModalOpen,todo,todo2,setTodo,setTodo2,onclickadd,fermerModal}) {
  // const [isModalOpen, setModalOpen] = useState(false);
  // const ouvrirModal = () => setModalOpen(true);
  // const fermerModal = () => setModalOpen(false);
  // // enregistrement
  // const [todo, setTodo] = useState("");
  // const [todo2, setTodo2] = useState("");
  // const [todolist, setTodolist] = useState([]);

  // // const add = (e) => {
  // //   e.preventDefault();
  // //   const newTodo = {
  // //     // id:Math.floor(Math.random()*1000),
  // //     value: todo,
  // //     description: todo2,
  // //     // setTodolist:todo,
  // //     // setTodolist:todo2,
  // //   };
  // //   // console.log(todo);
  // //   // console.log(todo2);

  // //   let newtab = [...todolist];
  // //   newtab.push(newTodo);
  // //   setTodolist(newtab);

  // //   console.log(todolist);

  // //   // setTodolist(prev=>[...prev,newTodo])
  // //   // setTodolist(todo2)
  // //   setTodo("");
  // //   setTodo2("");

  // //   // setTodolist('todo1',todo)
  // //   // console.log("todolist",todolist);
  // //   // console.log(todo);
  // // }

  // const add = ()=>{
  //   let recup = {
  //     value: todo,
  //     description: todo2,
  //   }

    
  //   let updat = [...todolist]
  //   updat.push(recup ) 

  //   setTodolist(updat)  
  // }


  return (
    <div>
      <button
        onClick={onclick}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        {titre}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative p-3">
            <h1 className="text-blue-500 text-4xl p-6 font-bold">
              Ajouter une tache
            </h1>
            <div className="  mx-auto block p-10">
              <input
                type="text"
                placeholder="saisir une tache"
                className=" rounded-md border border-black-100 ring-1 ring-gray-300 w-full p-1"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                placeholder="description"
                className=" rounded-md border border-black-100 ring-1 ring-gray-300 mt-6 w-full p-1"
                value={todo2}
                onChange={(e) => setTodo2(e.target.value)}
              />
            </div>

            <br />
            <div className="  text-center">
              <button
                onClick={onclickadd}
                className="mt-4 bg-blue-500 text-white p-2 rounded  "
              >
                Ajouter
              </button>
              <button
                onClick={fermerModal}
                className="mt-4 bg-red-500 text-white p-2 rounded ms-2 "
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoutonAjouter;
