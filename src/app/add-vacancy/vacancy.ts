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
    }`).jobTypes;
    // This is a bit hacky but it is easy for testing
  }
}

// export enum jobTypes {
//   StockClerk = 'stock clerk',
//   Cashier = 'cashier',
//   Manager = 'manager',
//   GreenGrocer = 'greengrocer',
//   SecurityGuard = 'security guard',
// }
