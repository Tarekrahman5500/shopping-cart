export const cartReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(cart => cart.id !== action.payload.id)}

        case 'CHANGE_CART_QTY':
            return {
                ...state,
                cart: state.cart.filter(cart => cart.id === action.payload.id ?
                    (cart.qty = action.payload.qty) : cart.qty)
            }

        default:
            return state;
    }
}

export const productReducer = (state, action) => {

    switch (action.type) {
        case 'SORT_BY-PRICES':
            return {...state, sort: action.payload}
        case 'FILTER_BY-STOCK':
            return {...state, byStock: !state.byStock}
        case 'FILTER_BY-DELIVERY':
            return {...state, byFastDelivery: !state.byFastDelivery}
        case 'FILTER_BY-RATING':
            return {...state, byRating: action.payload}
        case 'FILTER_BY-SEARCH':
            return {...state, searchQuery: action.payload}
        case 'CLEAR_FILTER':
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: '',
            }
        default:
            return state;
    }
}