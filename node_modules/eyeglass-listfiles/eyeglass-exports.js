"use strict";

var path = require("path"),
    fs = require("fs");

module.exports = function(eyeglass, sass) {
    return {
        sassDir: path.join(__dirname, "sass"),
        functions: {
            "listFiles($dir)": function(dir, done) {
                fs.readdir(dir.getValue(), function(err, files) {
                    if (err === null) {
                        var out = sass.types.Map(files.length);

                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            out.setKey(i, sass.types.String(file.substr(0, file.indexOf(path.extname(file)))));
                            out.setValue(i, sass.types.String(file));
                        }

                        done(out);
                    } else {
                        done(sass.types.Error(err.toString()));
                    }
                });
            }
        }
    }
};