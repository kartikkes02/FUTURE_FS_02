'use client';

import Link from 'next/link';
import { useCart } from '../../lib/CartContext';

export default function OrderSummary() {
  const { cartItems, getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
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

      {subtotal < 50 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
          <p className="text-sm text-yellow-800">
            <i className="ri-information-line w-4 h-4 flex items-center justify-center inline mr-1"></i>
            Add ${(50 - subtotal).toFixed(2)} more for free shipping!
          </p>
        </div>
      )}

      <Link href="/checkout" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center whitespace-nowrap">
        Proceed to Checkout
      </Link>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center inline mr-1"></i>
          Secure checkout with SSL encryption
        </p>
      </div>
    </div>
  );
}