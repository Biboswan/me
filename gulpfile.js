const gulp = require('gulp');
const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const gifsicle = require('gifsicle');
const del = require('del');
const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');

const myMkdirSync = function (dir) {
    if (fs.existsSync(dir)) {
        return;
    }

    try {
        fs.mkdirSync(dir);
    } catch (err) {
        if (err.code == 'ENOENT') {
            myMkdirSync(path.dirname(dir)); //create parent dir
            myMkdirSync(dir); //create dir
        }
    }
};
const compress = async (src, dest, min = 0.6, max = 0.8) => {
    try {
        await imagemin([src], {
            destination: dest,
            plugins: [
                mozjpeg({ quality: 75 }),
                pngquant({
                    quality: [min, max],
                }),
            ],
        });
    } catch (e) {
        if (e.exitCode === 99) {
            console.log(Date.now(), 'Reprocessing image with JIMP instead', src);
            //JimpCompress(filepath, altDest);
        }
    }
};

const resizeAndCompress = async (dir, outputdir, width) => {
    const directoryPath = path.join(__dirname, dir);
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            if (!file.includes('.gif')) {
                const interOutputPath = `temp/${file}`;
                Jimp.read(`${dir}/${file}`, (err, image) => {
                    try {
                        if (err) {
                            throw err;
                        }

                        image
                            .resize(width, Jimp.AUTO)
                            .writeAsync(interOutputPath)
                            .catch(err => {
                                console.log('err', err);
                            })
                            .then(async () => {
                                await compress(interOutputPath, outputdir).catch(err =>
                                    console.log('compression-err', err)
                                );
                            });
                    } catch (err) {
                        console.log('err', err);
                    }
                });
            } else {
                /** 
                const stream = spawn(gifsicle, ['--resize-fit-width', width, `${dir}/${file}`]);
                myMkdirSync('temp');
                stream.stdout.pipe(fs.createWriteStream(`temp/${file}`));
                myMkdirSync(outputdir);
                const stream2 = spawn(gifsicle, ['--optimize', '2', `temp/${file}`]);
                stream2.stdout.pipe(fs.createWriteStream(`${outputdir}/${file}`));
                **/

                myMkdirSync(outputdir);
                execFile(
                    gifsicle,
                    ['-o3', '--lossy=80', '-o', `${outputdir}/${file}`, `${dir}/${file}`],
                    err => {
                        //console.timeEnd('execute time');

                        if (err) {
                            throw err;
                        }
                    }
                );
                //stream.stdout.pipe(fs.createWriteStream(`${outputdir}/${file}`));
            }
        });
    });
};

gulp.task('image-resizeAndCompress', async done => {
    await Promise.all([
        resizeAndCompress('public/images/conf', 'public/processed-images/conf/440', 440),
        resizeAndCompress('public/images/work', 'public/processed-images/work/480', 480),
    ]);

    done();
});

gulp.task('clean:processed-images', () => {
    return del(['public/processed-images/**/*']);
});

gulp.task('clean:temp', () => {
    return del(['temp/**/*']);
});

gulp.task(
    'default',
    gulp.series('clean:processed-images', 'image-resizeAndCompress', 'clean:temp')
);
