<?php $title = "Sakib Apon: Publications"; 
   include ('header.php') ; ?>

<!-- ======= Projects Section ======= -->
    
<section id="portfolio" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Projects</h2>
      </div>
      
      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">AI &amp; ML</li>
            <li data-filter=".filter-card">Model &amp; Simulation</li>
            <li data-filter=".filter-web">Web Development</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/action.JPG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Real-TIme Action Recognition from Video footage</strong></p>
            <ul class="">
              <li class="">Can detect physical bullying in real time.</li>
              <li class="">Used DNN with five different image classification models to detect actions from video footage.</li>
            </ul>
            <p><strong>Paper Available</strong></p>
            <div class="portfolio-links">
              <a href="" target="_blank" title="Paper"><i class="bx bx-file-blank"></i></a>
              <a href="assets/img/projects/action.JPG" data-gall="portfolioGallery" class="venobox" title="Real-TIme Action Recognition from Video footage"> <i class="bx bx-plus"></i></a>
              <a href="" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/csgo_project.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>CS: GO Action Recognition and Data Collection Automation API</strong></p>

            <ul class="">
              <li>Used Five Different Transfer Learning and Majority Voting.</li>
              <li>Self-developed deep neural network model have also been used for video analysis. </li>
              <li>System API allows the automated collection and processing of data which can aid to the later training period and enhance our system's performance. </li>
            </ul>
            <p><strong>Paper Available</strong></p>
            <div class="portfolio-links">
              <a href="" target="_blank" title="Paper"><i class="bx bx-file-blank"></i></a>
              <a href="assets/img/projects/csgo_project.PNG" data-gall="portfolioGallery" class="venobox" title="CS: GO Action Recognition and Data Collection Automation API"> <i class="bx bx-plus"></i></a>
              <a href="" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/retinaOCT.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Demystifying  Deep Learning Models for Retinal OCT Disease Classification using Explainable AI</strong></p>

            <ul class="">
              <li>CNN model is proposed to identify optical coherence tomography diseases in four classes.</li>
              <li>In terms of model size, the suggested approach is significantly smaller, appropriate for the usage as a web app to generate real-time OCT diagnostic classification. </li>
              <li>The model is efficient in terms of memory resource.</li>
              <li>Using LIME & Grad-CAM we examine the interpretability of the proposed model</li>
            </ul>
            <p><strong>Paper Available</strong></p>
            <div class="portfolio-links">
              <a href="" target="_blank" title="Paper"><i class="bx bx-file-blank"></i></a>
              <a href="assets/img/projects/retinaOCT.PNG" data-gall="portfolioGallery" class="venobox" title="Demystifying  Deep Learning Models for Retinal OCT Disease Classification using Explainable AI"> <i class="bx bx-plus"></i></a>
              <a href="" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/yolo_project.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Yolo V4 Custom Object Detection With Custom Functions API</strong></p>
            <ul class="">
              <li>Used Darknet, Deepsort, Tensorflow & Flask.</li>
              <li>Can Detect, Track, Count, Print Info, Apply Tesseract OCR.</li>
              <li>Crop Detections and Save as New Image.</li>
              <li>License Plate Recognition Using Tesseract OCR.</li>
              <li>Works on Both Videos & Images.</li>
            </ul>
            <div class="portfolio-links">
              <a href="assets/img/projects/yolo_project.PNG" data-gall="portfolioGallery" class="venobox" title="Yolo V4 Custom Object Detection With Custom Functions API"> <i class="bx bx-plus"></i></a>
              <a href="" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app filter-card">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/selfdriving.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Self Driving Siumulation</strong></p>
            <ul class="">
              <li>Used Udacity self driving car simulator.</li>
              <li>Used Image Processing with CNN</li>
            </ul>
            <div class="portfolio-links">
              <a href="assets/img/projects/selfdriving.PNG" data-gall="portfolioGallery" class="venobox" title="Self Driving Siumulation"> <i class="bx bx-plus"></i></a>
              <a href="https://github.com/CSE474/SelfDriving_Implementation" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/house.JPG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Advanced House Pricing</strong></p>
            <ul class="">
              <li>Used different machine learning algorithms to detect house pricing with more than 80 features.</li>
            </ul>
            <div class="portfolio-links">
              <a href="assets/img/projects/house.JPG" data-gall="portfolioGallery" class="venobox" title="Advanced House Pricing"> <i class="bx bx-plus"></i></a>
              <a href="" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/Genosis.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Geonosis Study Abroad</strong></p>
            <ul class="">
              <li>A web application where user can save universities, register for consultations and check their saved universities along with previous consultations, assigned consultant, and consultation status.</li>
              <li>A functional admin panel with restricted access(only admin can access) section where admin can 
                <ul>
                  <li>1. Add University </li>
                  <li>2. Remove University</li>
                  <li>3. Modify University </li>
                  <li>4. Change consultation status</li>
                  <li>5. Assign consultant</li> 
                </ul>
              </li>
            </ul>
            <div class="portfolio-links">
              <a href="assets/img/projects/Genosis.PNG" data-gall="portfolioGallery" class="venobox" title="Geonosis Study Abroad"> <i class="bx bx-plus"></i></a>
              <a href="https://github.com/Sakibapon/GeonosisStudyAbroad.github.io" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/projects/car.PNG" class="img-fluid" alt="">
            <p></p>
            <p class="text-center"><strong>Advanced Car Parts</strong></p>
            <ul class="">
              <li>A web application where user can request services and check their previous request history with status(pending, ongoing, or done)</li>
              <li>A functional admin panel with restricted access(only admin can access) section where admin can
                <ul>
                  <li>1.Add Services</li>
                  <li>2. Delete any existing Services</li>
                  <li>3. Update the state of customers order.</li>

                </ul>
              </li>
            </ul>
            <div class="portfolio-links">
              <!--
                <a href="AdvancedCars.html" target="_blank" title="Source Code"><i class="bx bx-book-content"></i></a>
              -->
              <a href="assets/img/projects/car.PNG" data-gall="portfolioGallery" class="venobox" title="Advanced Car Parts"> <i class="bx bx-plus"></i></a>
              <a href="https://github.com/Sakibapon/GeonosisStudyAbroad.github.io" target="_blank" title="Source Code"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
 
  <!-- End Portfolio Section -->

  <?php include ('footer.php') ; ?>