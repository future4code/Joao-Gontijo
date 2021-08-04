class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      introduceYourself (): string {
        return `Olá, sou ${this.name}. bom dia`
      }
  }
  const user: User = new User ('asdasd', 'asd', 'Ja', '123asd')


  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  
  const cliente: Customer = new Customer("asddzcxcz", "aaa@aa.com", "Tem Nome", "123456", '1230012302')
console.log(cliente.getId())
console.log(cliente.getName())
console.log(cliente.getCreditCard())
console.log(cliente.getEmail())
console.log(cliente.introduceYourself())