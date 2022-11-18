import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert";

const DiversPage = () => {
  const router = useRouter();
  const [year, month] = router.query.slug;

  const theYear = +year;
  const theMonth = +month;

  const pageHeadData = (
    <Head>
      <title>All the Events</title>
      <meta
        name="All the events"
        content={`All events for ${theMonth / theYear}`}
      />
    </Head>
  );

  if (!year || !month) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  if (
    isNaN(theYear) ||
    isNaN(theMonth) ||
    theYear > 2028 ||
    theYear < 2021 ||
    theMonth < 1 ||
    theMonth > 12
  ) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Invalid filter,Please adjust your date...</p>
      </Fragment>
    );
  }
  const events = getFilteredEvents({ year: theYear, month: theMonth });
  if (!events || events.length === 0) {
    return (
      <div className="center">
        {pageHeadData}
        <ErrorAlert>No Events found ...</ErrorAlert>
        <Button className="center" link="/events">
          Show All Events
        </Button>
      </div>
    );
  }
  return (
    <div className="center">
      {pageHeadData}
      <EventList events={events} />
      <Button link="/events">Show All Events</Button>
    </div>
  );
};

export default DiversPage;
