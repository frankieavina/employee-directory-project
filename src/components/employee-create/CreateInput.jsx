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
    <section className={!isValid ? 'error' : ''}>
      <label htmlFor={label}>
        {label}:
        <input
          name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </label>
      {!isValid && <p>Error: {errorMessage}</p>}
    </section>
  );
};

export default Input;