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
                var cell = obj.rows.head.columns.column[idColumn];

                if (cell._attributes) {
                    if ( cell._attributes.color ) {
                        var color = cell._attributes.color.substr(1);
                        workbook.sheet(0).column(id).style( "fill", color );
                    }
                    if ( cell._attributes.width ) {
                        workbook.sheet(0).column(id).width( parseInt(cell._attributes.width)/4 );
                    }
                }
                workbook.sheet(0).cell(1,id).value( cell._cdata  ) ;

            }

            //Bold & underline First row
            workbook.sheet(0).row(1).style("bold", true);
            workbook.sheet(0).row(1).style("bottomBorder", {style: "medium"});

            var rows = [];
            // fix if only one row
            if (!Array.isArray(obj.rows.row)){
                rows.push(obj.rows.row);
            }
            else {
                rows = obj.rows.row;
            }

            var rowCount = 2;
            // Rows
            for ( idRow in rows ) {
                var currentRow = rows[idRow];
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