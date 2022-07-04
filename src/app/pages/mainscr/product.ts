export class Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    
    constructor(id, title ='', price=0, imageUrl='assets/Images/soon.jpg'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
    }

}
