import PropTypes from "prop-types";
import styled from "styled-components";

const Row = styled.div`
  margin: 10px 0;
`;
const Label = styled.span`
  font-weight: 800;
  display: block;
`;
const Value = styled.span`
  margin-top: 5px;
  display: block;
`;

function InfoDiv(props) {
  return (
    <Row>
      <Label>{props.label}:</Label>
      <Value>{props.value}</Value>
    </Row>
  );
}

InfoDiv.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default InfoDiv;
