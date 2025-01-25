export default interface simplifiedProduct {
    _id: string;
    firstImageUrl: string;
    name: string;
    slug: string;
    categoryName: string;
    type: string;
    image: string;
    feulImageUrl: string;
    transmissionImageUrl: string;
    capacityImageUrl: string;
    price: number;
    originalPrice: number;
    likedImageUrl: string;
    feulCapacity: string;
    transmissionn: string;
    peopleCapacity: string;
    buttonText: string;
  }
  
  export interface fullProduct {
    reviews: Array<{ 
      user: string;
      comment: string;
      rating: number;
      date: string;
    }>; 
    reviewCount: number;
    rating: number;
    _id: string;
    images: Array<{
      _type: string;
      asset: { _ref: string; };
      _id: string; 
      url: string; 
      altText: string;
    }>;
    name: string;
    description: string;
    slug: string;
    categoryName: string;
    type: string;
    image: string;
    price: number;
    originalPrice: number;
    likedImageUrl: string;
    feulCapacity: string;
    transmissionn: string;
    peopleCapacity: string;
    buttonText: string;
  }
  