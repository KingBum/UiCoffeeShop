import React from 'react'

export default function Heading({title, mainTitle}) {
  return (
    <h1 className="heading"> {title} <span>{mainTitle}</span> </h1>
  )
}
