import "./CartItem.scss";
import { MdClose } from 'react-icons/md' 
import prod from '../../../images/products/earbuds-prod-1.webp'

const CartItem = () => {
    return (
        <div className="cart-products" >
            <div className="search-result-item">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>X</span>
                        <span className="highlight">&#8360;456</span>
                    </div>
                </div>
            </div>
        </div>);
};

export default CartItem;
