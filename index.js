const XlsxPopulate = require('xlsx-populate');
var convert = require('xml-js');
var inspect = require('util').inspect;

exports.start = function(xmlData) {
    var json_data = convert.xml2json(xmlData, {compact: true, spaces: 4});
    var obj = JSON.parse(json_data);
    
    // Load a new blank workbook
    return XlsxPopulate.fromBlankAsync()
        .then(workbook => {
            // Header
            for ( idColumn in obj.rows.head.columns.column ) {
                //
                var id = parseInt(idColumn)+1;
                workbook.sheet(0).cell(1,id).value( obj.rows.head.columns.column[idColumn]._cdata ) ;
            }
        
            var rowCount = 2;
            // Rows
            for ( idRow in obj.rows.row ) {
                var currentRow = obj.rows.row[idRow];
                for ( idColumn in currentRow.cell ) {
                     var currentColumn = currentRow.cell[idColumn];
                     var id = parseInt(idColumn)+1;
                     workbook.sheet(0).cell(rowCount,id).value( currentColumn._cdata ) ;
                }
                rowCount++;
            }
            return workbook.outputAsync();
        });
}


exports.printMsg = function() {
  console.log("This is a message from the demo package");
}