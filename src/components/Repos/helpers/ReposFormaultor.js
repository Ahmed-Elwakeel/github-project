class ReposFormulator {
  static formulateGetRepos(reposResponse) {
    const repos = reposResponse.data.data.user.repositories.edges;

    const formulatedRepos = repos.map((repoEdge) => {
      const repoNode = repoEdge.node;
      return {
        id: repoNode.id,
        name: repoNode.name,
        description: repoNode.description,
        forkCount: repoNode.forkCount,
        licenseInfo: repoNode.licenseInfo ? repoNode.licenseInfo.name : "",
        stargazerCount: repoNode.stargazerCount,
        updatedAt: repoNode.updatedAt,
        issuesCount:
          repoNode.issues && repoNode.issues.totalCount
            ? repoNode.issues.totalCount
            : 0,
        languages:
          repoNode.languages && repoNode.languages.nodes
            ? repoNode.languages.nodes
            : [],
        topics:
          repoNode.repositoryTopics.edges &&
          repoNode.repositoryTopics.edges.length > 0
            ? repoNode.repositoryTopics.edges.map(
                (topicEdge) => topicEdge.node.topic.name
              )
            : [],
      };
    });
    return formulatedRepos;
  }
}

module.exports = ReposFormulator;
