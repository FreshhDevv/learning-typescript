class Account {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string,
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;

    }

private calculateTax() {

}

    getBalance(): number {
        return account._balance;
    }
}

let account = new Account(1, 'Hans', 0);
console.log(account.getBalance());

