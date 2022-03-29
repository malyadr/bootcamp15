const { BASE_URL } = window.env || {BASE_URL : 'a43d5a90f9a094b7d966ead0de7fb2cf-161477199.ap-south-1.elb.amazonaws.com:8080'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
