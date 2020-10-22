<%@ WebHandler Language="VB" Class="OrdenPagoMasivo" %>

Imports System
Imports System.Web
Imports System.Data
Imports System.Web.Script.Serialization

Public Class OrdenPagoMasivo : Implements IHttpHandler

    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        context.Response.ContentType = "text/plain"





        Dim oDatos As DataSet
        Dim oTabla As DataTable
        Dim oParametros As New Dictionary(Of String, Object)
        Dim serializer As New JavaScriptSerializer

        Dim lstOp As New List(Of OrdenPagoMasivoClass)
        Dim OP As New OrdenPagoMasivoClass
        Dim fecha_ini As String
        Dim fecha_fin As String
        Dim PagarA As String

        Dim Folio_OnBase As String
        Dim Folio_OnBase_hasta As String
        Dim TipoPago As String
        Dim TipoComprobante As String
        Dim MonedaPago As String
        Dim RFC As String
        Dim SubSiniestro As String
        Dim cod_analista As String
        Dim VariasFacturas As String
        Dim aux_pagaA As String


        Dim funciones As Funciones


        fecha_ini = context.Request.QueryString("fecha_ini")
        fecha_fin = context.Request.QueryString("fecha_fin")
        PagarA = context.Request.QueryString("PagarA")



        Folio_OnBase = context.Request.QueryString("Folio_OnBase")
        Folio_OnBase_hasta = context.Request.QueryString("Folio_OnBase_hasta")
        TipoPago = context.Request.QueryString("TipoPago")
        TipoComprobante = context.Request.QueryString("TipoComprobante")
        MonedaPago = context.Request.QueryString("MonedaPago")
        RFC = context.Request.QueryString("RFC")
        SubSiniestro = context.Request.QueryString("SubSiniestro")

        cod_analista = context.Request.QueryString("cod_analista")
        VariasFacturas = context.Request.QueryString("VariasFacturas")



        fecha_ini = Funciones.FormatearFecha(fecha_ini, Funciones.enumFormatoFecha.YYYYMMDD)
        fecha_fin = Funciones.FormatearFecha(fecha_fin, Funciones.enumFormatoFecha.YYYYMMDD)

        serializer.MaxJsonLength = 500000000




        Try
            oParametros.Add("Fec_aceptacion_desde", fecha_ini)
            oParametros.Add("Fec_aceptacion_hasta", fecha_fin)
            If PagarA <> "9" Then
                oParametros.Add("PagarA", PagarA)
            End If
            If Folio_OnBase <> "" Then
                oParametros.Add("Folio_OnBase", Folio_OnBase)
                oParametros.Add("Folio_OnBase_hasta", Folio_OnBase_hasta)
            End If


            If TipoPago <> 9 Then
                oParametros.Add("TipoPago", TipoPago)
            End If


            If TipoComprobante <> "-1" Then
                oParametros.Add("TipoComprobante", TipoComprobante)
            End If

            If MonedaPago <> "9" Then
                oParametros.Add("MonedaPago", MonedaPago)
            End If
            If RFC <> "" Then

                oParametros.Add("RFC", RFC.Replace("!", "&"))
            End If

            If SubSiniestro <> "0" Then
                oParametros.Add("SubSiniestro", SubSiniestro)
            End If


            If cod_analista <> Nothing Then
                oParametros.Add("cod_analista", cod_analista)
                oParametros.Add("Fondos", "1")
            End If

            If VariasFacturas <> Nothing Then
                oParametros.Add("sn_varias_facturas", VariasFacturas)
            End If


            oDatos = Funciones.ObtenerDatos("sp_op_stro_consulta_folio_OnBase_Masivo", oParametros)
            oTabla = oDatos.Tables(0)


            For Each row As DataRow In oTabla.Rows

                OP = New OrdenPagoMasivoClass

                OP.ID = row("ID").ToString()
                OP.Folio_Onbase = "<a href=""http://172.16.40.66/AppNet/docpop/docpop.aspx?KT1419_0_0_0=" + row("Folio_Onbase").ToString() + "&clienttype=html&cqid=203""  target=""_blank""><i class=""fa fa-newspaper-o""></i>&nbsp; " + row("Folio_Onbase").ToString() + "</a>"
                OP.Num_Pago = row("Num_Pago").ToString()
                OP.Tipo_comprobante = row("Tipo_comprobante").ToString()



                Select Case row("PagarA").ToString()
                    Case "7"
                        OP.PagarA = "Asegurado"
                    Case "8"
                        OP.PagarA = "Tercero"
                    Case "10"
                        OP.PagarA = "Proveedor"
                End Select




                OP.CodigoCliente = row("CodigoCliente").ToString()
                OP.RFC = row("RFC").ToString()
                OP.Nombre_Razon_Social = row("Nombre_Razon_Social").ToString()
                OP.Siniestro = row("Siniestro").ToString()
                OP.Subsiniestro = row("Subsiniestro").ToString()
                OP.Moneda = row("Moneda").ToString()
                OP.Tipo_Cambio = row("Tipo_Cambio").ToString()
                OP.Reserva = row("Reserva").ToString()
                OP.Moneda_Pago = row("Moneda_Pago").ToString()
                OP.Importe = row("Importe").ToString()
                OP.Deducible = row("Deducible").ToString()
                OP.Importe_concepto = row("Importe_concepto").ToString()
                OP.Concepto_Factura = row("Concepto_Facturado").ToString()
                OP.Cod_concepto_pago = row("Cod_concepto_pago").ToString()
                OP.Concepto_Pago = row("Concepto_Pago").ToString()
                OP.Clase_pago = row("Clase_pago").ToString()
                OP.Tipo_Pago = row("Tipo_Pago").ToString()
                OP.Concepto2 = row("Concepto2").ToString()
                OP.Cod_tipo_pago = row("Cod_tipo_pago").ToString()
                OP.Tipo_Pago2 = row("Tipo_Pago2").ToString()
                OP.Folio_Onbase_cuenta = row("Folio_Onbase_cuenta").ToString()
                OP.Cuenta_Bancaria = row("Cuenta_Bancaria").ToString()
                OP.Confirmar_Cuenta = row("Confirmar_Cuenta").ToString()
                OP.Solicitante = row("Solicitante").ToString()
                OP.Notas = row("Notas").ToString()
                OP.Observaciones = row("Observaciones").ToString()
                OP.Id_Tipo_Doc = row("Id_Tipo_Doc").ToString()
                OP.Cod_moneda = row("Cod_moneda").ToString()
                OP.Cod_moneda_pago = row("Cod_moneda_pago").ToString()
                OP.FolioOnbaseHidden = row("Folio_Onbase").ToString()
                OP.Id_Persona = row("id_persona").ToString()
                OP.CodigoSucursal = row("CodigoSucursal").ToString()
                OP.TipoMovimiento = row("TipoMovimiento").ToString()
                OP.VariasFacturas = row("VariasFacturas").ToString()
                OP.Ramo = row("Ramo").ToString()
                OP.SubRamo = row("SubRamo").ToString()
                OP.ID_TipoComprobante = row("ID_TipoComprobante").ToString()
                OP.NumeroComprobante = row("NumeroComprobante").ToString()
                OP.FechaComprobante = row("FechaComprobante").ToString()
                OP.CodTipoStro = row("CodTipoStro").ToString()
                OP.CodigoOrigenPago = row("CodigoOrigenPago").ToString()
                OP.FechaIngreso = row("FechaIngreso").ToString()
                OP.CodigoBancoTransferencia = row("CodigoBancoTransferencia").ToString()

                OP.IdSiniestro = row("IdSiniestro").ToString()
                OP.CodigoTercero = row("CodigoTercero").ToString()
                OP.Subtotal = row("Subtotal").ToString()
                OP.Iva = row("Iva").ToString()
                OP.Total = row("Total").ToString()
                OP.Retencion = row("Retencion").ToString()
                OP.CodItem = row("CodItem").ToString()
                OP.CodIndCob = row("CodIndCob").ToString()
                OP.NumeroCorrelaEstim = row("NumeroCorrelaEstim").ToString()
                OP.NumeroCorrelaPagos = row("NumeroCorrelaPagos").ToString()
                OP.SnCondusef = row("SnCondusef").ToString()
                OP.NumeroOficioCondusef = row("NumeroOficioCondusef").ToString()
                OP.TipoPagoDetalle = row("TipoPagoDetalle").ToString()
                OP.Cod_objeto = row("Cod_objeto").ToString()
                OP.Poliza = row("Poliza").ToString()






                lstOp.Add(OP)















            Next



            context.Response.Write(serializer.Serialize(lstOp))
        Catch ex As Exception
            context.Response.Write(serializer.Serialize(""))
        End Try


    End Sub

    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class