import React from "react";
import main_img from "../assets/img/front-view-man-holding-canoe-oar.jpg";
import "../scss/news.scss";

export default function News() {
  return (
    <div className="news">
      <p className="news_main_title">WHEN CAN YOU COSTUMIZE YOU T-SHIRT?</p>
      <div>
        <img src={main_img} className="news_main_img" />
      </div>
      <div>
        <div className="news_text">
          Customizing T-shirts has been a popular trend for many years, allowing
          individuals to express their unique style, preferences, and beliefs
          through clothing. As technology continues to advance at a rapid pace,
          the future of customizing T-shirts is likely to undergo significant
          transformations. From personalized designs to sustainable materials
          and innovative production methods, the future of customized T-shirts
          holds great potential for creativity, sustainability, and individual
          expression.
        </div>
        <div className="news_text">
          One of the key trends in the future of customizing T-shirts is the use
          of advanced technologies such as 3D printing and augmented reality
          (AR). 3D printing allows for intricate and complex designs to be
          created on T-shirts with precision and detail that was previously not
          possible with traditional printing methods. This technology enables
          individuals to customize their T-shirts with unique patterns,
          textures, and shapes, creating truly one-of-a-kind garments.
        </div>
        <div className="news_text">
          AR technology is another exciting development that is likely to
          revolutionize the way T-shirts are customized in the future. With AR,
          individuals can virtually try on different designs, colors, and
          patterns in real-time before making a purchase. This not only enhances
          the shopping experience but also allows for greater personalization
          and customization options.
        </div>
        <div className="news_text">
          In addition to technological advancements, the future of customizing
          T-shirts will also focus on sustainability and eco-friendly practices.
          As consumers become more conscious of the environmental impact of fast
          fashion, there is a growing demand for sustainable and ethically
          produced clothing. In response to this trend, custom T-shirt companies
          are exploring alternative materials such as organic cotton, recycled
          polyester, and biodegradable fabrics.
        </div>
        <div className="news_text">
          Furthermore, advancements in manufacturing processes such as on-demand
          production and zero-waste techniques are likely to become more
          prevalent in the customization of T-shirts. On-demand production
          eliminates the need for excess inventory and reduces waste, making it
          a more sustainable and cost-effective option for custom T-shirt
          companies. Zero-waste techniques aim to minimize waste throughout the
          production process, from design to manufacturing, by utilizing every
          part of the fabric efficiently.
        </div>
      </div>
    </div>
  );
}
