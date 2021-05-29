import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link } from 'react-router-dom'

export default function Product({product}) {
        return (
                <Card className="my-2 mb-2 p-3">
                        <Link to={`/products/${product._id}`}>
                                 <Card.Img  variant="top" src={product.image} />
                        </Link> 
                        <Card.Body>
                                <Link to={`/products/${product._id}`}>
                                        <Card.Title  className="" as="div"><strong>{product.name}</strong></Card.Title>
                                </Link> 
                               
                                <Card.Text as='div' className="my-3" >
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                </Card.Text>
                                <Card.Text as= 'h4'> ${product.price}</Card.Text>
                        </Card.Body>
                        
                </Card>
        )
}
