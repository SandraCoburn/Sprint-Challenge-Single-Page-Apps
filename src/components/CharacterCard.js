import React from "react";
import { Card, CardBody, Col, CardHeader } from "reactstrap";
import styled from "styled-components";

const MyCardColors = styled.div`
  color: brown;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MyCardTitle = styled.div`
  color: blue;
  font-size: 1rem;
`;

export default function CharacterCard(props) {
  console.log(props);
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardHeader> Name: </CardHeader>
        <MyCardTitle>{props.character.name} </MyCardTitle>
        <CardBody>
          <MyCardColors>Gender: {props.character.gender}</MyCardColors>
          <MyCardColors>Species: {props.character.species}</MyCardColors>
          <MyCardColors>Status: {props.character.status}</MyCardColors>
        </CardBody>
      </Card>
    </Col>
  );
}
