# Node DhtmlX Excel - NDE

[![E-time](https://www.e-time.it/wp-content/uploads/2017/07/E-time_white_bo.png)](https://www.e-time.it)


[![view on npm](http://img.shields.io/npm/v/node-dhtmlx-excel.svg)](https://www.npmjs.org/package/node-dhtmlx-excel)
[![npm module downloads per month](http://img.shields.io/npm/dm/node-dhtmlx-excel.svg)](https://www.npmjs.org/package/node-dhtmlx-excel)
[![Build Status](https://travis-ci.org/sistemi-etime/node-dhtmlx-excel.svg?branch=master)](https://travis-ci.org/sistemi-etime/node-dhtmlx-excel)
[![Dependency Status](https://david-dm.org/sistemi-etime/node-dhtmlx-excel.svg)](https://david-dm.org/sistemi-etime/node-dhtmlx-excel)

# node-dhtmlx-excel
We added support to NodeJs
Original Doc: https://docs.dhtmlx.com/grid__data_export.html#excel

## Table of Contents
- [Installation](#installation)
  * [Node.js](#nodejs)
- [Usage](#usage)
  * [Express](#express)
  * [DHTMLX](#dhtmlx)
- [Missing Features](#missing-features)
- [Submitting an Issue](#submitting-an-issue)
- [Contributing](#contributing)

## Installation
### Node.js
```bash
npm install --save node-dhtmlx-excel
```
Note that node-dhtmlx-excel uses ES6 features so only Node.js v4+ is supported.
## Usage
### Express
```javascript
router.post('/exportXLS', function(req, res, next) {

    var xmlData = unescape( req.body.grid_xml );
    dhtmlX_Export_Excel.start( xmlData )
            .then(data => {
                // Set the output file name.
                res.attachment("output.xlsx");

                // Send the workbook.
                res.send(data);
            })
            .catch(next);

});
```
Note that node-dhtmlx-excel uses ES6 features so only Node.js v4+ is supported.
### DHTMLX
```javascript
grid.toExcel('/exportXLS');
```
## Missing Features
If your use case needs something that isn't supported please open an issue to show your support. Better still, feel free to [contribute](#contributing) a pull request!

## Submitting an Issue
If you happen to run into a bug or an issue, please feel free to [submit an issue](https://github.com/sistemi-etime/node-dhtmlx-excel/issues). I only ask that you please include sample JavaScript code that demonstrates the issue.

## Contributing
Pull requests are very much welcome! If you'd like to contribute, please make sure to read this section carefully first.


