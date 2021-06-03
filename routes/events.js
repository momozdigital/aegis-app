const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


const { getEventos, crearEvento, actualizarEvento, borrarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');

router.use( validarJWT );

router.get('/', getEventos);

router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start', 'La Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

router.put('/:id', actualizarEvento);

router.delete('/:id', borrarEvento);



module.exports = router;


