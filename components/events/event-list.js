import EventItem from "./event-item";
import classes from "../../styles/event-list.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events?.map((item) => (
        <EventItem key={item.id} item={item}></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
