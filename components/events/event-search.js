import React, { useRef } from "react";
import Button from "../ui/button";
import classes from "../../styles/events-search.module.css";

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedmonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedmonth);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label>Year</label>
          <select id="year" ref={yearRef}>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label>Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">Juin</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventSearch;
