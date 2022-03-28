const { BASE_URL } = window.env || {BASE_URL : 'a43d990e094aa4f849f7830ad8db7912-752885773.ap-south-1.elb.amazonaws.com' }:

export const apis = {
  GET_SKILLS: `${BASE_URL}/api/skills`,
  GET_JOBS: `${BASE_URL}/api/jobs/`,
  GET_SAVEDJOBS: `${BASE_URL}/api/saved-jobs/`,
};
