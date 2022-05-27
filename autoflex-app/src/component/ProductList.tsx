import * as React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const ProductList: React.FC = () => {
  const [productFeedstock, setProductFeedstock] = React.useState([]);

  React.useEffect(() => {
    getProductList();
  },[]);

  const getProductList = async () => {
    const BASE_URL = 'http://localhost:3001/';

    try {
      const productList = await axios.get(`${BASE_URL}associations`);  
      
      console.log(productList.data);
      setProductFeedstock(productList.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container_product-list">
      <Card className="product-list">
        {productFeedstock.map((p) =>
          <ListGroup className="product-list-item">
            <ListGroup.Item>code: {p.product.code}</ListGroup.Item>
            <ListGroup.Item>price: {p.product.price}</ListGroup.Item>
            <ListGroup.Item>{p.product.name}</ListGroup.Item>
            <ListGroup.Item>{p.feedstock.name}</ListGroup.Item>
            <ListGroup.Item>code: {p.feedstock.code}</ListGroup.Item>
            <ListGroup.Item>quantity: {p.feedstock.quantity}</ListGroup.Item>
          </ListGroup>
        )};
      </Card>
    </div>
  );
}

export default ProductList;