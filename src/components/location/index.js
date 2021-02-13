import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.788913546544!2d44.78792284709102!3d41.72296953986477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472cdf8e6b329%3A0x316d4c4991b44fc3!2z4YOR4YOd4YOg4YOY4YOhIOGDnuGDkOGDmOGDreGDkOGDq-GDmOGDoSDhg6Hhg5Dhg67hg5Thg5rhg53hg5Hhg5jhg6Eg4YOU4YOg4YOd4YOV4YOc4YOj4YOa4YOYIOGDoeGDouGDkOGDk-GDmOGDneGDnOGDmA!5e1!3m2!1ska!2sge!4v1613226002497!5m2!1ska!2sge"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
