
Imports System.Data

Partial Class Siniestros_ResumenOPMasivo
    Inherits System.Web.UI.Page
    Sub Page_Load(ByVal Sender As Object, ByVal e As EventArgs) Handles Me.Load

        Dim oDatos As DataSet
        Dim oTabla As DataTable
        Dim oParametros As New Dictionary(Of String, Object)
        Dim Num_Lote As String
        Dim Fondos As String

        Num_Lote = Request.QueryString("Num_Lote")


        If Num_Lote <> Nothing Then

            oParametros.Add("Num_Lote", Num_Lote)
            oParametros.Add("salida", 1)
            oDatos = Funciones.ObtenerDatos("sp_recupera_lote_OP_Masivo", oParametros)

            oTabla = oDatos.Tables(0)

            GridView1.DataSource = oTabla

            GridView1.DataBind()
        End If



    End Sub

    Protected Sub grd_RowCommand(sender As Object, e As GridViewCommandEventArgs) Handles GridView1.RowCommand



        If e.CommandName = "RepCarta" Then
            Dim index As Integer
            Dim nro_op As String

            e.CommandArgument.ToString()

            index = CInt(e.CommandArgument.ToString())




            nro_op = GridView1.Rows(index).Cells(2).Text
            generaReporte(nro_op)

            Exit Sub
        End If





    End Sub


    Private Sub generaReporte(nrofolio As String)

        Dim ws As New ws_Generales.GeneralesClient
        Dim server As String = ws.ObtieneParametro(9)
        server = Replace(Replace(server, "@Reporte", "OrdenPago"), "@Formato", "PDF") & "&nro_op=" + nrofolio
        server = Replace(server, "ReportesGMX_UAT", "ReportesOPSiniestros")
        server = Replace(server, "OrdenPago", "OrdenPago_stro")
        'Funciones.EjecutaFuncion("fn_ImprimirOrden('" & server & "','" & "234777" & "');")
        'Funciones.EjecutaFuncion(String.Format("fn_ImprimirOrden('{0}','{1}');", server, nrofolio))

        Funciones.EjecutaFuncion("window.open('" & server & "');")
    End Sub

    Private Sub btnExportar_Click(sender As Object, e As EventArgs) Handles btnExportar.Click
        Dim ws As New ws_Generales.GeneralesClient
        Dim server As String = ws.ObtieneParametro(9)
        Dim Random As New Random()
        Dim numero As Integer = Random.Next(1, 1000)
        Dim Num_Lote As String
        Num_Lote = Request.QueryString("Num_Lote")
        Dim RptFilters As String
        RptFilters = "&NumLote=" & Num_Lote
        server = Replace(Replace(server, "@Reporte", "ResumenOP"), "@Formato", "EXCEL")
        server = Replace(server, "ReportesGMX_UAT", "ReportesOPSiniestros")
        server = server & RptFilters
        Funciones.EjecutaFuncion("window.open('" & server & "');")

    End Sub


End Class
