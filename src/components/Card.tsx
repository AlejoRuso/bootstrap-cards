import React from 'react';

export interface CardProps {
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  listItems?: string[];
  header?: string;
  footer?: string;
  width?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  text,
  buttonText,
  buttonLink = '#',
  listItems,
  header,
  footer,
  width = '18rem',
  className = ''
}) => {
  return (
    <div className={`card ${className}`} style={{ width }}>
      {/* Header */}
      {header && (
        <div className="card-header">
          {header}
        </div>
      )}
      
      {/* Image */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          className="card-img-top" 
          alt={imageAlt || title || 'Card image'}
        />
      )}
      
      {/* Card Body */}
      {(title || text || buttonText) && (
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {text && <p className="card-text">{text}</p>}
          {buttonText && (
            <a href={buttonLink} className="btn btn-primary">
              {buttonText}
            </a>
          )}
        </div>
      )}
      
      {/* List Items */}
      {listItems && listItems.length > 0 && (
        <ul className="list-group list-group-flush">
          {listItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {/* Footer */}
      {footer && (
        <div className="card-footer text-muted">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;