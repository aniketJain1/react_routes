import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <h2>Users Page...</h2>
        <h2><Link to='/users/1'>User 1</Link></h2>
        <h2><Link to='/users/2'>User 2</Link></h2>
        <h2><Link to='/users/3'>User 3</Link></h2>
        <h2><Link to='/users/admin'>admin</Link></h2>
        <Outlet/>
    </div>
  )
}

export default Users