import React,{useState, useEffect} from 'react'
// import products from '../products'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

export default function HomeScreen() {
        const [products, setProducts]= useState([])

        useEffect(()=>{
                const featchProducts = async ()=>{
                        const {data} = await axios.get('/api/products');
                        setProducts(data);
                }

                featchProducts()
        }, [])

        return (
                <>
                        <Row>
                        {products.map(product =>(
                                <Col key={product._id} sm={12} md={6} lg={3}>
                                        <Product product = {product} />
                                </Col>
                        ))}
                        </Row>
                </>
        )
}
