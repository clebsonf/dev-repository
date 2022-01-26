module.exports = {
    notFoundMiddleware(req, res, next){
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    },
    errorHandler(err, req, res, next){
        res.status(err.status || 500);
        if(err.status == 404){
            res.json(
                {
                    error: err.message,
                    status: err.status
                }
            );
        }else{
            console.warn("Error: ", err.message, new Date());
            res.json(
                {
                    error:'Something broke!',
                    status:500
                }
            );    
        }
    }
}