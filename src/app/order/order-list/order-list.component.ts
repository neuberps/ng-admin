import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  totalLength: any;
  page: number = 1;

  searchValue: any;

  orders: Order[] = [];
  selectedOrder: Order;
  successMessage: string;
  errorMessage: string;

  constructor(private service: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => (this.orders = response));
  }

  createOrder() {
    this.router.navigate(['/order-form']);
  }

  parseOrderItems(orderItemsString: string): any[] {
    try {
      return JSON.parse("[" + orderItemsString + "]");
    } catch (error) {
      console.error("Erro ao analisar os itens do pedido:", error);
      return [];
    }
  }

  calculateItem(item: any): number {
    return item.price * item.quantity;
  }

  calculateOrderTotal(order: any): number {
    let total = 0;
    for (let item of this.parseOrderItems(order.orderItems)) {
      total += item.price * item.quantity;
    }
    return total;
  }



}
