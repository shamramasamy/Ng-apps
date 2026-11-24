
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  tag?: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  searchText = '';
  selectedCategory = 'All';
  cartCount = 0;

  categories = [
    'All',
    'Traditional Sweets',
    'Snacks',
    'Cakes',
    'Cookies',
    'Gift Boxes'
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Premium Mysore Pak',
      category: 'Traditional Sweets',
      description: 'Authentic ghee-rich traditional Mysore Pak.',
      price: 280,
      oldPrice: 320,
      image: 'https://images.unsplash.com/photo-1605197583738-6b7c1f2e6c5b?w=600',
      rating: 4.9,
      tag: 'Bestseller'
    },
    {
      id: 2,
      name: 'Kaju Katli',
      category: 'Traditional Sweets',
      description: 'Delicate cashew sweets with a silver finish.',
      price: 450,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600',
      rating: 4.8,
      tag: 'Popular'
    },
    {
      id: 3,
      name: 'Crispy Murukku',
      category: 'Snacks',
      description: 'Traditional crunchy South Indian snack.',
      price: 160,
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Chocolate Truffle Cake',
      category: 'Cakes',
      description: 'Rich chocolate cake with silky ganache.',
      price: 650,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
      rating: 4.9,
      tag: 'Chef Special'
    },
    {
      id: 5,
      name: 'Butter Cookies',
      category: 'Cookies',
      description: 'Freshly baked, golden and buttery cookies.',
      price: 220,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Festival Sweet Box',
      category: 'Gift Boxes',
      description: 'A beautiful assortment of signature sweets.',
      price: 899,
      oldPrice: 999,
      image: 'https://images.unsplash.com/photo-1548907040-4d42e3e9c5a9?w=600',
      rating: 5.0,
      tag: 'Special'
    },
    {
      id: 7,
      name: 'Mixture',
      category: 'Snacks',
      description: 'A spicy, crunchy mixture for every occasion.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd0f8b2?w=600',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Chocolate Cookies',
      category: 'Cookies',
      description: 'Delicious cookies loaded with chocolate chips.',
      price: 250,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
      rating: 4.8
    }
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(this.searchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(product: Product): void {
    this.cartCount++;
    alert(`${product.name} added to your cart!`);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
