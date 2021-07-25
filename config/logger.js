const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

module.exports.requestLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
        new (winston.transports.DailyRotateFile)({
            filename: path.resolve('GPS', 'gps-%DATE%.log'),
            maxSize: '20m',
            maxFiles: '14d'
        }),
    ]
});

