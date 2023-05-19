import React from 'react'

const Profile = () => {
  return (
    <div>
          <div>
        <section className="section about-section gray-bg" id="about">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">Mr ABC</h3>
                  <h6 className="theme-color lead">Undergraduate in SJTU</h6>
                  <p>I am a student in the faculty of <mark>Software Engineering</mark>. I love reading novels during my free time. I do love writting stories as well! Feel free to check out the interesting stories in my profile! Good day!</p>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>1st jan 2000</p>
                      </div>
                      <div className="media">
                        <label>Age</label>
                        <p>22 Yr</p>
                      </div>
                      <div className="media">
                        <label>Gender</label>
                        <p>Male</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                      <div className="media">
                        <label>Nationality</label>
                        <p>Malaysian</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                </div>
              </div>
            </div>
            <div className="counter">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                    <p className="m-0px font-w-600">Followers</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                    <p className="m-0px font-w-600">Following</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                    <p className="m-0px font-w-600">Post</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                    <p className="m-0px font-w-600">Books Read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
