import React, {useState} from 'react'

const InputForm = ({ getInputFormData}) => {

   const [isFormOpen, setIsFormOpen] = useState(false);
   const [id, setIsId] = useState('')
   const [firstName, setIsFirstName] = useState('')
   const [lastName, setIsLastname] = useState('')
   const [email, setIsEmail] = useState('')
   const [phone, setIsPhone] = useState('')


   const submitHandler = (e) => {
            e.preventDefault();
            getInputFormData({id,firstName,lastName,email,phone})
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

<form className="needs-validation" onSubmit={submitHandler} >
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
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
}
</>
)
}
export default InputForm