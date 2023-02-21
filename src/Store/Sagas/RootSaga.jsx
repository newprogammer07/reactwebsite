import {all} from "redux-saga/effects"
import { brandSaga } from "./BrandSaga"
import { cartSaga } from "./CartSaga"
import { checkoutSaga } from "./CheckoutSaga"
import { contactSaga } from "./ContactSaga"
 

import { maincategorySaga } from "./MaincategorySaga"
import { newslatterSaga } from "./NewsletterSaga"
 
import { productSaga } from "./ProductSaga"
// import { productSaga } from "./ProductSaga"
import { subcategorySaga } from "./SubcategorySaga"
import { userSaga } from "./UserSaga"
import { wishlistSaga } from "./WishlistSaga"

export default function* RootSaga(){
    yield all([maincategorySaga(),subcategorySaga(),brandSaga(),productSaga(),userSaga(),cartSaga(),wishlistSaga(),checkoutSaga(),contactSaga(),newslatterSaga()])
     
}