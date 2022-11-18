import React from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../utils/api-integration";

const HomePage = (props) => {
  const { events } = props;
  if (!events) {
    return <p>No Events found</p>;
  }
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps(context) {
  const events = await getFeaturedEvents();
  return {
    props: {
      events,
      revalidate: 1800,
    },
  };
}

export default HomePage;
