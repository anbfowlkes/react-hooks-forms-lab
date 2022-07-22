import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {handleSubmit, nameVal} ) {
  // console.log(typeof handleSubmit)

  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('Produce')
  const [newObj, setNewObj] = useState({name: input1, category: input2})

  const first = (e) => {
    setInput1(e.target.value)
    setNewObj({ name: input1, category: input2 })
    console.log(newObj)
  }
  const second = (e) => {
    setInput2(e.target.value)
    setNewObj({ name: input1, category: input2 })
    console.log(newObj)
  }

  return (
    <form className="NewItem" onSubmit={(e) => handleSubmit(e, newObj)}>
      <label>
        Name:
        <input onChange={(e) => first(e)} type="text" name="name" value={nameVal} />
      </label>

      <label>
        Category:
        <select onChange={(e) => second(e)} name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
