import React, { Component } from 'react';
import { Container , Button} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/queueActions';
import QueueModal from './QueueModal';
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

class BookQueue extends Component {

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAthenticated: PropTypes.bool,
  }
  componentDidMount(){
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;

    return(
      <div style = {tGroup}>
          <h5 style = {listHeader}>Book Queue</h5>
          {items.map(({_id, name, author}) => (
        <ul style = {listBody}>
              <li>
              <button
              class= "deleteBtn"
              color= "danger"
              onClick={this.onDeleteClick.bind(this, _id)}
              >
                &times;
              </button>
              {name} | {author}
              </li>
          </ul>
          ))}
        <QueueModal/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAthenticated,
});

export default connect(mapStateToProps, { getItems, deleteItem })(BookQueue);
