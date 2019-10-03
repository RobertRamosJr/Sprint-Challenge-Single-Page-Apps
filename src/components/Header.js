import React from "react"
import styled from "styled-components"

const Style = styled.header`
  text-align: center;
  background: lightgray;
  h1 {
    color: white;
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
  }
`

export default function Header() {
  return (
    <Style className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </Style>
  ) 
}
