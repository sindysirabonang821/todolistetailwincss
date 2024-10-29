import React from 'react';

function Table({todos,filtre,voirDetails,modifierTask,deleteTask}) {
  
  return (
    <div className="justify-center">
      <table className="border-collapse border border-slate-500 w-full text-center">
        <thead>
          <tr>
            <th className="border border-slate-600">Tâche</th>
            <th className="border border-slate-600">Description</th>
            <th className="border border-slate-600">Action</th>
          </tr>
        </thead>
        <tbody className="p-1">
          {todos.map((todo) => ( 
            
            <tr >
              {/* console.log(setTodolist); */}
              <td className="border border-slate-700" >{todo.value}</td>
              <td className="border border-slate-700" >{todo.description}</td>
              <td className="border border-slate-700 ">
                <button className="px-2 py-1 rounded text-center ms-2" onClick={() => voirDetails(todo)}><i className="fa-solid fa-eye"></i></button>
                <button className="px-2 py-1 rounded text-center ms-2 " onClick={() => {modifierTask(todo) }}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="px-2 py-1 rounded text-center ms-3" onClick={() => deleteTask(todo)}><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
}

export default Table;
