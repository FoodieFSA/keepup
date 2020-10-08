import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
    <div id="footer">
      <p>KeepUp © Copyright {moment().format('YYYY')}</p>
      <a href="https://github.com/FoodieFSA/keepup">Github Link</a>
    </div>
  )
}

// just checking
export default Footer
