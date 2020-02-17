import { Action } from "redux";
import { State } from ".";

const mockState: State = {
    users: [
        {
            name: "Rick",
            email: "Rick@gmail.com",
            image: "https://vignette.wikia.nocookie.net/rickandmorty/images/f/fe/Rica.png"
        },
        {
            name: "Jerry",
            email: "Jerry@gmail.com",
            image: "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png"
        },
        {
            name: "Morty",
            email: "Morty@gmail.com",
            image: "https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg"
        },
        {
            name: "Summer",
            email: "Summer@gmail.com",
            image: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg"
        }
    ]
}

export function reducer(state: State = mockState, action: Action): State {
    return {
        ...state
    };
}