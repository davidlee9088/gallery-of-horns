import React from "react";


class Hornedbeast2 extends React.Component {

  render() {
    return (

      <>
      <h2>{this.props.title}</h2>
      <img src ={this.props.url} alt ="Say hi Rhino" title="Rhino"></img>
      <p>{this.props.descripition}</p>

      </>
    )
  }
}

export default Hornedbeast2;