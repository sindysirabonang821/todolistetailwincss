import React from 'react';
import BoutonAjouter from "../BoutonAjouter/BoutonAjouter";

function Table({ setTodolist = [] }) { // Recevoir la prop `todolist`
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
          {setTodolist.map((todo, index) => ( // Utiliser des accolades ici
            <tr key={index}> {/* Ajout d'une clé unique */}
              <td className="border border-slate-700">{todo}</td>
              <td className="border border-slate-700">Description ici</td> {/* Placeholder pour la description */}
              <td className="border border-slate-700">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button> {/* Action */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
