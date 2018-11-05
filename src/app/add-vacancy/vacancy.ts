export class Vacancy {
  userUUID: string;
  name: string;
  requiredSkills: Skill[];
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
  }
  getSkills(): Skill[] {
    return JSON.parse(`
    { "skills" : [
      {
        "value"       : 1,
        "placeholder" : "first aid"
      },
      {
        "value"       : 2,
        "placeholder" : "marketing"
      },
      {
        "value"       : 3,
        "placeholder" : "speaks English"
      },
      {
        "value"       : 4,
        "placeholder" : "speaks German"
      },
      {
        "value"       : 5,
        "placeholder" : "stock manager"
      }
    ]
  }`).skills;
  }
  // This is a bit hacky but it is easy for testing
}

export interface JobType {
  value: string;
  placeholder: string;
}

export interface Skill {
  value: string;
  placeholder: string;
}
