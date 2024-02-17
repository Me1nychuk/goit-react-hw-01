import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import userData from '../userData.json';
import friends from "../friends.json";
import transactions from "../transactions.json";
import './App.css';

function App() {

  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
