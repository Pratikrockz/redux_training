export const CART_WISHLIST_ADD='add/wishlist'
export const WISHLIST_REMOVE_ITEM='remove/wishlist'

export default function wishListReducer(state=[],action) {
    switch (action.type) {
        case CART_WISHLIST_ADD:
            
            return{...state,wishList:[...state.wishList,action.payload]}
        case WISHLIST_REMOVE_ITEM:
            return {...state,
                wishList:state.wishList.filter((each)=>each.productId !==action.payload.productId)
            }
        default:
            return state;
    }
}