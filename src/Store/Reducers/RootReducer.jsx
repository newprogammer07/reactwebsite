import { combineReducers } from "redux";
import { BrandReducer } from "./BrandReducer";
import { UserReducer } from "./UserReducer";
import { MaincategoryReducer } from "./MaincategoryReducer";
import { ProductReducer } from "./ProductReducer";
import { subcategoryReducer } from "./SubcategoryReducer";
import { CartReducer } from "./CartReducer";
import { WishlistReducer } from "./WishlistReducer";
import { CheckoutReducer } from "./CheckoutReducer"
import { ContactReducer } from "./ContactReducer";
import { NewslatterReducer } from "./NewslatterReducer";

export default combineReducers({
  MaincategoryStateData: MaincategoryReducer,
  SubcategoryStateData: subcategoryReducer,
  BrandStateData: BrandReducer,
  ProductStateData: ProductReducer,
  UserStateData: UserReducer,
  CartStateData: CartReducer,
  WishlistStateData: WishlistReducer,
  CheckoutStateData: CheckoutReducer,
  ContactStateData: ContactReducer,
  NewslatterStatData: NewslatterReducer
});
