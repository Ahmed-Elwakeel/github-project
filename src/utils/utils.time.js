import moment from "moment";
export const formatTimestamp = (timestamp) => {
  const currentDate = moment(new Date());
  const momentTimestamp = moment(timestamp);
  /** calculate the difference between the timestamp and the current date in days*/
  const diffInDays = currentDate.diff(momentTimestamp, "days");

  if (diffInDays > 20) {
    return `Updated on ${moment(timestamp).format("MMM DD, YYYY")}`;
  } else if (diffInDays === 0) {
    return `Updated today`;
  } else if (diffInDays === 1) {
    return `Updated Yesterday`;
  } else {
    return `Updated ${diffInDays} days ago`;
  }
};
