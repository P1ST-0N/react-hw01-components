import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import Modal from './Modal/Modal';
import IconButton from './IconButton/IconButton';
import { GlobalStyle } from './GlobalStyle';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    // todos: [],
    // filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <IconButton
          type="button"
          className="button"
          onClick={this.toggleModal}
          aria-label="Add new user"
        >
          "Add new user"
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <TodoEditor onSubmit={this.addTodo} /> */}
          </Modal>
        )}

        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />

        <GlobalStyle />
      </div>
    );
  }
}

export default App;
