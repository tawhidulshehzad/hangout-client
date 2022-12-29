import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Services from "../Home/Services/Services";
import ServiceCardAll from "../Shared/ServiceCard/ServiceCardAll";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <ClipLoader className="m-3" />
        </div>
      ) : (
        <div className="row">
          {services.map((service) => (
            <ServiceCardAll
              key={service._id}
              service={service}
            ></ServiceCardAll>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
