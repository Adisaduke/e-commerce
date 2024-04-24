import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import Card from "./ui/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems, removeFromCart }) => {
  const [price, setPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(() => {
    // Calculate delivery fee only once when the cart is first loaded
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  });
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach((product) => console.log(product.title));
  }

  getProducts();

  useEffect(() => {
    // Check if quantity is already initialized for each item
    const isQuantityInitialized = cartItems.every(
      (item) => typeof item.quantity !== "undefined"
    );

    // If quantity is not initialized for any item, initialize it to 1
    if (!isQuantityInitialized) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => ({ ...item, quantity: item.quantity || 1 }))
      );
    }
  }, [cartItems, setCartItems]);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Recalculate subtotal when cart items or their quantities change
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      console.log("Price:", item.price, "Quantity:", item.quantity);
      totalPrice += parseFloat(item.price) * item.quantity;
    });
    setPrice(totalPrice.toFixed(2));
  }, [cartItems]);

  const total_price =
    !isNaN(deliveryFee) && !isNaN(price)
      ? parseFloat(deliveryFee) + parseFloat(price)
      : 0;

  return (
    <div className={styles.everything}>
      <hr className={styles.cart_horizontal_top} />
      <div className={styles.cart_container}>
        <div className={styles.cart_headings}>
          <h1>YOUR CART</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className={styles.no_prouct_in_cart}>
            <Card> No product added to your cart</Card>
          </div>
        ) : (
          <div className={styles.cart_content}>
            <div className={styles.cart_left}>
              <Card>
                <div className={styles.card_containers}>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </div>
              </Card>
            </div>
            <div className={styles.cart_right}>
              <Card>
                <div className={styles.card_containers}>
                  <div className={styles.order_content}>
                    <p className={styles.order_summary}>Order Summary</p>
                    <p>
                      Subtotal
                      <span className={styles.cart_order_span}>${price}</span>
                    </p>
                    <p>
                      Delivery Fee
                      <span className={styles.cart_order_span}>
                        ${deliveryFee}
                      </span>
                    </p>
                    <hr className={styles.cart_horizontal_line} />
                    <p>
                      Total
                      <span className={styles.cart_order_span}>
                        ${total_price}
                      </span>
                    </p>
                  </div>
                  <div className={styles.order_aply_buttton}>
                    <input placeholder="Add promo code" />
                    <button>Apply</button>
                  </div>
                  <div className={styles.checkout_order_button}>
                    <Link to="/checkout">
                      <button>Go to Checkout</button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1); // Initialize quantity with the quantity from props

  const HandleProductClick = () => {
    navigate(`/product/${item.id}`);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity); // Pass the updated quantity directly
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity); // Pass the updated quantity directly
    }
  };
  return (
    <div className={styles.each_cart_content}>
      <div className={styles.cart_details_container}>
        <div className={styles.cart_left_left}>
          <div className={styles.cart_image}>
            <img
              src={item.image}
              alt="cart_images"
              onClick={HandleProductClick}
            />
          </div>
          <div className={styles.cart_items}>
            <p onClick={HandleProductClick}>{item.product_name}</p>
            <p>
              Size: <span>Large</span>
            </p>
            <p>
              Color: <span>White</span>
            </p>
            <p>${item.price}</p>
          </div>
        </div>
        <div className={styles.delete_add_button}>
          <div
            className={styles.delete_icon}
            onClick={() => removeFromCart(item)}
          >
            <MdOutlineDeleteForever />
          </div>
          <div className={styles.add_minus}>
            <button onClick={decreaseQuantity} className={styles.remove_button}>
              -
            </button>
            <span className={styles.item_count}>{quantity}</span>
            <button onClick={increaseQuantity} className={styles.add_button}>
              +
            </button>
          </div>
        </div>
      </div>
      <hr className={styles.cart_horizontal_line} />
    </div>
  );
};

export default Cart;
