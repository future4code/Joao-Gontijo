// 1A) O construtor dentro de uma classe serve para que possamos criar novas variáveis que herdam as propriedades da classe, simplificando o código
//B) 1 vez
//C) É necessário criar um método dentro da classe para acessar suas propriedades privadas
    class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
   getCpf (): string {
     return this.cpf
  }
  getName (): string {
     return this.name
  }
  getAge () : number {
     return this.age
  }
  getBalance (): number {
     return this.balance
  }
  getTransactions (): Transaction[] {
     return this.transactions
  }

}



class Bank {
   private accounts: UserAccount[]

   constructor (accounts: UserAccount[]) {
      this.accounts = accounts
   }

   getAccounts (): UserAccount [] {
      return this.accounts
   }
}

class Transaction {
   description: string
   value: number
   date: string

   constructor(
      description: string,
      value: number,
      date: string
   ) {
      this.description = description
      this.value = value
      this.date = date
   }
   getDate() : string {
      return this.date
   }
   getValue(): number {
      return this.value
   }
   getDescription(): string {
      return this.description
   }
}


//2
 
