'use client';

import { useCart } from '../../lib/CartContext';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover object-top rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
          </button>
          
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="text-right">
          <p className="font-semibold text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-700 text-sm mt-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}