import React, { Fragment } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Service = () => {
    /*  */
    const params = useParams()
    console.log(params)
  return (
  <Fragment>
      <div className='text-center'>Service</div>
     <div className='text-center'> <h3>{params.number}</h3></div>
  </Fragment>
  )
}

export default Header(Service)