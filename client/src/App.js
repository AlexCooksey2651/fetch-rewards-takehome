import { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import SearchUserForm from "./components/SearchUserForm";
import NewTransactionForm from "./components/NewTransactionForm";
import SpendPointsForm from "./components/SpendPointsForm";
import PayerPointBalances from "./components/PayerPointBalances";
import Container from 'react-bootstrap/Container';

const exampleUser = {
  name: "Alex",
  transactions: [
    {
      payer: "DANNON",
      points: 1000,
      remaining: 1000,
      timestamp: "2020-11-02T14:00:00Z" 
    },
    {
      payer: "UNILEVER",
      points: 5000,
      remaining: 5000,
      timestamp: "2020-10-31T11:00:00Z" 
    },
    {
      payer: "MILLER COORS",
      points: 100,
      remaining: 100,
      timestamp: "2020-11-01T14:00:00Z" 
    },{
      payer: "DANNON",
      points: 500,
      remaining: 200,
      timestamp: "2020-10-13T14:00:00Z" 
    },
  ],

}


function App() {
  const [user, setUser] = useState(exampleUser);
  
  const totalPoints = user.transactions.reduce((a,b) => a + b.remaining, 0)

  



  return (
    <Container>
      <AddUserForm />
      <SearchUserForm />
      <br />
      <Container>
        <p>{user.name}'s Total Points: {totalPoints}</p>
      </Container>
      <PayerPointBalances user={user}/>
      <hr />
      <NewTransactionForm />
      <hr />
      <SpendPointsForm />
      
    </Container>
  );
}

export default App;
