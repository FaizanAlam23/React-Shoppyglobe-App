import { useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart, decreaseQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white p-4 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] gap-4 sm:gap-6 rounded-lg">
            
            {/* Image and Info Container */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Product Image */}
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-gray-300"
                />

                {/* Product Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 max-w-[180px] sm:max-w-none truncate">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 font-medium">${item.price}</p>
                </div>
            </div>

            {/* Quantity &&  Delete Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                {/* Quantity Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-gray-500 text-white px-2 sm:px-3 py-2 rounded-l hover:bg-gray-600 transition duration-300"
                    >
                        <FaMinus />
                    </button>

                    <span className="text-lg font-bold">{item.quantity}</span>

                    <button
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-green-500 text-white px-2 sm:px-3 py-2 rounded-r hover:bg-green-600 transition duration-300 transform hover:scale-110"
                    >
                        <FaPlus />
                    </button>
                </div>

                {/* Remove Button */}
                <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
