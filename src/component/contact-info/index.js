import Heading from "../heading";

import "./index.css";

export default function ContactInfo({
  owner,
  avatar,
  responseRate,
  responseTime,
  aboutMe,
  phone,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info__top">
        <img
          className="avatar"
          src={avatar}
          alt="avatar"
          width={80}
          height={80}
        />
        <div className="contact-info__top--right">
          <Heading>Господар - {owner}</Heading>

          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>

            <span className="title__sub-value">{responseTime}</span>

            <span className="title__sub-value">
              {responseRate} % швидкості відповіді
            </span>
          </div>
        </div>
      </div>
      <p className="description__text">{aboutMe}</p>
    </div>
  );
}
