import { Account } from "./classes/account"; 
import { AccountPro } from "./classes/accountPro";
import { AccountVanGogh } from "./classes/accountVanGogh";

const personAccount = new Account("Caio", 24590, 500, true);
const personAccountPro = new AccountPro("Danilo", 12345, 1200, true, 500);
const personAccountVanGogh= new AccountVanGogh("Fernanda", 432, 8200, true, 4000, 2, 10);

console.log(personAccount.getName())
console.log(personAccount.getBalance())
console.log(" ");

console.log(personAccountPro.getName());
console.log(personAccountPro.getBalance());
console.log(personAccountPro.getHowMuchGetLoan());
console.log(personAccountPro.getLoan(300));
console.log(personAccountPro.getBalance());
console.log(" ");

console.log(personAccountVanGogh.getName());
console.log(personAccountVanGogh.getBalance());
console.log(personAccountVanGogh.getHowMuchGetLoan());
console.log(personAccountVanGogh.getInterest());
personAccountVanGogh.deposit(500);
console.log(personAccountVanGogh.getBalance());
