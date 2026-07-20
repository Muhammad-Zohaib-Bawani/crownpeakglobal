import Script from "next/script";

// Verbatim TechnoBeavers homepage markup. Rendered as raw HTML so the original
// vendor CSS (served from /public) styles it 1:1. Analytics / FB-chat / inline
// <script> tags were stripped — JS is loaded in order by the loader below.
// ponytail: clone, not a rewrite — hand-porting 500 lines to JSX buys nothing.
const HOME_HTML = `
<div class="menu-bar navbr animate fadeInLeft animated" data-animation="fadeInLeft" data-duration="1200">
  <div id="nav-icon3" class="menu-open animate fadeInLeft animated" data-animation="fadeInLeft" data-duration="1500">
    <span></span><span></span><span></span><span></span>
  </div>
  <div class="mobile-menu">
    <a href="javascript:" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#search" class="search-icon animate fadeInLeft animated" data-animation="fadeInLeft" data-duration="1500">
      <i class="fa fa-search" aria-hidden="true"></i>
    </a>
    <nav class="sub-nav">
      <ul>
        <li class="fadeUp1 active"><a href="" data-letters="Home" class="link link--kukuri">Home</a></li>
        <li class="fadeUp2"><a href="who-we-are/">Who We Are</a></li>
        <li class="fadeUp3"><a href="our-services/">Our Services</a>
          <i class="small-arrow"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#small-arrow"></use></svg></i>
          <ul class="first-menu">
            <li><a href="our-services/graphic-designing/">Graphic Designing</a></li>
            <li><a href="our-services/web-development/">Web Design &amp; Development</a></li>
            <li><a href="our-services/app-development/">App Development</a></li>
            <li><a href="our-services/video-animation/">Video Animation</a></li>
            <li><a href="our-services/social-media-management/">Social Media Management</a></li>
            <li><a href="our-services/content-management/">Content Management</a></li>
            <li><a href="our-services/search-engine-optimization/">Search Engine Optimization</a></li>
            <li><a href="our-services/digital-marketing/"> Digital Marketing</a></li>
          </ul>
        </li>
        <li class="fadeUp5"><a href="portfolio/">Portfolio</a></li>
        <li class="fadeUp6"><a href="careers/">Careers</a></li>
        <li class="fadeUp6"><a href="contact-us/">Contact Us</a></li>
      </ul>
    </nav>
    <ul class="header-icons animate fadeInLeft animated" data-animation="fadeInLeft" data-duration="1500">
      <li><a href="https://www.facebook.com/TechnoBeavers/" target="_blank" class="facebook-icon"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li><a href="https://twitter.com/TechnoBeavers" target="_blank" class="twitter-icon"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="https://www.linkedin.com/company/technobeavers" target="_blank" class="linked-icon"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
    </ul>
  </div>
</div>

<header>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <a href=""><img src="assets/images/logo.png" alt="Technobeavers"></a>
      </div>
      <div class="col-md-6 text-right">
        <button id="myBtn" class="free-estimate mobhide">Request Info</button>
        <div id="myModal" class="modal">
          <div class="text-left">
            <span class="close">&times;</span>
            <section class="contact-form-col">
              <div class="container">
                <h2>Fill out the form below <br>and we will get back to you.</h2>
                <p>Feel free to contact us at any time with your projects, questions and feedback. We love hearing from you and we love solving problems. Even when you are not sure about it, we encourage that you give us a nudge and we'll see how we can help.</p>
                <div class="contact-form">
                  <form class="contactusform" action="sending.php" method="post">
                    <ul>
                      <li><input type="text" name="fname" id="fname" placeholder="Your Name" required class="required"></li>
                      <li><input type="text" name="represent" id="represent" required class="required" placeholder="What company, organisation, or cause do you represent?"></li>
                      <li><input type="email" name="em" id="em" required class="required" placeholder="Your Email Address"></li>
                      <li><input type="text" name="pn" id="pn" required class="required" placeholder="Your Phone Number"></li>
                      <li><select name="hlp" id="hlp" required class="required">
                        <option value="How can we help?" disabled>How can we help?</option>
                        <option>Web Development</option>
                        <option>Web Designing</option>
                        <option>SEO</option>
                        <option>Web Optimization</option>
                        <option>Video Animation</option>
                        <option>Other</option>
                      </select></li>
                      <li><select name="financial" id="financial" required class="required">
                        <option value="Type">Type</option>
                        <option value="Company">Company</option>
                        <option value="Indivisual">Individual</option>
                      </select></li>
                      <li><input type="text" name="startproject" required class="required" id="startproject" placeholder="When would you like to start this project?" onfocus="(this.type='date')"></li>
                      <li><select name="hearaboutus" id="hearaboutus" required class="required">
                        <option value="How did you hear about us?">How did you hear about us?</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Online Forum">Online Forum</option>
                        <option value="Online Ads">Online Ads</option>
                        <option value="Print Media">Print Media</option>
                        <option value="Friend or Colleague">Friend or Colleague</option>
                        <option value="Website">Website</option>
                        <option value="Others">Others</option>
                      </select></li>
                      <div class="form-messages"></div>
                      <li><input type="submit" name="submit" id="submit"></li>
                    </ul>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="banner white-bg" data-midnight="red">
  <video poster=" " id="bgvid" playsinline="" autoplay="" muted="" loop=""></video>
  <div class="banner-home banner-animate-bg"></div>
  <div class="container">
    <p>Digital Solutions for Business Growth</p>
    <h1 class="heading">We Help You</h1> <br>
    <h2 class="heading" id="example4" style="color: #0089d0; margin-top: -20px;"></h2>
  </div>
  <a href="#" class="scroll-down"></a>
</section>
<a name="downz"></a>

<section class="hm-section1 white-bg" data-midnight="yellow">
  <div class="container">
    <h2>ABOUT US</h2>
    <p>Techno Beavers is emerging IT Company started in 2016. Years of experience has empowered our company and the team members to master technology and art of digital marketing. We have come up with the mission to offer integral and differentiated services that provide clients the possibility of increasing their business performance. Our workplaces are located in USA, UK, Australia, Pakistan are full of professional individuals who are devoted to help company prosper all over the world. We always strive to do better to improve your digital experiences.</p>
    <h5>COMPANY PHILOSOPHY</h5>
    <p><span>Our dedication and passion towards work drives us to perform well for Techno Beavers. We linked up with IT enthusiasts that are genuinely committed to take this company at the peak of success and development. Techno Beavers respect people's right and privacy and this leads us into certifying a win-win situation for company and people related to us.</span></p>
    <img src="assets/images/Techno-Beavers-Cover.png" alt="">
  </div>
</section>

<section class="what-we-do-section black-bg" data-midnight="red">
  <div class="container">
    <h2><span>What</span> We Do</h2>
    <div class="row">
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/graphic-designing-icon.png"><br><br><h3><span></span>Graphic Designing</h3><div></div></div>
        <p>Techno Beaversoffers complete suite of digital services. Our graphic design team works best to give organizations an eye-catching brand that brings you ahead with your competitors.</p>
        <a href="our-services/graphic-designing/">Read More</a><span class="count-num">01</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/web-deve-icon.png"><br><br><h3><span></span> Web Development</h3></div>
        <p>If you can think it, we can code it! Techno Beavers has a team of highly skilled and competent web designers and developer enabled us to be best in providing digital services. With the driven effort</p>
        <a href="our-services/web-development/">Read More</a><span class="count-num">02</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/mobile-app-icon.png"><br><br><h3><span></span>App Development</h3></div>
        <p>Are you into to use mobile technology for your business than with the best programming practices, effective coding, structured development methods along with well compiled standards make us just</p>
        <a href="our-services/app-development/">Read More</a><span class="count-num">03</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/social-media-management-icon.png"><br><br><h3><span></span>Social Management</h3></div>
        <p>Social Media Marketing helps you to accelerate marketing of your business. We build and manage high-performing social media campaigns for businesses, manage social media networks and deliverrelevant.</p>
        <a href="our-services/social-media-management/">Read More</a><span class="count-num">04</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/content-icon.png"><br><br><h3><span></span>Content Management</h3></div>
        <p>We have proficient individuals in our Content Management department that generates unique, genuine and informatory content for your business. Our writers help you to achieve great success .</p>
        <a href="our-services/content-management/">Read More</a><span class="count-num">05</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/seo-icon.png"><br><br><h3><span></span>SEO</h3></div>
        <p>Techno Beavers in your reliable hub for all your SEO needs. Attaining better position amongst competitors is difficult without search engines. We perform genuine "white hat" optimization and link building.</p>
        <a href="our-services/search-engine-optimization/">Read More</a><span class="count-num">06</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/video-icon.png"><br><br><h3><span></span>Video Animation</h3></div>
        <p>Video Animation is something that helps you grab audience attention. Techno Beavers brings your dream into reality with outclass Video Animation services. Our video animators convert boring.</p>
        <a href="our-services/video-animation/">Read More</a><span class="count-num">07</span>
      </div></div>
      <div class="col-md-3"><div>
        <div align="center"><img src="assets/images/digital-icon.png"><br><br><h3><span></span>Digital Marketing</h3></div>
        <p>Digital Marketing is important to building and maintaining a successful business. Our Marketers keep updated with the changing trends in the tech world and with the effective approach to.</p>
        <a href="our-services/digital-marketing/">Read More</a><span class="count-num">08</span>
      </div></div>
    </div>
  </div>
</section>

<section class="facts-and-client">
  <div class="col-md-6">
    <div class="our-facts">
      <h2><span>Mobile App</span> Development</h2>
      <h2><span>Bringing innovative and top-tier mobile application solutions</span></h2>
      <p><span>Techno Beavers is your ultimate gateway for remarkable mobile application development along with productive games and web development services. Whether you are looking for designing, development or creating wonderful applications for smartphones and tablets our company got you covered in everything.</span></p>
      <h3>The Best in the Mobile App Development Business</h3>
      <p>People trust us in creating their next big things so be with us to create yours. With a gathered team of mobile strategists, designers and developersthat are dedicated in bringing clients ideas into reality.Techno Beavers has built strong reputation for affordable and dependable development services to fulfill your various business requirements.</p>
      <p>Our Mobile app developers are proficient in producing high performing results that ensure maximum growth and lower project cost.Techno Beavers would be your sound partner when it comes to UX and UI Expertise. We strongly follow all the described do's and don'ts from Apple and Google to create designs that are easy to implement and use.</p>
      <ul class="facts-list">
        <li><i class="fa fa-apple"></i><h6 class="mobh6">IOS</h6></li>
        <li><i class="fa fa-android"></i><h6 class="mobh6">Andriod</h6></li>
        <li><i class="fa fa-windows"></i><h6 class="mobh6">Windows</h6></li>
        <li><i class="fa fa-gamepad"></i><h6 class="mobh6">Games</h6></li>
      </ul>
    </div>
  </div>
  <div class="col-md-6">
    <div class="client-feedback"><img src="assets/images/andriod-app-2.png" alt=""></div>
  </div>
</section>

<section class="portfolio">
  <div class="container">
    <span class="span-text portfolio"></span>
    <h2>Our Work</h2>
    <p>Techno Beavers aims to give customers unique dynamic Web Development solution, SEO, Digital Marketing and much more. We stay true to our values and delivers best digital services to make it easy for development solutions. Our ground-breaking services are comprehensive and coherent that adds extra value in your business.</p>
    <div id="portfolio">
      <ul id="filters" class="clearfix">
        <li><span class="filter" data-filter="logos">Logos</span></li>
        <li><span class="filter" data-filter="apps">Mobile Apps</span></li>
        <li><span class="filter" data-filter="websites">Websites</span></li>
      </ul>
      <div id="portfoliolist">
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo1.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo2.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo3.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo9.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo5.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo6.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo4.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo7.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 logos mix_all" data-cat="logos" style="display: inline-block; opacity: 1;"><img src="assets/images/logo8.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-1.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-2.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-3.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-4.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-5.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-6.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-7.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-8.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 websites mix_all" data-cat="websites"><img src="assets/images/mockup-9.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-1.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-2.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-3.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-4.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-5.png" alt=""><div class="leadership-overlay"></div></div>
        <div class="col-md-4 apps mix_all" data-cat="apps"><img src="assets/images/mob-6.jpg" alt=""><div class="leadership-overlay"></div></div>
      </div>
      <div class="clearfix"></div>
      <a href="#" class="btn-orange">View More</a>
    </div>
  </div>
</section>

<section class="facts-and-client">
  <div class="col-md-6">
    <div class="our-facts">
      <h2><span>We Love To Share </span> Our Facts.</h2>
      <p><span>Within a short span of time Techno Beavers has gained the status of fastest growing IT Company in Pakistan. Our Company has undergone boom success in creating contemporary digital solutions for technology enthusiasts and businesses to help them make a prominent digital community. </span>Our office around the globe are fully equipped with hard working and passionate employees who are committed to perform their duties at best and to led us to attain the loyalty of customers. Our mission is to become a reputed IT company and stand beside in the top 10 IT Companies in Pakistan.<br></p>
      <ul class="facts-list">
        <li><i class="icon-graph"></i><span>Started in</span><h6>2016</h6></li>
        <li><i class="icon-rocket"></i><span>Specialist Teams</span><h6>Four</h6></li>
        <li><i class="icon-smile"></i><span>Happy Clients</span><h6>400+</h6></li>
        <li><i class="icon-thumb"></i><span>Offices Worldwide</span><h6>5+</h6></li>
      </ul>
    </div>
  </div>
  <div class="col-md-6">
    <div class="client-feedback">
      <h2><span>Clients</span> about us.</h2>
      <h5><i class="icon-smile"></i> Client reviews</h5>
      <p>When you have an idea, we make it practical and profitable for you! Our first preference is to make our customers satisfied. We emphasize in digitizing workflow, boosts communication and work to save time. Know what our valued customers say about us!</p>
      <div id="testimoanial-slider">
        <div class="item"><div class="feeback-img"><img src="assets/images/testimonial-img1.png" alt=""></div><div class="feecback-content"><h6>Stephanie Kyle</h6><p>"I needed a cross platform app for my business and Techno Beavers team delivered just right, keeping each and every detail from minor to major and came up with something really excellent that I approved it right away"</p></div></div>
        <div class="item"><div class="feeback-img"><img src="assets/images/testimonial-img2.png" alt=""></div><div class="feecback-content"><h6>John Williams</h6><p>Techno Beavers has comprehensive team of professionals who turned up with my entire projects in given deadline. They offer creative digital solutions with satisfactory customer service. It offers bang for your buck guys! I would love to recommend it!</p></div></div>
        <div class="item"><div class="feeback-img"><img src="assets/images/testimonial-img3.png" alt=""></div><div class="feecback-content"><h6>Kevin Ames</h6><p>I am so glad that you design my android app within a given time limit, highly satisfied by the efforts you guys put into the app development.</p></div></div>
        <div class="item"><div class="feeback-img"><img src="assets/images/testimonial-img4.png" alt=""></div><div class="feecback-content"><h6>Sara Scholes</h6><p>I'm much impressed with the fantastic experience given by your graphic designing team. My business has gained identity through a wonderful logo designed by you guys. Great Job!</p></div></div>
        <div class="item"><div class="feeback-img"><img src="assets/images/testimonial-img5.png" alt=""></div><div class="feecback-content"><h6>Simon Hudson</h6><p>My experience was pretty satisfying as I approached them for SEO of my website and I was just amazed by the boost in my ranking, Techno Beavers team didn't disappoint you.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="span12">
        <div id="owl-example" class="owl-carousel">
          <div style="text-align: center;"><img src="assets/img/demo-slides/touch.png" alt="PHP"></div>
          <div style="text-align: center;"><img src="assets/img/demo-slides/grab.png" alt="bootstrap"></div>
          <div style="text-align: center;"><img src="assets/img/demo-slides/responsive.png" alt="googleanalytic"></div>
          <div style="text-align: center;"><img src="assets/img/demo-slides/adobe.png" alt="adobe"></div>
          <div style="text-align: center;"><img src="assets/img/demo-slides/css3.png" alt="googlewebmaster"></div>
          <div style="text-align: center;"><img src="assets/img/demo-slides/client6.png" alt="jquery"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-sec-1 row">
      <div class="col-md-6">
        <div class="footer-form">
          <h3>Work With Us</h3>
          <ul class="ftr-form-field">
            <form class="contactusform-footer" action="footsend.php" method="post">
              <li><input type="text" id="fname" name="fname" placeholder="Full Name*" class="required" required="" /></li>
              <li><input type="email" id="em" name="em" placeholder="Email Address*" class="required email" required="" /></li>
              <li><input type="tel" id="pn" name="pn" placeholder="Phone No*" class="required phone" required="" /></li>
              <li><input type="text" id="interest" name="interest" placeholder="Interest*" class="required" required="" /></li>
              <li><textarea name="help" id="help" placeholder="How we can help you?"></textarea></li>
              <li><input type="submit" class="btn-orange" name="submit" id="submit"></li>
              <div class="form-messages"></div>
            </form>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <h4>Our Services</h4>
        <ul class="ftr-list">
          <li><a href="our-services/graphic-designing/">- Graphic Designing</a></li>
          <li><a href="our-services/web-development/">- Web Design &amp; Development</a></li>
          <li><a href="our-services/app-development/">- App Development</a></li>
          <li><a href="our-services/video-animation/">- Video Animation</a></li>
          <li><a href="our-services/social-media-management/">- Social Media Management</a></li>
          <li><a href="our-services/content-management/">- Content Management</a></li>
          <li><a href="our-services/search-engine-optimization/">- Search Engine Optimization</a></li>
          <li><a href="our-services/digital-marketing/">- Digital Marketing</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h4>Quick Links</h4>
        <ul class="ftr-list">
          <li><a href="who-we-are/">- Who We Are</a></li>
          <li><a href="our-services/">- Our Services</a></li>
          <li><a href="careers/">- Careers</a></li>
          <li><a href="portfolio/">- Portfolio</a></li>
          <li><a href="contact-us/">- Contact Us</a></li>
          <li><a href="privacy-policy/">- Privacy Policy</a></li>
          <li><a href="terms-of-use/">- Terms Of Use</a></li>
          <li><a href="refund-policy/">- Refund Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-sec-2 row">
      <div class="col-md-3"><h4>Pakistan</h4><p>Suite #08, Plot E-4, Mezzanine Floor, Maqbool Heights, NIPA Chowrangi، Block 10<br>Gulshan-e-Iqbal, Karachi.<br><b>+92 330 3739090</b></p></div>
      <div class="col-md-3"><h4>UK</h4><p>134 Newbridge Rd Birmingham B9 5JQ, United Kingdom<br><b>+44 7724 589422</b></p></div>
      <div class="col-md-3"><h4>Canada</h4><p>1967 Lawrence Avenue Unit #3 M1R-2Z2 Toronto Ontario, Canada<br>TX 75201<br></p></div>
      <div class="col-md-3"><h4>Australia</h4><p>813-815 Ballarat Road , Deer Park Melbourne Victoria 3021,<br>Australia</p></div>
    </div>
  </div>
  <div class="copyright">
    <div class="container">
      <i class="scroll-topft"></i>
      <div class="row">
        <div class="col-md-4"><p>2020 Technobeavers. All rights reserved</p></div>
        <div class="col-md-4"><h2>Digital Innovation</h2></div>
        <div class="col-md-4">
          <ul class="ftr-link">
            <li><img src="assets/images/dmca.png" width="61" height="32"></li>
            <li><img src="assets/images/bing.png" width="49" height="32"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

<div class="mobile-cta">
  <a href="tel:+923303739090" class="xicon call"><i class="fa fa-phone"></i></a>
  <a style="font-size:25px; padding-top: 2px;" href="https://wa.me/+923303739090" class="xicon call"><i class="fa fa-whatsapp"></i></a>
</div>
`;

export default function Home() {
  return (
    <>
      <div id="tb-root" dangerouslySetInnerHTML={{ __html: HOME_HTML }} />

      {/* Load the original scripts in dependency order (jQuery bundle first),
          then run the owl-carousel init that was inline in the source page. */}
      <Script id="tb-loader" strategy="afterInteractive">{`
        (function () {
          var scripts = [
            "/assets/js/lib.js",
            "/assets/js/functions.js",
            "/dist/typeit.min.js",
            "/assets/js/scriptbanner.js",
            "/owl-carousel/owl.carousel.min.js"
          ];
          function load(i) {
            if (i >= scripts.length) return init();
            var s = document.createElement("script");
            s.src = scripts[i];
            s.onload = function () { load(i + 1); };
            s.onerror = function () { load(i + 1); };
            document.body.appendChild(s);
          }
          function init() {
            if (window.jQuery) {
              var owl = window.jQuery(".owl-carousel");
              if (owl.owlCarousel) {
                owl.owlCarousel({ items: 4, loop: true, margin: 10, autoPlay: true, autoplayTimeout: 300 });
              }
            }
          }
          load(0);
        })();
      `}</Script>
    </>
  );
}
