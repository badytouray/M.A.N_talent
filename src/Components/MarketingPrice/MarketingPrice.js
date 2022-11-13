import React from "react";

import "./MarketingPrice.css";

function MarketingPrice() {
return(
    <> 
    <section class="price-comparison">
            <div class="price-column">
                <div class="price-header">
                <div class="price">
                    <div className="dollar-sign">$</div>
                    299
                    <div className="per-month">/mo</div>
                </div>
                <div class="plan-name">Basic</div>
                </div>
                <div className="divider"></div>
                <div className="feature">
                <img src="check-circle.svg" />
                Sechudule post
                </div>
                <div className="feature">
                <img src="check-circle.svg" />
                Reply comments
                </div>
                <div className="feature inactive">
                <img src="x-square.svg" />
                Reply to posts
                </div>
                <div className="feature inactive">
                <img src="x-square.svg" />
                Clean up inbox
                </div>
                <div className="feature inactive">
                <img src="x-square.svg" />
                Feature E
                </div>
                <div className="feature inactive">
                <img src="x-square.svg" />
                Feature F
                </div>
                <button class="cta">Start Today</button>
            </div>


  <div className="price-column popular">
    <div className="most-popular">Most Popular</div>
    <div className="price-header">
      <div className="price">
        <div className="dollar-sign">$</div>
        599
        <div className="per-month">/mo</div>
      </div>
      <div class="plan-name">Professional</div>
    </div>
    <div className="divider"></div>
    <div classNames="feature">
      <img src="check-circle.svg" />
      Feature A
    </div>
    <div className="feature">
      <img src="check-circle.svg" />
      Feature B
    </div>
    <div className="feature">
      <img src="check-circle.svg" />
      Feature C
    </div>
    <div classNames="feature">
      <img src="check-circle.svg" />
      Feature D
    </div>
    <div className="feature inactive">
      <img src="x-square.svg" />
      Feature E
    </div>
    <div className="feature inactive">
      <img src="x-square.svg" />
      Feature F
    </div>
    <button class="cta">Start Today</button>
  </div>


        <div class="price-column">
            <div class="price-header">
            <div class="price">
                <div class="dollar-sign">$</div>
                999
                <div class="per-month">/mo</div>
            </div>
            <div class="plan-name">Enterprise</div>
            </div>
            <div class="divider"></div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature A
            </div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature B
            </div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature C
            </div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature D
            </div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature E
            </div>
            <div class="feature">
            <img src="check-circle.svg" />
            Feature F
            </div>
            <button class="cta">Start Today</button>
        </div>
        </section>
    </>


);

}


export default MarketingPrice;



