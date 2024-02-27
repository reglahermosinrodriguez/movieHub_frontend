import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <Link to="#" onClick={() => window.history.back()}>
          <IoMdArrowRoundBack className="footer-arrow" />
        </Link>
      </footer>
    </div>
  );
}