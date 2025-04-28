
import axios from 'axios'

function Home() {
  return (
   <div>
  {/* Start Hero Section */}
  <section>
    <div className="cs_hero cs_style_3 cs_bg_filed cs_center"
    style={{ backgroundImage: "url(assets/images/hero_bg_3.jpg)" }}
    >
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_fs_100">Welcome to Beauty Haven</h1>
          <p className="cs_hero_subtitle cs_fs_24">Discover Your Perfect Beauty Essentials and Unleash Your Inner Radiance!</p>
          <a href="shop.html" className="cs_btn cs_style_1 cs_fs_18 cs_medium">Shop Now</a>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="cs_card cs_style_1 cs_white_bg">
        <div className="cs_card_img"><img src="assets/images/card_img_1.png" alt="Thumb" /></div>
        <div className="cs_card_right">
          <h2 className="cs_card_title cs_fs_54 cs_semibold">Hurry! Limited Time Offer</h2>
          <p className="cs_card_subtitle cs_fs_24">Sale Ends in</p>
          <div className="cs_countdown cs_style_1 cs_fs_36 cs_white_color cs_accent_bg cs_bold cs_radius_10 cs_center" data-countdate="2024-04-02T03:45:26">
            <div className="cs_countdown_box cs_accent_bg cs_white_color cs_center" title="Day">
              <p className="cs_count_days mb-0 cs_countdown_number" />
              <p className="cs_count_title cs_fs_16">Days</p>
            </div>
            <div className="cs_countdown_box cs_accent_bg cs_white_color cs_center" title="Hour">
              <p className="cs_count_hours mb-0 cs_countdown_number" />
              <p className="cs_count_title cs_fs_16">Hours</p>
            </div>
            <div className="cs_countdown_box cs_accent_bg cs_white_color cs_center" title="Minute">
              <p className="cs_count_minutes mb-0 cs_countdown_number" />
              <p className="cs_count_title cs_fs_16">Minutes</p>
            </div>
            <div className="cs_countdown_box cs_accent_bg cs_white_color cs_center" title="Second">
              <p className="cs_count_seconds mb-0 cs_countdown_number" />
              <p className="cs_count_title cs_fs_16">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <div className="cs_height_150 cs_height_lg_80" />
</div>



  )
}

export default Home
