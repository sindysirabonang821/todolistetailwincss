import { useState } from "react";

function Searchbar(){
    return(
        <div>
             <input type="search" placeholder="Rechercher..." className=" rounded-md border border-black-100 ring-1 ring-gray-300" />
        </div>
    )
}
export default Searchbar;