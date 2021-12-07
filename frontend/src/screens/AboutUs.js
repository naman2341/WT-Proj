import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
    return (
        <div>
        
            <h4>About Us</h4>
            <p/>
                We hope that you've had a nice experience with us at DigArt.
                Please do support us and have a look at the other Projects that we've worked on!!
                <div class="list-group">
                <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
      <p/>
    <div class="ms-2 me-auto">
      <div class="fw-bold">Praneeth</div>
      <br/>
      <a href = "https://github.com/praneethk002"><img src = "\images\P1.png" height="200"/></a>
      <br/><br/><br/>
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
  <p/>
    <div class="ms-2 me-auto">
      <div class="fw-bold">Naman</div>
      <br/>
      <a href = "https://github.com/naman2341"><img src = "\images\P2.png" height="200"/></a>
        <br/><br/><br/>
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
  <p/>
    <div class="ms-2 me-auto">
      <div class="fw-bold">Nandan</div>
      <br/>
      <a href = "https://github.com/MonkeyDGod619"><img src = "\images\P3.png" height="200"/></a>
      <br/><br/><br/><br/>
    </div>
    <span class="badge bg-primary rounded-pill"></span>
  </li>
</ol>

</div>

            <footer>Thank You for Visiting Our Page</footer>
        </div>
    )
}