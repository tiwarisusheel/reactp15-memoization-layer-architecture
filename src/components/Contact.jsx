import React from 'react'

const Contact = ({users}) => {
    console.log("Contact rendring....")
  return (
    <div>
        <h1>Contact</h1>
        <p>{users.name}</p>
    </div>
  )
}

export default React.memo(Contact, (prevProps, nextProps)=>{
    return prevProps.users.id === nextProps.users.id
});