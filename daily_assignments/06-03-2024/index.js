// creating class BankAccount
class BankAccount {
  // properties
  constructor(accountNo, accountHolder, accountBalance) {
    this.accNo = accountNo;
    this.Holder = accountHolder;
    this.balance = accountBalance;
  }

  //methods-----------------------
  deposit(amount) {
    this.balance += amount; // adding amount to account balance
    console.log(`Account has been Creadited by:${amount}`);
  }

  withdraw(amount) {
    //checking for available balance
    if (amount <= this.balance - 10000) {
      this.balance -= amount;
      console.log(`Account has been Debited by:${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  displayBalance(AccountNum) {
    if (AccountNum === this.accNo) {
      console.log(`Account ${this.accNo} balance: ${this.balance}`);
    }
  }
}

//inherited class
class SavingAccount extends BankAccount {
  constructor(accountNo, accountHolder, accountBalance) {
    super(accountNo, accountHolder, accountBalance);
    this.limit = 10000;
    this.penaltyFee = 10;
  }

  //methods---
  addInterest(years) {
    const rate = 0.05; //interest rate
    const interestAmount = this.balance * rate * years;
    this.balance += interestAmount; // adding interest to balance
    console.log(
      `your account has been credited by interest amount${interestAmount} `
    );
  }

  withdraw(amount) {
    //checking for available balance
    if (amount <= this.balance - 10000) {
      if (amount >= this.limit) {
        this.balance -= amount + this.penaltyFee;
        console.log(
          `Account has been Debited by:${amount} and penalty fee:${this.penaltyFee} is charged for exceeding the withdraw limit`
        );
      } else {
        this.balance -= amount;
        console.log(`Account has been Debited by:${amount}`);
      }
    } else {
      console.log("Insufficient balance");
    }
  }
}
