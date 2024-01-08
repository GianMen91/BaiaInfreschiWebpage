import React from 'react'
import './infoSection.css'
import PropTypes from 'prop-types'

export const Infosection = ({ items }) => {
  return (
    <div id="infosection">
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="info-container">
            <div className="row">
              <div className="col-xs-12 col-md-2 text-center">
                <i className={`fa ${item.icon} icon`} style={{ color: '#6ec1e3' }}></i>
              </div>
              <div className="col-xs-12 col-md-10">
                <div className="infosection-text">
                  <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Infosection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default Infosection
