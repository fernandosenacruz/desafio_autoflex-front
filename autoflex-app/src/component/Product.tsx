import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Product: React.FC = () => {
  const form = React.useRef<HTMLInputElement>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const name = form.name.value;
    const price = form.price.value;

    try {
      await axios.post('http://localhost:3001/product', {
        code,
        name,
        price: Number(price),
      });

      form.reset();
      await axios.get('http://localhost:3001/products');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form ref={form} className="product" onSubmit={(e) => handleSubmit(e)}>
      <h3>Register Product</h3>
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
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" required />
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

export default Product;
