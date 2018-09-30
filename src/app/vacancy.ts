export class Vacancy {
  constructor(
        public title: string,
        public date: Date,
        public location: string,

        public job: test,

        public description: string,

        public additionalInfo?: string,
    ) {}
}

enum test {
    StockClerk = 'stock clerk',
    Cashier = 'cashier',
    Manager = 'manager',
}
