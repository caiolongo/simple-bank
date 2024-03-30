import { Account } from "./account"

export class AccountPro extends Account {
    private howMuchGetLoan: number;
    
    constructor(name: string, accountNumber: number, balance: number, status: boolean, howMuchGetLoan: number) {
        super(name, accountNumber, balance, status);
        this.howMuchGetLoan = howMuchGetLoan;
    }

    getLoan = (howMuch: number): string | undefined => {
        if (howMuch <= this.howMuchGetLoan) {
            this.deposit(howMuch);
            return `Você emprestou ${howMuch}!`;
        } else {
            return `Você não pode emprestar ${howMuch}!`;
        }
    }

    getHowMuchGetLoan = (): number | undefined => {
        return this.howMuchGetLoan;
    }
}