import React from 'react'
// import RapCard from './RapCard'

class RapperContainer extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/rapperList")
    .then(res => res.json())
    .then(rappers => {
      console.log(rappers)
    })
  }

  render() {

    return (
      <div>
        <h1>RAP CONTAINER</h1>
      </div>
    )
  }
}

export default RapperContainer
