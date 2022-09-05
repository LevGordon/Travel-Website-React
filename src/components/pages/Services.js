import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ServicesCards from "../ServicesCards";





function Services() {



  return (
    <div>
      <h1 className="services">SERVICES</h1>
      <ServicesCards />
      {/* <h1> Sign up with TRVL and start planning your next adventure! </h1> */}
      <Footer />
    </div>
  );
}

export default Services;
