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
    reviews: any;
    // reviewCount: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    // rating: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    _id: string;
    images: any;
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