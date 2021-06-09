import {Todos} from './Mycomponent/Todos'
import {AddTodo} from './Mycomponent/AddTodo'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
function App() {

  const addTodo = (title , desc) => {
    let sno;  
    if(todos.length === 0)
      {
        sno = 1;
      }
      else{
      sno = todos[todos.length-1].sno + 1;
      }
      const myTodo = {
        sno : sno,
        title : title,
        desc : desc,
      }
      setTodos([...todos,myTodo]);
  }

  const onDelete = (todo) => {
    console.log("i am delete function ", todo );
    setTodos(todos.filter( (event) => {
      return event !== todo;
    }))
  }

  const [todos , setTodos] = useState([
    {
      sno : 1,
      title : "Go to market",
      desc : "You need to done job1"
    },
    {
      sno : 2,
      title : "Go to mall",
      desc : "You need to done job2"
    },
    {
      sno : 3,
      title : "Go to ground",
      desc : "You need to done job3"
    }
  ]);

  return( 
    <>
       <Router>
      <Switch>
        <Route exact path="/" render={()=>{ 
           return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )}}> 
          </Route>
      </Switch>
      </Router> 
    </>
    );  
}
export default App;
