import React from "react";
import Alert from 'react-bootstrap/Alert';
import './Hornedbeast.css';


class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0, 
    }
  }
// event handler 
  handleFavorite = () => {
    //code to update favorite
this.setState({
  favorite: this.state.favorite + 1
});
  };
  
handleAlertClick = () => {
  console.log('ih');
  this.props.handleShowModal(this.props.img,this.props.title,this.props.description)
}



  render() {
    return (
     <article className="maincon">
    <img onClick ={this.handleAlertClick}src={this.props.img} alt={this.props.name} id={this.props.id} title={this.props.title} description = {this.props.description} keyword = {this.props.keyword}
    horns = {this.props.horns}/>
    <p onClick={this.props.handleShowModal}>❤️{this.state.favorite} Hearted amount/Favorite </p>
    <p onClick={this.handleFavorite}>Click test</p>
    <Alert>TEST!! ALERT</Alert>
    </article>

    )
  }
}

export default Hornedbeast;