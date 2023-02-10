import { useRef } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { v4 as uuidV4 } from "uuid"

function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create a New ID
        </Button>
      </Form>
    </Container>
  )
}

export default Login
