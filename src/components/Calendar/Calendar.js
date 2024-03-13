import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./Calendar.css";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Calendaratnd() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const navigate = useNavigate();
  return (
    <div
      className="Event_dis"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
      }}
    >
      <div className="header">
        <Header />
      </div>

      <div className="threebt"></div>
      <div className="container-calendar">
        <div>
          {" "}
          <div className="header-2">
            <div style={{ width: "fit-content", height: "fit-content" }}>
              <h1 id="events-tag">Events</h1>
            </div>
            <div className="buttn" id="list">
              <button
                class="btn"
                onClick={() => {
                  navigate("/attendevents");
                }}
              >
                List{" "}
              </button>
            </div>

            <div className="buttn" id="calendarbtn">
              <button class="btn">Calendar</button>
            </div>
          </div>
          <div className="calendar-box">
            <div className="outerline">
              <div className="date">
                <p className="select-none font-semibold">
                  {months[today.month()]}, {today.year()}
                </p>
                <div className="flex gap-10 items-center ">
                  <GrFormPrevious
                    className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                    onClick={() => {
                      setToday(today.month(today.month() - 1));
                    }}
                  />
                  <p
                    className=" cursor-pointer hover:scale-105 transition-all text-gray"
                    onClick={() => {
                      setToday(currentDate);
                    }}
                  >
                    Today
                  </p>
                  <GrFormNext
                    className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                    onClick={() => {
                      setToday(today.month(today.month() + 1));
                    }}
                  />
                </div>
              </div>
              <div className="months ">
                {days.map((day, index) => {
                  return (
                    <p
                      key={index}
                      className=" text-center h-18 w-18 grid place-content-center text-grey-500 select-none"
                    >
                      {day}
                    </p>
                  );
                })}
              </div>

              <div className=" digits ">
                {generateDate(today.month(), today.year()).map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div key={index} className=" digits1">
                        <h2
                          className={cn(
                            currentMonth ? "" : "text-gray-600",
                            today ? "bg-red-600 text-white " : "",
                            selectDate.toDate().toDateString() ===
                              date.toDate().toDateString()
                              ? "bg-black text-gray-400"
                              : "",
                            "rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                          )}
                          onClick={() => {
                            // setSelectDate(moment(date).format("DD-MM-YYYY"));
                            console.log(moment(date).format("DD-MM-YYYY"));
                          }}
                        >
                          {date.date()}
                        </h2>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="right-div">
          <div className="alleventsbtn">
            <button
              class="continue-application"
              onClick={() => {
                navigate("/crtevnets");
              }}
            >
              <div>
                <div class="pencil"></div>
                <div class="folder">
                  <div class="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div class="paper"></div>
                </div>
              </div>
              Create Event
            </button>
          </div>
          <div className="container-events">
            <div className="eventsheader">Your Events</div>
            <div className="eventslist"></div>
          </div>
        </div>
      </div>
    </div>
  );
}