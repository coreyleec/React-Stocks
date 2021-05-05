import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={(e) => props.sortStocks(e.target.value)}/>
        {/* checked={props.sortedType==="Alphabetically" ? true : false}  */}
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={(e) => props.sortStocks(e.target.value)}/>
        {/* checked={props.sortedType=== "Price" ? true : false}  */}
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStock(e.target.value)}>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
