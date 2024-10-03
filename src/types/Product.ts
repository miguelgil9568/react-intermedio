 export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    quantity:    number | null;
    rating:      Rating;
  }
  
  
  
  export interface Rating {
    rate:  number;
    count: number;
  }