import InfoDiv from "./InfoDiv";
import UserContext from "./UserContext";
import { useContext } from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 10px;
  margin: 20px auto;
`;

const Img = styled.img`
  border: 2px solid #dddddd;
  border-radius: 20px;
`;

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <Info>
      <Img src={user.picture.large} />
      <InfoDiv value={user.gender} label="Gender" />
      <InfoDiv
        value={`${user.name.title} ${user.name.first} ${user.name.last}`}
        label="Name"
      />
      <InfoDiv value={user.dob.age} label="Age" />
      <InfoDiv value={user.email} label="Email" />
      <InfoDiv value={user.phone} label="Phone" />
      <InfoDiv
        value={`${user.location.street.number} ${user.location.street.name},
          ${user.location.city},
          ${user.location.country} ${user.location.postcode}`}
        label="Location"
      />
    </Info>
  );
}

export default UserInfo;
