import { useRef } from "react"
import { Button, Form, Modal } from "react-bootstrap"

function NewContactModal({ closeModal }) {
  const idRef = useRef(null)
  const nameRef = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()
    // createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal
