import React from 'react'
import PropTypes from 'prop-types'
import { Image } from './image'
import './gallery.css'

export const Gallery = (props) => {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="row">
          <div className="gallery-items d-flex flex-wrap">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-lg-4">
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      smallImage: PropTypes.string.isRequired
    })
  )
}

export default Gallery
