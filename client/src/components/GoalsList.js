import React, { Component } from 'react';
import { Container , Button} from 'reactstrap';
import { connect } from 'react-redux';
import { getGoals, deleteGoal } from '../actions/goalActions';
import GoalsModal from './GoalsModal';
import PropTypes from 'prop-types';

const tGroup = {
  width: '34%',
  backgroundColor: 'black',
  opacity:'.75',
  margin: '1vh',
  padding:'1vh',
  }

const listBody = {
  color: 'white',
  fontWeight: '600',
  fontSize:'1rem',
}

const listHeader = {
  opacity:'1',
  color:'yellow',
}

class GoalsList extends Component {
  componentDidMount(){
    this.props.getGoals();
  }
  onDeleteClick = (id) => {
    this.props.deleteGoal(id);
  };
  render() {
    const { goals } = this.props.goal;

    return(

      <div style = {tGroup}>
          <h5 style = {listHeader}>Reading Goals</h5>
          {goals.map(({_id, goal}) => (
        <ul style = {listBody}>
              <li>
              <Button class="deleteBtn" color="danger" onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </Button>
              {goal}
              </li>
          </ul>
          ))}
        <GoalsModal/>
      </div>
    );
  }
}
GoalsList.propTypes = {
  getGoals: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  goal: state.goal
});

export default connect(mapStateToProps, { getGoals, deleteGoal })(GoalsList);
