import React from "react";
const Home = () => {
  return (
    <>
      <div
        className="ot-hero-wrapper hero-1"
        id="hero"
        data-bg-src="assets/img/hero/hero-bg1-1.png"
      >
        <div className="bg-gradient-shape1" />
        <div className="bg-gradient-shape2" />
        <div className="hero-shadow-text" data-cue="slideInUp" data-delay={100}>
          <span className="shadow-text">RELIABLE</span>
        </div>
        <div className="hero-inner">
          <div className="container">
            <div className="row gy-40 align-items-center flex-row-reverse">
              <div className="col-xl-6">
                <div
                  className="hero-thumb1-1"
                  data-cue="slideInUp"
                  data-delay={200}
                >
                  <img src="assets/img/hero/hero-thumb1-1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="hero-style1">
                  <h1 className="hero-title">
                    <span
                      className="title1"
                      data-cue="slideInUp"
                      data-delay={100}
                    >
                      <span className="text-theme">Guvi Host —</span> Fast
                    </span>
                    <span
                      className="title2"
                      data-cue="slideInUp"
                      data-delay={200}
                    >
                      Cloud & Web Hosting
                    </span>
                  </h1>
                  <p
                    className="hero-text"
                    data-cue="slideInUp"
                    data-delay={300}
                  >
                    Scale confidently with Guvi Host — secure, high-performance
                    hosting and cloud services for businesses and developers.
                    Managed servers, automated backups, global CDNs, and 24/7
                    support.
                  </p>
                  <form
                    action="#"
                    className="newsletter-form"
                    data-cue="slideInUp"
                    data-delay={400}
                  >
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        required=""
                      />
                    </div>
                    <button type="submit" className="ot-btn">
                      Get a Free Migration
                      <i className="far fa-long-arrow-right ms-2" />
                    </button>
                  </form>
                  <div
                    className="btn-wrap"
                    data-cue="slideInUp"
                    data-delay={200}
                  >
                    <div className="video-arrow">
                      <svg
                        width={92}
                        height={142}
                        viewBox="0 0 92 142"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M61.1645 140.699L62.1362 140.829C62.5635 141.351 62.8467 141.488 63.432 141.799C68.8936 141.272 86.3616 138.408 90.4876 136.493C91.3985 136.071 91.734 135.511 91.885 134.509C92.0196 133.617 91.5408 132.657 91.0254 131.964C89.0026 129.238 80.561 121.417 77.7424 119.604C76.3802 118.728 75.183 118.286 73.5988 117.999L73.188 118.488C74.1371 121.788 80.5268 127.613 82.8804 130.597C76.7475 129.171 70.5013 128.275 64.3644 126.854C47.3536 122.919 32.5762 115.083 21.9189 101.006C6.00494 79.985 2.30306 51.2908 5.90317 25.859C7.42091 16.2234 10.0813 9.64205 12.7086 0.588001L12.4475 0.687956C6.89623 10.7105 3.69211 21.2114 2.05513 32.529C-1.46137 56.8418 3.16169 85.0555 18.1619 104.968C34.1354 126.174 54.2713 130.83 79.1275 134.296C73.4445 135.301 66.0155 137.552 61.1645 140.699Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*======== / Hero Section ========*/}
      {/*==============================
Brand Area  
==============================*/}
      <div className="bg-smoke pt-60 pb-60">
        <div className="container ot-container">
          <div
            className="swiper ot-slider"
            data-cue="slideInUp"
            id="blogSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"},"1400":{"slidesPerView":"5"}}}'
          >
            <div className="swiper-wrapper">
              {/* brand logos - keep as is or replace with hosting partners */}
              <div className="swiper-slide">
                <div className="brand-card">
                  <a target="_blank" href="#">
                    <img
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Partner Logo"
                    />
                  </a>
                </div>
              </div>
              {/* repeat slides... */}
            </div>
          </div>
        </div>
      </div>
      {/*==============================
About Area  
==============================*/}
      <div
        className="about-sec1 position-relative overflow-hidden space"
        id="about-sec"
      >
        <div
          className="shape-mockup bg-gradient-shape1"
          data-top={0}
          data-right={0}
          data-left="auto"
        />
        <div className="container">
          <div className="row gy-40 align-items-center">
            <div className="col-xl-6">
              <div className="img-box1" data-cue="slideInLeft">
                <div className="img-box1-shape1" />
                <div
                  className="img1"
                  data-mask-src="assets/img/normal/about-mask1-1.png"
                >
                  <img src="assets/img/normal/about1-1.png" alt="About" />
                </div>
                <div className="about-experience-wrap jump">
                  <div className="about-counter-wrap">
                    <span className="counter-number">10</span>+
                  </div>
                  Years of Hosting Experience
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-wrap1">
                <div className="title-area mb-40">
                  <span className="sub-title" data-cue="slideInUp">
                    About Guvi Host
                  </span>
                  <h2
                    className="sec-title"
                    data-cue="slideInUp"
                    data-delay={100}
                  >
                    Reliable Cloud Hosting & Managed Services
                  </h2>
                  <p className="sec-text" data-cue="slideInUp" data-delay={200}>
                    Guvi Host delivers high-performance, secure hosting and
                    cloud infrastructure for startups, agencies, and
                    enterprises. From shared hosting to dedicated servers and
                    global CDN — we keep your site fast and available.
                  </p>
                </div>
                <div className="row gy-30">
                  <div className="col-md-6">
                    <div className="about-grid" data-cue="slideInUp">
                      <div className="box-icon">
                        {/* mission icon */}
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 6C11 6 7 10 7 15C7 20 11 24 16 24C21 24 25 20 25 15C25 10 21 6 16 6Z"
                            fill="currentColor"
                          />
                        </svg>
                        <h3 className="box-title h6">Our Mission</h3>
                      </div>
                      <div className="about-grid-details">
                        <p className="box-text">
                          To empower businesses with fast, secure, and
                          dependable hosting so they can focus on building great
                          products.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-grid" data-cue="slideInUp">
                      <div className="box-icon">
                        {/* vision icon */}
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 3C9 3 3 9 3 16C3 23 9 29 16 29C23 29 29 23 29 16C29 9 23 3 16 3Z"
                            fill="currentColor"
                          />
                        </svg>
                        <h3 className="box-title h6">Our Vision</h3>
                      </div>
                      <div className="about-grid-details">
                        <p className="box-text">
                          To be the trusted infrastructure partner for
                          businesses worldwide, offering simple and scalable
                          hosting solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap" data-cue="slideInUp">
                  <a href="about.html" className="ot-btn">
                    More About Us
                    <i className="far fa-long-arrow-right ms-2" />
                  </a>
                  <div className="about-profile">
                    <div className="avater">
                      <img
                        src="assets/img/normal/about-profile1-1.png"
                        alt="avater"
                      />
                    </div>
                    <div className="media-body">
                      <h5 className="about-profile-name">Andy Dufren</h5>
                      <p className="desig">CEO, Guvi Host</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
