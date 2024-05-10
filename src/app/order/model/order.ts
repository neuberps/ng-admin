export class Order {
  id: string;
  client: string;
  orderItems: OrderItem[];
  orderTotal: number;
  paymentInformation: string;
  registryUser: string;
  orderStatus: string;
  paymentMethod: string;
  shippingMethod: string;
  shippingInformation: string;
  discountsAndFees: string;
  orderNotes: string;
  orderDate: string;
  created: string;
  updated: string;
}

export interface OrderItem {
  item: string;
  quantity: number;
  price: number;
}
