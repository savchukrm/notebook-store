export type CartItem = {
  id: number;
  title: string;
  price: number;
  imagePath: string;
  type: string;
  size: string;
  count: number;
  newId: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
