import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <p>Admin Layout</p>
        <Outlet/>
    </div>
  )
}

export default AdminLayout