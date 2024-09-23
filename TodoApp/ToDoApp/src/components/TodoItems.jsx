import css from './TodoItem'
function TodoItems({items}) {
  return (
    <>
    {items.map((item) => (  <div className="row">
        
        <div className="col-sm" >
          {item.name}
        </div>
        <div className="col-sm">
          {item.date}
        </div>
        <div className="col-sm">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>))}
      
    </>
  );
}

export default TodoItems;
