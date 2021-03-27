const getAvatarQuerySchema = (userName) => {
  return `{ 
    user(login:"${userName}") { 
      avatarUrl
    }
  }
    `;
};

module.exports = {
  getAvatarQuerySchema,
};
