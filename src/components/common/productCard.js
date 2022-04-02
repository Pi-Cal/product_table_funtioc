import React, { useContext } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { GlobalContext } from '../../context/Provider'

export const ProductCard = ({product}) => {

    const {colorState} = useContext(GlobalContext)
    const getColor=(id)=>{
        const color = colorState.data.filter(c=>c.id == id)[0]
        return (color ? color. name : 'null')
    }
    return(
        <Row>
            <Col md='4'><Image src={product.image} className='w-100'/></Col>
            <Col md='8'>
                <Row className='fw-bold'>
                    {product.name}
                </Row>
                <Row>
                    <Col  className='fw-light' md='2'>ID: </Col><Col>{product.id}</Col>
                </Row>
                <Row>
                    <Col  className='fw-light' md='2'>SKU: </Col><Col className='text-danger'>{product.sku}</Col>
                </Row>
                <Row>
                    <Col  className='fw-light' md='2'>Color: </Col><Col>{getColor(product.color)}</Col>
                </Row>
            </Col>
        </Row>
    )
}