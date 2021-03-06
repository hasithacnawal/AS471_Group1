import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Hasitha",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adiddas Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 90,
      countInStock: 10,
      brand: "Adiddas",
      rating: 3,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike Cotton Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 200,
      countInStock: 10,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 100,
      countInStock: 10,
      brand: "Lacoste",
      rating: 4.5,
      numReviews: 5,
      description: "high quality product",
    },
    {
      name: "Nike Regular Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 90,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 2,
      description: "high quality product",
    },
  ],
};

export default data;
