import React, {useState, useEffect} from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen({match}) {

        const [product, setProduct] = useState({})

        /**
         * author: md jewel
         * Featching products data
         */
        useEffect(()=>{
                const fetchProduct = async ()=>{
                        const { data } = await axios.get(`/api/products/${match.params.id}`)
                        setProduct(data);
                }
                fetchProduct();

        }, [match])

        return (
                <>
                        <Row>
                                <Col md={5}>
                                        <Image src={product.image} fluid rounded></Image>
                                </Col>

                                <Col md={4}>
                                        <Card>
                                                <ListGroup variant="flush">
                                                        <ListGroupItem as="div">
                                                                <Card.Title>{product.name}</Card.Title>
                                                        </ListGroupItem>
                                                        <ListGroupItem><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroupItem>
                                                        <ListGroupItem>Price: $ {product.price}</ListGroupItem>
                                                        <ListGroupItem>
                                                        Description : {product.description}
                                                        </ListGroupItem>
                                                </ListGroup>
                                        </Card>
                                </Col>

                                <Col md={3} >
                                       <Card>
                                        <ListGroup>
                                                        <ListGroupItem>
                                                                <Row className="py-2">
                                                                        <Col>Price</Col>
                                                                        <Col>${product.price}</Col>
                                                                </Row>
                                                                <Row className="py-2">
                                                                        <Col>Status</Col>
                                                                        <Col>{product.countInStock>0? "In Stock" : "Out Of Stock"}</Col>
                                                                </Row>

                                                                <Row fluid>
                                                                        <Button rounded className="btn btn-dark">ADD TO Cart</Button>
                                                                </Row>
                                                        </ListGroupItem>
                                                </ListGroup>
                                       </Card>
                                </Col>
                        </Row>
                </>
        )
}

export default ProductScreen
