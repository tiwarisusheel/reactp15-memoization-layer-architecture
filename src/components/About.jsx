import React from "react"

const About = ({users}) => {
    console.log("About rendering....")
  return (
    <div>
      <h1>About</h1>
      <p>{users.name}</p>
    </div>
  )
}

export default React.memo(About, (prevProps, nextProps)=>{
  return prevProps.users.name === nextProps.users.name
})