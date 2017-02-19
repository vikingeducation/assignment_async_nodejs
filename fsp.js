let fs = require("fs");

function promisify(fn) {
    return new Promise(function (resolve, reject) {
        fn.call(null);
    });
}


let fsp = {
    "readFile" : function (path) {
        return new Promise(function (resolve, reject) {
            fs.readFile(path, "utf8", function (err, data) {
                if (err) {
                    reject(err); //Rejected promise will terminate the function
                }
                resolve(data);
            });
        });
    },
    "writeFile" : function (path, text) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(path, text, "utf8", function (err, data) {
                if (err) {
                    reject(err); //Rejected promise will terminate the function
                }
                resolve(data);
            });
        });
    },
    "appendFile" : function (path, text) {
        return new Promise(function (resolve, reject) {
            fs.appendFile(path, text, "utf8", function (err, data) {
                if (err) {
                    reject(err); //Rejected promise will terminate the function
                }
                resolve(data);
            });
        });
    }
};


module.exports = fsp;