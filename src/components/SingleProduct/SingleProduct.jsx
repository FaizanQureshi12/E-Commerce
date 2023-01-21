import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF, FaTwitter,FaInstagram,
    FaLinkedinIn, FaPinterest,FaCartPlus,
} from "react-icons/fa";
import prod from '../../images/products/earbuds-prod-1.webp'

const SingleProduct = () => {
    return (<div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">detail</div>
            </div>
        </div>
    </div>);
};

export default SingleProduct;
