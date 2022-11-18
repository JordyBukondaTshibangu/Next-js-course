import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { allEvents } from "../../utils/api-integration";

const EventPage = (props) => {
  const router = useRouter();
  const { events } = props;
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

export async function getStaticProps() {
  const events = await allEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventPage;
