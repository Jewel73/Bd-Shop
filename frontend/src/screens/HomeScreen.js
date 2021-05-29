import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { productListAction } from '../redux/actions/productAction';

export default function HomeScreen() {
        
        const productList = useSelector((state) => state.productList)
        const { loading, error, products } = productList
       
        const dispatch = useDispatch()
        useEffect(()=>{
                dispatch(productListAction())
        }, [dispatch])
        
  
        return (
                <>
                        <Row>
                        {loading? <Spinner/> : error? <Message color="red" />: products.map(product =>(
                                <Col key={product._id} sm={12} md={6} lg={3}>
                                        <Product product = {product} />
                                </Col>
                        ))}
                        </Row>
                </>
        )
}
