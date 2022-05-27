import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Feedstock: React.FC = () => {
  const form = React.useRef<HTMLFormElement>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const name = form.name.value;
    const quantity = form.quantity.value;

    try {
      await axios.post('http://localhost:3001/feedstock', {
        code,
        name,
        quantity: Number(quantity),
      });

      form.reset();
      await axios.get('http://localhost:3001/feedstocks');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form ref={form} className="feedstock" onSubmit={(e) => handleSubmit(e)}>
      <h3>Register Feedstock</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Code</Form.Label>
        <Form.Control type="text" name="code" required />
        <Form.Text className="text-muted">
          Made up of letters and numbers
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" name="quantity" required />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Feedstock;