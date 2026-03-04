import { Product, CustomerReview } from './types';

export const HERO_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: "Rs. 129/-",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Lungo Coffee",
    price: "Rs. 360/-",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Chai Latte",
    price: "Rs. 250/-",
    image: "https://images.pexels.com/photos/7559497/pexels-photo-7559497.jpeg?_gl=1*xchptj*_ga*MjAwNDI4NjEyLjE3Njk4OTI3MzI.*_ga_8JE65Q40S6*czE3NzEyNjUzMjIkbzIkZzEkdDE3NzEyNjU0MDEkajQ3JGwwJGgw"
  },
  {
    id: 4,
    name: "Espresso",
    price: "Rs. 160/-",
    image: "https://images.pexels.com/photos/9050512/pexels-photo-9050512.jpeg?_gl=1*1x727id*_ga*MjAwNDI4NjEyLjE3Njk4OTI3MzI.*_ga_8JE65Q40S6*czE3NzEyNjUzMjIkbzIkZzEkdDE3NzEyNjU0NjEkajUzJGwwJGgw"
  },
  {
    id: 5,
    name: "Mocha",
    price: "Rs. 280/-",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop"
  }
];

export const MENU_ITEMS: Product[] = [
    ...HERO_PRODUCTS,
    {
      id: 6,
      name: "Macchiato",
      price: "Rs. 190/-",
      image: "https://images.unsplash.com/photo-1485808191679-5f8c7c41f694?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Americano",
      price: "Rs. 150/-",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Iced Coffee",
      price: "Rs. 220/-",
      image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 9,
      name: "Irish Coffee",
      price: "Rs. 350/-",
      image: "https://images.unsplash.com/photo-1461023058943-48dbf1399ea8?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 10,
      name: "Affogato",
      price: "Rs. 290/-",
      image: "https://images.unsplash.com/photo-1599398054066-846f28917f38?q=80&w=600&auto=format&fit=crop"
    }
];

export const REVIEW_DATA: CustomerReview = {
  rating: 4.5,
  count: "1.2k Review",
  avatarUrls: [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d"
  ]
};