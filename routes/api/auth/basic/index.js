const express = require('express');
const router = express.Router();
const config = require('../../../../config')

// check credentials here
router.use((req, res) => {

  // -----------------------------------------------------------------------
  // authentication middleware

  const auth = config.temp // change this

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''

  let errorMessage = 'Invalid email or password'
  if(b64auth == ''){
    errorMessage = 'Authentication required.';
  }

  const [user, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  // Verify login and password are set and correct
  if (user && password && user === auth.user && password === auth.password) {
    // Access granted...
    return res.json({
      message: 'Ok'
    })
  }

  // Access denied...
  res.set('WWW-Authenticate', 'Basic realm="401"') // change this
  res.status(401).send({
    message: errorMessage
  }) // custom message
  // -----------------------------------------------------------------------

})

module.exports = router;