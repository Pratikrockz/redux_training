import { combineReducers, createStore } from "redux"
import cartReducer, { CART_ADD_ITEM, CART_ADD_QUANTITY, CART_DELETE_ITEM, CART_DELETE_QUANTITY } from "./cartReducer"
import wishList, { CART_WISHLIST_ADD, WISHLIST_REMOVE_ITEM } from "./wishlistReducer"
import productReducer from "./productReducer"
import wishListReducer from "./wishlistReducer"
//import { productList } from "./productList"




// const initialState = {
//     post: 0,
//     name: "pratik",
//     age: 28
// }

// const initialState = {
//     products: productList,
//     cartItem: [
//     ],
//     wishList: []
// }
const reducer=combineReducers({
    products:productReducer,
    cartItem:cartReducer,
    wishList:wishListReducer

})
// const CART_ADD_ITEM='cartItem/add'
// const CART_WISHLIST_ADD='cartItem/wishList'
// const WISHLIST_REMOVE_ITEM='delete/wishlist'
// const CART_DELETE_ITEM='cartItem/delete'
// const CART_ADD_QUANTITY='cartItem/add/quantity'
// const CART_DELETE_QUANTITY='cartItem/delete/quantity'

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case CART_ADD_ITEM:

//             return { ...state, cartItem: [...state.cartItem, action.payload] };
//         case CART_WISHLIST_ADD:

//             return { ...state, wishList: [...state.wishList, action.payload] };
//         case CART_DELETE_ITEM:
//             return {...state,cartItem:state.cartItem.filter((a)=>
               
//                 a.productId !== action.payload.productId
//             )}
//         case CART_ADD_QUANTITY:
//             return {...state,cartItem:state.cartItem.map((each)=>{
//                 if(each.productId==action.payload.productId){
//                     each.quantity=each.quantity+action.payload.quantity
//                 }
                
//                 return each
//             })}

//         case CART_DELETE_QUANTITY:
//             return {...state,cartItem:state.cartItem.map((each)=>{
//                 if(each.productId==action.payload.productId)  {
//                     if(each.quantity>0){
//                         each.quantity=each.quantity-action.payload.quantity
//                     }
                    
                    
//                 }
                
                
//                 return each
//             }).filter((each)=>each.quantity>0)}


//         default:
//             return state;
//     }

// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 0 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 8, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 9, quantity: 1 } })

store.dispatch({ type: CART_WISHLIST_ADD, payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: CART_WISHLIST_ADD, payload: { productId: 5, quantity: 1 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 5, quantity: 1 } })

store.dispatch({ type: CART_DELETE_ITEM, payload: { productId: 5} })


store.dispatch({ type: CART_ADD_QUANTITY, payload: { productId: 8,quantity:1} })

 store.dispatch({ type: CART_ADD_QUANTITY, payload: { productId: 8,quantity:1} })
 store.dispatch({ type: CART_ADD_QUANTITY, payload: { productId: 8,quantity:1} })
// store.dispatch({ type: CART_ADD_QUANTITY, payload: { productId: 8,quantity:1} })

store.dispatch({ type: CART_DELETE_QUANTITY, payload: { productId: 8,quantity:1} })

store.dispatch({ type: CART_DELETE_QUANTITY, payload: { productId: 1,quantity:1} })








