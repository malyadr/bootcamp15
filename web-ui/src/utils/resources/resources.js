const { BASE_URL } = window.env || {BASE_URL : 'a8bb53eb71e154e808e8c5b42f0bb6a6-704007710.ap-south-1.elb.amazonaws.com:8080'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
