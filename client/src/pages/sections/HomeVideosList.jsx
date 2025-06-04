import React, { useEffect, useState } from 'react';
import { BsPlayBtnFill } from 'react-icons/bs';
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import welcomeGif from '../../assets/welcome.gif';
import videosData from '../../assets/testData/videosData.json'

export default function HomeVideosList() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const firstTime = localStorage.getItem("firstTime");

    if (token) {
      setIsLoggedIn(true);
      if (firstTime === 'true') {
        setIsFirstTime(true);
        setTimeout(() => {
          localStorage.setItem("firstTime", "false");
        }, 2000);
      }
    }

    if (!firstTime) {
      localStorage.setItem("firstTime", "true");
      setIsFirstTime(true);
    }
  }, []);

  const handleSkip = () => {
    localStorage.setItem("firstTime", "false");
    setShowWelcome(false);
  };

  return (
    <div className='position-relative '>

      {/* Videos Card Groups */}
      <div className="w-100 container">
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-3"
          style={{ marginTop: "30px", marginBottom: "30px", width: "98%" }}
        >
          {videosData.map((item, index) => (
            <div key={index} className="card shadow-lg py-2 bg-secondary"
              style={{ width: "300px", backgroundColor: "whitesmoke", cursor: "pointer" }}
            >
              <div className='d-flex align-center gap-3 '>
                <img
                  src={item.profilePic}
                  className='rounded-circle ms-2 border border-danger border-2'
                  alt={item.channelName}
                  style={{ width: "30px", height: "100%" }}
                />
                <div>
                  <h6 style={{ fontSize: "13px" }}>{item.channelName}</h6>
                  <p className='lh-1' style={{ fontSize: "10px" }}>
                    <span>{item.uploadTime}</span>
                    <span className='ms-2'>views {item.views}</span>
                  </p>
                </div>
              </div>
              <div className='w-100'>
                <img src={item.videoBanner} className="w-100" alt={item.title} />
              </div>
              <div className='mt-2'>
                <h6 className="card-title ms-2">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome container */}
      {(isFirstTime && showWelcome) && (
        <div className="container w-75 bg-dark text-white p-4 position-absolute absulate-top mt-5 rounded shadow-lg">
          <button
            className="btn btn-sm btn-outline-light position-absolute top-0 end-0 m-2"
            onClick={handleSkip}
          >
            Skip
          </button>
          <div className="container w-100">
            <div className="text-center mb-3 d-flex align-items-center justify-content-center gap-2 flex-column">
              <h4 className="d-flex align-items-center justify-content-center gap-2">
                <span>Welcome to</span>
                <BsPlayBtnFill className="text-info" size={28} />
                <span className="text-info fw-bold">Vistro</span>
                <FaRegSmileWink size={22} />
              </h4>
              <p className="mt-2 fs-5" style={{ width: "50%" }}>
                Your personalized video hub — Explore trending content, stay updated with the latest news, and connect with creators from around the world 🌍✨
              </p>
            </div>

            {!isLoggedIn && (
              <div className="text-center">
                <p className="fs-6">
                  New here? <Link className="text-info fw-semibold" to="/create-account">Create a free account</Link>
                  <br />
                  Already have one? <Link className="text-success fw-semibold" to="/login">Login now</Link>
                </p>
              </div>
            )}

            <div className="text-center mt-3">
              <img src={welcomeGif} alt="Welcome" style={{ width: '180px' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
