import React from 'react';
import {Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';

export const ListComponent = ({list}) => {
  return (
    <Card body>
      <Row>
        <Col sm="6">Title</Col>
        <Col sm="6">Notes</Col>
      </Row>
      {renderItem(list)}
    </Card>
  );
};

const renderItem = list => {
  return list.map(item => {
    return (
      <Row key={item.title}>
        <Col sm="6">{item.title}</Col>
        <Col sm="6">{item.notes}</Col>
      </Row>
    );
  });
};
