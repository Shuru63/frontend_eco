const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const existingProduct = state.find((x) => x.id === product.id);

      if (existingProduct) {
        // If product already exists, increase quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...state, { ...product, qty: 1 }];
      }

    case "DELETEITEM":
      const existingItem = state.find((x) => x.id === product.id);

      if (existingItem && existingItem.qty === 1) {
        // If quantity is 1, remove the item
        return state.filter((x) => x.id !== existingItem.id);
      } else {
        // If quantity is more than 1, decrease quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
