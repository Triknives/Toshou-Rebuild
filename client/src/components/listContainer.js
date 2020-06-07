import React from 'react';
import FavoritesList from './FavoritesList';
import FavoritesModal from './FavoritesModal';
import GoalsList from './GoalsList';
import GoalsModal from './GoalsModal';
import BookQueue from './BookQueue';
import QueueModal from './QueueModal';

const listContainerAtt = {
  display:'flex',
  flexDirection:'row',
  width:'100%',

}

function ListContainer()  {

  return(
    <div style = {listContainerAtt}>
      <FavoritesList/>
      <BookQueue/>
      <GoalsList/>
    </div>
  )
}

export default ListContainer;
