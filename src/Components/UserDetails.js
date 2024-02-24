import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {

  // const userId = useParams();
  // const id = userId.id;
  // console.log('id :',id);
  // console.log(userId);
  const { id } = useParams();

  return (
    <div>
        <h2>User Details Page -- {id}</h2>
    </div>
  )
}

export default UserDetails