import React from "react";
import Hornedbeast from "./Hornedbeast";
import Hornedbeast2 from "./Hornedbeast2";
import data from "./data.json";
import "./Main.css";

class Main extends React.Component {

  render() {
    let picture = [];
    data.forEach((ata, idx) => {
      console.log(idx);
      picture.push(
        <Hornedbeast
          id={ata._id}
          img={ata.image_url}
          descripition={ata.description}
          keyword={ata.keyword}
          title={ata.title}
          key = {idx}

          
        />
      )
    })




    return (
      <main>
        {picture}
      </main>
    )
  }
}

export default Main;