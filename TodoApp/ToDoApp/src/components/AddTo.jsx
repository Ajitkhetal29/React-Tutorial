import css from './AddTo.module.css'

function AddTo() {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <input type="text" placeholder="Enter Task Name" className={`${css["kg-input"]} `} />
        </div>
        <div className="col-sm">
          <input type="date" name="Duedate" id="" className={`${css["kg-input"]} `} />
        </div>
        <div className="col-sm">
          <button className={`${css["kg-input"]} btn btn-success `}>Add</button>
        </div>
      </div>
    </>
  );
}
export default AddTo;
