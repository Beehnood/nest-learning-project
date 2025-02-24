export class CreateProductDto {

    readonly title: string;
    readonly description: string;
    readonly price: number;
    constructor( title: string, description: string, price: number ) {
        
        this.title = title;
        this.description = description;
        this.price = price ;
        
    }

}
