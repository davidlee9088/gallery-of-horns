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

  render() {
    return (
     <article className="maincon">
    <img src={this.props.img} alt={this.props.name} id={this.props.id} title={this.props.title} description = {this.props.description} keyword = {this.props.keyword}
    horns = {this.props.horns}/>
    <p>❤️{this.state.favorite} Favorite Clicks</p>
    <p onClick={this.handleFavorite}>test1</p>
    <Alert>TEST!!</Alert>
    </article>

    )
  }
}

export default Hornedbeast;