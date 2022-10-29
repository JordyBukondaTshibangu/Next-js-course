import { useRouter } from "next/router";
import { Fragment } from "react";
import EventLogistics from "../../components/events/event-logistics";
import EventSummary from "../../components/events/event-summary";
import EventContent from "../../components/events/event-content";
import { getEventById } from "../../dummy-data";

const EventDetailsPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event Found</p>;
  }

  const { title, description, date, image, location } = event;

  return (
    <Fragment>
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

export default EventDetailsPage;
