import React,{useState} from 'react'

export const AddTodo = (props) => {
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("some thing is blank");
            return false;
        }
        props.addTodo(title , desc);
    }
    return (
        <div className="container my-3">
        <h3 className="text-center">Add New Todo</h3>
            <form onSubmit={submit}>
  <div className="col-md-5 offset-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div className="col-md-5  offset-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
  </div>
  <br />
  <button type="submit" className="btn btn-sm btn-success offset-3">Add Todo</button>
</form>
        </div>
    )
}
