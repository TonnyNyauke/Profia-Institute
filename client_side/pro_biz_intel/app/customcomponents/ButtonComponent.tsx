import React from 'react'

interface CustomButton {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
}

function ButtonComponent({children, className, onClick} : CustomButton) {
  return (
    <button
    className={`${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default ButtonComponent