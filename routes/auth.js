const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria y debe tener un minimo de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria y debe tener un minimo de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;