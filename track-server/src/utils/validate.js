const expressValidator = require('express-validator');

module.exports = expressValidator;

// parallel processing
module.exports.validate =  validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = expressValidator.validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};
