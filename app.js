#!/usr/bin/env node
let geojson2obj = require("geojson2obj");
const data = require('./in/nyc_zipcodes.json');

let options = {};

geojson2obj.toObj(data, process.stdout, function(err){
    if(err){
        process.stderr.write('Error: ' + JSON.stringify(err, null, 2) + '\n');
    }
}, options);

//
// var convert = require('../'),
//     localProj = require('local-proj'),
//     fs = require('fs'),
//     geojson = JSON.parse(fs.readFileSync(process.argv[2])),
//     mtl = process.argv[3],
//     mtllibs = process.argv.slice(4),
//     options = {
//         projection: localProj.find(geojson),
//         mtllib: mtllibs
//     };
//
// if (mtl) {
//     options.featureMaterial = function(f, cb) {
//         process.nextTick(function() { cb(undefined, mtl); });
//     };
// }
//
// convert.toObj(geojson, process.stdout, function(err) {
//     if (err) {
//         process.stderr.write('Error: ' + JSON.stringify(err, null, 2) + '\n');
//     }
// }, options);
