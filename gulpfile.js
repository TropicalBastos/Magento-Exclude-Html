const gulp = require('gulp');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const IGNORE_HTML = '.ignorehtml';
const DESTINATION_PATH = './var/view_preprocessed/pub/static/';

/**
 * @summary Replaces the minified html with the original
 */
gulp.task('replaceHtml', done => {
    var lineReader = readline.createInterface({
        input: fs.createReadStream(IGNORE_HTML)
    });

    lineReader.on('line', (line) => {
        console.log(`Processing file found at: ${line}`);
        let p = path.join(__dirname, line);
        let dest = path.join(DESTINATION_PATH, line);
        dest = dest.replace(/\/[^/]*$/, '');
        gulp.src(p)
            .pipe(gulp.dest(dest));
        console.log('File overwritten');
    });

    lineReader.on('close', () => {
        done();
    });
});