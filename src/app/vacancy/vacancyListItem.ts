export interface Vacancy {
  // vacancyID: number;
  // userID: number;
  // Name: string;
  // requiredJob: number;
  // reqCompetence: [{skillTypeID: number, skillTypeName: string}];
  // description: string;
  // dateBegin: string;
  // dateEnd: string;
  // minMonthsExperience: number;
  Date_begin: Date;
  Date_end: Date;
  Description: string;
  Job: [{Job_typeID: number, Job_name: string}];
  MinExperience: number;
  Name: string;
  SkillList: [{SkillTypeID: number, SkillTypeName: string}];
  UserID: number;
  VacancyID: number;
}

