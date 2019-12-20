import React from "react";
import { Card, CardBody, Col, CardHeader, Container } from "reactstrap";
import styled from "styled-components";

const MyCardColors = styled.div`
  color: brown;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MyCardTitle = styled.div`
  color: blue;
  font-size: 1.5rem;
`;

export default function LocationCard(props) {
  return (
    <div>
      <Container>
        <div className="card-list">
          {/* <Col xs="6" md="4" xl="3"> */}
          <Card>
            <CardHeader> Name: </CardHeader>
            <MyCardTitle>{props.character.name} </MyCardTitle>
            <CardBody>
              <MyCardColors>Type: {props.character.type}</MyCardColors>
              <MyCardColors>
                Dimension: {props.character.dimension}
              </MyCardColors>
              <MyCardColors>
                Residents: {props.character.residents}
              </MyCardColors>
            </CardBody>
          </Card>
          {/* </Col> */}
        </div>
      </Container>
    </div>
  );
}
