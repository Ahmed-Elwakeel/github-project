import axios from "axios";
import * as ProfileQuerySchemas from "./ProfileQuerySchemas";
const token = process.env.REACT_APP_GITHUB_TOKEN;
const githubRoute = process.env.REACT_APP_GITHUB_ROUTE;
export const ProfileAPI = {
  getAvatar: async (userName) => {
    try {
      /** A separated file for the module schemas to avoid repetition and to reduce the number of lines in the file */
      const getAvatarQuerySchema = ProfileQuerySchemas.getAvatarQuerySchema(
        userName
      );
      const avatarResponse = await axios.post(
        githubRoute,
        {
          query: getAvatarQuerySchema,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      return avatarResponse.data.data.user.avatarUrl;
    } catch (error) {
      return {};
    }
  },
};
