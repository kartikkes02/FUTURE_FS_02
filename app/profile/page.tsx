// 'use client';

// import { useAuth } from '../../lib/AuthContext';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface Order {
//   id: number;
//   date: string;
//   items: Array<{
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//   }>;
//   total: number;
//   status: string;
// }

// export default function ProfilePage() {
//   const { user, logout } = useAuth();
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     if (user) {
//       const savedOrders = JSON.parse(localStorage.getItem('shopease-orders') || '[]');
//       setOrders(savedOrders);
//     }
//   }, [user]);

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Please log in</h1>
//           <p className="text-gray-600 mb-8">You need to be logged in to view your profile.</p>
//           <Link href="/login" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
//             Log In
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white py-8 px-4">
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>
//           <p className="text-gray-600 mt-2">Manage your account and view your order history</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="text-center mb-6">
//                 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <i className="ri-user-line w-10 h-10 flex items-center justify-center text-2xl text-blue-600"></i>
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
//                 <p className="text-gray-600">{user.email}</p>
//               </div>
              
//               <div className="space-y-3">
//                 <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold">
//                   <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
//                   Order History
//                 </button>
//                 <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
//                   <i className="ri-user-settings-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
//                   Account Settings
//                 </button>
//                 <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
//                   <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
//                   Addresses
//                 </button>
//                 <button
//                   onClick={logout}
//                   className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600"
//                 >
//                   <i className="ri-logout-box-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order History</h2>
              
//               {orders.length === 0 ? (
//                 <div className="text-center py-12">
//                   <i className="ri-shopping-bag-line w-16 h-16 flex items-center justify-center text-4xl text-gray-400 mx-auto mb-4"></i>
//                   <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders yet</h3>
//                   <p className="text-gray-500 mb-6">Start shopping to see your order history here.</p>
//                   <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
//                     Start Shopping
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {orders.map((order) => (
//                     <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//                       <div className="flex items-center justify-between mb-3">
//                         <div>
//                           <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
//                           <p className="text-sm text-gray-600">
//                             {new Date(order.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <div className="text-right">
//                           <p className="font-semibold text-gray-800">${order.total.toFixed(2)}</p>
//                           <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                             order.status === 'confirmed' 
//                               ? 'bg-green-100 text-green-800' 
//                               : 'bg-yellow-100 text-yellow-800'
//                           }`}>
//                             {order.status === 'confirmed' ? 'Confirmed' : 'Processing'}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2">
//                         {order.items.map((item) => (
//                           <div key={item.id} className="flex items-center justify-between text-sm">
//                             <span className="text-gray-600">
//                               {item.name} × {item.quantity}
//                             </span>
//                             <span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useAuth } from '../../lib/AuthContext';
import { useCart } from '../../lib/CartContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Order {
  id: number;
  date: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: string;
}

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState('orders');

  useEffect(() => {
    if (user) {
      const savedOrders = JSON.parse(localStorage.getItem('shopease-orders') || '[]');
      setOrders(savedOrders);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Please log in</h1>
          <p className="text-gray-600 mb-8">You need to be logged in to view your profile.</p>
          <Link href="/login" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account and view your order history</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover object-top"
                  />
                ) : (
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-line w-10 h-10 flex items-center justify-center text-2xl text-blue-600"></i>
                  </div>
                )}
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    user.loginType === 'google' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.loginType === 'google' ? (
                      <>
                        <i className="ri-google-fill w-3 h-3 flex items-center justify-center mr-1"></i>
                        Google Account
                      </>
                    ) : (
                      <>
                        <i className="ri-mail-line w-3 h-3 flex items-center justify-center mr-1"></i>
                        Email Account
                      </>
                    )}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'orders' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
                  Order History ({orders.length})
                </button>
                
                <button
                  onClick={() => setActiveTab('cart')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'cart' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
                  Cart ({totalCartItems})
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <i className="ri-user-settings-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
                  Account Settings
                </button>
                
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 font-semibold transition-colors"
                >
                  <i className="ri-logout-box-line w-5 h-5 flex items-center justify-center inline mr-3"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'orders' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <i className="ri-shopping-bag-line w-16 h-16 flex items-center justify-center text-4xl text-gray-400 mx-auto mb-4"></i>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders yet</h3>
                      <p className="text-gray-500 mb-6">Start shopping to see your order history here.</p>
                      <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                              <p className="text-sm text-gray-600">
                                {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-800">${order.total.toFixed(2)}</p>
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                order.status === 'confirmed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status === 'confirmed' ? 'Confirmed' : 'Processing'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">
                                  {item.name} × {item.quantity}
                                </span>
                                <span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'cart' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>
                  
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <i className="ri-shopping-cart-line w-16 h-16 flex items-center justify-center text-4xl text-gray-400 mx-auto mb-4"></i>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                      <p className="text-gray-500 mb-6">Add items to your cart to see them here.</p>
                      <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 border border-gray-200 rounded-lg p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover object-top rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">${item.price} × {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-800">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-semibold text-gray-800">Total:</span>
                          <span className="text-lg font-bold text-blue-600">
                            ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                          </span>
                        </div>
                        <Link href="/cart" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center whitespace-nowrap">
                          View Full Cart
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'settings' && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            value={user.name}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={user.email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                          <div className="flex items-center space-x-2">
                            {user.loginType === 'google' ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                <i className="ri-google-fill w-4 h-4 flex items-center justify-center mr-1"></i>
                                Google Account
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-1"></i>
                                Email Account
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Account Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                          Update Profile
                        </button>
                        <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors whitespace-nowrap">
                          Change Password
                        </button>
                        <button
                          onClick={logout}
                          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
