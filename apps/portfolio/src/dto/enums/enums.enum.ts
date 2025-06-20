export const SkillEnum = {
  LANGUAGES: 'LANGUAGES',
  TOOLS: 'TOOLS',
  SOFT_SKILLS: 'SOFT_SKILLS'
};
export type SkillEnumType = (typeof SkillEnum)[keyof typeof SkillEnum];
