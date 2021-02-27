import React from 'react'

const Header = (props) => {
  return (
    <header className="page-header">                 
     <h1 className="text-center">{props.children}</h1>
    </header>
  )
}

export default Header
