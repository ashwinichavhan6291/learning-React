import { MdDelete } from "react-icons/md";

function SecondRow({todoName,date,onDeleteClick}) {
  
  return (
    <div className="container text-center">
      < form className="row">
        
        <div className="col-6">{todoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger" style={{width:"50px" , marginTop: "10px"}}onClick={()=>onDeleteClick(todoName)}>
          <MdDelete />
          </button>
        </div>
        </form>
      </div>
    // </div>
  );
}
export default SecondRow;
