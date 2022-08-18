import React from "react";
import './App.css'
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      img: "",
      title: "",
      description:"",
    };
  }
  handleShowModal = (img,title,description) => {
    console.log(img);
    this.setState({
      showModal: true,
      img: img,
      title: title,
      description: description,
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }



  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast
        handleHideModal={this.handleHideModal}
        img={this.state.img}
        showModal = {this.state.showModal}
        title={this.state.title}
        description={this.state.description}
        
        />
        <Footer
        />
      </>)
  }
}

export default App;