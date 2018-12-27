export interface Vacancy {
  vacancyID: number;
  userID: number;
  name: string;
  jobType: number;
  description: string;
  beginDateTime: Date;
  endDateTime: Date;
  minimalExperience: number;
  requiredSkills: Skill[];
}

export interface Skill {
  skillTypeID: number;
  skillTypeName: string;
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
