export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface CustomerReview {
  rating: number;
  count: string;
  avatarUrls: string[];
}