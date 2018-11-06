export interface Vacancy {
  vacancyID: number;
  userID: number;
  name: string;
  requiredJob: number;
  reqCompetence: [{skillTypeID: number, skillTypeName: string}];
  description: string;
  dateBegin: string;
  dateEnd: string;
  minMonthsExperience: number;
}
// export interface Skill {
//   skillID: number;
//   name: string;
// }
