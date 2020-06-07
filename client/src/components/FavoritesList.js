import React, { Component } from 'react';
import { Container ,Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import FavoritesModal from './FavoritesModal';
import { getFinishedBooks, deleteFinishedBook } from '../actions/finishedBookActions';
import PropTypes from 'prop-types';

const tGroup = {
  width:'34%',
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

class FavoritesList extends Component {
  componentDidMount(){
    this.props.getFinishedBooks();
  }
  onDeleteClick = (id) => {
    this.props.deleteFinishedBook(id);
  };
  render() {

    const { finishedBooks } = this.props.finishedBook;
    return(
        <div style = {tGroup}>
        <h5 style = {listHeader}> Recently Finished </h5>
            {finishedBooks.map(({_id, name, author}) => (
            <ul style = {listBody}>
                <li>
                <button Button color= "danger" class= "deleteBtn" onClick={this.onDeleteClick.bind(this, _id)}>
                    &times;
                  </button>
              {name} | {author}
                </li>
            </ul>
            ))}
          <FavoritesModal/>
        </div>
      );
    }
  }
FavoritesList.propTypes = {
  getFinishedBooks: PropTypes.func.isRequired,
  finishedBook: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  finishedBook: state.finishedBook
});

export default connect(mapStateToProps, { getFinishedBooks, deleteFinishedBook })(FavoritesList);
