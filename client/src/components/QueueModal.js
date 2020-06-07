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
import { addItem } from '../actions/queueActions';
import PropTypes from 'prop-types';

class QueueModal extends Component {
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

    const newItem = {
      name: this.state.name,
      author: this.state.author
    }
    // Add item via AddItem actions
    this.props.addItem(newItem);

    //Close Modal
    this.toggle();
  }

  render() {
    return(
      <div>
      <Button
        color="dark"
        onClick={this.toggle}
      >Next Book</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add Next Book You Want</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="Author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  placeholder="Who Wrote it!"
                  onChange={this.onChange}
                />
                <Label for="item">Add Next Book</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Add The Next Book You Want!"
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
  item: state.item,
  isAthenticated: state.auth.isAthenticated
});
export default connect(mapStateToProps, { addItem })(QueueModal);
