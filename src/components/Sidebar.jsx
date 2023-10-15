import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (Component) => {
  
  const NewSidebar = ()=>{
    return(
<div className='row'>
  <div className='col-2 sidebar'>
    <h2>Sidebar</h2>
    <Link to = '/form' className='formlink'>Form</Link> <br />
    <Link to = '/table' className='tablelink mt-4'>Table</Link>
  </div>

  <div className='col-10'>
    <Component />
  </div>

</div>
    )
  }
  return NewSidebar
}

export default Sidebar

