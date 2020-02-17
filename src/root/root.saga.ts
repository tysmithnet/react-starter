import {all} from "redux-saga/effects";
import {saga as users} from "../users";

export default function* saga(){
    yield all([users()])
}