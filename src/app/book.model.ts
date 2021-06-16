export class Book{
    name:string;
    year:number;
    reviews:Review[];

    constructor()
    {
        this.name = "";
        this.year = null;
        this.reviews = [];
    }
}

export class Review{
    email:string;
    note:string;
    star:number;

    constructor()
    {
        this.email = "";
        this.note = "";
        this.star = 0;
    }
}

export const initialBook:Book[] = 
[
    {
        "name":"Harry Potter",
        "year": 2010,
        "reviews":[
            {
                "email": "john.doe@gmail.com",
                "note": "Great book to read",
                "star": 5
            },
            {
                "email": "jane.doe@gmail.com",
                "note": "Mediocre book to read",
                "star": 3
            }
        ]
    },
    {
        "name":"The Hunger Games",
        "year": 2012,
        "reviews":[
            {
                "email": "john.doe@gmail.com",
                "note": "Amazing book to read",
                "star": 4
            }
        ]
    }
];