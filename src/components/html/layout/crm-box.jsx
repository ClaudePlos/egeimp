import React from 'react'
import { string, bool, shape, any } from 'prop-types'

const CrmBox = props => (
  <div
    style={props.style}
    className={`CrmBox ${props.direction === 'vbox'
      ? 'CrmBox--vbox'
      : 'CrmBox--hbox'} ${props.className} 
      ${props.fill ? 'CrmBox-fill' : ''}
      ${props.dropShadowRight ? 'CrmBox-shadow-right' : ''}`}
  >
    {props.children}
  </div>
)

CrmBox.defaultProps = {
  className: '',
  fill: false,
  dropShadowRight: false,
  style: {}
}

CrmBox.propTypes = {
  className: string.isRequired,
  children: any.isRequired, //eslint-disable-line
  fill: bool,
  dropShadowRight: bool,
  style: shape({})
}

export const CrmVbox = props => <CrmBox {...props} direction="vbox" />
export const CrmHbox = props => <CrmBox {...props} direction="hbox" />

CrmVbox.propTypes = { ...CrmBox.propTypes }
CrmHbox.propTypes = { ...CrmBox.propTypes }
