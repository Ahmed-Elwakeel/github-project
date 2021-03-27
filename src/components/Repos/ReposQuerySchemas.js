const getReposQuerySchema = (userName) => {
  return `{
        user(login: "${userName}") {
          repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 10, ownerAffiliations: OWNER) {
            edges {
              node {
                id
                name
                description
                stargazerCount
                licenseInfo {
                  id
                  name
                }
                updatedAt
                repositoryTopics(first: 7) {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
                languages(first: 1) {
                  nodes {
                    name
                    color
                  }
                }
                issues {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
      `;
};
module.exports = {
  getReposQuerySchema,
};
