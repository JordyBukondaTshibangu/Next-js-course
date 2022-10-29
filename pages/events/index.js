import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

const EventPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const findEventHandler = (year, month) => {
    const path = `events/${year}/${month}`;
    router.push(path);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export default EventPage;
