const CartItems = (state = [],action)=>{
    switch(action.type)
    {
        case 'Add_To_Cart':
            return [...state,action.payload]
        case 'Remove_From_Cart':
            return state.filter(CartItems=>CartItems.id !== action.payload.id)
    }
    return state
}

export default CartItems