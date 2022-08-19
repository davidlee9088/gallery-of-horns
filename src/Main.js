import React from "react";
import Hornedbeast from "./Hornedbeast";
import "./Main.css";

class Main extends React.Component {

  render() {
    let picture = this.props.data.map((ata, idx) => {
      return<Hornedbeast
          id={ata._id}
          img={ata.image_url}
          description={ata.description}
          keyword={ata.keyword}
          title={ata.title}
          key = {idx}
          horns={ata.horns}
          handleShowModal={this.props.handleShowModal}

          
        />
    })




    return (
      <main>
        {picture}
      </main>
    )
  }
}

export default Main;