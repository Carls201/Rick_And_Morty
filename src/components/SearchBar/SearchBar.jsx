import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }

   const clean =() =>{
      setCharacter('');
   }
   return (
      <div>
         <input type='search' value={character} onChange={handleChange}/>
         <button onClick={()=>{onSearch(character)
         clean()}} >Agregar</button>
      </div>
   );
}
