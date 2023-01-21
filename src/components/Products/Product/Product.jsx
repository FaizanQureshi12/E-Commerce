import "./Product.scss";
import prod from '../../../images/products/earbuds-prod-1.webp'

// for dollar currency &#36; for indian &#8377;
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Product Name</span>
            <span className="price">&#8360; 499</span>
        </div>
    </div>;
};

export default Product;
