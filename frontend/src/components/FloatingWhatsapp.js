import React from "react";

const FloatingWhatsapp = () => {
  const phoneNumber = "9579068536";
  const message = "Hello!";
  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreffer"
        className="whatsapp-icon"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
