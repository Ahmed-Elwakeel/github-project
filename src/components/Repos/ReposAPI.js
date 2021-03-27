import axios from "axios";
import * as ReposQuerySchema from "./ReposQuerySchemas";
import * as ReposFormulator from "./helpers/ReposFormaultor";
const token = process.env.REACT_APP_GITHUB_TOKEN;
const githubRoute = process.env.REACT_APP_GITHUB_ROUTE;
export const reposAPI = {
  getRepositories: async (userName) => {
    try {
      /** A separated file for the module schemas to avoid repetition and to reduce the number of lines in the file */
      const getReposQuerySchema = ReposQuerySchema.getReposQuerySchema(
        userName
      );
      const reposResponse = await axios.post(
        githubRoute,
        {
          query: getReposQuerySchema,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      /**A case  when the username input is not found from the query it will return the user as null */
      if (!reposResponse.data.data.user) {
        return [];
      }
      const formulatedRepos = ReposFormulator.formulateGetRepos(reposResponse);
      return formulatedRepos;
    } catch (error) {
      return [];
    }
  },
};
