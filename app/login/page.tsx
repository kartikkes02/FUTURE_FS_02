// 'use client';

// import { useState } from 'react';
// import { useAuth } from '../../lib/AuthContext';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { signIn } from "next-auth/react";


// const handleGoogleLogin = async () => {
//   await signIn("google", {
//     prompt: "select_account"
//   });
// };


// export default function LoginPage() {
//   const { login, register, googleLogin } = useAuth();
//   const router = useRouter();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: ''
//   });
//   const [errors, setErrors] = useState<{[key: string]: string}>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {};
    
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
//     if (!isLogin && !formData.name) newErrors.name = 'Name is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsLoading(true);
    
//     try {
//       let success = false;
      
//       if (isLogin) {
//         success = await login(formData.email, formData.password);
//         if (!success) {
//           setErrors({ email: 'Invalid email or password' });
//         }
//       } else {
//         success = await register(formData.name, formData.email, formData.password);
//         if (!success) {
//           setErrors({ email: 'Account with this email already exists' });
//         }
//       }
      
//       if (success) {
//         router.push('/');
//       }
//     } catch (error) {
//       setErrors({ email: 'An error occurred. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDemoLogin = async () => {
//     setIsLoading(true);
//     const success = await login('demo@shopease.com', 'demo123');
//     if (success) {
//       router.push('/');
//     }
//     setIsLoading(false);
//   };

//   const handleGoogleLogin = async () => {
//     // Simulate Google OAuth response
//     const mockGoogleUser = {
//       name: 'Google User',
//       email: 'user@gmail.com',
//       picture: 'https://readdy.ai/api/search-image?query=professional%20user%20avatar%20smiling%20person%20modern%20clean%20background&width=100&height=100&seq=google-avatar&orientation=squarish'
//     };
    
//     const success = await googleLogin(mockGoogleUser);
//     if (success) {
//       router.push('/');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900">
//             {isLogin ? 'Sign in to your account' : 'Create new account'}
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isLogin ? 'Welcome back to ' : 'Join '} 
//             <span className="font-semibold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
//               ShopEase
//             </span>
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="sr-only">Name</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     errors.name ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Full name"
//                   disabled={isLoading}
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//               </div>
//             )}
            
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   errors.email ? 'border-red-500' : 'border-gray-300'
//                 }`}
//                 placeholder="Email address"
//                 disabled={isLoading}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>
            
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   errors.password ? 'border-red-500' : 'border-gray-300'
//                 }`}
//                 placeholder="Password"
//                 disabled={isLoading}
//               />
//               {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold transition-colors whitespace-nowrap disabled:opacity-50"
//             >
//               {isLoading ? 'Loading...' : (isLogin ? 'Sign in' : 'Create account')}
//             </button>
//           </div>

//           <div className="space-y-3">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               disabled={isLoading}
//               className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold transition-colors whitespace-nowrap disabled:opacity-50 flex items-center justify-center space-x-2"
//             >
//               <i className="ri-google-fill w-5 h-5 flex items-center justify-center text-red-500"></i>
//               <span>Continue with Google</span>
//             </button>
            
//             <button
//               type="button"
//               onClick={handleDemoLogin}
//               disabled={isLoading}
//               className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none font-semibold transition-colors whitespace-nowrap disabled:opacity-50"
//             >
//               Try Demo Account
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             {isLogin ? "Don't have an account?" : 'Already have an account?'}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="font-medium text-blue-600 hover:text-blue-500 ml-1"
//               disabled={isLoading}
//             >
//               {isLogin ? 'Sign up' : 'Sign in'}
//             </button>
//           </p>
//         </div>

//         <div className="text-center">
//           <Link href="/" className="text-blue-600 hover:text-blue-500 font-medium">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // now i want that when we clicked "Continue with Google" so our user choose which our gmail account login that i wany

// // for example i have 5 mail account so open the google account and chooses



'use client';

import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const { login, register } = useAuth(); // removed googleLogin
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!isLogin && !formData.name) newErrors.name = 'Name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      let success = false;
      if (isLogin) {
        success = await login(formData.email, formData.password);
        if (!success) {
          setErrors({ email: 'Invalid email or password' });
        }
      } else {
        success = await register(formData.name, formData.email, formData.password);
        if (!success) {
          setErrors({ email: 'Account with this email already exists' });
        }
      }
      if (success) {
        router.push('/');
      }
    } catch (error) {
      setErrors({ email: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    const success = await login('demo@shopease.com', 'demo123');
    if (success) {
      router.push('/');
    }
    setIsLoading(false);
  };

  // Only this Google login handler is needed!
  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        prompt: "select_account", // This forces Google to show account selection
        callbackUrl: "/" // Redirect to home after successful login
      });
    } catch (error) {
      console.error("Google login error:", error);
      setErrors({ email: 'Google login failed. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create new account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Welcome back to ' : 'Join '}
            <span className="font-semibold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              ShopEase
            </span>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Full name"
                  disabled={isLoading}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Email address"
                disabled={isLoading}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Password"
                disabled={isLoading}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : (isLogin ? 'Sign in' : 'Create account')}
            </button>
          </div>

          <div className="space-y-3">
            {/* <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold transition-colors whitespace-nowrap disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <i className="ri-google-fill w-5 h-5 flex items-center justify-center text-red-500"></i>
              <span>Continue with Google</span>
            </button> */}

            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none font-semibold transition-colors whitespace-nowrap disabled:opacity-50"
            >
              Try Demo Account
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-blue-600 hover:text-blue-500 ml-1"
              disabled={isLoading}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-500 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}