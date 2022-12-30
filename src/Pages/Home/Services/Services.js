import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center px-3">
      <div>
        <p className="text-center fs-3 fw-bold">Top Posts </p>
      </div>
      <div className="row">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link className="btn btn-primary my-3" to="/allservices">
        See All Posts
      </Link>
    </div>
  );
};

export default Services;
