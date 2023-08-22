module.exports = (router) => {
    const userController = require('../controllers/user.controller')

    router.post('/login',userController.check_account_user)
    router.post('/register', userController.add_account_user)
}