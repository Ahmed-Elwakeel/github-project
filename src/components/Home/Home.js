import Repos from "./../Repos/Repos";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "./../Profile/Profile";
import { useState, useEffect } from "react";
import { reposAPI } from "./../Repos/ReposAPI";
import { ProfileAPI } from "./../Profile/ProfileAPI";
import style from "./Home.module.scss";
import UserSearch from "./../Home/UserSearch";
function Home() {
  const [repos, setRepos] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("ahmed-elwakeel");
  const [isLoading, setIsLoading] = useState(false);
  const [isUser, setIsUser] = useState(true);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setIsLoading(true);
    const userRepos = await reposAPI.getRepositories(userName);
    const avatar = await ProfileAPI.getAvatar(userName);
    /** In case an empty array of repos, this means that the user was not found */

    if (userRepos.length === 0) {
      setIsUser(false);
    }
    setRepos(userRepos);
    setAvatar(avatar);
    setIsLoading(false);
  };

  /** the onSubmit function for searching the user */
  const updateInfo = async (e) => {
    e.preventDefault();
    /** resetting the isUser attribute every time a search is done */
    setIsUser(true);
    await getUserData();
  };

  /** In case of loading thea data */
  if (isLoading) {
    return (
      <div>
        <Container className={style.container}>
          <UserSearch
            userName={userName}
            setUserName={setUserName}
            updateInfo={updateInfo}
          />
          <Row>
            <h3 className="margin-top-10">Loading info...</h3>
          </Row>
        </Container>
      </div>
    );
  }
  /** In case of user was not found*/
  if (!isUser) {
    return (
      <div>
        <Container className={style.container}>
          <UserSearch
            userName={userName}
            setUserName={setUserName}
            updateInfo={updateInfo}
          />
          <Row>
            <h3 className="margin-top-10">The user doesn't exist</h3>
          </Row>
        </Container>
      </div>
    );
  }

  /** The normal case, User found with repos */
  return (
    <div>
      <Container className={style.container}>
        <Row>
          <Col xs={8} md={4}>
            <Profile userName={userName} avatar={avatar} />
          </Col>
          <Col xs={10} md={8}>
            <UserSearch
              userName={userName}
              setUserName={setUserName}
              updateInfo={updateInfo}
            />
            <Repos userName={userName} repos={repos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
