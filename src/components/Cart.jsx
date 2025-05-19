import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
    // Accessing cart items from Redux store
    const cartItem = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculating total price of all items in the cart
    const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-blue-100 px-6 py-10 flex flex-col items-center gap-6 shadow-inner">

            <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Your Shopping Cart 🛒</h2>

            {/* If cart is empty, show message and button to return to homepage */}
            {cartItem.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 bg-white p-10 rounded-xl shadow-lg">
                    <p className="text-gray-500 text-lg font-semibold">
                        Your cart 🛒 is empty. Start shopping now!
                    </p>
                    <Link
                        to="/"
                        className="mt-5 w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:scale-105 shadow-md">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="space-y-6 w-full max-w-3xl">
                    {/* Render each item in the cart using CartItem component */}
                    {cartItem.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    {/*  Cart Summary Section  */}
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-gray-800">Cart Total</h3>
                            {/* Display total cart price */}
                            <span className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Button to clear entire cart */}
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105 mb-4">
                            Clear Cart
                        </button>

                        {/* Proceed to checkout link */}
                        <Link
                            className="mt-5 w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:scale-105 shadow-md"
                            to="/checkout">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
