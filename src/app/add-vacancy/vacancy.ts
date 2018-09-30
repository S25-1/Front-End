export class Vacancy {
  constructor(
        public title: string,
        public date: Date,
        public location: string,

        public job: jobTypes,

        public description: string,

        public additionalInfo?: string,
    ) {}
}

enum jobTypes {
    StockClerk = 'stock clerk',
    Cashier = 'cashier',
    Manager = 'manager',
}
