const bad_request_handler_E = (req, res, next) => {
    const { nombre, cargo, salario } = req.body;

    if (!nombre || !cargo || !salario) {
        return res.status(400).json({
            success: false,
            message: "Los campos 'nombre', 'cargo', y 'salario' son requeridos",
            timestamp: new Date().toISOString(),
            requestUrl: req.originalUrl,
            requestMethod: req.method,
        })
    }
    
    next()
}

const bad_request_handler_P = (req, res, next) => {
    const { nombre, marca, tipo, precio } = req.body;

    if (!nombre || !marca || !tipo || !precio) {
        return res.status(400).json({
            success: false,
            message: "Los campos nombre, marca, tipo y precio son requeridos",
            timestamp: new Date().toISOString(),
            requestUrl: req.originalUrl,
            requestMethod: req.method,
        })
    }
    
    next()
}

const bad_request_handler_T = (req, res, next) => {
    const { nombre, direccion, telefono } = req.body;

    if (!nombre || !direccion || !telefono) {
        return res.status(400).json({
            success: false,
            message: "Los campos 'nombre', 'direccion', y 'telefono' son requeridos",
            timestamp: new Date().toISOString(),
            requestUrl: req.originalUrl,
            requestMethod: req.method,
        })
    }
    
    next()
}

export {bad_request_handler_E, bad_request_handler_P, bad_request_handler_T }
