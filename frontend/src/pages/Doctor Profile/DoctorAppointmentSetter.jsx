import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, addDays } from "date-fns";
import { setTimeSlots } from "../../store/timeSlotsSlice";

const DoctorAppointmentSetter = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tempSelectedTimeSlots, setTempSelectedTimeSlots] = useState([]);

  const dateKey = format(selectedDate, "yyyy-MM-dd");
  const dateTimeSlots = useSelector((state) => state.timeSlots.dateTimeSlots);
  // const selectedTimeSlots = dateTimeSlots[dateKey] || [];

  const timeSlots = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsSubmitted(false);
    setTempSelectedTimeSlots(dateTimeSlots[format(date, "yyyy-MM-dd")] || []);
  };

  const handleTimeSlotToggle = (time) => {
    if (isSubmitted) return;

    setTempSelectedTimeSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleSubmit = () => {
    if (tempSelectedTimeSlots.length === 0) {
      alert("Please select at least one time slot before submitting.");
      return;
    }

    dispatch(setTimeSlots({ date: dateKey, slots: tempSelectedTimeSlots }));

    const updatedDateTimeSlots = {
      ...dateTimeSlots,
      [dateKey]: tempSelectedTimeSlots,
    };

    sessionStorage.setItem(
      "dateTimeSlots",
      JSON.stringify(updatedDateTimeSlots)
    );

    alert(
      `Selected date: ${dateKey}\nSelected time slots: ${tempSelectedTimeSlots.join(
        ", "
      )}`
    );
    setIsSubmitted(true);
  };

  useEffect(() => {
    const storedDateTimeSlots = JSON.parse(
      sessionStorage.getItem("dateTimeSlots")
    );
    if (storedDateTimeSlots) {
      Object.entries(storedDateTimeSlots).forEach(([date, slots]) => {
        dispatch(setTimeSlots({ date, slots }));
      });
    }
    setTempSelectedTimeSlots(storedDateTimeSlots?.[dateKey] || []);
  }, [dispatch, dateKey]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Set Available Appointments</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()}
            maxDate={addDays(new Date(), 21)}
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">
            {format(selectedDate, "MMMM d, yyyy")}
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSlotToggle(time)}
                className={`p-2 rounded ${
                  tempSelectedTimeSlots.includes(time)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                disabled={isSubmitted}
              >
                {time}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Set Available Times
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentSetter;
