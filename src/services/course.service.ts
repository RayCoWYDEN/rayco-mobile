import {api} from "../interceptor/api";

function getAutocompleteCourses(){    
  return api.get(`courses/autocomplete`)
} 

export { getAutocompleteCourses };
