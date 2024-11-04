import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const teamMembers = [
    {
      name: "Viraj Patil",
      title: "Back-End Web Developer",
      imgSrc: "/man.jpg",
      githubLink: "https://github.com",
    },
    {
      name: "Zaineb Patel",
      title: "Front-End Web Developer",
      imgSrc: "/woman.jpg",
      githubLink: "https://github.com",
    },
    {
      name: "Sinclair Pereira",
      title: "UI/UX Designer",
      imgSrc: "/man.jpg",
      githubLink: "https://github.com",
    },
    {
      name: "Sakshi Patil",
      title: "UI/UX Designer",
      imgSrc: "/woman.jpg",
      githubLink: "https://github.com",
    },
  ];

  return (
    <div className="wrapper">
      <div className="title">
        <h4>Our Team Section</h4>
      </div>
      <div className="card_Container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="imgBx">
              <img src={member.imgSrc} alt={member.name} />
            </div>
            <div className="content">
              <div className="contentBx">
                <h3>
                  {member.name} <br />
                  <span>{member.title}</span>
                </h3>
              </div>
              <ul className="sci">
                <li style={{ "--i": 1 }}>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li style={{ "--i": 2 }}>
                  <a
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li style={{ "--i": 3 }}>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
