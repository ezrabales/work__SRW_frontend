import "./PricingSection.css";

const PricingSection = () => {
  const oneTimeCards = [
    {
      title: "Starter",
      price: "$1,000",
      description: (
        <>
          one-time. <br /> Perfect for new or small churches
        </>
      ),
      cta: "Get Started",
      list: [
        "Home page",
        "About page",
        "Service times",
        "Contact form",
        "Mobile-responsive design",
        "Basic SEO",
      ],
    },
    {
      title: "Growth",
      price: "$1,500–$2,500",
      description: (
        <>
          one-time. <br /> Great for growing congregations
        </>
      ),

      cta: "Get Started",
      list: [
        <span className="pricing__list-item_featured">
          Everything in Starter
        </span>,
        "Up to 8 custom pages",
        "Mobile-responsive design",
        "Sermon archive integration",
        "Events calendar integration",
        "Volunteer & giving links",
        "Contact forms",
        "SEO optimization",
        "Analytics setup",
      ],
    },
    {
      title: "Custom ministry",
      price: "Custom",
      description: (
        <>
          quote. <br /> For larger or complex ministries
        </>
      ),

      cta: "Request a quote",
      list: [
        <span className="pricing__list-item_featured">
          Everything in Starter + Growth
        </span>,
        "Membership portals",
        "Advanced event systems",
        "Custom functionality",
        "Tailored to your needs",
      ],
    },
  ];
  const monthlyCards = [
    {
      title: "Basic care",
      price: "$79",
      description: (
        <>
          /mo <br />
          Essentials covered
        </>
      ),

      cta: "Get Started",
      list: [
        "Hosting",
        "Security updates",
        "Monthly backups",
        "30 min/mo content edits",
      ],
    },
    {
      title: "Growth care",
      price: "$129",
      description: (
        <>
          /mo <br />
          For active, growing churches
        </>
      ),

      cta: "Get Started",
      list: [
        <span className="pricing__list-item_featured">
          Everything in Basic care
        </span>,
        "Up to 2 hrs/mo updates",
        "Content changes & page additions",
        "Priority support",
      ],
    },
    {
      title: "Active ministry care",
      price: "$199",
      description: (
        <>
          /mo <br />
          High-volume ministries
        </>
      ),

      cta: "Get Started",
      list: [
        <span className="pricing__list-item_featured">
          Everything in Basic care + Growth care
        </span>,
        "Up to 4 hrs/mo updates",
        "Top priority service",
      ],
    },
  ];
  return (
    <div className="pricing__container section" id="pricing">
      {/* inital fee */}
      <h3 className="pricing__title">Get your church online</h3>
      <p className="pricing__subtitle">
        One-time build fee — choose the package that fits your ministry size.
      </p>
      <div className="pricing__cards-container">
        {oneTimeCards.map((card, index) => {
          return (
            <div key={index} className="pricing__card">
              <h4 className="pricing__card-title">{card.title}</h4>
              <p className="pricing__card-description">
                <span style={{ fontSize: "30px" }}>{card.price} </span>
                {card.description}
              </p>
              <span className="pricing__card-divider" />
              {card.list.map((item, i) => {
                return (
                  <p key={i} className="pricing__list-item">
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* monthly fee */}
      <h3 className="pricing__title">Keep your site running smoothly</h3>
      <p className="pricing__subtitle">
        Ongoing support, updates, and maintenance — so you can focus on
        ministry.
      </p>
      <div className="pricing__cards-container">
        {monthlyCards.map((card, index) => {
          return (
            <div key={index} className="pricing__card">
              <h4 className="pricing__card-title">{card.title}</h4>
              <p className="pricing__card-description">
                <span style={{ fontSize: "30px" }}>{card.price} </span>
                {card.description}
              </p>
              <span className="pricing__card-divider" />
              {card.list.map((item, i) => {
                return (
                  <p key={i} className="pricing__list-item">
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PricingSection;
