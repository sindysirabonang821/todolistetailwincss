import { useState } from "react";

function Searchbar({setfilter,fileter}){
    return(
        <div>
             <input type="search" placeholder="Rechercher..." className=" rounded-md border border-black-100 ring-1 ring-gray-300" value={fileter}   onChange={(e) => setfilter(e.target.value)}
 />
        </div>
    )
}
export default Searchbar;