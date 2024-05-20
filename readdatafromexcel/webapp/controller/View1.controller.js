/*global XLSX*/
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("readdatafromexcel.controller.View1", {
            onInit: function () {
            },
            // onFileUpload:function(event){
            //     debugger
            //     var that = this;

            //     var file = event.getParameter('files')[0]
            //     var reader = new FileReader();
            //     reader.onload = function(e){    
            //         debugger
            //         var data = new Uint8Array(e.target.result);
            //         var workBook = XLSX.read(data, {
            //             type: 'array'
            //         });

            //         var worksheet = workBook.Sheets[workBook.SheetNames[0]]
            //         var jsonData = XLSX.utils.sheet_to_json(worksheet);

            //     // Use the jsonData as desired (e.g., display in a table, perform operations, etc.)
            //     console.log(jsonData);
            //     that.byId("textAreaId").setValue(JSON.stringify(jsonData));
            //     }
            //     reader.readAsArrayBuffer(file);
            // }
            onUpload: function (e) {
                this._import(e.getParameter("files") && e.getParameter("files")[0]);
            },
            _import: function (file) {
                var that = this;
                var excelData = {};
                if (file && window.FileReader) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var data = e.target.result;
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        workbook.SheetNames.forEach(function (sheetName) {
                            // Here is your object for every sheet in workbook
                            excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        });
                        // Setting the data to the local model 
                        // that.localModel.setData({
                        //     items: excelData
                        // });
                        // that.localModel.refresh(true);
                        console.log(JSON.parse(JSON.stringify(excelData)));
                that.byId("textAreaId").setValue(JSON.stringify(excelData));
                that.getView().setModel(that.getView().getModel("data").setData({ "data":excelData}))
                    };
                    reader.onerror = function (ex) {
                        console.log(ex);
                    };
                    
                    reader.readAsBinaryString(file);
                }
            },
            hierarchyFunction:function(){
                sap.m.MessageToast("Hii ")
            }
        });
    });