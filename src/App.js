import React from "react";
import './App.css'
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      img: "",
      title: "",
      description: "",
      horns: "",
      sorted: "",
      data:data,
    };
  }
  handleShowModal = (img, title, description, horns) => {
    console.log(img);
    this.setState({
      showModal: true,
      img: img,
      title: title,
      description: description,
      horns: horns
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  // handleSubmit = event => {
  //   let hornPicked = event.target.horns.value;
  //   event.prevent.default();
  //   this.setState({
  //     sorted: hornPicked,

  //   });
  // }

  handleSelect = event => {
    let hornPicked = parseInt(event.target.value);
    let rawData = data;
    if (hornPicked) {
      rawData = data.filter(num => num.horns === hornPicked);
    }
    this.setState({
      data: rawData
    });
    console.log(data)
};







render() {
  return (
    <>
      <Header

      />
      <Main
        data={this.state.data}
        handleShowModal={this.handleShowModal}
      />
      <SelectedBeast
        handleHideModal={this.handleHideModal}
        img={this.state.img}
        showModal={this.state.showModal}
        title={this.state.title}
        description={this.state.description}
        horns={this.state.horns}
      />
      <Form>
        <p>Choose which horned beasts you want:</p>
        <Form.Select name="selected" onChange={this.handleSelect}>
          <option value="">ALL</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>





      </Form>


      <Footer
      />
    </>)
}
}



export default App;