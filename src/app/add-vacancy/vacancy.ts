export class Vacancy {
  userUUID: string;
  name: string;
  // requiredSkills: getJobTypes[];
  beginDate: string;
  endDate: string;
  description: string;

  getJobTypes(): JSON {
    return JSON.parse(`
      { "jobTypes" : [
        {
          "value"       : "StockClerk",
          "placeholder" :  "stock clerk"
        },
        {
          "value"       : "Cashier",
          "placeholder" : "cashier"
        },
        {
          "value"       : "Manager",
          "placeholder" : "manager"
        },
        {
          "value"       : "GreenGrocer",
          "placeholder" : "greengrocer"
        },
        {
          "value"       : "SecurityGuard",
          "placeholder" : "security guard"
        }
      ]
    }`);
  }
}

// export enum jobTypes {
//   StockClerk = 'stock clerk',
//   Cashier = 'cashier',
//   Manager = 'manager',
//   GreenGrocer = 'greengrocer',
//   SecurityGuard = 'security guard',
// }
