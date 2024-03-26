import Home from "./Home";
import User from "./User";
import styled from "styled-components";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Nav = styled.nav`
  background-color: rgb(232, 232, 230);
  border-bottom: 1px solid rgb(232, 232, 230);
  height: 50px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;
const Li = styled.li`
  padding: 13px 20px;
  font-weight: 500;
`;

function Root() {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">Hem</Link>
          </Li>
          <Li>
            <Link to="/user/5">User</Link>
          </Li>
        </Ul>
      </Nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <User />, path: "/user/:quantity" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
