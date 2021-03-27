import style from "./Profile.module.scss";
const Profile = ({ avatar }) => {
  return (
    <div>
      <img className={style.avatar} src={avatar} alt="new" />
    </div>
  );
};

export default Profile;
