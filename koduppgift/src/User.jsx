import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
`;

const Form = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const ButtonNew = styled(Button)`
  margin: 10px auto;
  display: flex;
`;

const Error = styled.div`
  color: #c22323;
  font-weight: 800;
`;
function User() {
  const { quantity } = useParams();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(quantity);

  function getUser() {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=" + input)
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          setError(true);
          return null;
        }
      })
      .then((result) => {
        if (result === null || result.results.length < 1) {
          setError(true);
        } else {
          setError(false);
          setUsers(result.results);
        }
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Container>
        <Title>Get your random user</Title>

        <Content>
          <Form>
            <Input
              onChange={(event) => setInput(event.target.value)}
              type="number"
              value={input}
            />
            {input <= 0 ? (
              <Error>Invalid input!</Error>
            ) : (
              <ButtonNew onClick={getUser} variant="success">
                Get User
              </ButtonNew>
            )}
          </Form>
          {loading && (
            <div>
              <img src="/src/assets/spinner.gif" alt="Loading..." />
            </div>
          )}
          {!error &&
            users.length > 0 &&
            users.map((user, index) => (
              <UserContext.Provider value={user} key={index}>
                <UserInfo />
              </UserContext.Provider>
            ))}
          {error && (
            <Error>
              <p>Something went wrong! Please try again.</p>
            </Error>
          )}
        </Content>
      </Container>
    </>
  );
}

export default User;
