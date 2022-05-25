import * as React from "react";
import { Card, ListGroup } from 'react-bootstrap';
import axios from "axios";

const CardList: React.FC = () => {
  const [product, setProduct] = React.useState([]);
  const [feedstock, setFeedstock] = React.useState([]);

  React.useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const BASE_URL = 'http://localhost:3001/';

    try {
      const products = await axios.get(`${BASE_URL}products`);
      const feedstocks = await axios.get(`${BASE_URL}feedstocks`);
      console.log(products.data);

      setProduct(products.data);
      setFeedstock(feedstocks.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card>
        {product.map((p) => 
          <ListGroup variant="flush">
            <ListGroup.Item>{p.name}</ListGroup.Item>
            <ListGroup.Item>code: {p.code}</ListGroup.Item>
            <ListGroup.Item>price: {p.price}</ListGroup.Item>
          </ListGroup>      
        )}
      </Card>
      <Card>
        {feedstock.map((f) => 
          <ListGroup variant="flush">
            <ListGroup.Item>{f.name}</ListGroup.Item>
            <ListGroup.Item>code: {f.code}</ListGroup.Item>
            <ListGroup.Item>quantity: {f.price}</ListGroup.Item>
          </ListGroup>      
        )}
      </Card>
    </>
  );
}

export default CardList;
