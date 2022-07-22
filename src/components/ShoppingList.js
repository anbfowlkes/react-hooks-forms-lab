import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchVal, setSearchVal] = useState('')
  const [submitVal, setSubmitVal] = useState('')

  const handleSearch = (e) => {
    setSearchVal(e.target.value)
  }

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [listItems, setListItems] = useState([...items])

  const addItem = (newItem) => {
    setListItems([...listItems, newItem])
    console.log(listItems)
  }

  const handleSubmit = (e, newObj) => {
    e.preventDefault()
    addItem(newObj)
  }
  

  /////////////////////////////////////////////////////FILTERS
  const searchFilteredItems = items.filter((item) => {
    if (searchVal === '') {
      return true
    }
    let len = searchVal.length
    if (item.name.substring(0,len).toLowerCase() === searchVal.toLowerCase()) {
      return true
    }
    return false
  })
  // console.log(searchFilteredItems)
  const itemsToDisplay = searchFilteredItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });////////////////////////////////////////////////FILTERS

  return (
    <div className="ShoppingList">
      <ItemForm handleSubmit={handleSubmit} submitVal={submitVal} />
      <Filter onCategoryChange={onCategoryChange} handleSearch={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
