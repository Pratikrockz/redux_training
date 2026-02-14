export const CART_WISHLIST_ADD='add/wishlist'
export const WISHLIST_REMOVE_ITEM='remove/wishlist'

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