const { BASE_URL } = window.env || {BASE_URL :'http://a6c8613a0edda488d850cee70b801a05-645905386.ap-south-1.elb.amazonaws.com:8080'};

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
