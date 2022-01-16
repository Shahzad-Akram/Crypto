import React from "react";
import emailjs from "emailjs-com";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const contact = function () {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();
    console.log(e.target.user_name.value);
    const data = {
      name: e.target.user_name.value,
      phone: e.target.user_phone.value,
      text: e.target.message.value,
      from: e.target.user_email.value,
      to: "shahzadakram2244@gmail.com",
    };
    axios
      .post("http://localhost:3000", data)
      .then((res) => {
        console.log(res);
        success.classList.add("show");
        button.classList.add("show");
        failed.classList.remove("show");
        document.getElementById("create-course-form").reset();
      })
      .catch((err) => {
        console.log(err);

        failed.classList.add("show");
      });
    // emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
    //   .then((result) => {
    //       console.log(result.text);
    //       success.classList.add('show');
    //       button.classList.add('show');
    //       failed.classList.remove('show');
    //   }, (error) => {
    //       console.log(error.text);
    //       failed.classList.add('show');
    //   });
  }

  return (
    <div>
      <GlobalStyles />

      <section className="jumbotron breadcumb no-bg">
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Contact Us</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-lg-8 mb-3">
            <h3>Do you have any question?</h3>
            <div className="form-side">
              <form
                id="create-course-form"
                className="formcontact"
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="user_phone"
                  placeholder="Your Phone"
                  required
                />
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  required
                />
                <div id="success" className="hide">
                  Your message has been sent...
                </div>
                <div id="failed" className="hide">
                  Message failed...
                </div>
                <input
                  type="submit"
                  id="buttonsent"
                  value="Submit Now"
                  className="btn btn-main color-2"
                />
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="padding40 box-rounded mb30">
              <h3>US Office</h3>
              <address className="s1">
                <span>
                  <i className="id-color fa fa-map-marker fa-lg"></i>08 W 36th
                  St, New York, NY 10001
                </span>
                <span>
                  <i className="id-color fa fa-phone fa-lg"></i>+1 333 9296
                </span>
                <span>
                  <i className="id-color fa fa-envelope-o fa-lg"></i>
                  <span className="btn">contact@example.com</span>
                </span>
                <span>
                  <i className="id-color fa fa-file-pdf-o fa-lg"></i>
                  <span className="btn">Download Brochure</span>
                </span>
              </address>
            </div>

            <div className="padding40 box-rounded mb30 text-light">
              <h3>AU Office</h3>
              <address className="s1">
                <span>
                  <i className="fa fa-map-marker fa-lg"></i>100 Mainstreet
                  Center, Sydney
                </span>
                <span>
                  <i className="fa fa-phone fa-lg"></i>+61 333 9296
                </span>
                <span>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="btn">contact@example.com</span>
                </span>
                <span>
                  <i className="fa fa-file-pdf-o fa-lg"></i>
                  <span className="btn">Download Brochure</span>
                </span>
              </address>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default contact;
