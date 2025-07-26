export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/assets/headphone.jpg",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.",
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    features: ["Noise Cancellation", "30-hour Battery", "Quick Charge", "Wireless"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "/assets/smart_fitness_watch.jpg",
    category: "Electronics",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity. Track your health 24/7.",
    rating: 4.6,
    reviews: 1923,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Long Battery Life"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    image: "/assets/organic_cotton_tshirt.jpg",
    category: "Clothing",
    description: "Comfortable and sustainable organic cotton t-shirt. Perfect for everyday wear with a relaxed fit.",
    rating: 4.5,
    reviews: 856,
    inStock: true,
    features: ["Organic Cotton", "Comfortable Fit", "Sustainable", "Machine Washable"]
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    image: "/assets/water_bottle.jpg",
    category: "Accessories",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.",
    rating: 4.7,
    reviews: 1456,
    inStock: true,
    features: ["Insulated", "BPA Free", "Leak Proof", "Eco-Friendly"]
  },
  {
    id: 5,
    name: "Portable Phone Charger",
    price: 39.99,
    image: "/assets/portable_phone_charger.jpg",
    category: "Electronics",
    description: "High-capacity portable charger with fast charging technology. Never run out of battery on the go.",
    rating: 4.4,
    reviews: 2134,
    inStock: true,
    features: ["Fast Charging", "High Capacity", "LED Indicators", "Multiple Ports"]
  },
  {
    id: 6,
    name: "Leather Laptop Bag",
    price: 89.99,
    originalPrice: 119.99,
    image: "/assets/laptop_bag.jpg",
    category: "Accessories",
    description: "Professional leather laptop bag with padded compartments and multiple pockets. Perfect for work and travel.",
    rating: 4.9,
    reviews: 743,
    inStock: true,
    features: ["Genuine Leather", "Padded Compartments", "Multiple Pockets", "Professional Design"]
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "/assets/bluetooth_speaker.jpg",
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360-degree sound and long battery life. Perfect for outdoor adventures.",
    rating: 4.3,
    reviews: 1678,
    inStock: true,
    features: ["360-Degree Sound", "Waterproof", "Long Battery", "Portable"]
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    image: "/assets/running_shoes.jpg",
    category: "Clothing",
    description: "Lightweight running shoes with advanced cushioning and breathable mesh upper. Designed for performance and comfort.",
    rating: 4.6,
    reviews: 2891,
    inStock: true,
    features: ["Lightweight", "Breathable", "Advanced Cushioning", "Durable"]
  },
  {
    id: 9,
    name: "Coffee Maker",
    price: 149.99,
    image: "/assets/coffee_maker.jpg",
    category: "Home",
    description: "Programmable coffee maker with thermal carafe and auto shut-off. Brew the perfect cup every time.",
    rating: 4.7,
    reviews: 1234,
    inStock: true,
    features: ["Programmable", "Thermal Carafe", "Auto Shut-off", "Easy Clean"]
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 19.99,
    image: "/assets/wireless_mouse.jpg",
    category: "Electronics",
    description: "Ergonomic wireless mouse with precision tracking and long battery life. Perfect for work and gaming.",
    rating: 4.2,
    reviews: 967,
    inStock: true,
    features: ["Ergonomic", "Precision Tracking", "Long Battery", "Wireless"]
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 34.99,
    image: "/assets/yoga_mat.jpg",
    category: "Sports",
    description: "Premium yoga mat with non-slip surface and extra cushioning. Perfect for yoga, pilates, and exercise.",
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    features: ["Non-Slip", "Extra Cushioning", "Eco-Friendly", "Lightweight"]
  },
  {
    id: 12,
    name: "Desk Lamp",
    price: 49.99,
    image: "/assets/desk_lamp.jpg",
    category: "Home",
    description: "Adjustable LED desk lamp with touch controls and USB charging port. Perfect for reading and work.",
    rating: 4.5,
    reviews: 892,
    inStock: true,
    features: ["LED Lighting", "Touch Controls", "USB Charging", "Adjustable"]
  },
  {
    id: 13,
    name: "Apple AirPods Pro (2nd Gen)",
    price: 499.99,
    originalPrice: 399.99,
    image: "/assets/apple_earphone_image.png",
    category: "Electronics",
    description: "MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.",
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    features: ["Noise Cancellation","Quick Charge", "Wireless"]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Accessories",
  "Home",
  "Sports"
];