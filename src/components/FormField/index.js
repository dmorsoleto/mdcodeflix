import React from 'react';

function FormField({ label, name, type, value, onChange }) {

     let elem = <input
                         type={type}
                         value={value}
                         name={name}
                         onChange={onChange}
                    />

     if(type === "textarea")
     {
          elem = <textarea
               type={type}
               value={value}
               name={name}
               onChange={onChange}
          />
     }

     return (
          <div>
               <label>
                    {label}
                    {elem}
               </label>
          </div>
     )
}

export default FormField;