import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useState, useContext } from "react";
import {
    FaFacebookF, FaTwitter, FaInstagram,
    FaLinkedinIn, FaPinterest, FaCartPlus,
} from "react-icons/fa";
// import prod from '../../images/products/earbuds-prod-1.webp'
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom'
import { Context } from "../../utils/context";


const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const { handleAddToCart } = useContext(Context)
    const increment = () => {
        setQuantity((prevState) => prevState + 1)
    }
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1
            return prevState - 1
        })
    }
    if (!data) return;
    const product = data?.data?.[0]?.attributes;

    return (<div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={
                        process.env.REACT_APP_DEV_URL +
                        product.img.data[0].attributes.url
                    } alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8360;&nbsp;{product.price}</span>
                    <span className="desc">{product.desc}</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span > {quantity} </span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-button"
                            onClick={() => {
                                handleAddToCart(data.data[0], quantity)
                                setQuantity(1)
                            }}>
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider">
                        <div className="info-item">
                            <span className="text-bold">
                                Category : &nbsp;
                                <span >{
                                    product.categories.data[0].attributes
                                        .title
                                }</span>
                            </span>
                            <span className="text-bold">
                                Share :
                                <span className="social-icons">

                                    <a href="https://web.facebook.com/FaizanDynamicEarth123" target='blank'>
                                        <FaFacebookF size={17} />
                                    </a>
                                    <a href="https://www.instagram.com/faizan4949/" target='blank'>
                                        <FaInstagram size={17} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/faizan-qureshi-5a667a244/" target='blank'>
                                        <FaLinkedinIn size={17} />
                                    </a>
                                    <FaPinterest size={16} />
                                    <FaTwitter size={16} />
                                </span>
                            </span>

                        </div>
                    </span>
                </div>
            </div>
            <RelatedProducts productId={id}
                categoryId={product.categories.data[0].id} />
        </div>
    </div>);
};

export default SingleProduct;
