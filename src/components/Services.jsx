import React from 'react'

const Services = ({greet}) => {
    console.log("Services rendering")
    greet();
  return (
    <div>Services</div>
  )
}

export default React.memo(Services)