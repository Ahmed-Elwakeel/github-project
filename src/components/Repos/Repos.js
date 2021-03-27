import { useState } from "react";
import { Form } from "react-bootstrap";
import Repo from "./Repo";
const Repos = ({ userName, repos }) => {
  const [searchString, setSearchString] = useState("");

  const filteredRepos = repos.filter((repo) => {
    return (
      searchString.length === 0 ||
      repo.name.toLowerCase().includes(searchString.toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };
  return (
    <div>
      <Form className="search-bar">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Find a repository..."
            value={searchString}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <div className="border-bottom-secondary"></div>

      {filteredRepos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
