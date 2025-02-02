import { Product } from "../../../types/products";

// Function to add a product to the cart
export const addToCart = (product: Product): void => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex > -1) {
        // If product already exists, increment its stockLevel
        cart[existingProductIndex].stockLevel += 1;
    } else {
        // Otherwise, add the product with a default stockLevel of 1
        cart.push({ ...product, stockLevel: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to remove a product from the cart
export const removeFromCart = (productId: string): void => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Filter out the product with the given productId
    cart = cart.filter((item) => item._id !== productId);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number): void => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const productIndex = cart.findIndex((item) => item._id === productId);

    if (productIndex > -1) {
        // Update the stockLevel for the specified product
        cart[productIndex].stockLevel = quantity;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to get all cart items
export const getCartItems = (): Product[] => {
    // Retrieve and parse cart items from localStorage
    return JSON.parse(localStorage.getItem("cart") || "[]");
};