Service Area  
==============================*/}
      <section className="overflow-hidden space-bottom" id="service-sec">
        <div
          className="shape-mockup bg-gradient-shape1"
          data-top="15%"
          data-left={0}
        />
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title" data-cue="slideInUp">
              Our Plans & Services
            </span>
            <h2 className="sec-title" data-cue="slideInUp">
              Hosting Solutions Built for Performance
            </h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#069845">
                  {/* Shared hosting icon */}
                  <svg
                    width="60"
                    height="62"
                    viewBox="0 0 60 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.9822 1.06157C34.6997 1.02052 34.4112 1 34.1178 1C32.4096 1 30.8679 1.71227 29.7717 2.85433C28.6755 1.71227 27.1339 1 25.4256 1C22.7166 1 20.4252 2.78672 19.6659 5.24588C19.5029 5.2338 19.3375 5.22656 19.1697 5.22656C15.5673 5.22656 12.6458 8.14809 12.6458 11.7517C12.6458 11.7783 12.6482 11.8024 12.6482 11.8302V11.8314C12.3886 11.7783 12.1194 11.7517 11.8442 11.7517C9.59265 11.7517 7.7673 13.5771 7.7673 15.8286C7.7673 16.2777 7.83973 16.7087 7.97374 17.1119C5.46267 18.0197 3.66871 20.4245 3.66871 23.2495C3.66871 24.2419 3.89205 25.1835 4.28802 26.0249C4.28802 26.0262 4.28923 26.0262 4.28923 26.0274C2.85744 27.0559 1.76489 28.5288 1.2168 30.2443"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.4688 60.8841C25.4341 60.5413 27.1436 59.4499 28.2917 57.9155"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.2439 60.4361C16.4346 59.294 14.4547 56.5367 14.4547 53.317C14.4547 53.1733 14.4596 53.0321 14.4668 52.8908C14.0684 53.0212 13.6423 53.0924 13.2004 53.0924C11.2519 53.0924 9.62455 51.7258 9.22012 49.8993C6.07887 49.4296 3.66922 46.7194 3.66922 43.4478C3.66922 42.1089 4.07243 40.8667 4.76298 39.8309C4.76419 39.8309 4.76419 39.8296 4.76419 39.8296C2.86157 38.6526 1.47082 36.7306 1 34.4695"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M38.6867 3.0957C39.2215 3.71502 39.6307 4.44419 39.8782 5.2458C40.0412 5.23373 40.2066 5.22649 40.3744 5.22649C43.9768 5.22649 46.8983 8.14802 46.8983 11.7516C46.8983 11.7782 46.8959 11.8023 46.8959 11.8301V11.8313C47.1555 11.7782 47.4247 11.7516 47.6999 11.7516C49.9514 11.7516 51.7768 13.577 51.7768 15.8285C51.7768 16.2776 51.7044 16.7086 51.5704 17.1118C54.0814 18.0196 55.8754 20.4245 55.8754 23.2494C55.8754 24.2418 55.652 25.1834 55.2561 26.0249C55.2561 26.0261 55.2549 26.0261 55.2549 26.0273C57.3518 27.5327 58.7196 29.9907 58.7196 32.7697C58.7196 35.7528 57.1442 38.3677 54.7804 39.8297C54.7804 39.8297 54.7804 39.8309 54.7816 39.8309C55.4722 40.8667 55.8754 42.109 55.8754 43.4478C55.8754 46.7194 53.4657 49.4297 50.3245 49.8993C49.9201 51.7259 48.2927 53.0925 46.3442 53.0925C45.9023 53.0925 45.4762 53.0213 45.0778 52.8909C45.085 53.0321 45.0899 53.1734 45.0899 53.317C45.0899 57.5605 41.6504 60.9999 37.407 60.9999C34.8621 60.9999 32.607 59.7625 31.209 57.8575"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.28906 26.0253C5.38753 25.2364 6.68665 24.7092 8.09502 24.5352"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.6484 11.8306C13.9958 12.1 15.1035 13.0337 15.6156 14.2756"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.09494 41.0046C6.88444 40.8549 5.7547 40.4445 4.76367 39.8313"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.7734 2.85449V13.0528"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.6663 5.24609L19.6568 5.28485C19.3409 6.57442 19.5527 7.93668 20.2454 9.06931"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.6984 9.23501C23.3034 9.01275 22.8538 8.87284 22.3715 8.83976C20.6368 8.72096 19.1344 10.0309 19.0156 11.7655"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.47273 21.9341C9.14931 22.2516 8.88963 22.6443 8.72363 23.0983C8.12641 24.7313 8.96617 26.5391 10.5991 27.1363"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M55.2571 26.0253C54.1587 25.2364 52.8595 24.7092 51.4512 24.5352"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M46.8969 11.8306C45.5494 12.1 44.4418 13.0337 43.9297 14.2756"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M51.4512 41.0046C52.6617 40.8549 53.7914 40.4445 54.7824 39.8313"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.8779 5.24609L39.8875 5.28485C40.2034 6.57442 39.9915 7.93668 39.2988 9.06931"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.8477 9.23501C36.2427 9.01275 36.6922 8.87284 37.1745 8.83976C38.9092 8.72096 40.4116 10.0309 40.5304 11.7655"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M50.0717 21.9341C50.3951 22.2516 50.6548 22.6443 50.8208 23.0983C51.418 24.7313 50.5782 26.5391 48.9453 27.1363"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.2119 46.364C15.1712 46.8154 15.2278 47.2828 15.3955 47.7363C15.9984 49.3671 17.8092 50.2004 19.4401 49.5974"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M43.9045 25.4649C42.9242 18.7176 37.226 13.4975 30.2639 13.2621C22.2611 12.9917 15.5246 19.4649 15.4884 27.4713C15.4715 31.4275 17.0615 35.0106 19.6437 37.6074C21.0478 39.0186 21.8566 40.914 21.8566 42.9047V45.1937C21.8566 45.708 22.2755 46.1269 22.791 46.1269H36.7444C37.2598 46.1269 37.6776 45.708 37.6776 45.1937V42.9132C37.6776 40.9188 38.4912 39.0222 39.8977 37.6074C41.9874 35.5068 43.4289 32.7591 43.8936 29.6903"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.3024 27.0012L29.7713 32.3566L24.2402 27.0012"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36.3968 46.3643V48.1798C36.3968 49.2025 35.5678 50.0314 34.5453 50.0314H24.9961C23.9734 50.0314 23.1445 49.2024 23.1445 48.1798V46.3643"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.5453 50.2928V52.1217C34.5453 53.1444 33.7163 53.9734 32.6937 53.9734H26.8478C25.8251 53.9734 24.9961 53.1444 24.9961 52.1217V50.2529"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.5663 54.2269V55.1197C32.5663 56.6638 31.3145 57.9156 29.7705 57.9156C28.2264 57.9156 26.9746 56.6638 26.9746 55.1197V54.1731"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.7715 32.3564V45.7943"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.4668 52.891C14.4668 51.9699 14.7243 51.067 15.2102 50.2845L15.9359 49.1157"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.3337 46.364C44.3744 46.8154 44.3178 47.2828 44.1501 47.7363C43.5472 49.3671 41.7363 50.2004 40.1055 49.5974"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M45.0765 52.891C45.0765 51.9699 44.819 51.067 44.3331 50.2845L43.6074 49.1157"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Shared Hosting</a>
                </h3>
                <p className="box-text">
                  Affordable and easy-to-use hosting for blogs, portfolios and
                  small business websites with one-click apps.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#AF52DE">
                  {/* VPS icon */}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.5434 21.357C49.2824 15.865 45.0438 11.4207 39.6649 8.90227C39.5214 8.83602 39.3659 8.79965 39.2078 8.79535C39.0498 8.79106 38.8925 8.81893 38.7456 8.87728C38.5987 8.93563 38.4651 9.02323 38.3531 9.13478C38.2411 9.24632 38.1529 9.37948 38.0939 9.52615L30.032 29.4273C30.0004 29.5054 29.992 29.591 30.0077 29.6738C30.0235 29.7566 30.0629 29.833 30.121 29.894C30.1792 29.955 30.2537 29.9979 30.3356 30.0176C30.4176 30.0373 30.5035 30.0329 30.583 30.005L50.8455 22.8966C50.9948 22.8447 51.132 22.7629 51.2487 22.6563C51.3655 22.5497 51.4593 22.4205 51.5246 22.2765C51.5898 22.1325 51.6252 21.9767 51.6284 21.8187C51.6316 21.6606 51.6027 21.5036 51.5434 21.357Z"
                      fill="currentColor"
                    />
                    <path
                      d="M59.0717 28.222H56.9135C56.4823 21.6974 53.6957 15.5516 49.0721 10.928C44.4484 6.30432 38.3026 3.5177 31.778 3.08654V0.928291C31.7777 0.682169 31.6798 0.446211 31.5058 0.272182C31.3317 0.0981537 31.0958 0.000267743 30.8497 0H29.1503C28.9042 0.000271028 28.6682 0.0981599 28.4942 0.27219C28.3202 0.446219 28.2223 0.682176 28.222 0.928291V3.08666C21.5511 3.51329 15.2799 6.41564 10.6373 11.225C10.1099 10.899 9.4816 10.7769 8.87055 10.8819C8.2595 10.9868 7.70787 11.3114 7.3195 11.7947C6.93112 12.278 6.73278 12.8866 6.76181 13.5059C6.79083 14.1252 7.04523 14.7126 7.4771 15.1574C4.90303 19.0568 3.38939 23.5595 3.08533 28.222H0.928291C0.682176 28.2223 0.446219 28.3202 0.27219 28.4942C0.09816 28.6682 0.000271028 28.9042 0 29.1503V30.8497C0.000267743 31.0958 0.0981537 31.3318 0.272182 31.5058C0.446211 31.6799 0.682169 31.7778 0.928291 31.7781H3.08819C3.36724 36.0686 4.66985 40.2298 6.88702 43.9136C9.10418 47.5974 12.1714 50.6966 15.832 52.9518C15.5721 53.5505 15.5522 54.2261 15.7764 54.839C16.0007 55.4519 16.4519 55.9552 17.0368 56.2447C17.6217 56.5343 18.2955 56.5879 18.9189 56.3946C19.5422 56.2013 20.0674 55.7758 20.3859 55.2061C22.8973 56.1657 25.539 56.7415 28.222 56.9141V59.0716C28.2223 59.3178 28.3201 59.5537 28.4942 59.7278C28.6682 59.9018 28.9042 59.9997 29.1503 60H30.8497C31.0958 59.9997 31.3318 59.9018 31.5058 59.7278C31.6798 59.5537 31.7777 59.3178 31.778 59.0716V56.9135C38.3026 56.4823 44.4484 53.6957 49.072 49.0721C53.6957 44.4484 56.4823 38.3026 56.9135 31.7781H59.0717C59.3178 31.7778 59.5537 31.6799 59.7278 31.5058C59.9018 31.3318 59.9997 31.0958 60 30.8497V29.1503C59.9997 28.9042 59.9018 28.6682 59.7278 28.4942C59.5537 28.3201 59.3178 28.2223 59.0717 28.222ZM9.30451 11.7065C9.60987 11.7068 9.9094 11.7902 10.1711 11.9476C10.4327 12.105 10.6466 12.3306 10.7899 12.6003C10.706 12.5537 10.6166 12.5179 10.5237 12.4937C10.3222 12.4423 10.1142 12.4208 9.9064 12.4301C9.46967 12.4544 9.05087 12.6119 8.70635 12.8815C8.36184 13.151 8.10813 13.5195 7.97937 13.9375C7.97708 13.9448 7.97484 13.952 7.97266 13.9593C7.93472 14.0848 7.91763 14.2157 7.92207 14.3467C7.7468 14.0945 7.644 13.799 7.62484 13.4924C7.60567 13.1859 7.67087 12.8799 7.81336 12.6078C7.95585 12.3357 8.17017 12.1078 8.43306 11.9489C8.69594 11.79 8.99734 11.7062 9.30451 11.7065ZM8.17409 15.6667C8.69328 15.9256 9.28539 15.999 9.85207 15.8748C10.4188 15.7507 10.9259 15.4364 11.2893 14.9842C11.6528 14.532 11.8506 13.9691 11.8499 13.389C11.8493 12.8089 11.6502 12.2464 11.2858 11.7951C15.7635 7.17117 21.7994 4.37558 28.222 3.95078V9.0044C18.0195 9.85839 9.85839 18.0195 9.0044 28.222H3.9494C4.25132 23.7426 5.70668 19.4175 8.17409 15.6667ZM23.5632 28.222H15.4703C15.7071 26.2732 16.3343 24.3921 17.3144 22.6911C18.2946 20.9902 19.6075 19.5042 21.1749 18.3221C21.5477 18.756 22.0562 19.0513 22.6178 19.1602C23.1795 19.269 23.7615 19.185 24.2694 18.9218C24.7774 18.6586 25.1816 18.2316 25.4166 17.71C25.6515 17.1883 25.7035 16.6026 25.564 16.0478C26.43 15.7726 27.3199 15.5791 28.222 15.4699V23.5631C27.1094 23.8715 26.0955 24.4627 25.2791 25.2791C24.4627 26.0955 23.8715 27.1094 23.5632 28.222ZM28.222 24.4627V28.222H24.4627C24.7462 27.3421 25.2349 26.5422 25.8886 25.8886C26.5423 25.2349 27.3421 24.7462 28.222 24.4627ZM21.4122 16.6564C21.4121 16.2809 21.5376 15.9161 21.7688 15.6202C22 15.3242 22.3236 15.1142 22.688 15.0234C23.0524 14.9326 23.4366 14.9664 23.7796 15.1193C24.1226 15.2722 24.4046 15.5355 24.5806 15.8673C24.4967 15.8207 24.4072 15.7849 24.3144 15.7607C24.1129 15.7093 23.9049 15.6878 23.6971 15.697C23.2604 15.7214 22.8416 15.8789 22.497 16.1484C22.1525 16.4179 21.8988 16.7865 21.77 17.2045C21.7678 17.2117 21.7655 17.219 21.7633 17.2262C21.7254 17.3517 21.7083 17.4826 21.7127 17.6136C21.517 17.3328 21.4121 16.9987 21.4122 16.6564ZM25.2175 15.2543C24.8721 14.7286 24.3442 14.3496 23.7357 14.1904C23.1272 14.0313 22.4813 14.1033 21.9228 14.3926C21.3643 14.6819 20.9329 15.168 20.7119 15.7568C20.4908 16.3457 20.4959 16.9955 20.7261 17.5809C19.033 18.8427 17.6161 20.4377 16.5628 22.2678C15.5095 24.0978 14.8419 26.1242 14.6014 28.222H9.86934C10.7185 18.495 18.495 10.7185 28.222 9.86934V14.6022C27.2013 14.7189 26.1947 14.9373 25.2175 15.2543ZM19.3859 53.0676C19.1844 53.0162 18.9764 52.9947 18.7686 53.004C18.3318 53.0283 17.9131 53.1858 17.5685 53.4553C17.224 53.7248 16.9703 54.0934 16.8415 54.5114C16.8393 54.5187 16.837 54.5259 16.8348 54.5332C16.7969 54.6587 16.7798 54.7896 16.7843 54.9206C16.6536 54.7322 16.5629 54.5191 16.5176 54.2943C16.4723 54.0696 16.4735 53.838 16.521 53.6137C16.5685 53.3894 16.6614 53.1772 16.7939 52.9901C16.9264 52.803 17.0958 52.645 17.2916 52.5258C17.4874 52.4065 17.7055 52.3286 17.9325 52.2967C18.1596 52.2649 18.3907 52.2797 18.6118 52.3405C18.8329 52.4012 19.0392 52.5065 19.2181 52.6498C19.397 52.7932 19.5447 52.9716 19.6521 53.1742C19.5682 53.1276 19.4788 53.0918 19.3859 53.0676ZM28.222 56.05C25.6369 55.8781 23.0923 55.3193 20.673 54.3924C20.7666 53.8526 20.6832 53.2969 20.4351 52.8084C20.1871 52.3199 19.7878 51.9246 19.2968 51.6815C18.8057 51.4385 18.2493 51.3607 17.7104 51.4598C17.1715 51.5588 16.6792 51.8295 16.3067 52.2313C12.7655 50.0544 9.79648 47.062 7.64734 43.504C5.4982 39.9459 4.23133 35.9254 3.95247 31.7781H9.0044C9.8584 41.9805 18.0195 50.1416 28.222 50.9956V56.05ZM28.222 50.1307C18.495 49.2815 10.7185 41.5051 9.86934 31.7781H14.6015C14.8282 33.7922 15.4531 35.7411 16.4398 37.5116C15.9686 37.947 15.6795 38.5445 15.6303 39.1841C15.5812 39.8238 15.7757 40.4584 16.1748 40.9607C16.5739 41.463 17.1481 41.7959 17.7824 41.8926C18.4166 41.9893 19.0639 41.8426 19.5946 41.4821C21.9927 43.6532 25.0088 45.0213 28.222 45.3954L28.222 50.1307ZM16.4837 39.3762C16.4836 39.0007 16.6091 38.6359 16.8403 38.34C17.0715 38.044 17.3951 37.834 17.7595 37.7432C18.1239 37.6525 18.5082 37.6862 18.8511 37.8392C19.1941 37.9921 19.4761 38.2554 19.6521 38.5871C19.5682 38.5405 19.4788 38.5047 19.3859 38.4805C19.1844 38.4291 18.9764 38.4076 18.7686 38.4169C18.3318 38.4412 17.9131 38.5987 17.5685 38.8683C17.224 39.1378 16.9703 39.5063 16.8415 39.9243C16.8393 39.9316 16.837 39.9388 16.8348 39.9461C16.7969 40.0716 16.7798 40.2024 16.7843 40.3335C16.5885 40.0527 16.4836 39.7185 16.4837 39.3762ZM28.222 44.5278C25.2427 44.1601 22.448 42.8872 20.2151 40.8809C20.5462 40.4313 20.7201 39.8852 20.7099 39.3269C20.6997 38.7686 20.506 38.2293 20.1588 37.792C19.8115 37.3548 19.33 37.044 18.7885 36.9077C18.247 36.7714 17.6757 36.8172 17.1628 37.0379C16.2651 35.41 15.6904 33.624 15.4703 31.7781H23.5632C23.8716 32.8907 24.4627 33.9045 25.2791 34.7209C26.0955 35.5373 27.1094 36.1285 28.222 36.4369V44.5278ZM28.222 35.5373C27.3421 35.2539 26.5423 34.7651 25.8886 34.1115C25.2349 33.4578 24.7462 32.658 24.4627 31.7781H28.222V35.5373ZM48.4621 48.4622C44.0041 52.9297 38.0751 55.626 31.778 56.0494V50.9931C35.5429 50.6802 39.1531 49.355 42.2263 47.1578C42.6946 47.582 43.3042 47.8165 43.9361 47.8155C44.5679 47.8145 45.1768 47.578 45.6437 47.1523C46.1107 46.7266 46.4023 46.1422 46.4616 45.5131C46.5209 44.884 46.3436 44.2554 45.9645 43.7499C48.8566 40.3863 50.617 36.1979 50.9962 31.7781H56.0493C55.626 38.0752 52.9297 44.0042 48.4621 48.4622ZM36.4369 31.7781H44.5298C44.1392 35.0245 42.6701 38.0459 40.358 40.358C38.0458 42.6701 35.0245 44.1392 31.778 44.5297V36.4368C32.8906 36.1284 33.9045 35.5373 34.7209 34.7209C35.5373 33.9045 36.1285 32.8907 36.4369 31.7781ZM31.778 35.5373V31.7781H35.5373C35.2538 32.658 34.7651 33.4578 34.1114 34.1115C33.4577 34.7651 32.6579 35.2539 31.778 35.5373ZM45.3987 31.7781H50.1304C49.7552 35.9758 48.0808 39.9522 45.3401 43.1538C44.8674 42.8379 44.3026 42.6894 43.7357 42.732C43.1688 42.7746 42.6325 43.0058 42.2123 43.3888C41.7922 43.7717 41.5124 44.2844 41.4176 44.8449C41.3228 45.4055 41.4185 45.9816 41.6893 46.4815C38.77 48.5592 35.3479 49.8182 31.778 50.1278V45.3986C35.2545 45.0042 38.4944 43.4424 40.9684 40.9684C43.4424 38.4944 45.0042 35.2545 45.3987 31.7781ZM45.4128 44.4806C45.3289 44.434 45.2395 44.3982 45.1466 44.374C44.9451 44.3226 44.7371 44.3011 44.5293 44.3104C44.0926 44.3347 43.6738 44.4922 43.3293 44.7618C42.9847 45.0313 42.731 45.3998 42.6023 45.8178C42.6 45.8251 42.5978 45.8323 42.5956 45.8396C42.5576 45.9651 42.5405 46.0959 42.545 46.227C42.4144 46.0386 42.3236 45.8255 42.2784 45.6007C42.2331 45.376 42.2343 45.1444 42.2818 44.9201C42.3293 44.6958 42.4222 44.4836 42.5547 44.2966C42.6872 44.1095 42.8566 43.9515 43.0524 43.8323C43.2482 43.713 43.4663 43.6351 43.6933 43.6032C43.9203 43.5713 44.1515 43.5862 44.3725 43.6469C44.5936 43.7077 44.7999 43.8129 44.9788 43.9563C45.1577 44.0997 45.3054 44.2781 45.4128 44.4806ZM59.1375 30.8497C59.1375 30.8672 59.1305 30.8839 59.1182 30.8962C59.1058 30.9086 59.0891 30.9155 59.0717 30.9155H31.6973C31.49 30.9158 31.2913 30.9982 31.1447 31.1448C30.9982 31.2913 30.9157 31.49 30.9155 31.6973V59.0717C30.9155 59.0891 30.9085 59.1058 30.8962 59.1182C30.8838 59.1305 30.8671 59.1375 30.8497 59.1375H29.1503C29.1328 59.1374 29.1161 59.1305 29.1038 59.1182C29.0915 59.1058 29.0845 59.0891 29.0845 59.0717V31.6973C29.0843 31.49 29.0018 31.2913 28.8553 31.1448C28.7087 30.9982 28.5101 30.9158 28.3028 30.9155H0.928291C0.910848 30.9155 0.894128 30.9086 0.8818 30.8962C0.869471 30.8839 0.862541 30.8672 0.86253 30.8497V29.1503C0.862544 29.1328 0.869476 29.1161 0.881806 29.1038C0.894136 29.0915 0.910854 29.0845 0.928291 29.0845H28.3028C28.5101 29.0843 28.7087 29.0018 28.8553 28.8553C29.0018 28.7087 29.0843 28.51 29.0845 28.3028V0.928291C29.0845 0.910854 29.0915 0.894136 29.1038 0.881806C29.1161 0.869476 29.1328 0.862544 29.1503 0.86253H30.8497C30.8671 0.862531 30.8838 0.869458 30.8962 0.881788C30.9085 0.894119 30.9155 0.910845 30.9155 0.928291V20.766C30.9155 20.8804 30.9609 20.9901 31.0418 21.071C31.1227 21.1518 31.2324 21.1973 31.3467 21.1973C31.4611 21.1973 31.5708 21.1518 31.6517 21.071C31.7326 20.9901 31.778 20.8804 31.778 20.766V15.4708C32.3369 15.5381 32.8913 15.6379 33.4386 15.7697C33.5497 15.7966 33.667 15.7782 33.7646 15.7186C33.8622 15.659 33.9321 15.5632 33.9591 15.452C33.986 15.3409 33.9677 15.2236 33.9082 15.126C33.8487 15.0283 33.7528 14.9583 33.6417 14.9313C33.0278 14.7839 32.4054 14.6744 31.778 14.6034V9.87024C33.0481 9.98053 34.3049 10.2113 35.5314 10.5593C35.5858 10.5748 35.6428 10.5795 35.6991 10.573C35.7553 10.5665 35.8098 10.5489 35.8593 10.5214C35.9088 10.4938 35.9523 10.4568 35.9875 10.4124C36.0227 10.368 36.0488 10.3172 36.0643 10.2627C36.0798 10.2082 36.0845 10.1512 36.078 10.095C36.0714 10.0387 36.0539 9.98428 36.0264 9.9348C35.9988 9.88531 35.9618 9.84173 35.9174 9.80655C35.873 9.77137 35.8222 9.74527 35.7677 9.72975C34.4643 9.36009 33.1282 9.11742 31.778 9.00515V3.95063C38.0735 4.3807 44.0002 7.07593 48.4621 11.5379C52.924 15.9998 55.6193 21.9265 56.0493 28.222H50.9961C50.9112 27.2092 50.7531 26.2038 50.5232 25.2137C50.4972 25.1024 50.428 25.006 50.3309 24.9457C50.2339 24.8853 50.1168 24.866 50.0054 24.8919C49.8941 24.9178 49.7976 24.9869 49.7372 25.0839C49.6767 25.181 49.6573 25.298 49.6831 25.4094C49.8981 26.3352 50.0476 27.2751 50.1303 28.222H45.3988C45.3551 27.8394 45.2972 27.4599 45.2257 27.0893C45.204 26.977 45.1387 26.8779 45.0439 26.8138C44.9492 26.7497 44.8329 26.7258 44.7206 26.7475C44.6083 26.7691 44.5092 26.8345 44.4451 26.9292C44.381 27.0239 44.3571 27.1402 44.3788 27.2525C44.44 27.5699 44.4898 27.8946 44.5295 28.222H40.5783C40.4639 28.222 40.3542 28.2674 40.2733 28.3483C40.1924 28.4292 40.147 28.5389 40.147 28.6533C40.147 28.7676 40.1924 28.8773 40.2733 28.9582C40.3542 29.0391 40.4639 29.0845 40.5783 29.0845H59.0717C59.0891 29.0845 59.1058 29.0914 59.1182 29.1038C59.1305 29.1161 59.1375 29.1328 59.1375 29.1503V30.8497Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">VPS & Cloud Servers</a>
                </h3>
                <p className="box-text">
                  Scalable virtual servers with SSD storage, full root access,
                  and hourly backups for developers and apps.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#F0A230">
                  {/* Dedicated server icon */}
                  <svg
                    width="67"
                    height="60"
                    viewBox="0 0 67 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1111 26.6657H27.7783V27.7768C27.7783 28.388 28.2783 28.888 28.8894 28.888H37.7786C38.3897 28.888 38.8897 28.388 38.8897 27.7768V26.6657H55.5569C56.168 26.6657 56.668 26.1657 56.668 25.5546V21.11C56.668 20.4989 56.168 19.9988 55.5569 19.9988H53.1012L49.6345 5.44286C49.29 3.87615 48.4344 2.45388 47.2344 1.45386C45.6788 0.153818 43.5676 -0.301751 41.4342 0.198263L34.1451 1.93165C33.4451 2.09832 32.7007 2.09832 32.0006 1.93165L24.7115 0.198263C22.5559 -0.301751 20.4447 0.153818 18.8891 1.45386C17.6891 2.465 16.8335 3.87615 16.478 5.46508L13.5334 19.9988H11.1111C10.5 19.9988 10 20.4989 10 21.11V25.5546C10 26.1657 10.5 26.6657 11.1111 26.6657ZM36.6674 26.6657H30.0006V19.9988H36.6674V26.6657ZM54.4457 24.4434H38.8897V22.2211H52.2234H54.4457V24.4434ZM18.6558 5.92065C18.9003 4.83173 19.4892 3.84281 20.3114 3.1539C21.3226 2.30944 22.7337 2.02054 24.1782 2.36499L31.4673 4.09838C32.5118 4.34283 33.6007 4.34283 34.6452 4.09838L41.9343 2.36499C43.3787 2.02054 44.7899 2.30944 45.801 3.1539C46.6233 3.84281 47.2122 4.83173 47.4678 5.94288L50.8123 19.9988H38.8897V18.8877C38.8897 18.2766 38.3897 17.7766 37.7786 17.7766H28.8894C28.2783 17.7766 27.7783 18.2766 27.7783 18.8877V19.9988H15.8002L18.6558 5.92065ZM12.2223 22.2211H14.4446H27.7783V24.4434H12.2223V22.2211Z"
                      fill="currentColor"
                    />
                    <path
                      d="M33.3345 35.5549C28.4343 35.5549 24.4453 39.5439 24.4453 44.4441C24.4453 49.3442 28.4343 53.3332 33.3345 53.3332C38.2346 53.3332 42.2236 49.3442 42.2236 44.4441C42.2236 39.5439 38.2346 35.5549 33.3345 35.5549ZM33.3345 51.1109C29.6566 51.1109 26.6676 48.122 26.6676 44.4441C26.6676 40.7662 29.6566 37.7772 33.3345 37.7772C37.0123 37.7772 40.0013 40.7662 40.0013 44.4441C40.0013 48.122 37.0123 51.1109 33.3345 51.1109Z"
                      fill="currentColor"
                    />
                    <path
                      d="M33.3352 39.9995C30.8796 39.9995 28.8906 41.9885 28.8906 44.4441C28.8906 46.8997 30.8796 48.8887 33.3352 48.8887C35.7908 48.8887 37.7798 46.8997 37.7798 44.4441C37.7798 41.9996 35.7908 39.9995 33.3352 39.9995ZM33.3352 46.6664C32.1129 46.6664 31.1129 45.6663 31.1129 44.4441C31.1129 43.2218 32.1129 42.2218 33.3352 42.2218C34.5575 42.2218 35.5575 43.2218 35.5575 44.4441C35.5575 45.6663 34.5575 46.6664 33.3352 46.6664Z"
                      fill="currentColor"
                    />
                    <path
                      d="M62.224 39.9994C60.1573 39.9994 58.435 41.4216 57.935 43.3328H55.9572C55.2238 42.4772 53.646 40.7772 51.4348 38.8882H57.7795C58.3906 38.8882 58.8906 38.3882 58.8906 37.7771V35.3548C60.1795 34.8992 61.1129 33.677 61.1129 32.2214C61.1129 30.388 59.6128 28.8879 57.7795 28.8879C55.9461 28.8879 54.446 30.388 54.446 32.2214C54.446 33.6659 55.3794 34.8881 56.6683 35.3548V36.6659H48.6014C44.5569 33.777 39.2345 31.1102 33.3343 31.1102C27.4341 31.1102 22.1118 33.7659 18.0672 36.6659H10.0003V35.5548C10.0003 35.4881 9.97807 35.4326 9.95584 35.3659C11.267 34.9103 12.2226 33.6881 12.2226 32.2214C12.2226 30.388 10.7225 28.8879 8.88915 28.8879C7.05576 28.8879 5.55572 30.388 5.55572 32.2214C5.55572 33.677 6.5113 34.9103 7.82245 35.3659C7.80023 35.4326 7.778 35.4881 7.778 35.5548V37.7771C7.778 38.3882 8.27802 38.8882 8.88915 38.8882H15.2338C13.0226 40.7661 11.4559 42.4772 10.7114 43.3328H8.73359C8.23357 41.4216 6.5113 39.9994 4.44457 39.9994C1.98895 39.9994 0 41.9883 0 44.4439C0 46.8996 1.98895 48.8885 4.44457 48.8885C6.5113 48.8885 8.23357 47.4663 8.73359 45.5551H10.4781C11.0448 46.2329 12.6004 47.9996 14.9115 49.9997H8.88915C8.27802 49.9997 7.778 50.4997 7.778 51.1108V53.5331C6.48908 53.9998 5.55572 55.222 5.55572 56.6665C5.55572 58.4999 7.05576 60 8.88915 60C10.7225 60 12.2226 58.4999 12.2226 56.6665C12.2226 55.222 11.2892 53.9998 10.0003 53.5331V52.222H17.6894C21.7784 55.222 27.2452 58.0555 33.3343 58.0555C39.4234 58.0555 44.8902 55.222 48.9792 52.222H56.6683V53.3331C56.6683 53.3998 56.6905 53.4553 56.7128 53.522C55.4016 53.9776 54.446 55.2109 54.446 56.6665C54.446 58.4999 55.9461 60 57.7795 60C59.6128 60 61.1129 58.4999 61.1129 56.6665C61.1129 55.2109 60.1573 53.9776 58.8461 53.522C58.8684 53.4664 58.8906 53.3998 58.8906 53.3331V51.1108C58.8906 50.4997 58.3906 49.9997 57.7795 49.9997H51.7571C54.0571 47.9996 55.6238 46.2329 56.1905 45.5551H57.935C58.435 47.4663 60.1573 48.8885 62.224 48.8885C64.6797 48.8885 66.6686 46.8996 66.6686 44.4439C66.6686 41.9994 64.6797 39.9994 62.224 39.9994ZM57.7795 31.1102C58.3906 31.1102 58.8906 31.6102 58.8906 32.2214C58.8906 32.8325 58.3906 33.3325 57.7795 33.3325C57.1683 33.3325 56.6683 32.8325 56.6683 32.2214C56.6683 31.6102 57.1683 31.1102 57.7795 31.1102ZM8.88915 31.1102C9.50028 31.1102 10.0003 31.6102 10.0003 32.2214C10.0003 32.8325 9.50028 33.3325 8.88915 33.3325C8.27802 33.3325 7.778 32.8325 7.778 32.2214C7.778 31.6102 8.27802 31.1102 8.88915 31.1102ZM8.88915 57.7777C8.27802 57.7777 7.778 57.2777 7.778 56.6665C7.778 56.0554 8.27802 55.5554 8.88915 55.5554C9.50028 55.5554 10.0003 56.0554 10.0003 56.6665C10.0003 57.2777 9.50028 57.7777 8.88915 57.7777ZM57.7795 57.7777C57.1683 57.7777 56.6683 57.2777 56.6683 56.6665C56.6683 56.0554 57.1683 55.5554 57.7795 55.5554C58.3906 55.5554 58.8906 56.0554 58.8906 56.6665C58.8906 57.2777 58.3906 57.7777 57.7795 57.7777ZM4.44457 46.6662C3.22232 46.6662 2.22229 45.6662 2.22229 44.4439C2.22229 43.2217 3.22232 42.2217 4.44457 42.2217C5.66683 42.2217 6.66686 43.2217 6.66686 44.4439C6.66686 45.6662 5.66683 46.6662 4.44457 46.6662ZM33.3343 55.8332C23.4007 55.8332 14.8671 47.1329 12.5781 44.5884C14.8671 42.0328 23.3785 33.3325 33.3343 33.3325C43.2679 33.3325 51.8015 42.0328 54.0905 44.5773C51.8015 47.144 43.2901 55.8332 33.3343 55.8332ZM62.224 46.6662C61.0018 46.6662 60.0017 45.6662 60.0017 44.4439C60.0017 43.2217 61.0018 42.2217 62.224 42.2217C63.4463 42.2217 64.4463 43.2217 64.4463 44.4439C64.4463 45.6662 63.4463 46.6662 62.224 46.6662Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Dedicated Servers</a>
                </h3>
                <p className="box-text">
                  High-performance dedicated machines with managed options for
                  resource-intensive workloads.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#E0009B">
                  {/* Managed services icon */}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 1.28906C36.6234 1.29392 43.0415 3.58797 48.1673 7.78266C53.2931 11.9774 56.8114 17.8148 58.1264 24.3064C59.4414 30.7979 58.4722 37.5444 55.3829 43.4032C52.2937 49.262 47.2743 53.873 41.175 56.4551C34.1587 59.4189 26.2524 59.4741 19.1954 56.6085C12.1383 53.7429 6.50872 48.1913 3.54492 41.175C0.581128 34.1587 0.525947 26.2524 3.39152 19.1954C6.25709 12.1383 11.8087 6.50872 18.825 3.54492C22.3603 2.04894 26.1612 1.28168 30 1.28906ZM30 0C13.432 0 0 13.432 0 30C0 46.568 13.432 60 30 60C46.568 60 60 46.568 60 30C60 13.432 46.568 0 30 0Z"
                      fill="currentColor"
                    />
                    <path
                      d="M29.8914 47.8605C29.7205 47.8605 29.5565 47.7926 29.4356 47.6717C29.3148 47.5508 29.2469 47.3869 29.2469 47.216V43.4765C29.2469 43.3056 29.3148 43.1416 29.4356 43.0208C29.5565 42.8999 29.7205 42.832 29.8914 42.832H30.0004C36.823 42.7734 42.3789 37.1789 42.3789 30.3515C42.3789 23.5242 36.823 17.9226 30.0004 17.8675H29.8961C23.3676 17.8675 17.9137 23.0015 17.4414 29.441H20.6641C20.7804 29.4409 20.8946 29.4723 20.9945 29.5319C21.0944 29.5914 21.1763 29.6769 21.2316 29.7793C21.2869 29.8817 21.3134 29.9971 21.3084 30.1133C21.3034 30.2295 21.267 30.3422 21.2031 30.4394L15.5031 39.1335C15.4443 39.2228 15.3643 39.296 15.2702 39.3466C15.1761 39.3973 15.0709 39.4238 14.9641 39.4238C14.8572 39.4238 14.752 39.3973 14.6579 39.3466C14.5639 39.296 14.4838 39.2228 14.425 39.1335L8.71914 30.4382C8.65527 30.341 8.61889 30.2283 8.61388 30.1121C8.60887 29.9959 8.6354 29.8805 8.69066 29.7781C8.74593 29.6758 8.82786 29.5903 8.92778 29.5307C9.0277 29.4711 9.14188 29.4397 9.2582 29.4398H12.4035C12.6422 24.9614 14.5882 20.7447 17.8411 17.6574C21.0941 14.5701 25.4066 12.847 29.8914 12.8425H30.0086C39.598 12.907 47.3992 20.7585 47.3992 30.3503C47.3992 39.9421 39.598 47.7996 30.0004 47.8605H29.8914ZM30.5359 44.1105V46.5609C39.1715 46.2222 46.1137 39.0609 46.1137 30.3527C46.1137 21.4652 38.8832 14.189 29.9969 14.1339H29.8914C21.0848 14.1339 13.8086 21.2953 13.6715 30.0972C13.6687 30.2663 13.5996 30.4276 13.479 30.5462C13.3584 30.6648 13.1961 30.7312 13.027 30.7312H10.4488L14.957 37.6054L19.4641 30.7312H16.7582C16.6725 30.7312 16.5876 30.7141 16.5085 30.6809C16.4295 30.6477 16.3579 30.5991 16.2978 30.5379C16.2378 30.4767 16.1906 30.4041 16.159 30.3244C16.1274 30.2447 16.112 30.1595 16.1137 30.0738C16.1909 26.4698 17.676 23.0393 20.2511 20.5168C22.8262 17.9942 26.2866 16.5801 29.8914 16.5773H30.0086C37.5426 16.6406 43.668 22.821 43.668 30.3515C43.668 37.7062 37.825 43.7695 30.5359 44.1093V44.1105Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Managed Hosting</a>
                </h3>
                <p className="box-text">
                  Managed updates, monitoring, and expert support so you can
                  ship features, not ops.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#8F54FF">
                  {/* CDN icon */}
                   <svg
                  width="57"
                  height="60"
                  viewBox="0 0 57 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.6784 18.8716C33.8786 11.7714 22.6178 11.5984 16.5778 18.5166C12.2306 23.4959 12.0474 30.6441 16.1343 35.8169L21.4944 42.6013C21.7682 42.9478 22.1978 43.153 22.6549 43.1555L28.686 43.1882L34.0793 43.2172C34.5608 43.2198 35.0127 42.9972 35.2873 42.6226L40.7773 35.1271C44.2054 30.4469 44.034 24.204 40.3538 19.6986L39.6784 18.8716ZM14.3274 16.7564C21.5597 8.47256 35.0434 8.67976 41.9878 17.1815L42.6634 18.0085C47.1222 23.4671 47.3297 31.031 43.1765 36.7014L37.6862 44.197C36.8634 45.3208 35.5076 45.9879 34.0628 45.9803L28.6695 45.9515L22.6382 45.9186C21.2666 45.9112 19.9779 45.2958 19.1565 44.2561L13.7964 37.472C8.90269 31.2777 9.12206 22.7186 14.3274 16.7564Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.6738 54.0044C21.6738 53.2197 22.3101 52.5833 23.0949 52.5833H33.7957C34.5805 52.5833 35.2169 53.2197 35.2169 54.0044C35.2169 54.7892 34.5805 55.4256 33.7957 55.4256H23.0949C22.3101 55.4256 21.6738 54.7892 21.6738 54.0044Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.6738 58.5789C21.6738 57.7941 22.3101 57.1577 23.0949 57.1577H33.7957C34.5805 57.1577 35.2169 57.7941 35.2169 58.5789C35.2169 59.3637 34.5805 60.0001 33.7957 60.0001H23.0949C22.3101 60.0001 21.6738 59.3637 21.6738 58.5789Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.4192 43.4839C21.2041 43.4839 21.8404 44.12 21.8404 44.9051V46.3262C21.8404 47.111 22.4767 47.7474 23.2616 47.7474H33.2098C33.9946 47.7474 34.631 47.111 34.631 46.3262V44.9051C34.631 44.12 35.2671 43.4839 36.0521 43.4839C36.8369 43.4839 37.4733 44.12 37.4733 44.9051V46.3262C37.4733 48.6808 35.5644 50.5897 33.2098 50.5897H23.2616C20.9069 50.5897 18.998 48.6808 18.998 46.3262V44.9051C18.998 44.12 19.6343 43.4839 20.4192 43.4839Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.3203 27.7307C48.3203 26.946 48.9567 26.3096 49.7415 26.3096H55.4262C56.2109 26.3096 56.8473 26.946 56.8473 27.7307C56.8473 28.5158 56.2109 29.1519 55.4262 29.1519H49.7415C48.9567 29.1519 48.3203 28.5158 48.3203 27.7307Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.6595 43.6511C46.0597 42.976 46.9385 42.7404 47.6227 43.1253L52.5456 45.8948C53.2298 46.2797 53.46 47.1389 53.0598 47.8143C52.6596 48.4893 51.7807 48.725 51.0969 48.3401L46.1737 45.5705C45.4895 45.1857 45.2593 44.3264 45.6595 43.6511Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 27.7307C0 26.946 0.636286 26.3096 1.42117 26.3096H7.10585C7.89073 26.3096 8.52702 26.946 8.52702 27.7307C8.52702 28.5158 7.89073 29.1519 7.10585 29.1519H1.42117C0.636286 29.1519 0 28.5158 0 27.7307Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.05827 6.83697C5.60827 6.27703 6.51949 6.25702 7.09353 6.79229L11.2005 10.622C11.7745 11.1573 11.794 12.0451 11.244 12.6051C10.694 13.165 9.78281 13.185 9.20877 12.6498L5.10182 8.82009C4.52778 8.2848 4.50828 7.39694 5.05827 6.83697Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.0449 7.37556C51.4949 6.81559 50.5837 6.79558 50.0095 7.33088L45.9026 11.1606C45.3285 11.6958 45.3091 12.5837 45.8591 13.1437C46.4091 13.7036 47.3204 13.7236 47.8942 13.1883L52.0014 9.35866C52.5753 8.82339 52.5949 7.9355 52.0449 7.37556Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.44654 47.8143C4.04643 47.1389 4.27663 46.2797 4.96072 45.8948L9.8838 43.1253C10.5679 42.7404 11.4468 42.976 11.8469 43.6511C12.247 44.3264 12.0168 45.1857 11.3327 45.5705L6.40966 48.3401C5.72557 48.725 4.84666 48.4893 4.44654 47.8143Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.4231 0C29.2079 0 29.8443 0.636286 29.8443 1.42117V6.96009C29.8443 7.74498 29.2079 8.38126 28.4231 8.38126C27.6384 8.38126 27.002 7.74498 27.002 6.96009V1.42117C27.002 0.636286 27.6384 0 28.4231 0Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.339 16.6047C31.5872 15.8601 32.3921 15.4577 33.1365 15.7059C33.8616 15.9475 34.6049 16.2891 35.3357 16.7202C36.0116 17.119 36.2364 17.9903 35.8373 18.6663C35.4385 19.3423 34.5674 19.567 33.8912 19.1682C33.3184 18.8302 32.7571 18.5755 32.2378 18.4024C31.4931 18.1542 31.0906 17.3493 31.339 16.6047ZM37.3952 20.2851C37.9657 19.7458 38.865 19.7709 39.4045 20.3411C40.8634 21.8837 41.8452 23.6071 42.1547 25.7648C42.4583 27.8792 42.0959 30.2727 41.1414 33.1364C40.893 33.8811 40.0883 34.2835 39.3436 34.0351C38.5989 33.787 38.1965 32.9823 38.4449 32.2376C39.3283 29.5871 39.5571 27.6723 39.3411 26.1687C39.1316 24.7085 38.4838 23.5042 37.3392 22.2942C36.8 21.7239 36.825 20.8244 37.3952 20.2851Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">CDN & DDoS Protection</a>
                </h3>
                <p className="box-text">
                  Global edge network and automated DDoS mitigation to keep your
                  site fast and available under traffic spikes.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card" data-cue="slideInUp">
                <div className="box-icon" data-theme-color="#3C72FC">
                   <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.6463 27.9152C55.7798 25.9235 53.067 24.8844 50.2885 25.2232C49.824 19.2405 44.8091 14.5161 38.7106 14.5161C36.6456 14.5161 34.6478 15.0732 32.9041 16.0835V13.7601L29.5256 12.9152C29.2236 11.7967 28.7775 10.7222 28.1949 9.71097L29.9891 6.72174L26.1833 2.91551L23.1937 4.70971C22.1824 4.12613 21.1084 3.68101 19.9894 3.37906L19.1436 0H13.761L12.9166 3.37812C11.7976 3.68007 10.7236 4.12613 9.71236 4.70876L6.72267 2.91551L2.91691 6.72174L4.7111 9.71097C4.12753 10.7222 3.68241 11.7967 3.38046 12.9152L0.000923157 13.7601V19.1427L3.37951 19.9876C3.68146 21.106 4.12753 22.1806 4.71016 23.1918L2.91596 26.181L3.61058 26.8761C1.32495 28.5248 -0.0406596 31.1213 0.000923157 33.9976C0.0694401 38.73 3.97632 42.5806 8.7106 42.5806H17.9041C19.2376 42.5806 20.3235 43.666 20.3235 45C20.3235 46.3335 19.2376 47.4194 17.9041 47.4194H7.74286V49.3548H17.9041C20.3051 49.3548 22.259 47.4009 22.259 45C22.259 42.5991 20.3051 40.6452 17.9041 40.6452H8.7106C5.02817 40.6452 1.9898 37.6507 1.93735 33.9707C1.89577 31.0712 3.70651 28.5271 6.55161 27.4857C7.80665 27.0268 9.07067 26.9725 10.4169 27.3222L11.663 27.6454L11.6138 26.129C11.6138 20.7927 15.955 16.4516 21.2912 16.4516C24.4345 16.4516 27.394 17.993 29.2094 20.5768L30.0009 21.7033L30.7924 20.5768C32.6079 17.993 35.5673 16.4516 38.7106 16.4516C44.0469 16.4516 48.388 20.7927 48.3842 26.2042L48.3408 27.6463L49.5868 27.3231C52.1314 26.6602 54.5612 27.4526 56.2353 29.2392C57.5291 30.619 58.1746 32.425 58.0517 34.3237C57.8216 37.8686 54.7355 40.6452 51.0262 40.6452H31.9364V35.8064C31.9364 33.6716 33.6725 31.9355 35.8074 31.9355C37.9423 31.9355 39.6783 33.6716 39.6783 35.8064V38.7097H45.4848V35.8064C45.4848 30.4702 41.1437 26.129 35.8074 26.129C30.4711 26.129 26.13 30.4702 26.13 35.8064V40.6452H24.1945V60H47.4203V42.5806H51.0262C55.7524 42.5806 59.6872 39.0083 59.9825 34.4484C60.1403 32.0106 59.311 29.69 57.6463 27.9152ZM16.4525 10.6452C13.2502 10.6452 10.6461 13.2493 10.6461 16.4516C10.6461 17.6136 11.009 18.7306 11.6507 19.6828C11.2575 20.2682 10.9178 20.8896 10.6352 21.5436C9.40522 20.1444 8.7106 18.354 8.7106 16.4516C8.7106 12.1828 12.1837 8.70968 16.4525 8.70968C20.1747 8.70968 23.2905 11.3506 24.0281 14.8568C23.342 14.6891 22.6384 14.5894 21.923 14.5497C21.1221 12.2522 18.9395 10.6452 16.4525 10.6452ZM12.952 18.0705C12.7191 17.5663 12.5816 17.0186 12.5816 16.4516C12.5816 14.3167 14.3176 12.5806 16.4525 12.5806C17.8975 12.5806 19.1842 13.3953 19.8472 14.6168C17.1542 14.9523 14.7491 16.2125 12.952 18.0705ZM30.0009 18.4584C28.9065 17.2162 27.5669 16.2319 26.0846 15.5571C25.6314 10.639 21.4869 6.77419 16.4525 6.77419C11.1163 6.77419 6.77512 11.1153 6.77512 16.4516C6.77512 19.2084 7.93849 21.7789 9.96564 23.6138C9.84845 24.1392 9.75584 24.6732 9.71331 25.2232C8.40676 25.0673 7.12432 25.2142 5.88581 25.6683C5.70484 25.734 5.53047 25.8087 5.35658 25.8838L5.35327 25.881L6.97736 23.1734L6.65604 22.6692C5.92929 21.5271 5.41328 20.2857 5.12315 18.9792L4.99462 18.3956L1.93641 17.631V15.2717L4.99462 14.5072L5.1241 13.9226C5.41423 12.6161 5.93023 11.3747 6.65698 10.2326L6.9783 9.72845L5.35327 7.02085L7.02178 5.35235L9.72985 6.97644L10.234 6.65512C11.3757 5.92836 12.6175 5.41236 13.924 5.12223L14.5085 4.99228L15.2726 1.93548H17.632L18.3965 4.99323L18.981 5.12317C20.2876 5.41331 21.5294 5.92931 22.671 6.65606L23.1752 6.97738L25.8833 5.35329L27.5513 7.0218L25.9277 9.7294L26.249 10.2336C26.9758 11.3757 27.4913 12.617 27.7819 13.9236L27.9114 14.5081L30.9696 15.2726V17.4926C30.6299 17.7945 30.3038 18.1149 30.0009 18.4584ZM28.0654 35.8064C28.0654 31.5376 31.5385 28.0645 35.8074 28.0645C40.0762 28.0645 43.5493 31.5376 43.5493 35.8064V36.7742H41.6138V35.8064C41.6138 32.6041 39.0097 30 35.8074 30C32.605 30 30.0009 32.6041 30.0009 35.8064V40.6452H28.0654V35.8064ZM35.8074 48.3871C35.2744 48.3871 34.8396 47.9524 34.8396 47.4194C34.8396 46.8859 35.2744 46.4516 35.8074 46.4516C36.3404 46.4516 36.7751 46.8859 36.7751 47.4194C36.7751 47.9524 36.3404 48.3871 35.8074 48.3871ZM45.4848 58.0645H36.7751V50.1567C37.9016 49.7574 38.7106 48.681 38.7106 47.4194C38.7106 45.8184 37.4078 44.5161 35.8074 44.5161C34.2069 44.5161 32.9041 45.8184 32.9041 47.4194C32.9041 48.681 33.7131 49.7574 34.8396 50.1567V58.0645H26.13V42.5806H45.4848V58.0645Z"
                    fill="currentColor"
                  />
                  <path
                    d="M41.6133 54.1936H43.5488V56.1291H41.6133V54.1936Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.4844 26.1292H17.4199V28.0646H15.4844V26.1292Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.3555 26.1292H21.291V28.0646H19.3555V26.1292Z"
                    fill="currentColor"
                  />
                  <path
                    d="M28.0645 54.1936H29.9999V56.1291H28.0645V54.1936Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.2266 26.1292H25.162V28.0646H23.2266V26.1292Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.87109 47.4194H5.80658V49.3549H3.87109V47.4194Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.00195312 47.4194H1.93744V49.3549H0.00195312V47.4194Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.484375 51.2903H10.6457V53.2258H0.484375V51.2903Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.582 51.2903H14.5175V53.2258H12.582V51.2903Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.4531 51.2903H18.3886V53.2258H16.4531V51.2903Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Backups & Security</a>
                </h3>
                <p className="box-text">
                  Automated backups, SSL, and hardened configurations to keep
                  your data safe and recoverable.
                </p>
                <a
                  href="service-details.html"
                  className="link-btn style-gradient"
                >
                  Read More
                  <i className="far fa-long-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Project / Why Area  
