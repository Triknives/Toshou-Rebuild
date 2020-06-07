import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addFinishedBook } from '../actions/finishedBookActions';

class FavoritesModal extends Component {
  state = {
    modal: false,
    name: '',
    author:''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newFinishedBook = {
      name: this.state.name,
      author:this.state.author
    }
    // Add item via AddItem actions
    this.props.addFinishedBook(newFinishedBook);

    //Close Modal
    this.toggle();
  }

  render() {
    return(
      <div>
      <Button
        color="dark"
        onClick={this.toggle}
      >Add Book</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add Favorite Book!</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="Author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  placeholder="Add a favorite of yours!"
                  onChange={this.onChange}
                />
                <Label for="item">Book</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Add a favorite of yours!"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Book
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { addFinishedBook})(FavoritesModal);
