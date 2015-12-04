/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import path from 'path';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'node-sass';
import through from 'through2';

function getIndexWithDependencies() {
  return path.resolve(__PATHS__.ui, 'utilities/index-with-dependencies.scss');
}

export default function (done) {
  console.log('Compiling Sass utilities');
  gulp.src(getIndexWithDependencies())
  // Sass
  .pipe(through.obj((file, enc, next) => {
    const newFile = file.clone();
    sass.render({
      data: file.contents.toString(),
      file: newFile.path,
      outputStyle: 'nested',
      includePaths: [
        __PATHS__.root,
        __PATHS__.node_modules,
        __PATHS__.ui
      ]
    }, (err, result) => {
      if (err) return done(err);
      newFile.contents = result.css;
      next(null, newFile);
    });
  }))
  .on('error', done)
  .pipe(rename(path => {
    path.basename = 'utilities';
    path.extname = '.css'
  }))
  .on('error', done)
  .pipe(gulp.dest(__PATHS__.generated))
  .on('error', done)
  .on('finish', done);
}
