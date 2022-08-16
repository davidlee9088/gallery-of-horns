import React from "react";


class Hornedbeast extends React.Component {

  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src ={this.props.url} alt ="Say hi Unicorn" title="Unicorn"></img>
      <p>{this.props.descripition}</p>

      </>

    )
  }
}

export default Hornedbeast;