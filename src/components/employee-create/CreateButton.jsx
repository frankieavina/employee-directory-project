import React from 'react';

const Button = ({ type = 'button', children, className, disabled }) => {
  return (
    <div className='buttonBody'>
      {type === 'submit' ? (
        <button type="submit" className={className} disabled={disabled}>
          {children}
        </button>
      ) : (
        <button type="button" className={className} disabled={disabled}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;