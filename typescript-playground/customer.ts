export class Customer {
    constructor(private id: number) {}

    /*private id: number;
    
    constructor(id: number) {
        this.id = id;
    }*/

    foobar(foo: string): string {
        setTimeout(() => {
            console.log('ID', this.id);
        }, 2000);

        return '';
    }
}