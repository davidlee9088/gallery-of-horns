import React from "react";
import Hornedbeast from "./Hornedbeast";
import Hornedbeast2 from "./Hornedbeast2";
import "./Main.css";

class Main extends React.Component {

  render() {
    let picture = this.props.data.map((ata, idx) => {
      return<Hornedbeast
          id={ata._id}
          img={ata.image_url}
          descripition={ata.description}
          keyword={ata.keyword}
          title={ata.title}
          key = {idx}
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