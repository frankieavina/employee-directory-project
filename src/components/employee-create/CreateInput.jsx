import React from 'react';

const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
  isValid,
  errorMessage = 'Invalid input',
}) => {
  return (
    <div className={isValid? 'form-group has-success formItem':'form-group has-danger formItem'}>
      <div>
       <label className='col-form-label labelStyling' htmlFor={label}>{label}: </label> 
      </div>
      <div>
        <input
            name={name}
            type={type}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={isValid ? ' inputField form-control form-control-sm is-valid' : ' inputField form-control form-control-sm is-invalid error'}
            
          />
      </div>
      <div className='error'>
        {!isValid && <p>Invalid {errorMessage}</p>} 
      </div>         
    </div>
  );
};

export default Input;