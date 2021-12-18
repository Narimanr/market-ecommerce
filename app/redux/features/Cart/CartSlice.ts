import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string,
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add to cart
        addItem(state, action: PayloadAction<CartItem>) {
            // first check if item is already in cart
            const payloadId = action.payload.id;
            const payloadQuantity = action.payload.quantity;
            const inCart = state.items.find((prod) =>
                prod.id === payloadId ? true : false
            );  
            if (inCart) {
                let itemIndex = state.items.findIndex(i => i.id == payloadId);
                state.items[itemIndex].quantity += payloadQuantity;
            } else {
                state.items.push({
                    id: payloadId,
                    quantity: payloadQuantity
                })
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            const payloadId = action.payload;
            const target = state.items.findIndex(i => i.id == payloadId);
            state.items.splice(target, 1);
        },
        setQuantity(state, action: PayloadAction<CartItem>) {
            const payloadId = action.payload.id;
            const payloadQuantity = action.payload.quantity;

            const target = state.items.findIndex(i => i.id == payloadId)
            state.items[target].quantity = payloadQuantity;
        }

    }
});

export const { addItem, removeItem, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
