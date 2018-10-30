export class Vacancy {
  userUUID: string;
  name: string;
  requiredSkills: JobType;
  beginDate: string;
  endDate: string;
  description: string;

  getJobTypes(): JobType[] {
    return JSON.parse(`
      { "jobTypes" : [
        {
          "value"       : "StockClerk",
          "placeholder" : "stock clerk"
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
          "value"       : "Greengrocer",
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

export interface JobType {
  value: string;
  placeholder: string;
}

// export enum jobTypes {
//   StockClerk = 'stock clerk',
//   Cashier = 'cashier',
//   Manager = 'manager',
//   GreenGrocer = 'greengrocer',
//   SecurityGuard = 'security guard',
// }
