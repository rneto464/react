const Filter = ({filter, setFilter , setSort}) => {
  return (
    <div className="filter">
        <h2>Filter:</h2>
        <div className="filter-options">
           <div>
            <p>Stats</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Complete</option>
                <option value="Incomplete">Incomplete</option>

            </select>
            <div>
                <p>Alphabetical Order:</p>
                
                <button onClick={() => setSort("A-Z")}>A-Z</button>
                
                <button onClick={() => setSort("Z-A")}>Z-A</button>
            </div>
            </div> 
        </div>

    </div>
  )
}

export default Filter