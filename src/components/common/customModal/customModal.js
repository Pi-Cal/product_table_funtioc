import { Modal, Button, Container } from "react-bootstrap"
import React from 'react'
import { ProductCard } from "../productCard"
import './styles.css'
export const CustomModal = ({title, handleClose, show, data}) => {

    return <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="customModalBody overflow-auto" styles={{maxHeight: '70vh'}}>
            {data&&data.map((product, index)=>(<ProductCard product={product} key={index}/>))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
}