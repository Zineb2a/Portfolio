import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url, stack, award }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank'); // This will open the URL in a new tab
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: url ? 'pointer' : 'default' }}>
        <img src={imgUrl} alt={title} />
        {award && (
          <div className="award-banner">
            <i className="fas fa-crown"></i> Hackathon Winner
          </div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <strong>Technologies:</strong> {stack.join(', ')}
          </div>
        </div>
      </div>
    </Col>
  );
};
