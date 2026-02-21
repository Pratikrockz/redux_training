const CART_ADD_ITEM = 'cartItem/add'
const CART_DELETE_ITEM = 'cartItem/delete'
const CART_ADD_QUANTITY = 'cartItem/add/quantity'
const CART_DELETE_QUANTITY = 'cartItem/delete/quantity'

//Action createor

export function IncreasecartItem(productId, quantity = 1) {
    return {
        type: CART_ADD_ITEM,
        payload: { productId, quantity }
    }
}

export function DecreasecartItem(productId, quantity = 1) {
    return {
        type: CART_DELETE_ITEM,
        payload: { productId, quantity }
    }
}

export default function cartReducer(state = [], action) {
    console.log("within function", action, state)
    switch (action.type) {
        case CART_ADD_ITEM: {

            const existingItem = state.find(
                (item) => item.productId === action.payload.productId
            );

            if (existingItem) {
                // If product already exists → increase quantity
                
                
                return state.map((item) =>
                    item.productId === action.payload.productId
                        ? {
                            ...item,
                            quantity: item.quantity + action.payload.quantity
                        }
                        : item
                );
            }

            // If product does not exist → add new
            return [...state, action.payload];
        }

        case CART_DELETE_ITEM:
            return state.filter((a) =>

                a.productId !== action.payload.productId
            )
        case CART_ADD_QUANTITY:
            return state.map((each) => {
                if (each.productId == action.payload.productId) {
                    each.quantity = each.quantity + action.payload.quantity
                }

                return each
            })

        case CART_DELETE_QUANTITY:
            return state.map((each) => {
                if (each.productId == action.payload.productId) {
                    if (each.quantity > 0) {
                        each.quantity = each.quantity - action.payload.quantity
                    }


                }


                return each
            }).filter((each) => each.quantity > 0)


        default:
            return state;
    }
}