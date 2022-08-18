import React from "react";
import Modal from 'react-bootstrap/Modal'
import Image from "react-bootstrap/Image";



class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.img}
            fluid alt="test"/>
          <p>
            {this.props.description}
          </p>
        </Modal.Body>

      </Modal>
    )

  }


}






export default SelectedBeast;
