import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import BookQueue from './components/BookQueue';
import ReviewList from './components/ReviewList';
import FavoritesList from './components/FavoritesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import QueueModal from './components/QueueModal';
import FavoritesModal from './components/FavoritesModal';
import ReviewModal from './components/reviewModal';
import GoalsList from './components/GoalsList';
import GoalsModal from './components/GoalsModal';
import ListContainer from './components/listContainer';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions.js';


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Container>
          <AppNavbar/>
          <ListContainer/>
          <ReviewModal/>
          <ReviewList/>
          </Container>
          </div>
      </Provider>
    );
  }
}
export default App;
