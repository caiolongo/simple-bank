import { AccountPro } from "./accountPro";

export class AccountVanGogh extends AccountPro {
    private year: number;
    private value: number;

    constructor(name: string, accountNumber: number, balance: number, status: boolean, howMuchGetLoan: number, year: number, value: number) {
        super(name, accountNumber, balance, status, howMuchGetLoan);
        this.year = year;
        this.value = value;
    }

    override deposit = (howmuch: number) => {
        this.balance += howmuch + (this.value * this.year);
    }

    getInterest = (): string => {
        return `Seu juros por depósito é de ${this.year * this.value}`;
    }

    getYear = (): number => {
        return this.year;
    }

    getValue = (): number => {
        return this.value;
    }
}