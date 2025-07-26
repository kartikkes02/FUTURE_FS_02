'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/CartContext';
import { useAuth } from '../../lib/AuthContext';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-shopping-cart-line w-24 h-24 flex items-center justify-center text-6xl text-gray-400 mx-auto mb-6"></i>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart before checkout.</p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleOrderSubmit = async (formData: any) => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save order to localStorage (simulating backend)
    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cartItems,
      total: getTotalPrice() + (getTotalPrice() > 50 ? 0 : 9.99) + (getTotalPrice() * 0.08),
      customerInfo: formData,
      status: 'confirmed'
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('shopease-orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('shopease-orders', JSON.stringify(existingOrders));
    
    clearCart();
    setOrderComplete(true);
    setIsProcessing(false);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line w-8 h-8 flex items-center justify-center text-2xl text-green-600"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed and will be processed shortly.</p>
          <div className="space-y-3">
            <Link href="/profile" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center whitespace-nowrap">
              View Order History
            </Link>
            <Link href="/products" className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors block text-center whitespace-nowrap">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
          <div className="flex items-center mt-4 space-x-2 text-sm text-gray-600">
            <Link href="/cart" className="hover:text-blue-600">Cart</Link>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
            <span className="text-blue-600">Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm onSubmit={handleOrderSubmit} isProcessing={isProcessing} />
          </div>
          
          <div>
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}