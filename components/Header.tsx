// 'use client';

// import Link from 'next/link';
// import { useCart } from '../lib/CartContext';
// import { useAuth } from '../lib/AuthContext';

// export default function Header() {
//   const { cartItems } = useCart();
//   const { user, logout } = useAuth();
  
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
//           ShopEase
//         </Link>
        
//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
//             Home
//           </Link>
//           <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
//             Products
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
//             About
//           </Link>
//           <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
//             Contact
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
//             <i className="ri-shopping-cart-line w-6 h-6 flex items-center justify-center text-xl"></i>
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
          
//           {user ? (
//             <div className="flex items-center space-x-2">
//               <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
//                 {user.name}
//               </Link>
//               <button
//                 onClick={logout}
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import Link from 'next/link';
import { useCart } from '../lib/CartContext';
import { useAuth } from '../lib/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
          ShopEase
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
            <i className="ri-shopping-cart-line w-6 h-6 flex items-center justify-center text-xl"></i>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover object-top"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                  </div>
                )}
                <span className="hidden sm:block">{user.name}</span>
                <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <i className="ri-user-line w-4 h-4 flex items-center justify-center inline mr-2"></i>
                    Profile
                  </Link>
                  <Link
                    href="/cart"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <i className="ri-shopping-cart-line w-4 h-4 flex items-center justify-center inline mr-2"></i>
                    Cart ({totalItems})
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center inline mr-2"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
