 import React, {useState} from 'react'
 import GetTodos from './getTodos'
const InputForm = ( ) => {
  let res = JSON.parse(localStorage.getItem("todos"));
  if(res === null){
    localStorage.setItem("todos", JSON.stringify([]))
}
   const [isFormOpen, setIsFormOpen] = useState(false);
   const [id, setIsId] = useState('');
 
   const [firstName, setIsFirstName] = useState('')
   const [lastName, setIsLastname] = useState('')
   const [email, setIsEmail] = useState('')
   const [phone, setIsPhone] = useState('')
  
  console.log(id)
     
   const [todos, setTodos] = useState(
    res
  );
   const submitHandler = () => {
    
    
            // getInputFormData({id,firstName,lastName,email,phone})

            console.log(todos);
            
            const newTodos = [...todos, { id,firstName,lastName,email,phone }];
            setTodos(newTodos);
                      
            //  pages5.push(i2)
            // console.log(pages5)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            // let res =  localStorage.getItem("todos");
            // console.log(res + "------todos-------");
            GetTodos()
           
   }

 
 

    return( 
<> 
 

            <button 
              className="btn btn-outline-secondary"
              type="button"
              onClick={()=>{setIsFormOpen(true)}}
              >
                 OPEN ADD FORM
            </button>
    {  !isFormOpen?  <p></p>


    :

<form  >
  <div className="form-row">
    <div className="col-md-1 mb-3">
      <label htmlFor="validationTooltip01">ID</label>
      
      <input
       type="text"
       className="form-control"
       id="validationTooltip01"
       placeholder="ID"  
       value={id}
       onChange={(event)=>{setIsId(event.target.value)}}
       />

       <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label  htmlFor="validationTooltip02">First name</label> 


      <input
       type="text"
        className="form-control" 
        id="validationTooltip02"
        placeholder="First name" 
        required
        value={firstName}
        onChange={(event)=>{setIsFirstName(event.target.value)}}
        />


      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label  htmlFor="validationTooltip02">Last name</label>


      <input 
      type="text" 
      className="form-control" 
      id="validationTooltip02" 
      placeholder="Last name"   
      required
      value={lastName}
      onChange={(event)=>{setIsLastname(event.target.value)}}
      />


      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    
  </div>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationTooltip03">email</label>


      <input
       type="text" 
       className="form-control" 
       id="validationTooltip03" 
       placeholder="email" 
       required
       value={email}
       onChange={(event)=>{setIsEmail(event.target.value)}}
       
       />

      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationTooltip04">Phone</label>

      <input
        type="text"
        className="form-control"
        id="validationTooltip04"
        placeholder="Phone"
        required
        value={phone}
        onChange={(event)=>{setIsPhone(event.target.value)}}
      />

      <div className="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    
  </div>
  {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
   
</form>

}
<button className="btn btn-primary" onClick={()=>{submitHandler()}}    >click</button>    
</>
)
}
export default InputForm

 













































































































// function Todo({ todo, index, completeTodo, removeTodo }) {
//   return (
//     <div
//       className="todo"
//       style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//     >
//       {todo.text}
//       {todo.Name}
//     </div>
//   );
// }

// function TodoForm({ addTodo }) {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [firstName, setIsFirstName] = useState('');
//   const [lastName, setIsLastname] = useState('')
//   const [id, setID] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!id) return;
//     addTodo(id,firstName);
//     setID("");
//   };

//   return (
//     // <form onSubmit={handleSubmit}>
//     //   <input
//     //     type="text"
//     //     className="input"
//     //     value={value}
//     //     onChange={e => setValue(e.target.value)}
//     //   />
//     // </form>



//     <> 

//             <button 
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={()=>{setIsFormOpen(true)}}
//               >
//                  OPEN ADD FORM
//             </button>
//     {  !isFormOpen?  <p></p>


//     :

// <form onSubmit={handleSubmit} >
//   <div className="form-row">
//     <div className="col-md-1 mb-3">
//       <label htmlFor="validationTooltip01">ID</label>
      
//       <input
//        type="text"
//        className="form-control"
//        id="validationTooltip01"
//        placeholder="ID"  
//        value={id}
//        onChange={(event)=>{setID(event.target.value)}}
//        />

//        <div className="valid-tooltip">
//         Looks good!
//       </div>
//     </div>
//     <div className="col-md-4 mb-3">
//       <label  htmlFor="validationTooltip02">First name</label> 


//       <input
//        type="text"
//         className="form-control" 
//         id="validationTooltip02"
//         placeholder="First name" 
//         required
//         value={firstName}
//         onChange={(event)=>{setIsFirstName(event.target.value)}}
//         />


//       {/* <div className="valid-tooltip">
//         Looks good!
//       </div>
//     </div>
//     <div className="col-md-4 mb-3">
//       <label  htmlFor="validationTooltip02">Last name</label>


//       <input 
//       type="text" 
//       className="form-control" 
//       id="validationTooltip02" 
//       placeholder="Last name"   
//       required
//       value={lastName}
//       onChange={(event)=>{setIsLastname(event.target.value)}}
//       /> 


//       <div className="valid-tooltip">
//         Looks good!
//       </div> */}
//     </div>
    
//   </div>
//   {/* <div className="form-row">
//     <div className="col-md-4 mb-3">
//       <label htmlFor="validationTooltip03">email</label>


//       <input
//        type="text" 
//        className="form-control" 
//        id="validationTooltip03" 
//        placeholder="email" 
//        required
//        value={email}
//        onChange={(event)=>{setIsEmail(event.target.value)}}
       
//        />

//       <div className="invalid-tooltip">
//         Please provide a valid city.
//       </div>
//     </div>
//     <div className="col-md-4 mb-3">
//       <label htmlFor="validationTooltip04">Phone</label>

//       <input
//         type="text"
//         className="form-control"
//         id="validationTooltip04"
//         placeholder="Phone"
//         required
//         value={phone}
//         onChange={(event)=>{setIsPhone(event.target.value)}}
//       />

//       <div className="invalid-tooltip">
//         Please provide a valid state.
//       </div>
//     </div>
    
//   </div> */}
//   {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
   
// </form>

// }
// {/* <button className="btn btn-primary" onClick={()=>{submitHandler()}}    >click</button>     */}
// </>
    
//   );
// }
// let res = JSON.parse(localStorage.getItem("todos"));
// function InputForm() {
//   console.log(res + "------todos-------");
//   if(res === null){
//       localStorage.setItem("todos", JSON.stringify([]))
//   }
//   const [todos, setTodos] = React.useState(
//     res
//   );

//   const addTodo = (id,Name) => {
//     const newTodos = [...todos, { id,Name }];
//     console.log(newTodos)
//     setTodos(newTodos);
//     console.log(newTodos + "   ---------- НЕ ТАК")
//      localStorage.setItem("todos", JSON.stringify(newTodos))
//      GetTodos(newTodos )
//     // let  t = localStorage.getItem("todos",  JSON.stringify(newTodos))
//     //  console.log(t + "   ---------- НЕ ТАК")
//     //  let res = JSON.parse(localStorage.getItem("todos"));
//     //  console.log(res + "   ---------- НЕ ТАК")
//     //  let res2 = localStorage.getItem("todos") ;
//     //  console.log(res2 + "   ---------- НЕ ТАК")
//     //  GetTodos(newTodos)
//   };

//   // const completeTodo = index => {
//   //   const newTodos = [...todos];
//   //   newTodos[index].isCompleted = true;
//   //   setTodos(newTodos);
//   // };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     console.log(newTodos + "  ko")
 
//         removeLocalTodos(index, newTodos)
//   };

//   function removeLocalTodos(i,nt) {
//    console.log(i)
//    console.log(nt)
//    localStorage.setItem("todos", JSON.stringify(nt));
//   }


//   function GetTodos() {
 
//  let res = JSON.parse(localStorage.getItem("todos"));
 

//  console.log(res + "------todos-------");
//   return(
//     <div >
//         {res.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
            
//             removeTodo={removeTodo}
//           />
//         ))}
    
         
//       </div>
    
//   )
// }

//   return (
//     <div className="app">
//       <div className="todo-list">
//       < GetTodos/>
//         <TodoForm addTodo={addTodo} />
//       </div>
//     </div>
//   );
// }

// export default InputForm