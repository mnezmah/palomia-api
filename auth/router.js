const { Router } = require('express')

const router = new Router()


router.post(
  '/logins',
  (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
    res.send({
      jwt: toJWT({ userId: 1 })
    })

  }

)




module.exports = router