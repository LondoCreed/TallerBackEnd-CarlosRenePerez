const error_handler = (error, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: `Error 500 - Se ha producido un error interno del servidor en la ruta '${req.originalUrl}' utilizando el método '${req.method}'. Detalles: ${error.message || 'Error desconocido'}`,
    })
}

export default error_handler