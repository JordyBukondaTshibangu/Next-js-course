import { Fragment } from "react";
import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../utils/api-integration";

import EventLogistics from "../../components/events/event-logistics";
import EventSummary from "../../components/events/event-summary";
import EventContent from "../../components/events/event-content";

const EventDetailsPage = (props) => {
  const { event } = props;

  if (!event) {
    return <div className="center"> Loading...</div>;
  }

  const { title, description, date, image, location } = event;

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name={event.title} content={event.description} />
      </Head>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        alt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  // Gather all event ids by ourself
  return {
    paths,
    fallback: true,
  };

  // Let NextJS Gather all event ids
  // return {
  //   paths: [{ params: { eventId: "e1", eventId: "e2" } }],
  //   fallback: true,
  // };
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 120,
  };
}

export default EventDetailsPage;
