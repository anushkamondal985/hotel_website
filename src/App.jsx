import "./App.css";

import exterior from "./assets/Hotel/exterior.png";
import exterior1 from "./assets/Hotel/exterior 1.png";
import lobby from "./assets/Hotel/lobby.png";
import lobby1 from "./assets/Hotel/lobby 1.png";
import dining from "./assets/Hotel/dining.png";
import bathroom from "./assets/Hotel/bathroom.png";
import living1 from "./assets/Hotel/living 1.png";
import living2 from "./assets/Hotel/living 2.png";
import living3 from "./assets/Hotel/living 3.png";
import room1 from "./assets/Hotel/room 1.png";
import room3 from "./assets/Hotel/room 3.png";
import room4 from "./assets/Hotel/room 4.png";
import room5 from "./assets/Hotel/room 5.png";
import room6 from "./assets/Hotel/room 6.png";
import room7 from "./assets/Hotel/room 7.png";
import room8 from "./assets/Hotel/room 8.png";
import room9 from "./assets/Hotel/room9.png";


function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          AAPPAYAN
        </div>

        <div className="nav-links">

          <a href="#about">About</a>

          <a href="#rooms">Rooms</a>

          <a href="#dining">Dining</a>

          <a href="#reviews">Reviews</a>

          <a href="#services">Services</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </div>

        {/* BOOK NOW intentionally left untouched */}

        <button className="book-button">
          BOOK NOW
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${exterior})`,
        }}
      >

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO
          </p>

          <h1>
            Aappayan Guest House & Restaurant,
            <br />
            Santiniketan
          </h1>

          <p className="hero-description">
            A comfortable stay surrounded by warmth,
            hospitality and the beauty of Santiniketan.
          </p>

          <button
            className="hero-button"
            onClick={() => scrollToSection("about")}
          >
            EXPLORE OUR HOTEL
          </button>

        </div>

      </section>


      {/* ================= BOOKING BAR ================= */}

      <section className="booking-bar">

        <div className="booking-item">
          <span>CHECK-IN</span>
          <strong>Select Date</strong>
        </div>

        <div className="booking-item">
          <span>CHECK-OUT</span>
          <strong>Select Date</strong>
        </div>

        <div className="booking-item">
          <span>ROOMS</span>
          <strong>1 Room</strong>
        </div>

        <div className="booking-item">
          <span>GUESTS</span>
          <strong>2 Guests</strong>
        </div>

        <button
  className="search-button"
  onClick={() => scrollToSection("contact")}
>
  SEARCH
</button>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-image">

          <img
            src={lobby}
            alt="Aappayan Guest House Lobby"
          />

        </div>

        <div className="about-content">

          <p className="section-label">
            WELCOME TO AAPPAYAN
          </p>

          <h2>
            A peaceful stay in Santiniketan
          </h2>

          <p>
            Aappayan Guest House & Restaurant offers
            a comfortable and welcoming place to stay
            in Santiniketan.
          </p>

          <p>
            Our rooms are designed to provide guests
            with a relaxing environment, while our
            restaurant offers a convenient dining
            experience during your stay.
          </p>

          <button
            className="dark-button"
            onClick={() => scrollToSection("rooms")}
          >
            DISCOVER MORE
          </button>

        </div>

      </section>


      {/* ================= ROOMS ================= */}

      <section
        id="rooms"
        className="rooms-section"
      >

        <div className="section-heading">

          <p className="section-label">
            ACCOMMODATION
          </p>

          <h2>
            Our Rooms
          </h2>

          <p>
            Comfortable rooms designed for a pleasant
            and relaxing stay.
          </p>

        </div>


        <div className="room-grid">

          <div className="room-card">

            <img
              src={room1}
              alt="Comfortable guest room"
            />

            <div className="room-info">

              <h3>
                Comfortable
              </h3>

              <p>
                A clean and comfortable space for
                a relaxing stay.
              </p>

            </div>

          </div>


          <div className="room-card">

            <img
              src={room3}
              alt="Spacious guest room"
            />

            <div className="room-info">

              <h3>
                Spacious
              </h3>

              <p>
                A bright and spacious room designed
                for your comfort.
              </p>

            </div>

          </div>


          <div className="room-card">

            <img
              src={room4}
              alt="Welcoming guest room"
            />

            <div className="room-info">

              <h3>
                Welcoming
              </h3>

              <p>
                A warm and inviting space to make
                your stay enjoyable.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ROOM SHOWCASE ================= */}

      <section className="room-showcase">

        <div className="showcase-text">

          <p className="section-label">
            COMFORT & RELAXATION
          </p>

          <h2>
            Feel at home during your stay
          </h2>

          <p>
            Our rooms offer comfortable interiors
            and spacious areas for a relaxing visit.
          </p>

        </div>


        <div className="showcase-images">

          <img src={room5} alt="Hotel room" />

          <img src={room6} alt="Hotel room" />

          <img src={room7} alt="Hotel room" />

          <img src={room8} alt="Hotel room" />

        </div>

      </section>


      {/* ================= DINING ================= */}

      <section
        id="dining"
        className="dining-section"
      >

        <div className="dining-image">

          <img
            src={dining}
            alt="Aappayan Restaurant"
          />

        </div>


        <div className="dining-content">

          <p className="section-label">
            DINING
          </p>

          <h2>
            Aappayan Restaurant
          </h2>

          <p>
            Enjoy delicious meals and a convenient
            dining experience during your stay
            at Aappayan Guest House.
          </p>

          <button
            className="dark-button"
            onClick={() => scrollToSection("dining")}
          >
            EXPLORE DINING
          </button>

        </div>

      </section>


      {/* =====================================================
          GUEST REVIEWS
      ===================================================== */}

      <section
        id="reviews"
        className="reviews-section"
      >

        <div className="reviews-heading">

          <p className="reviews-label">
            GUEST REVIEWS
          </p>

          <h2>
            What Our Guests Say
          </h2>

          <div className="overall-rating">

            <span className="rating-number">
              4.6
            </span>

            <span className="stars">
              ★★★★★
            </span>

            <span className="review-count">
              Based on 307 Google reviews
            </span>

          </div>

        </div>


        <div className="reviews-grid">


          {/* REVIEW 1 */}

          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                “Wonderful place, wonderful food,
                wonderful service and room.”
              </p>

            </div>

            <div className="review-bottom">

              <p className="review-author">
                Rajesh Das
              </p>

              <p className="review-source">
                Google Review
              </p>

            </div>

          </div>


          {/* REVIEW 2 */}

          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                “The rooms are clean and comfortable,
                and the staff are friendly and attentive.
                A great experience and excellent value
                for money.”
              </p>

            </div>

            <div className="review-bottom">

              <p className="review-author">
                CHIRANJIT D
              </p>

              <p className="review-source">
                Google Review
              </p>

            </div>

          </div>


          {/* REVIEW 3 */}

          <div className="review-card">

            <div className="review-top">

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                “Everything was good. The room was
                clean and the dinner was tasty.
                Overall, a very recommended stay.”
              </p>

            </div>

            <div className="review-bottom">

              <p className="review-author">
                Pritam R
              </p>

              <p className="review-source">
                Google Review
              </p>

            </div>

          </div>

        </div>


        <div className="reviews-button-container">

          <button
            className="reviews-button"
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=Aappayan+Guest+House+%26+Restaurant+Santiniketan+Google+reviews",
                "_blank"
              )
            }
          >
            READ MORE REVIEWS
          </button>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="services-section"
      >

        <div className="section-heading">

          <p className="section-label">
            HOTEL SERVICES
          </p>

          <h2>
            Everything you need for a comfortable stay
          </h2>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <h3>
              Comfortable Rooms
            </h3>

            <p>
              Clean and comfortable accommodation
              for our guests.
            </p>

          </div>


          <div className="service-card">

            <h3>
              Restaurant
            </h3>

            <p>
              Enjoy convenient dining during
              your stay.
            </p>

          </div>


          <div className="service-card">

            <h3>
              Free Wi-Fi
            </h3>

            <p>
              Stay connected with complimentary
              Wi-Fi available for guests.
            </p>

          </div>


          <div className="service-card">

            <h3>
              Air Conditioning
            </h3>

            <p>
              Air-conditioned rooms for
              your comfort.
            </p>

          </div>


          <div className="service-card">

            <h3>
              Television
            </h3>

            <p>
              Entertainment facilities available
              in the rooms.
            </p>

          </div>

        </div>

      </section>


      {/* ================= LIVING AREA ================= */}

      <section className="living-section">

        <div className="living-content">

          <p className="section-label">
            OUR PROPERTY
          </p>

          <h2>
            Relax in our welcoming spaces
          </h2>

          <p>
            Take a look at the comfortable common
            areas and interiors of Aappayan Guest House.
          </p>

        </div>


        <div className="living-grid">

          <img
            src={living1}
            alt="Living Area"
          />

          <img
            src={living2}
            alt="Living Area"
          />

          <img
            src={living3}
            alt="Living Area"
          />

          <img
            src={lobby1}
            alt="Hotel Lobby"
          />

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section
        id="gallery"
        className="gallery-section"
      >

        <div className="section-heading">

          <p className="section-label">
            GALLERY
          </p>

          <h2>
            A glimpse of Aappayan
          </h2>

        </div>


        <div className="gallery-grid">

          <img
            src={exterior1}
            alt="Hotel Exterior"
          />

          <img
            src={room9}
            alt="Hotel Room"
          />

          <img
            src={bathroom}
            alt="Hotel Bathroom"
          />

          <img
            src={room3}
            alt="Hotel Room"
          />

          <img
            src={room6}
            alt="Hotel Room"
          />

          <img
            src={room8}
            alt="Hotel Room"
          />

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="location-section">

        <div>

          <p className="section-label">
            EXPLORE SANTINIKETAN
          </p>

          <h2>
            Stay close to the heart of Santiniketan
          </h2>

          <p>
            A convenient base for exploring the
            culture, heritage and attractions
            of Santiniketan.
          </p>

        </div>


        <div className="location-box">

          <h3>
            Aappayan Guest House & Restaurant
          </h3>

          <p>
            Santiniketan, West Bengal, India
          </p>

          <button
            className="dark-button"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Aappayan+Guest+House+%26+Restaurant+Santiniketan",
                "_blank"
              )
            }
          >
            VIEW ON MAP
          </button>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      {/* ================= CONTACT ================= */}

<section
  id="contact"
  className="contact-section"
>

  <div className="contact-info">

    <p className="section-label">
      ABOUT THIS HOTEL
    </p>

    <h2>
      About this hotel
    </h2>

    <div className="hotel-timings">

      <p>
        <strong>Check-in time:</strong>
        <br />
        12:00 pm
      </p>

      <p>
        <strong>Check-out time:</strong>
        <br />
        11:00 am
      </p>

    </div>

  </div>


  <div className="contact-details">

    <h2>
      Address & contact information
    </h2>


    {/* ADDRESS */}

    <div className="contact-item">

      <span className="contact-icon">
        📍
      </span>

      <p>
        Railway station, Prantik,
        near Prantik,
        near Rammohon Eye Hospital,
        Bolpur, West Bengal 731235
      </p>

    </div>


    {/* PHONE NUMBERS */}

    <div className="contact-item">

      <span className="contact-icon">
        ☎
      </span>

      <div>

        <p>
          <strong>For bookings, call us:</strong>
        </p>

        <p>
          <a href="tel:+919474761639">
            94747 61639
          </a>
        </p>

        <p>
          <a href="tel:+918918403727">
            89184 03727
          </a>
        </p>

      </div>

    </div>


    {/* FOOD ORDERS */}

    <div className="contact-item">

      <span className="contact-icon">
        🍽
      </span>

      <div>

        <p>
          <strong>For food orders:</strong>
        </p>

        <p>
          Call or WhatsApp us on either
          of the numbers above.
        </p>

        <p>
          <a
            href="https://wa.me/919474761639"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </p>

      </div>

    </div>


    {/* FEEDBACK EMAIL */}

    <div className="contact-item">

      <span className="contact-icon">
        ✉
      </span>

      <div>

        <p>
          <strong>Feedback & suggestions:</strong>
        </p>

        <p>
          For any feedback or suggestions,
          feel free to email us.
        </p>

        <p>
          <a href="mailto:aappayansantiniketan@gmail.com">
            aappayansantiniketan@gmail.com
          </a>
        </p>

      </div>

    </div>

  </div>


  {/* ================= ONLINE BOOKING ANNOUNCEMENT ================= */}

  <div className="online-booking-notice">

    <p className="section-label">
      COMING SOON
    </p>

    <h3>
      Online Bookings Coming Soon
    </h3>

    <p>
      We’re working on making your booking experience
      even easier. Online reservations will be available
      soon — stay tuned!
    </p>

  </div>

</section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          AAPPAYAN
        </div>


        <div className="footer-links">

          <a href="#about">About</a>

          <a href="#rooms">Rooms</a>

          <a href="#dining">Dining</a>

          <a href="#reviews">Reviews</a>

          <a href="#services">Services</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </div>


        <p>
          © 2026 Aappayan Guest House & Restaurant.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}


export default App;