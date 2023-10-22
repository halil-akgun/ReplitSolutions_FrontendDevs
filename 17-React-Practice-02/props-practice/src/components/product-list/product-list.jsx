import React from 'react'
import ProductCard from '../product-card/product-card'
import data from './data.json'
import { Col, Container, Row } from 'react-bootstrap'

const ProductList = () => {
    return (
        <Container className="my-5">
            <Row className='g-4'>
                {data.map(product => (
                    <Col key={product.id} sm={6} md={4} lg={3}>
                        <ProductCard {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList