import React from 'react'

function SearchBar() {
  return (
    <div className="form-group searchBar">
        <div className="input-group mb-3">
            <input type="text" className="form-control searchInput" placeholder="Employees name" aria-label="Employees name" aria-describedby="button-addon2"/>
            <button className="btn btn-success searchButton text-black" type="button" id="button-addon2">Button</button>
        </div>
    </div>
  )
}

export default SearchBar