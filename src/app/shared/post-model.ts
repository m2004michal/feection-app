
export class PostModel {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    url: string
    username: string;
    categoryName: string;
    price: number;
    fee: number;
    mainImage: Uint8Array;
}