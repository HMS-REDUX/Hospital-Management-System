import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalog = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Doctor Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden m-4"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{doctor.name}</div>
              <p className="text-gray-700 text-base mb-2">
                Email: {doctor.email}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Price: ${doctor.price}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Experience: {doctor.years_of_experience} years
              </p>
              <p className="text-gray-700 text-base mb-2">
                Contact: {doctor.contact_number}
              </p>
              <p className="text-gray-700 text-base">{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
