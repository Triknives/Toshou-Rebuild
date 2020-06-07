import React, { Component } from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addGoal } from '../actions/goalActions';

class GoalsModal extends Component {
  state = {
    modal: false,
    goal: '',
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      goal: this.state.goal,
    }
    // Add item via AddItem actions
    this.props.addGoal(newGoal);
    //Close Modal
    this.toggle();
  }


  render() {
    return(
      <div>
      <Button
        color="dark"
        onClick={this.toggle}
      >Add Goal</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add Recently Read Book</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="Goal">New Goal</Label>
                <Input
                  type="text"
                  name="goal"
                    color="dark"
                  placeholder="Who Wrote it!"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Goal
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
  goal: state.goal
});
export default connect(mapStateToProps, { addGoal })(GoalsModal);
