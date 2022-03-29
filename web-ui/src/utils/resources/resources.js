const { BASE_URL } = window.env || {BASE_URL : 'http://a090bdf559bcc4f4798bc3d09b9e2477-1838320143.ap-south-1.elb.amazonaws.com:8080'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
