export interface Square {
    id: [number,number];
    color: string;
}

export class Position implements Square {

    id: [number,number];
    color: string;

    constructor(
        id: [number,number],
        color: string
    )
    {
        this.id = id;
        this.color = color;
    }
}