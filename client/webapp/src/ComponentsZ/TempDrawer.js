import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from "@mui/material/Typography";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import DrawerCard from './DrawerCard';
import productsArray from '../testProducts';
import FileBase from 'react-file-base64'
import drinksArray from '../testBeverages';

export default function TempDrawer(props) {
    const [toggle, setToggle] = useState(false)
    const [newProduct, setNewProduct] = useState([{
        title: '',
        price: '',
        img: '',
        show: false,
    }])
const [products, setProducts] = useState([])
useEffect(() =>{
    setProducts(productsArray)
    // if(props.label === 'Beverages'){
    //     setProducts(drinksArray)
    // } else {
    //     setProducts(productsArray)
    // }
    
},[newProduct])

const toggleForm = (e) =>{
    e.preventDefault()
    if(!toggle){
        setToggle(true)
    } else{
        setToggle(false)
    }
    console.log(toggle)
}

const handleSubmit = (e) =>{
    e.preventDefault(e)
    setNewProduct({...newProduct, show: true})
    setToggle(true)
}

const test = () =>{
    console.log(props.label)
}


return (
  <>
    <Drawer
        onClick={test}
      anchor="right"
      open={props.opener}
      onClose={() => props.setOpener(false)}
    >
      <Box p={2} width="60vh" role="presentation">
        <Typography>{props.label}</Typography>
        <Button onClick={toggleForm}>+</Button>
        {!toggle ? "" : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Control name="title" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value})} type="text" placeholder="Enter Product Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})} type="text" placeholder="Enter Price ($)" />
            </Form.Group>
            <div>
                <FileBase
                type="file"
                multiple={false}
                onDone= {({base64}) => setNewProduct({...newProduct, img: base64 })}
                />
            </div>
            <Button onClick={handleSubmit}>Add new product</Button>
          </Form>
        )}
        <Container>
          <Row xs={12} md={12} lg={12}>
            {products.map((product) => (
              <Col>
                <DrawerCard product={product} />
              </Col>
            ))}
                
                {!newProduct.show ? "Test1" : <Col>
                    <DrawerCard product={newProduct} />
                </Col>}
                
                {}
            
           
          </Row>
        </Container>
      </Box>
    </Drawer>
  </>
);
}