==============================*/}
      <div
        className="space overflow-hidden"
        data-bg-src="assets/img/bg/why-bg1-1.png"
      >
        <div
          className="shape-mockup bg-gradient-shape1 why-bg-gradient1"
          data-top="10%"
          data-right={0}
          data-left="auto"
        />
        <div
          className="shape-mockup bg-gradient-shape1 why-bg-gradient2"
          data-top="20%"
          data-left="3%"
        />
        <div className="container">
          <div className="row gx-80 gy-40 align-items-center">
            <div className="col-xl-6">
              <div className="why-img-box1" data-cue="slideInLeft">
                <div className="why-img-box1-shape1" />
                <div
                  className="img1"
                  data-mask-src="assets/img/normal/why-mask1-1.png"
                >
                  <img src="assets/img/normal/why1-1.png" alt="About" />
                </div>
                <div className="about-experience-wrap jump">
                  <div className="box-icon">
                    <svg
                      width={46}
                      height={44}
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 2L29 16H17L23 2Z" fill="currentColor" />
                    </svg>
                  </div>
                  Trusted By Thousands of Websites
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-wrap1">
                <div className="title-area mb-40">
                  <span className="sub-title" data-cue="slideInUp">
                    Why Choose Guvi Host
                  </span>
                  <h2
                    className="sec-title"
                    data-cue="slideInUp"
                    data-delay={100}
                  >
                    Fast, Secure, and Scalable Hosting
                  </h2>
                  <p className="sec-text" data-cue="slideInUp" data-delay={200}>
                    We combine low-latency global infrastructure with hands-on
                    support and easy onboarding. From hobby sites to enterprise
                    apps — we tailor hosting to your needs.
                  </p>
                </div>
                <div className="row gy-30">
                  <div className="col-md-6">
                    <div className="why-feature-wrap" data-cue="slideInUp">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/why-feature-icon1-1.svg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title h6">High Performance</h3>
                      <p className="box-text">
                        SSD storage, optimized stacks, and CDN edge caching to
                        keep pages loading fast worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-feature-wrap" data-cue="slideInUp">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/why-feature-icon1-2.svg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title h6">Flexible Plans</h3>
                      <p className="box-text">
                        From shared plans to dedicated machines — pick the
                        resources you need and scale when ready.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="space overflow-hidden">
        <div
          className="shape-mockup bg-gradient-shape1 price-bg-gradient1"
          data-top="15%"
          data-left="3%"
        />
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title" data-cue="slideInUp">
              Pricing Plans
            </span>
            <h2 className="sec-title" data-cue="slideInUp">
              Simple, Transparent Pricing
            </h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-cue="slideInUp">
              <div className="price-card">
                <span className="price-tag" />
                <h3 className="box-title">Starter</h3>
                <p className="box-text">
                  Perfect for blogs and personal sites getting started online.
                </p>
                <div className="box-price">
                  $4.50<span className="duration">/month</span>
                </div>
                <a href="pricing.html" className="ot-btn style-border w-100">
                  Get Started
                </a>
                <div className="box-content">
                  <div className="check-list">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check" /> 1 Website
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> 10 GB SSD
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Free SSL
                      </li>
                      <li className="unavailable">
                        <i className="far fa-circle-check" /> Daily Backups
                      </li>
                      <li className="unavailable">
                        <i className="far fa-circle-check" /> Priority Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cue="slideInUp">
              <div className="price-card active">
                <span className="price-tag">Popular</span>
                <h3 className="box-title">Business</h3>
                <p className="box-text">
                  For growing sites and small-to-medium businesses.
                </p>
                <div className="box-price">
                  $12.99<span className="duration">/month</span>
                </div>
                <a href="pricing.html" className="ot-btn style-border w-100">
                  Get Started
                </a>
                <div className="box-content">
                  <div className="check-list">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check" /> 5 Websites
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> 50 GB SSD
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Daily Backups
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Free SSL
                      </li>
                      <li className="unavailable">
                        <i className="far fa-circle-check" /> 24/7 Priority
                        Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-cue="slideInUp">
              <div className="price-card">
                <span className="price-tag" />
                <h3 className="box-title">Enterprise</h3>
                <p className="box-text">
                  Dedicated resources and personalized support for large teams.
                </p>
                <div className="box-price">
                  $299<span className="duration">/month</span>
                </div>
                <a href="pricing.html" className="ot-btn style-border w-100">
                  Get Started
                </a>
                <div className="box-content">
                  <div className="check-list">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check" /> Dedicated
                        Resources
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Managed Services
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> 24/7 Priority
                        Support
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Daily Backups
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> SLA & On-call
                        Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space overflow-hidden">
        <div
          className="shape-mockup bg-gradient-shape1"
          data-top="20%"
          data-right="-3%"
          data-left="auto"
        />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="title-area text-center">
                <span className="sub-title style2" data-cue="slideInUp">
                  Global Network
                </span>
                <h2 className="sec-title" data-cue="slideInUp">
                  Global Data Centers & Low-Latency Network
                </h2>
                <p className="sec-text" data-cue="slideInUp">
                  Guvi Host operates at multiple global edge locations to
                  deliver low latency and high availability for users around the
                  world. Choose the region closest to your customers for the
                  best performance.
                </p>
              </div>
            </div>
          </div>
          <div
            className="network-wrap bg-auto"
            data-cue="slideInUp"
            data-bg-src="assets/img/bg/map-bg1-1.png"
          >
            <div className="network-line" data-cue="slideInUp">
              {/* SVG lines kept as-is */}
              <svg
                viewBox="0 0 1077 436"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M494 129.5C573.5 -27.5014 937.5 143.5 1000 394.498"
                  stroke="#069845"
                />
              </svg>
            </div>
            <div className="location-wrap">
              <div className="location-card">
                <div className="box-content">
                  <div className="box-icon">
                    <svg
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3173 16.9705C16.6492 16.3024 15.4831 16.3024 14.8151 16.9705C13.8122 17.9733 12.4793 18.5253 11.0613 18.5253H10.3652V22.7497C10.3652 25.7401 12.131 28.4574 14.8638 29.6717C15.2453 29.8412 15.6495 29.9272 16.0662 29.9272C16.4829 29.9272 16.8871 29.8412 17.2686 29.6722C20.0014 28.4574 21.7672 25.7401 21.7672 22.7497V18.5253H21.0711C19.6531 18.5253 18.3201 17.9733 17.3173 16.9705Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h6 className="box-title">North Carolina</h6>
                  <p className="box-text">
                    Regional data center with low-latency connections.
                  </p>
                  <a href="service-details.html" className="link-btn">
                    View All
                    <i className="far fa-long-arrow-right ms-2" />
                  </a>
                </div>
                <div className="location-growth-wrap">
                  <div className="box-number">
                    15 <img src="assets/img/icon/growth-arrow.svg" alt="icon" />
                  </div>
                  <div className="chart-thumb">
                    <img src="assets/img/normal/network-chart.png" alt="img" />
                  </div>
                </div>
              </div>
              <ul className="location-branch-list">
                <li className="location-branch">
                  <a href="#">Global Data Center Network</a>
                </li>
                <li className="location-branch">
                  <a href="#">Partner Ecosystem</a>
                </li>
                <li className="location-branch">
                  <a href="#">Low-Latency Connections</a>
                </li>
                <li className="location-branch">
                  <a href="#">Compliance & Data Residency</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
