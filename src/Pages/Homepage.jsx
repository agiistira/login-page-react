import React from "react";
import "../Styles/Home.css";

function Homepage() {
  return (
    <div className="landing-content">
      <div className="left-content">
        <h2>PERLUKAH BIMBINGAN KONSELING DI SEKOLAH ANDA?</h2>
        <p>Membantu individu memahami diri sendiri, termasuk minat, bakat, nilai, kekuatan, dan kelemahan</p>
      </div>
      <div className="right-content">
        <img src="../assets/image.png" alt="Counseling Illustration" className="illustration-image"></img>
      </div>
    </div>
  );
}

export default Homepage;
