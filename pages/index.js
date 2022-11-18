import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../utils/api-integration";

const HomePage = (props) => {
  const { events } = props;
  if (!events) {
    return <p>No Events found</p>;
  }
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find the best events in your city" />
      </Head>
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
