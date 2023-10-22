import Card from 'react-bootstrap/Card';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './product-card.scss';

const ProductCard = ({ image, title, price, rate, discount }) => {

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<AiFillStar key={`star-${i}`} />);
    } else {
      stars.push(<AiOutlineStar key={`star-${i}`} />);
    }
  }


  return (
    <Card className='product-card' as={'a'} href='#'>
      <Card.Img
        variant="top"
        src={`assets/products/${image}`}
        alt={title}
      />
      {discount ? <span className="discount">-{discount}%</span> : null}
      <Card.Body>
        <div className="rating">
          {stars}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {discount ?
            <><span className="old-price">{price}</span><span className="price">{price - (price * discount) / 100}</span></>
            :
            <span className="price">{price}</span>}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard