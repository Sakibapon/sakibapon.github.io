<!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
      </div>

      <div class="row" data-aos="fade-in">

        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="icofont-google-map"></i>
              <h4>Location:</h4>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div class="email">
              <i class="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>sakibapon7@gmail.com</p>
            </div>

            <div class="phone">
              <i class="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+880 1951445484</p>
            </div>

            <iframe src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
          </div>

        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Subject</label>
              <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
              <div class="validate"></div>
            </div>
            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section><!-- End Contact Section -->