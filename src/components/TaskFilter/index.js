import "./style.css";

function TaskFilter( {filterValue, setFilterValue}) {
  return (
    <div className="task-filter">
      <input 
        placeholder="Filter your Tasks here"
        value={filterValue}
        onChange={(event) => {
          setFilterValue(event.target.value);
      }}
       />
    </div>
  );
}

export { TaskFilter };
