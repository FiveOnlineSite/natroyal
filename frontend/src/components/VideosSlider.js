import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from "react-bootstrap";

const VideosSlider = ({ settings, slides }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePlay = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="video-slide-container">
            <div className="poster-container video-container">
              <img
                src={slide.thumbnail}
                alt="thumbnail"
                className="thumbnail-img w-100"
              />

              <div className="button-div">
                <button
                  className="play-button-div"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlay(slide.video);
                  }}
                >
                  <div className="button-outer-circle has-scale-animation"></div>
                  <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                  <div className="play-button">
                    <img src="/images/icons/play (1).png" alt="play-icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bootstrap Video Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modal-body video-modal-body">
          {/* <button className="close-button" onClick={handleClose}>
            &times;
          </button> */}
          {selectedVideo && (
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="video-modal w-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideosSlider;
