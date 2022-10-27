import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DrawerCard = (product) => {
    const item = product.product
    return(


    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">${item.price}</Button>
    </Card.Body>
  </Card>
      )
}

export default DrawerCard