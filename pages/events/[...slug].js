import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

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
    return <p className="center">No Events found...</p>;
  }

  console.log(events);
  return <EventList events={events} />;
};

export default DiversPage;
