class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
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

