export interface Vacancy {
  VacancyID: number;
  UserID: number;
  Name: string;
  Job: {Job_typeID: number, Job_name: string};
  Description: string;
  Date_begin: Date;
  Date_end: Date;
  MinExperience: number;
  SkillList: Skill[];
}
export interface Skill {
  SkillTypeID: number;
  SkillTypeName: string;
}
// AcceptedUserList: []
// Date_begin: "2018-03-02T10:30:00"
// Date_end: "2019-03-02T00:00:00"
// Description: "Beschrijving van vacature"
// Job: {Job_typeID: 1, Job_name: "Vakkenvuller"}
// MinExperience: 8
// Name: "Vakkenvuller gezocht"
// SkillList: [{SkillTypeID: 1, SkillTypeName: "Vakkenvullen"}]
// UserID: 1
// VacancyID: 1
