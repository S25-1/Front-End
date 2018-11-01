export class Vacancy {
  userUUID: string;
  name: string;
  requiredSkills: JobType[];
  beginDateTime: string;
  endDateTime: string;
  description: string;
  jobType: JobType;

  getJobTypes(): JobType[] {
    return JSON.parse(`
      { "jobTypes" : [
        {
          "value"       : 1,
          "placeholder" : "stock clerk"
        },
        {
          "value"       : 2,
          "placeholder" : "cashier"
        },
        {
          "value"       : 3,
          "placeholder" : "manager"
        },
        {
          "value"       : 4,
          "placeholder" : "greengrocer"
        },
        {
          "value"       : 5,
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
