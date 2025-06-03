import React from 'react';
import { BsPlayBtnFill } from 'react-icons/bs';
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import welcomeGif from '../../assets/welcome.gif'; // make sure to add a suitable GIF in your assets folder

export default function HomeVideosList() {
  return (
    <div>
      <div className="container absulate-top mt-5">
        <div className="container w-75 bg-dark text-white p-4 rounded shadow-lg">
          {/* Welcome section */}
          <div className="text-center mb-3">
            <h4 className="d-flex align-items-center justify-content-center gap-2">
              <span>Welcome to</span>
              <BsPlayBtnFill className="text-info" size={28} />
              <span className="text-info fw-bold">Vistro</span>
              <FaRegSmileWink size={22} />
            </h4>
            <p className="mt-2 fs-5">
              Your personalized video hub — Explore trending content, stay updated with the latest news, and connect with creators from around the world 🌍✨
            </p>
          </div>

          {/* Call-to-action links */}
          <div className="text-center">
            <p className="fs-6">
              New here? <Link className="text-info fw-semibold" to="/create-account">Create a free account</Link>
              <br />
              Already have one? <Link className="text-success fw-semibold" to="/login">Login now</Link>
            </p>
          </div>

          {/* Welcome image/gif */}
          <div className="text-center mt-3">
            <img src={welcomeGif} alt="Welcome" style={{ width: '180px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
