
const ProductCard = ({ name, price, Category, Availability }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Name: {name}</p>
      <p>Price: ₹{price}</p>
      <p>Category: {Category}</p>
      <p>Availability: {Availability}</p>
    </div>
  );
};

export default ProductCard;