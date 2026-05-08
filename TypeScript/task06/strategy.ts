interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплачено ${amount} с помощью кредитной карты.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплачено ${amount} через PayPal.`);
  }
}


class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}


const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100);
cart.setStrategy(new PayPalPayment());
cart.checkout(250);
