import {takeEvery,put} from "redux-saga/effects"
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI } from "../Service"
// updateNewslatterAPI
import {ADD_NEWSLETTER,ADD_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED} from "../Constants"
// , UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED ___these going to cont...

function* createNewslatterSaga(action){   //executer
    var response = yield createNewslatterAPI(action.payload)
    yield put({type:ADD_NEWSLETTER_RED,data:response})
}
function* getNewslatterSaga(){   //executer
    var response = yield getNewslatterAPI()
    yield put({type:GET_NEWSLETTER_RED,data:response})
}
function* deleteNewslatterSaga(action){   //executer
    yield deleteNewslatterAPI(action.payload)
    yield put({type:DELETE_NEWSLETTER_RED,data:action.payload})
}
export function* newslatterSaga(){    //watcher
    yield takeEvery(ADD_NEWSLETTER,createNewslatterSaga)
    yield takeEvery(GET_NEWSLETTER,getNewslatterSaga)
    yield takeEvery(DELETE_NEWSLETTER,deleteNewslatterSaga)
}