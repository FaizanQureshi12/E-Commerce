import "./Product.scss";
import { useNavigate } from 'react-router-dom'

// import prod from '../../../images/products/earbuds-prod-1.webp'

// for dollar currency &#36; for indian &#8377;
const Product = ({ data, id }) => {
    const navigate = useNavigate();

    return (<div className="product-card" id="products"
        onClick={() => navigate('/product/' + id)} >
        <div className="thumbnail">
            <img src={
                process.env.REACT_APP_DEV_URL +
                data.img.data[0].attributes.url
            } alt="" />
        </div>
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8360; {data.price}</span>
        </div>
    </div>
    );
};

export default Product;
