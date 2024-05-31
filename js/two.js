class BankAccount {
  #balance;

  constructor(balance) {
    // balance за замовчуванням 0
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  #getBalance() {
    return this.#balance;
  }

  printBalance() {
    console.log(`Current balance: $${this.#getBalance()}`);
  }
}

// Приклад використання:
const instance = new BankAccount(); // Початковий баланс 100
instance.deposit(200); // Deposited: $100
instance.deposit(1200); // Deposited: $1200
instance.withdraw(1000); // Withdrew: $1000
instance.printBalance(); // Current balance: $400
console.log(instance); // Виведе інформацію про об'єкт, але не про баланс
