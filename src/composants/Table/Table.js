function Table(){
    return(
        <div className="  justify-center">
<table className="border-collapse border border-slate-500  w-full text-center ">
  <thead>
    <tr>
      <th className="border border-slate-600 ...">Tache</th>
      <th className="border border-slate-600 ...">Description</th>
      <th className="border border-slate-600 ...">Action</th>
    </tr>
  </thead>
  <tbody className="p-1">
    <tr>
      <td className="border border-slate-700 ...">coder</td>
      <td className="border border-slate-700 ...">choisir une techno</td>
      <td className="border border-slate-700 ...">Indianapolis</td>

    </tr>
    <tr>
      <td className="border border-slate-700 ...">deployer</td>
      <td className="border border-slate-700 ...">utiliser github pour le faire</td>
      <td className="border border-slate-700 ...">Columbus</td>

    </tr>
    <tr>
      <td className="border border-slate-700 ...">tester</td>
      <td className="border border-slate-700 ...">faire des teste unitaire</td>
      <td className="border border-slate-700 ...">Detroit</td>

    </tr>
  </tbody>
</table>
        </div>
    )
}
export default Table;