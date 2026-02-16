const CART_WISHLIST_ADD='add/wishlist'
const WISHLIST_REMOVE_ITEM='remove/wishlist'


export function IncreaseWishListItem(productId,quantity=1){
    return { type: CART_WISHLIST_ADD, payload: { productId,quantity } }
}

export function DecreaseWishListItem(productId,quantity=1){
    return  { type: WISHLIST_REMOVE_ITEM, payload: { productId ,quantity} }
}




export default function wishListReducer(state=[],action) {
    switch (action.type) {
        case CART_WISHLIST_ADD:
            
           return [...state,action.payload]
        case WISHLIST_REMOVE_ITEM:
            return  state.filter((each)=>each.productId !==action.payload.productId)
            
        default:
            return state;
    }
}