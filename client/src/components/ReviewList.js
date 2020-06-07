import React, { Component } from 'react';
import {   Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , Button, Container} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ReviewModal from './reviewModal';
import { getReviews, deleteReview } from '../actions/reviewActions';
import PropTypes from 'prop-types';

const reviewStyling = {
  display:'inline_block',
  justifyContent:'center',
  width: '100%'
}

const reviewBodyStyling = {
  padding:'1vh',
  backgroundColor: 'black',
  opacity:'.75',
  margin: '1vh auto',
  width: '70%',
}
const textStyling = {
  marginLeft: '-20px',
  color: 'white',
  fontWeight: '600',
}

const reviewText = {
  color: 'yellow',
  fontWeight: '600',
}

class ReviewList extends Component {
  componentDidMount(){
    this.props.getReviews();
  }
  onDeleteClick = (id) => {
    this.props.deleteReview(id);
  };

  render() {

    const { reviews } = this.props.review;
    return(

      <div style = {reviewStyling}>
      {reviews.map(({_id, title, author, post}) => (
        <Card style = {reviewBodyStyling}>
          <div style = {reviewText}>
            <h5>{title}</h5>
            <h6>{author}</h6>
          </div>
            <CardBody>
              <div style ={textStyling}>
              {post}
              </div>
          </CardBody>
          <Button
            block
            className="remove-btn"
            color="dark"
            size="sm"
            onClick={this.onDeleteClick.bind(this, _id)}
          >
          Remove
          </Button>
        </Card>
      ))}
    </div>
    );
  }
}
ReviewList.propTypes = {
  getReviews: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  review: state.review
});

export default connect(mapStateToProps, { getReviews, deleteReview })(ReviewList);
