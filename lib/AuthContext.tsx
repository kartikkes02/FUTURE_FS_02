// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface Order {
//   id: number;
//   date: string;
//   total: number;
//   status: string;
//   items: Array<{
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//   }>;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<boolean>;
//   register: (name: string, email: string, password: string) => Promise<boolean>;
//   logout: () => void;
//   orders: Order[];
//   addOrder: (order: Omit<Order, 'id'>) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const savedUser = localStorage.getItem('shopease-user');
//     const savedOrders = localStorage.getItem('shopease-orders');
    
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders));
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem('shopease-user', JSON.stringify(user));
//     } else {
//       localStorage.removeItem('shopease-user');
//     }
//   }, [user]);

//   useEffect(() => {
//     localStorage.setItem('shopease-orders', JSON.stringify(orders));
//   }, [orders]);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     if (email === 'demo@shopease.com' && password === 'demo123') {
//       const mockUser = { id: 1, name: 'Demo User', email: 'demo@shopease.com' };
//       setUser(mockUser);
//       return true;
//     }
//     return false;
//   };

//   const register = async (name: string, email: string, password: string): Promise<boolean> => {
//     const mockUser = { id: Date.now(), name, email };
//     setUser(mockUser);
//     return true;
//   };

//   const logout = () => {
//     setUser(null);
//     setOrders([]);
//   };

//   const addOrder = (order: Omit<Order, 'id'>) => {
//     const newOrder = { ...order, id: Date.now() };
//     setOrders(prev => [newOrder, ...prev]);
//   };

//   return (
//     <AuthContext.Provider value={{
//       user,
//       login,
//       register,
//       logout,
//       orders,
//       addOrder
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }


// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   avatar?: string;
//   loginType: 'email' | 'google';
// }

// interface Order {
//   id: number;
//   date: string;
//   total: number;
//   status: string;
//   items: Array<{
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//   }>;
// }

// interface AuthContextType {
//   user: User | null;
//   users: User[];
//   login: (email: string, password: string) => Promise<boolean>;
//   register: (name: string, email: string, password: string) => Promise<boolean>;
//   googleLogin: (googleUser: any) => Promise<boolean>;
//   logout: () => void;
//   orders: Order[];
//   addOrder: (order: Omit<Order, 'id'>) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const savedUser = localStorage.getItem('shopease-user');
//     const savedUsers = localStorage.getItem('shopease-users');
//     const savedOrders = localStorage.getItem('shopease-orders');
    
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     if (savedUsers) {
//       setUsers(JSON.parse(savedUsers));
//     } else {
//       // Initialize with demo user
//       const initialUsers = [
//         { id: 1, name: 'Demo User', email: 'demo@shopease.com', loginType: 'email' as const }
//       ];
//       setUsers(initialUsers);
//       localStorage.setItem('shopease-users', JSON.stringify(initialUsers));
//     }
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders));
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem('shopease-user', JSON.stringify(user));
//     } else {
//       localStorage.removeItem('shopease-user');
//     }
//   }, [user]);

//   useEffect(() => {
//     localStorage.setItem('shopease-users', JSON.stringify(users));
//   }, [users]);

//   useEffect(() => {
//     localStorage.setItem('shopease-orders', JSON.stringify(orders));
//   }, [orders]);

//   const login = async (email: string, password: string): Promise<boolean> => {
//     // Demo account
//     if (email === 'demo@shopease.com' && password === 'demo123') {
//       const demoUser = users.find(u => u.email === 'demo@shopease.com') || 
//         { id: 1, name: 'Demo User', email: 'demo@shopease.com', loginType: 'email' as const };
//       setUser(demoUser);
//       return true;
//     }

//     // Check registered users
//     const foundUser = users.find(u => u.email === email);
//     if (foundUser) {
//       setUser(foundUser);
//       return true;
//     }

//     return false;
//   };

//   const register = async (name: string, email: string, password: string): Promise<boolean> => {
//     // Check if user already exists
//     const existingUser = users.find(u => u.email === email);
//     if (existingUser) {
//       return false;
//     }

//     const newUser: User = { 
//       id: Date.now(), 
//       name, 
//       email, 
//       loginType: 'email' 
//     };
    
//     setUsers(prev => [...prev, newUser]);
//     setUser(newUser);
//     return true;
//   };

//   const googleLogin = async (googleUser: any): Promise<boolean> => {
//     const email = googleUser.email;
//     const name = googleUser.name;
//     const avatar = googleUser.picture;

//     // Check if user already exists
//     let existingUser = users.find(u => u.email === email);
    
//     if (existingUser) {
//       // Update existing user with Google info
//       existingUser = { ...existingUser, avatar, loginType: 'google' };
//       setUsers(prev => prev.map(u => u.email === email ? existingUser : u));
//       setUser(existingUser);
//     } else {
//       // Create new Google user
//       const newUser: User = {
//         id: Date.now(),
//         name,
//         email,
//         avatar,
//         loginType: 'google'
//       };
//       setUsers(prev => [...prev, newUser]);
//       setUser(newUser);
//     }
    
