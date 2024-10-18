const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `ruta no encontrada- not found, la peticion con el metodo ${req.method} con la ruta ${req.url} no fue encontrada - Error 404`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    })
}

export default not_found_handler