import React from 'react'
import PropTypes from 'prop-types'

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="gallery-item" style={{ height: '300px' }}>
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1" target="_blank" rel="noopener noreferrer">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-fluid"
            alt={title}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </a>
      </div>
    </div>
  )
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired
}

export default Image