//     return true;
//   };

//   const logout = () => {
//     setUser(null);
//     // Don't clear orders - they should persist per user
//   };

//   const addOrder = (order: Omit<Order, 'id'>) => {
//     const newOrder = { ...order, id: Date.now() };
//     setOrders(prev => [newOrder, ...prev]);
//   };

//   return (
//     <AuthContext.Provider value={{
//       user,
//       users,
//       login,
//       register,
//       googleLogin,
//       logout,
//       orders,
//       addOrder
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  loginType: 'email' | 'google';
}

interface Order {
  id: number;
  date: string;
  total: number;
  status: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  googleLogin: (googleUser: any) => Promise<boolean>;
  logout: () => void;
  orders: Order[];
  addOrder: (order: Omit<Order, 'id'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const { data: session, status } = useSession();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('shopease-user');
    const savedUsers = localStorage.getItem('shopease-users');
    const savedOrders = localStorage.getItem('shopease-orders');
    
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // Initialize with demo user
      const initialUsers = [
        { id: 1, name: 'Demo User', email: 'demo@shopease.com', loginType: 'email' as const }
      ];
      setUsers(initialUsers);
      localStorage.setItem('shopease-users', JSON.stringify(initialUsers));
    }
    
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

    // Only set user from localStorage if there's no NextAuth session
    if (savedUser && status !== 'loading' && !session) {
      setUser(JSON.parse(savedUser));
    }
    
    setIsInitialized(true);
  }, []);

  // Handle NextAuth session changes
  useEffect(() => {
    if (!isInitialized || status === 'loading') return;

    if (session?.user) {
      // User logged in via Google OAuth
      const googleUser = {
        email: session.user.email!,
        name: session.user.name!,
        picture: session.user.image || undefined,
      };
      
      // Use the existing googleLogin function to handle the Google user
      handleGoogleLogin(googleUser);
    } else if (!session && user?.loginType === 'google') {
      // Google session ended, clear user
      setUser(null);
      localStorage.removeItem('shopease-user');
    }
  }, [session, status, isInitialized]);

  // Internal function to handle Google login without async issues
  const handleGoogleLogin = (googleUser: any) => {
    const email = googleUser.email;
    const name = googleUser.name;
    const avatar = googleUser.picture;

    setUsers(prevUsers => {
      // Check if user already exists
      let existingUser = prevUsers.find(u => u.email === email);
      let updatedUsers = [...prevUsers];
      
      if (existingUser) {
        // Update existing user with Google info
        existingUser = { ...existingUser, avatar, loginType: 'google' };
        updatedUsers = prevUsers.map(u => u.email === email ? existingUser : u);
        setUser(existingUser);
      } else {
        // Create new Google user
        const newUser: User = {
          id: Date.now(),
          name,
          email,
          avatar,
          loginType: 'google'
        };
        updatedUsers = [...prevUsers, newUser];
        setUser(newUser);
      }
      
      return updatedUsers;
    });
  };

  useEffect(() => {
    if (user && user.loginType !== 'google') {
      localStorage.setItem('shopease-user', JSON.stringify(user));
    } else if (!user) {
      localStorage.removeItem('shopease-user');
    }
  }, [user]);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('shopease-users', JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    localStorage.setItem('shopease-orders', JSON.stringify(orders));
  }, [orders]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo account
    if (email === 'demo@shopease.com' && password === 'demo123') {
      const demoUser = users.find(u => u.email === 'demo@shopease.com') || 
        { id: 1, name: 'Demo User', email: 'demo@shopease.com', loginType: 'email' as const };
      setUser(demoUser);
      return true;
    }

    // Check registered users
    const foundUser = users.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }

    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return false;
    }

    const newUser: User = { 
      id: Date.now(), 
      name, 
      email, 
      loginType: 'email' 
    };
    
    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    return true;
  };

  const googleLogin = async (googleUser: any): Promise<boolean> => {
    const email = googleUser.email;
    const name = googleUser.name;
    const avatar = googleUser.picture;

    // Check if user already exists
    let existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
      // Update existing user with Google info
      existingUser = { ...existingUser, avatar, loginType: 'google' };
      setUsers(prev => prev.map(u => u.email === email ? existingUser : u));
      setUser(existingUser);
    } else {
      // Create new Google user
      const newUser: User = {
        id: Date.now(),
        name,
        email,
        avatar,
        loginType: 'google'
      };
      setUsers(prev => [...prev, newUser]);
      setUser(newUser);
    }
    
    return true;
  };

  const logout = async () => {
    if (session && user?.loginType === 'google') {
      // If user is logged in via NextAuth (Google), sign them out
      await nextAuthSignOut({ callbackUrl: '/' });
    } else {
      // Handle local logout
      setUser(null);
    }
    // Don't clear orders - they should persist per user
  };

  const addOrder = (order: Omit<Order, 'id'>) => {
    const newOrder = { ...order, id: Date.now() };
    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <AuthContext.Provider value={{
      user,
      users,
      login,
      register,
      googleLogin,
      logout,
      orders,
      addOrder
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}