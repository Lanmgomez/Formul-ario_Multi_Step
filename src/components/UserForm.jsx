import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className='form-control'>
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          name='name'
          id='name'
          placeholder='Digite o seu nome'
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          value={data.name || ""}
          required  
        />
      </div>
      <div className='form-control'>
        <label htmlFor="name">E-mail:</label>
        <input 
          type="email" 
          name='email'
          id='email'
          placeholder='Digite o seu e-mail'
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          value={data.email || ""}
          required  
        />
      </div>
    </div>
  )
}

export default UserForm