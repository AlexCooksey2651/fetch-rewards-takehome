import { useState, useEffect } from "react";
import SearchUserForm from "./components/SearchUserForm";
import Container from 'react-bootstrap/Container';


function App() {
  const [user, setUser] = useState({});
  



  return (
    <Container>
      <SearchUserForm />
    </Container>
  );
}

export default App;
