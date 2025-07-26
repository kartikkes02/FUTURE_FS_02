'use client';

import { useCart } from '../../lib/CartContext';

interface OrderSummaryProps {
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }>;
}

export default function OrderSummary({ cartItems }: OrderSummaryProps) {
  const { getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover object-top rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mb-6 border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center">
          <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center mr-2"></i>
          <span>Secure SSL encrypted payment</span>
        </div>
        <div className="flex items-center">
          <i className="ri-truck-line w-4 h-4 flex items-center justify-center mr-2"></i>
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="flex items-center">
          <i className="ri-refund-line w-4 h-4 flex items-center justify-center mr-2"></i>
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}