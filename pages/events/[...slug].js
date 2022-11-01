import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert";

const DiversPage = () => {
  const router = useRouter();
  const [year, month] = router.query.slug;

  if (!year || !month) {
    return <p className="center">Loading...</p>;
  }

  const theYear = +year;
  const theMonth = +month;

  if (
    isNaN(theYear) ||
    isNaN(theMonth) ||
    theYear > 2028 ||
    theYear < 2021 ||
    theMonth < 1 ||
    theMonth > 12
  ) {
    return <p className="center">Invalid filter,Please adjust your date...</p>;
  }
  const events = getFilteredEvents({ year: theYear, month: theMonth });
  if (!events || events.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>No Events found ...</ErrorAlert>
        <Button className="center" link="/events">
          Show All Events
        </Button>
      </div>
    );
  }
  return (
    <div className="center">
      <EventList events={events} />
      <Button link="/events">Show All Events</Button>
    </div>
  );
};

export default DiversPage;
