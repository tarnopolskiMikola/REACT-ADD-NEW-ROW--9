import React, {useState} from 'react'
import ArrowUp from '../svg/ArrowUp'
import ArrowDown from '../svg/ArrowDown'
import SearchElement from '../search/searchElement'
import InputForm from '../inputForm/inputForm'
import GetTodos from '../inputForm/getTodos'
const Table = ({sortData, contactData, directionSort, detailRow ,firstBlockRow,onSearchSend,  getInputFormData}) => {
  
  const [fieldData, setFieldData] = useState('');

  const Arrow = () => {
    return (
      directionSort? <ArrowDown/> : <ArrowUp/>
    )
  }

 const fieldSortData = (field) => {
   sortData(field)
   setFieldData(field)
    
 }
 
 

    return (
      <>
      <InputForm   />
<SearchElement onSearchSend={onSearchSend} />
        <div className="table">
        <thead>
          <tr>
            <th onClick={()=>{fieldSortData('idd')}}>id</th>
            <th onClick={()=>{fieldSortData('firstName')}}>
              {fieldData==='firstName'?<Arrow/>:null}
              FirstName</th>
            <th onClick={()=>{fieldSortData('lastName')}}> 
            {fieldData==='lastName'?<Arrow/>:null}
            LastName </th>
            <th onClick={()=>{fieldSortData('email')}}>
            {fieldData==='email'?<Arrow/>:null}
              email</th>
            <th onClick={()=>{fieldSortData('phone')}}>
            {fieldData==='phone'?<Arrow/>:null}
              phone</th>
          </tr>
        </thead>
        
        <GetTodos/>      
               {contactData.map(
              
                 item=>(
                <tr key={item.id + item.email} onClick={()=>detailRow(item)}>
                   <td>{ 1+ firstBlockRow++ }</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.email}</td>
                   <td>{item.phone}</td>
                </tr>
                  
               ))}
           
           
      </div>
      </>
    )
}

export default Table