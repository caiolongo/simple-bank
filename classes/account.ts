export class Account {
    private name: string;
    private accountNumber: number;
    protected balance: number;
    private status: boolean;

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
    }

    deposit = (howmuch: number): void => {
        this.balance += howmuch;
    }

    withDraw = (howMuch: number) => {
        if (this.validateStatus() && howMuch <= this.balance) {
            this.balance -= howMuch;
        }
    }

    getName = (): string => {
        return this.name;
    }

    getBalance = (): number => {
        return this.balance;
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }

    private validateStatus = (): boolean | undefined => {
        if (this.status) {
            return this.status;
        }
    }
}