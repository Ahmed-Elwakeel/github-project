import { Row, Col } from "react-bootstrap";
import { formatTimestamp } from "../../utils/utils.time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Styles from "./Repos.module.scss";

const Repo = ({ repo }) => {
  return (
    <div>
      <Row>
        <Col>
          <div className={Styles["repo-name"]}>{repo.name}</div>
        </Col>
      </Row>

      {repo.description && repo.description.length > 0 && (
        <Row className={Styles["repo-info"]}>
          <Col>
            <div>{repo.description}</div>
          </Col>
        </Row>
      )}

      <Row className={Styles["repo-info"]}>
        {repo.languages[0] && (
          <Col md="auto">
            <div
              className={Styles["language-dot"]}
              style={{ backgroundColor: `${repo.languages[0].color}` }}
            ></div>
            {repo.languages[0] ? repo.languages[0].name : ""}
          </Col>
        )}
        {repo.stargazerCount > 0 && (
          <Col md="auto">
            <FontAwesomeIcon className="margin-right-10" icon={faStar} />
            {repo.stargazerCount}
          </Col>
        )}
        {repo.forkCount > 0 && (
          <Col md="auto">
            <FontAwesomeIcon className="margin-right-10" icon={faCodeBranch} />
            {repo.forkCount}
          </Col>
        )}
        {repo.licenseInfo && (
          <Col md="auto">
            <FontAwesomeIcon
              className="margin-right-10"
              icon={faBalanceScale}
            />
            {repo.licenseInfo}
          </Col>
        )}
        <Col>{formatTimestamp(repo.updatedAt)}</Col>
      </Row>
      <div className="border-bottom-secondary"></div>
    </div>
  );
};

export default Repo;
