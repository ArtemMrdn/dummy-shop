import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductList({ product }) {
  return (
    <div className='flex'>
      {product.map((productItem) => {
        const { thumbnail, category, title, description, price, stock } =
          productItem;
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src={thumbnail} />
            <Card.Body>
              <Card.Title>{category}</Card.Title>
              <Card.Subtitle>{title}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Button variant='primary'>Buy (in stock: {stock})</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductList;
