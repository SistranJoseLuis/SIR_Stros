jQuery(document).ready(function () {





   
    
    var res = { '0': 'Sin Informacion' };
    var Tipo_Pago = { '0':'Seleccione Opcion' , '1': 'CHEQUE', '2': 'TRANSFERENCIA'  };


    $("#btn_Reporte").click(function () {

  
        $("#btn_Guardar").addClass("hidden");
        $("[id*=btn_Enviar]").addClass("hidden");
        $("[id*=btn_Revisar]").addClass("hidden");
        $("[id*=btn_Enviar]").prop("disabled", true);
        
        var txt_fecha_ini = $("[id*=txt_fecha_ini]").val();

        var txt_fecha_fin = $("[id*=txt_fecha_fin]").val();

        

        var Folio_OnBase = $("[id*=txt_folio_onbase_Desde]").val();

        var Folio_OnBase_hasta = $("[id*=txt_folio_onbase_Hasta]").val();

        var PagarA = $("[id*=cmbPagarA]").val();
        var TipoPago = $("[id*=cmbTipoPago]").val();
        var TipoComprobante = $("[id*=cmbTipoComprobante]").val();
        var MonedaPago = $("[id*=cmbMonedaPago]").val();
        var RFC = $("[id*=txtRFC]").val();
        var SubSiniestro = $("[id*=cmbSubsiniestro]").val();

        RFC = RFC.replace("&", "!");
        

        if (txt_fecha_fin == "")
        {
            fn_MuestraMensaje("Atencion", "Favor de capturar el rango Fecha de aceptación del documento", 0);
            return;
        }


        if (txt_fecha_fin == "") {
            fn_MuestraMensaje("Atencion", "Favor de capturar el rango Fecha de aceptación del documento", 0);
            return;
        }


        $("#loading").removeClass("hidden");
        $("#list47").jqGrid("clearGridData");
        $("#list47").jqGrid("GridUnload")
        


        

        $.ajax({
            url: "../Siniestros/OrdenPagoMasivo.ashx?fecha_ini=" + txt_fecha_ini + "&fecha_fin=" + txt_fecha_fin + "&PagarA=" + PagarA + "&Folio_OnBase=" + Folio_OnBase + "&Folio_OnBase_hasta=" + Folio_OnBase_hasta + "&TipoPago=" + TipoPago + "&TipoComprobante=" + TipoComprobante + "&MonedaPago=" + MonedaPago + "&RFC=" + RFC + "&SubSiniestro=" + SubSiniestro,
            type: "POST",            
            success: function (result) {



                var mydata = $.parseJSON(result);
                LoadGrid(mydata); 




            },
            error: function (err) {



            }
        });












    });


    $("#btn_Guardar").click(function () {

        var myGrid = $('#list47');
        var myArray = [];  
        var myIDs = myGrid.jqGrid('getDataIDs');
        $("#loading").removeClass("hidden");


        var txt_NumLote = $("[id*=txt_NumLote]").val();
        ////var selectedRowId = myGrid.jqGrid("getGridParam", 'selrow');
        ////var selectedRowData = myGrid.getRowData(selectedRowId);
        ////var selectedRowIds = myGrid.jqGrid("getGridParam", 'selarrrow');
        ////var selectedRowData;
        

     

        ////for (selectedRowIndex = 0; selectedRowIndex < selectedRowIds.length; selectedRowIndex++) {

        ////    selectedRowData = myGrid.getRowData(selectedRowIds[selectedRowIndex]);
        ////    selectedRowData.Folio_Onbase = selectedRowData.FolioOnbaseHidden
        ////    if (selectedRowData.Concepto_Pago.indexOf('input') > 0)
        ////    {
        ////        selectedRowData.Concepto_Pago = "";
        ////    }

        ////    if (selectedRowData.Concepto2.indexOf('input') > 0) {
        ////        selectedRowData.Concepto2 = "";
        ////    }

        ////    if (selectedRowData.Cuenta_Bancaria.indexOf('input') > 0) {
        ////        selectedRowData.Cuenta_Bancaria = "";
        ////    }

        ////    if (selectedRowData.Notas.indexOf('input') > 0) {
        ////        selectedRowData.Notas = "";
        ////    }

        ////    if (selectedRowData.Observaciones.indexOf('input') > 0) {
        ////        selectedRowData.Observaciones = "";
        ////    }

        ////    if (selectedRowData.Confirmar_Cuenta.indexOf('input') > 0) {
        ////        selectedRowData.Confirmar_Cuenta = "";
        ////    }

        ////    myArray[selectedRowIndex] = selectedRowData;
        ////}


        for (var i = 0; i < myIDs.length; i++) {

            // nos traemos renglon a renglon           

            var myRow = myGrid.jqGrid('getRowData', myIDs[i]);
            myRow.Folio_Onbase = myRow.FolioOnbaseHidden

            if (myRow.Concepto_Pago.indexOf('input') > 0)
            {
                myRow.Concepto_Pago = "";
            }

            if (myRow.Concepto2.indexOf('input') > 0) {
                myRow.Concepto2 = "";
            }

            if (myRow.Cuenta_Bancaria.indexOf('input') > 0) {
                myRow.Cuenta_Bancaria = "";
            }

            if (myRow.Notas.indexOf('input') > 0) {
                myRow.Notas = "";
            }

            if (myRow.Observaciones.indexOf('input') > 0) {
                myRow.Observaciones = "";
            }

            if (myRow.Confirmar_Cuenta.indexOf('input') > 0) {
                myRow.Confirmar_Cuenta = "";
            }


            myArray[i] = myRow;
            
        }

        
        var json = JSON.stringify(myArray)
        if (txt_NumLote == "")
        {
            txt_NumLote = "0";
        }



        
        $.ajax({
            url: "../LocalServices/OrdenPagoMasiva.asmx/SetOP" ,
            data: "{ 'myArray': " + json + ",'Lote':"+txt_NumLote+"}",
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                fn_MuestraMensaje('Atencion', 'Numero de Lote Generado ' + data.d, 0, "");
                $("[id*=txt_NumLote]").val(data.d);
                $("#loading").addClass("hidden");
                $("#loading2").addClass("hidden");
                
                $("[id*=btn_Enviar]").prop("disabled", false);
            },
            error: function (response) {

                $("#loading").addClass("hidden");
                
                fn_MuestraMensaje('Error', response.responseText, 0, "")
                
            },
        });


     


    });




    $("#btn_Recuperar_lote").click(function () {


        var txt_NumLote = $("[id*=txt_NumLote]").val();
        $("#btn_Guardar").addClass("hidden");
        $("[id*=btn_Enviar]").addClass("hidden");
        $("[id*=btn_Revisar]").addClass("hidden");        
        $("[id*=btn_Enviar]").prop("disabled", true);

        


        
        if (txt_NumLote == "") {
            fn_MuestraMensaje("Atencion", "Favor de capturar el Numero de lote a recuperar", 0);
            return;
        }


        



        $("#loading").removeClass("hidden");
        $("#list47").jqGrid("clearGridData");
        $("#list47").jqGrid("GridUnload")
        var lastsel2;

    


        $.ajax({
            url: "../LocalServices/OrdenPagoMasiva.asmx/RecuperaLote",
            data: "{ 'NumLote': " + txt_NumLote + "}",
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (result) {

              

                var mydata = $.parseJSON(result.d);
                
                LoadGrid(mydata);

                $("[id*=btn_Enviar]").prop("disabled", false);



            },
            error: function (err) {
                debugger
                alert(err);

            }
        });








    });

    function CargarConceptoPago(TipoUsuario, ClasePago, CodigoPres) {

        $.ajax({
            url: "../Siniestros/Catalogos.ashx?Catalgo=ConceptoPago",
            data: "{ 'TipoUsuario': " + TipoUsuario + ",'ClasePago':" + ClasePago + " ,'CodigoPres':" + CodigoPres  +"}",
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function (result) {

               
                var s = '<option value="0">Seleccione Opcion</option>';
                
                for (var i = 0; i < result.length; i++) {

                    s += '<option value="' + result[i].Concepto + '">' + result[i].Descripcion + '</option>';
                
                }
             
             
                res = s;
                return s;

            },
            error: function (err) {
                debugger
                alert(err);

            }
        });

    };

    function LoadGrid(mydata) {
        var lastsel2;
        var lastSel = -1;

        try {
                            jQuery("#list47").jqGrid({
    
                                data: mydata,
                                datatype: "local",

                                height: 280,
                                width: 1024,
                                rowNum: 8000,
                                rowList: [10, 20, 30],
                                colNames: ['Folio Onbase', 'Num Pago', 'Tipo de comprobante', 'Pagar A', 'Codigo', 'RFC', 'Nombre /Razon Social', 'Siniestro', 'Subsinientro', 'Moneda', 'Tipo de Cambio', 'Reserva', 'Moneda de Pago', 'Importe', 'Deducible', 'Importe del concepto', 'Conceptp Facturado','cod_clas_Pago' ,'Clase de Pago','cod_concepto_pago' ,'Concepto de pago', 'cod_tipo_pago','Tipo de Pago', 'Concepto 2', 'Tipo de Pago', 'Folio Onbase Estado de cuenta', 'Cuenta Bancaria', 'Confirmar Cuenta ', 'Solicitante', 'Notas', 'Observaciones', 'id_tipo_Doc', 'moneda', 'moneda pago', 'FolioOnbaseHidden', 'Id_persona', '', '', , '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','','Poliza','Accion'],
                                colModel: [
                
                                    { name: 'Folio_Onbase', index: 'Folio_Onbase', width: 100, frozen: false },
                                    { name: 'Num_Pago', index: 'Num_Pago', width: 100 },
                                    { name: 'Tipo_comprobante', index: 'Tipo_comprobante', width: 182 },
                                    { name: 'PagarA', index: 'PagarA', width: 90 },
                                    { name: 'CodigoCliente', index: 'CodigoCliente', width: 90 },
                                    { name: 'RFC', index: 'RFCc', width: 120 },
                                    { name: 'Nombre_Razon_Social', index: 'Nombre_Razon_Social', width: 300 },
                                    { name: 'Siniestro', index: 'Siniestro', width: 90 },
                                    { name: 'Subsiniestro', index: 'Subsiniestro', width: 90 },
                                    { name: 'Moneda', index: 'Moneda', width: 180 },
                                    { name: 'Tipo_Cambio', index: 'Tipo_Cambio', width: 90, formatter: "number", sorttype: "int" },
                                    { name: 'Reserva', index: 'Reserva', width: 90 },
                                    { name: 'Moneda_Pago', index: 'Moneda_Pago', width: 180 },
                                    { name: 'Importe', index: 'Importe', width: 90, formatter: "number", sorttype: "int" },
                                    { name: 'Deducible', index: 'Deducible', width: 90, formatter: "number", sorttype: "int" },
                                    { name: 'Importe_concepto', index: 'Importe_concepto', width: 90, formatter: "number", sorttype: "int" },
                                    { name: 'Concepto_Factura', index: 'Concepto_Factura', width: 90 },
                                    { name: 'Cod_clas_pago', index: 'Cod_clas_pago', width: 180, hidden: true },
                                    { name: 'Clase_pago', index: 'Clase_pago', width: 45, hidden: true },
                                    { name: 'Cod_concepto_pago', index: 'Cod_concepto_pago', width: 180, hidden: true}
                                    ,
                                    {
                                        name: 'Concepto_Pago', index: 'Concepto_Pago', align: 'center', width: 270, editable: true, edittype: "select", editoptions: {
                                            value: res,
                                            dataEvents: [
                                                {
                                                    type: 'change',
                                                    fn: function (e) {
                                                        var v = parseInt($(e.target).val(), 10);
                                    




                                                        var row = $(e.target).closest('tr.jqgrow');
                                                        var rowId = row.attr('id');

                                    
                              


                                                        jQuery("#list47").jqGrid('setCell', rowId, 'Cod_concepto_pago', v);






                                                    }
                                                }
                                            ]

                                        }
                                    }
                                        ,
                                    { name: 'Cod_tipo_pago', index: 'Cod_tipo_pago', width: 45, hidden: true }
                                       
                                    ,
                                    { name: 'Tipo_Pago', index: 'Tipo_Pago', width: 180}
                                    ,
                                    { name: 'Concepto2', index: 'Concepto2', width: 180, editable: true, hidden: true, editoptions: { size: "30", maxlength: "100" } },
                                    { name: 'Tipo_Pago2', index: 'Tipo_Pago2', width: 90, hidden: true },
                                    { name: 'Folio_Onbase_Cuenta', index: 'Folio_Onbase_Cuenta', width: 90 },
                                    { name: 'Cuenta_Bancaria', index: 'Cuenta_Bancaria', width: 180, editable: false, editoptions: { size: "30", maxlength: "18" } },
                                    { name: 'Confirmar_Cuenta', index: 'Confirmar_Cuenta', width: 180, editable: false, editoptions: { size: "30", maxlength: "18" } },
                                    { name: 'Solicitante', index: 'Solicitante', width: 90 },
                                    { name: 'Notas', index: 'Notas', width: 180, editable: true, editoptions: { size: "30", maxlength: "100" } },
                                    { name: 'Observaciones', index: 'Observaciones', width: 260, editable: true, editoptions: { size: "50", maxlength: "100" } },
                                    { name: 'Id_Tipo_Doc', index: 'Id_Tipo_Doc', width: 90, hidden: true },
                                    { name: 'Cod_moneda', index: 'Cod_moneda', width: 90, hidden: true },
                                    { name: 'Cod_moneda_pago', index: 'Cod_moneda_pago', width: 90, hidden: true },
                                    { name: 'FolioOnbaseHidden', index: 'FolioOnbaseHidden', width: 90, hidden: true },
                                    { name: 'Id_Persona', index: 'Id_Persona', width: 90, hidden: true },

                                    { name: 'CodigoSucursal', index: 'CodigoSucursal', width: 90, hidden: true },
                                    { name: 'TipoMovimiento', index: 'TipoMovimiento', width: 90, hidden: true },
                                    { name: 'VariasFacturas', index: 'VariasFacturas', width: 90, hidden: true },
                                    { name: 'Ramo', index: 'Ramo', width: 90, hidden: true },
                                    { name: 'SubRamo', index: 'SubRamo', width: 90, hidden: true },
                                    { name: 'ID_TipoComprobante', index: 'ID_TipoComprobante', width: 90, hidden: true },
                                    { name: 'NumeroComprobante', index: 'NumeroComprobante', width: 90, hidden: true },
                                    { name: 'FechaComprobante', index: 'FechaComprobante', width: 90, hidden: true },
                                    { name: 'CodTipoStro', index: 'CodTipoStro', width: 90, hidden: true },
                                    { name: 'CodigoOrigenPago', index: 'CodigoOrigenPago', width: 90, hidden: true },
                                    { name: 'FechaIngreso', index: 'FechaIngreso', width: 90, hidden: true },
                                    { name: 'CodigoBancoTransferencia', index: 'CodigoBancoTransferencia', width: 90, hidden: true },

                                    { name: 'IdSiniestro', index: 'IdSiniestro', width: 90, hidden: true },
                                    { name: 'CodigoTercero', index: 'CodigoTercero', width: 90, hidden: true },
                                    { name: 'Subtotal', index: 'Subtotal', width: 90, hidden: true },
                                    { name: 'Iva', index: 'Iva', width: 90, hidden: true },
                                    { name: 'Total', index: 'Total', width: 90, hidden: true },
                                    { name: 'Retencion', index: 'Retencion', width: 90, hidden: true },
                                    { name: 'CodItem', index: 'CodItem', width: 90, hidden: true },
                                    { name: 'CodIndCob', index: 'CodIndCob', width: 90, hidden: true },
                                    { name: 'NumeroCorrelaEstim', index: 'NumeroCorrelaEstim', width: 90, hidden: true },
                                    { name: 'NumeroCorrelaPagos', index: 'NumeroCorrelaPagos', width: 90, hidden: true },
                                    { name: 'SnCondusef', index: 'SnCondusef', width: 90, hidden: true },
                                    { name: 'NumeroOficioCondusef', index: 'NumeroOficioCondusef', width: 90, hidden: true },
                                    { name: 'TipoPagoDetalle', index: 'TipoPagoDetalle', width: 90, hidden: true },
                                    { name: 'Cod_objeto', index: 'Cod_objeto', width: 90, hidden: true },
                                    { name: 'Poliza', index: 'Poliza', width: 90, hidden: true },




                
   




                                    {
                                        name: 'myac', width: 60, fixed: true, sortable: false, resize: false, formatter: 'actions',
                                        formatoptions: { keys: true }, frozen: false 
                                    },
                                    

                                ],
                                onSelectRow: function (id) {
                                    if (id && id !== lastsel2) {
                                        jQuery('#list47').jqGrid('restoreRow', lastsel2);
                                       // jQuery('#list47').jqGrid('editRow', id, true);
                                        lastsel2 = id;
                                    }
                                },
                                ondblClickRow: function (id, ri, ci) {
                                    if (id && id !== lastSel) {
                                        jQuery("#list47").restoreRow(lastSel);
                                        lastSel = id;
                                    }

                                    var TipoUsuario = jQuery("#list47").jqGrid('getRowData', id).PagarA;                                    
                                    var CodigoPres = jQuery("#list47").jqGrid('getRowData', id).CodigoCliente;
                                    var id_tipo_pago = jQuery("#list47").jqGrid('getRowData', id).TipoPagoDetalle
                                    var poliza = jQuery("#list47").jqGrid('getRowData', id).Poliza;  
                                    var Concepto_Pago = jQuery("#list47").jqGrid('getRowData', id).Concepto_Pago

                                    
                                    if (TipoUsuario == "Proveedor") {
                                        jQuery("#list47").setColProp('Cuenta_Bancaria', { editable: false });
                                        jQuery("#list47").setColProp('Confirmar_Cuenta', { editable: false });

                                    }
                                    else
                                    {
                                        jQuery("#list47").setColProp('Cuenta_Bancaria', { editable: true });
                                        jQuery("#list47").setColProp('Confirmar_Cuenta', { editable: true });

                                    }
                                


                                    var row = $(id.target).closest('tr.jqgrow');

                                    $.ajax({
                                        url: "../Siniestros/Catalogos.ashx?Catalgo=ConceptoPago&TipoUsuario=" + TipoUsuario + "&id_tipo_pago=" + id_tipo_pago + "&CodigoPres=" + CodigoPres,
                                        dataType: "json",
                                        type: "POST",
                                        contentType: "application/json; charset=utf-8",
                                        success: function (result) {


                                            var s = '<option value="0">Seleccione valor</option>';

                                            for (var i = 0; i < result.length; i++) {

                                                
                                                if (Concepto_Pago == result[i].Descripcion)
                                                {
                                                    s += '<option value="' + result[i].Concepto + '"  selected = "selected">' + result[i].Descripcion + '</option>';
                                                }
                                                else
                                                {
                                                    s += '<option value="' + result[i].Concepto + '">' + result[i].Descripcion + '</option>';
                                                }
                                                

                                            }


                                            res = s;
                                            $("select#" + id + "_Concepto_Pago", row[0]).html(res);

                                           

                                        },
                                        error: function (err) {
                                            debugger
                                            alert(err);

                                        }
                                    });




                                    if (TipoUsuario == "Asegurado") {
                                        jQuery("#list47").setColProp('Nombre_Razon_Social', {
                                            editable: true, edittype: "select", editoptions: {
                                                value: res, dataEvents: [
                                                    {
                                                        type: 'change',
                                                        fn: function (e) {
                                                            var v = parseInt($(e.target).val(), 10);





                                                            var row = $(e.target).closest('tr.jqgrow');
                                                            var rowId = row.attr('id');





                                                            jQuery("#list47").jqGrid('setCell', rowId, 'CodigoCliente', v);






                                                        }
                                                    }
                                                ] }});

                                        

                                        

                                        $.ajax({
                                            url: "../Siniestros/Catalogos.ashx?Catalgo=FigurasPoliza&Poliza=" + poliza,
                                            dataType: "json",
                                            type: "POST",
                                            contentType: "application/json; charset=utf-8",
                                            success: function (result) {

                                              
                                                var s = '<option value="0">Seleccione valor</option>';

                                                for (var i = 0; i < result.length; i++) {


                                                    if (Concepto_Pago == result[i].Descripcion) {
                                                        s += '<option value="' + result[i].cod_aseg + '"  selected = "selected">' + result[i].nombre + '</option>';
                                                    }
                                                    else {
                                                        s += '<option value="' + result[i].cod_aseg + '">' + result[i].nombre + '</option>';
                                                    }


                                                }


                                                res = s;
                                                $("select#" + id + "_Nombre_Razon_Social", row[0]).html(res);



                                            },
                                            error: function (err) {
                                                debugger
                                                alert(err);

                                            }
                                        });




                                    }






                                    jQuery("#list47").editRow(id, true, null, null, '../LocalServices/OrdenPagoMasiva.asmx/Apoyo', null,                                            
                                        function (rowid, response) {  // aftersavefunc
                                          //  grid.setColProp('State', { editoptions: { value: states } });
                                                                              
                                            jQuery("#list47").setColProp('Cuenta_Bancaria', { editable: false });
                                            jQuery("#list47").setColProp('Confirmar_Cuenta', { editable: false });                                               
                        
                        
                                        });
                                    
                                    
                                    return;
                                },


                                // pager: "#plist47",
                                viewrecords: true,
                                caption: "Listado de Folios",
                                autowidth: false,
                                shrinkToFit: false,
                                forceFit: true,
                                loadonce: true,
                                multiselect: false,
                                rownumbers: true,
                                editurl: '../LocalServices/OrdenPagoMasiva.asmx/Apoyo',
            
                                ajaxSelectOptions: {
                                    error: function (xhr, status, error) {
                    
                                        alert(error);
                                    }
                                },
                                // height: 'auto'
                            });

                            jQuery("#list47").jqGrid('setFrozenColumns')

      


        

                            $("#loading").addClass("hidden");
                            $("#btn_Guardar").removeClass("hidden");
                            $("[id*=btn_Enviar]").removeClass("hidden");
                            $("[id*=btn_Revisar]").removeClass("hidden");
        
        } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }


    };

});






