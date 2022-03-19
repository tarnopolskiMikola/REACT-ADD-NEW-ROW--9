import React from 'react'
   function GetTodos() {
 
 
    let mas = JSON.parse(localStorage.getItem("todos"));
  
      console.log(mas + "------todos-------");
       return(

         <div >
           
             {mas.map(
                
                item=>(
                   
               <tr key={item.id + item.email}  >
                  <td>{item.id}</td> 
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
               </tr>
                
              ))}
         </div>
              
            
         
       )
     }

     export default GetTodos