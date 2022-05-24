import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

// type Props = {
//   label: string;
//   count: number;
//   onIncrement: () => void;
// };

const Feedstock: React.FC = props => {
  // const { label, count, onIncrement } = props;

  // const handleIncrement = () => {
  //   onIncrement();
  // };

  return (
    <Form>
      <h3>Register Feedstock</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Code</Form.Label>
        <Form.Control type="text" required />
        <Form.Text className="text-muted">
          Made up of letters and numbers
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" required />
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