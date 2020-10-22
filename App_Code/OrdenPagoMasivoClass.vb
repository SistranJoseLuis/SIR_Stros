Imports Microsoft.VisualBasic



Public Class OrdenPagoMasivoClass


    Private _Folio_Onbase As String
    Private _Num_Pago As String
    Private _id_Tipo_Doc As String
    Private _Tipo_comprobante As String
    Private _PagarA As String
    Private _CodigoCliente As String
    Private _RFC As String
    Private _Nombre_Razon_Social As String
    Private _Siniestro As String
    Private _Subsinientro As String
    Private _Cod_moneda As String
    Private _Moneda As String
    Private _Tipo_Cambio As String
    Private _Reserva As String
    Private _Cod_moneda_pago As String
    Private _Moneda_Pago As String
    Private _Importe As String
    Private _Deducible As String
    Private _Importe_concepto As String
    Private _Concepto_Factura As String
    Private _Concepto_Pago As String
    Private _Clase_pago As String
    Private _Tipo_Pago As String
    Private _Concepto2 As String
    Private _Tipo_Pago2 As String
    Private _Folio_Onbase_cuenta As String
    Private _Cuenta_Bancaria As String
    Private _Confirmar_Cuenta As String
    Private _Solicitante As String
    Private _Notas As String
    Private _Observaciones As String
    Private _ID As String
    Private _Id_Persona As String
    Private _CodigoSucursal As String
    Private _TipoMovimiento As String
    Private _VariasFacturas As String
    Private _Ramo As String
    Private _SubRamo As String
    Private _ID_TipoComprobante As String
    Private _NumeroComprobante As String
    Private _FechaComprobante As String
    Private _CodTipoStro As String
    Private _CodigoOrigenPago As String
    Private _FechaIngreso As String
    Private _CodigoBancoTransferencia As String

    Private _FolioOnbaseHidden As String

    Private _IdSiniestro As String
    Private _CodigoTercero As String
    Private _Subtotal As String
    Private _Iva As String
    Private _Total As String
    Private _Retencion As String
    Private _CodItem As String
    Private _CodIndCob As String
    Private _NumeroCorrelaEstim As String
    Private _NumeroCorrelaPagos As String
    Private _SnCondusef As String
    Private _NumeroOficioCondusef As String
    Private _FechaOficioCondusef As String
    Private _TipoPagoDetalle As String
    Private _Cod_objeto As String
    Private _Cod_concepto_pago As String
    Private _Cod_clas_pago As String
    Private _Cod_tipo_pago As String
    Private _Poliza As String




    Public Property Folio_Onbase As String
        Get
            Return _Folio_Onbase
        End Get
        Set(value As String)
            _Folio_Onbase = value
        End Set
    End Property

    Public Property Num_Pago As String
        Get
            Return _Num_Pago
        End Get
        Set(value As String)
            _Num_Pago = value
        End Set
    End Property

    Public Property Tipo_comprobante As String
        Get
            Return _Tipo_comprobante
        End Get
        Set(value As String)
            _Tipo_comprobante = value
        End Set
    End Property

    Public Property PagarA As String
        Get
            Return _PagarA
        End Get
        Set(value As String)
            _PagarA = value
        End Set
    End Property

    Public Property CodigoCliente As String
        Get
            Return _CodigoCliente
        End Get
        Set(value As String)
            _CodigoCliente = value
        End Set
    End Property

    Public Property RFC As String
        Get
            Return _RFC
        End Get
        Set(value As String)
            _RFC = value
        End Set
    End Property

    Public Property Nombre_Razon_Social As String
        Get
            Return _Nombre_Razon_Social
        End Get
        Set(value As String)
            _Nombre_Razon_Social = value
        End Set
    End Property

    Public Property Siniestro As String
        Get
            Return _Siniestro
        End Get
        Set(value As String)
            _Siniestro = value
        End Set
    End Property

    Public Property Subsiniestro As String
        Get
            Return _Subsinientro
        End Get
        Set(value As String)
            _Subsinientro = value
        End Set
    End Property

    Public Property Moneda As String
        Get
            Return _Moneda
        End Get
        Set(value As String)
            _Moneda = value
        End Set
    End Property

    Public Property Tipo_Cambio As String
        Get
            Return _Tipo_Cambio
        End Get
        Set(value As String)
            _Tipo_Cambio = value
        End Set
    End Property

    Public Property Reserva As String
        Get
            Return _Reserva
        End Get
        Set(value As String)
            _Reserva = value
        End Set
    End Property

    Public Property Moneda_Pago As String
        Get
            Return _Moneda_Pago
        End Get
        Set(value As String)
            _Moneda_Pago = value
        End Set
    End Property

    Public Property Importe As String
        Get
            Return _Importe
        End Get
        Set(value As String)
            _Importe = value
        End Set
    End Property

    Public Property Deducible As String
        Get
            Return _Deducible
        End Get
        Set(value As String)
            _Deducible = value
        End Set
    End Property

    Public Property Importe_concepto As String
        Get
            Return _Importe_concepto
        End Get
        Set(value As String)
            _Importe_concepto = value
        End Set
    End Property

    Public Property Concepto_Factura As String
        Get
            Return _Concepto_Factura
        End Get
        Set(value As String)
            _Concepto_Factura = value
        End Set
    End Property

    Public Property Concepto_Pago As String
        Get
            Return _Concepto_Pago
        End Get
        Set(value As String)
            _Concepto_Pago = value
        End Set
    End Property

    Public Property Clase_pago As String
        Get
            Return _Clase_pago
        End Get
        Set(value As String)
            _Clase_pago = value
        End Set
    End Property

    Public Property Tipo_Pago As String
        Get
            Return _Tipo_Pago
        End Get
        Set(value As String)
            _Tipo_Pago = value
        End Set
    End Property

    Public Property Concepto2 As String
        Get
            Return _Concepto2
        End Get
        Set(value As String)
            _Concepto2 = value
        End Set
    End Property

    Public Property Tipo_Pago2 As String
        Get
            Return _Tipo_Pago2
        End Get
        Set(value As String)
            _Tipo_Pago2 = value
        End Set
    End Property

    Public Property Folio_Onbase_cuenta As String
        Get
            Return _Folio_Onbase_cuenta
        End Get
        Set(value As String)
            _Folio_Onbase_cuenta = value
        End Set
    End Property

    Public Property Cuenta_Bancaria As String
        Get
            Return _Cuenta_Bancaria
        End Get
        Set(value As String)
            _Cuenta_Bancaria = value
        End Set
    End Property

    Public Property Confirmar_Cuenta As String
        Get
            Return _Confirmar_Cuenta
        End Get
        Set(value As String)
            _Confirmar_Cuenta = value
        End Set
    End Property

    Public Property Solicitante As String
        Get
            Return _Solicitante
        End Get
        Set(value As String)
            _Solicitante = value
        End Set
    End Property

    Public Property Notas As String
        Get
            Return _Notas
        End Get
        Set(value As String)
            _Notas = value
        End Set
    End Property

    Public Property Observaciones As String
        Get
            Return _Observaciones
        End Get
        Set(value As String)
            _Observaciones = value
        End Set
    End Property

    Public Property ID As String
        Get
            Return _ID
        End Get
        Set(value As String)
            _ID = value
        End Set
    End Property

    Public Property Id_Tipo_Doc As String
        Get
            Return _id_Tipo_Doc
        End Get
        Set(value As String)
            _id_Tipo_Doc = value
        End Set
    End Property

    Public Property Cod_moneda As String
        Get
            Return _Cod_moneda
        End Get
        Set(value As String)
            _Cod_moneda = value
        End Set
    End Property

    Public Property Cod_moneda_pago As String
        Get
            Return _Cod_moneda_pago
        End Get
        Set(value As String)
            _Cod_moneda_pago = value
        End Set
    End Property

    Public Property FolioOnbaseHidden As String
        Get
            Return _FolioOnbaseHidden
        End Get
        Set(value As String)
            _FolioOnbaseHidden = value
        End Set
    End Property

    Public Property Id_Persona As String
        Get
            Return _Id_Persona
        End Get
        Set(value As String)
            _Id_Persona = value
        End Set
    End Property

    Public Property CodigoSucursal As String
        Get
            Return _CodigoSucursal
        End Get
        Set(value As String)
            _CodigoSucursal = value
        End Set
    End Property

    Public Property TipoMovimiento As String
        Get
            Return _TipoMovimiento
        End Get
        Set(value As String)
            _TipoMovimiento = value
        End Set
    End Property

    Public Property VariasFacturas As String
        Get
            Return _VariasFacturas
        End Get
        Set(value As String)
            _VariasFacturas = value
        End Set
    End Property

    Public Property Ramo As String
        Get
            Return _Ramo
        End Get
        Set(value As String)
            _Ramo = value
        End Set
    End Property

    Public Property SubRamo As String
        Get
            Return _SubRamo
        End Get
        Set(value As String)
            _SubRamo = value
        End Set
    End Property

    Public Property ID_TipoComprobante As String
        Get
            Return _ID_TipoComprobante
        End Get
        Set(value As String)
            _ID_TipoComprobante = value
        End Set
    End Property

    Public Property NumeroComprobante As String
        Get
            Return _NumeroComprobante
        End Get
        Set(value As String)
            _NumeroComprobante = value
        End Set
    End Property

    Public Property FechaComprobante As String
        Get
            Return _FechaComprobante
        End Get
        Set(value As String)
            _FechaComprobante = value
        End Set
    End Property

    Public Property CodTipoStro As String
        Get
            Return _CodTipoStro
        End Get
        Set(value As String)
            _CodTipoStro = value
        End Set
    End Property

    Public Property CodigoOrigenPago As String
        Get
            Return _CodigoOrigenPago
        End Get
        Set(value As String)
            _CodigoOrigenPago = value
        End Set
    End Property

    Public Property FechaIngreso As String
        Get
            Return _FechaIngreso
        End Get
        Set(value As String)
            _FechaIngreso = value
        End Set
    End Property

    Public Property CodigoBancoTransferencia As String
        Get
            Return _CodigoBancoTransferencia
        End Get
        Set(value As String)
            _CodigoBancoTransferencia = value
        End Set
    End Property

    Public Property IdSiniestro As String
        Get
            Return _IdSiniestro
        End Get
        Set(value As String)
            _IdSiniestro = value
        End Set
    End Property

    Public Property CodigoTercero As String
        Get
            Return _CodigoTercero
        End Get
        Set(value As String)
            _CodigoTercero = value
        End Set
    End Property

    Public Property Subtotal As String
        Get
            Return _Subtotal
        End Get
        Set(value As String)
            _Subtotal = value
        End Set
    End Property

    Public Property Iva As String
        Get
            Return _Iva
        End Get
        Set(value As String)
            _Iva = value
        End Set
    End Property

    Public Property Total As String
        Get
            Return _Total
        End Get
        Set(value As String)
            _Total = value
        End Set
    End Property

    Public Property Retencion As String
        Get
            Return _Retencion
        End Get
        Set(value As String)
            _Retencion = value
        End Set
    End Property





    Public Property CodIndCob As String
        Get
            Return _CodIndCob
        End Get
        Set(value As String)
            _CodIndCob = value
        End Set
    End Property

    Public Property NumeroCorrelaEstim As String
        Get
            Return _NumeroCorrelaEstim
        End Get
        Set(value As String)
            _NumeroCorrelaEstim = value
        End Set
    End Property

    Public Property NumeroCorrelaPagos As String
        Get
            Return _NumeroCorrelaPagos
        End Get
        Set(value As String)
            _NumeroCorrelaPagos = value
        End Set
    End Property

    Public Property SnCondusef As String
        Get
            Return _SnCondusef
        End Get
        Set(value As String)
            _SnCondusef = value
        End Set
    End Property

    Public Property NumeroOficioCondusef As String
        Get
            Return _NumeroOficioCondusef
        End Get
        Set(value As String)
            _NumeroOficioCondusef = value
        End Set
    End Property

    Public Property FechaOficioCondusef As String
        Get
            Return FechaOficioCondusef1
        End Get
        Set(value As String)
            FechaOficioCondusef1 = value
        End Set
    End Property

    Public Property FechaOficioCondusef1 As String
        Get
            Return _FechaOficioCondusef
        End Get
        Set(value As String)
            _FechaOficioCondusef = value
        End Set
    End Property

    Public Property TipoPagoDetalle As String
        Get
            Return _TipoPagoDetalle
        End Get
        Set(value As String)
            _TipoPagoDetalle = value
        End Set
    End Property

    Public Property CodItem As String
        Get
            Return _CodItem
        End Get
        Set(value As String)
            _CodItem = value
        End Set
    End Property

    Public Property Cod_objeto As String
        Get
            Return _Cod_objeto
        End Get
        Set(value As String)
            _Cod_objeto = value
        End Set
    End Property

    Public Property Cod_concepto_pago As String
        Get
            Return _Cod_concepto_pago
        End Get
        Set(value As String)
            _Cod_concepto_pago = value
        End Set
    End Property

    Public Property Cod_clas_pago As String
        Get
            Return _Cod_clas_pago
        End Get
        Set(value As String)
            _Cod_clas_pago = value
        End Set
    End Property

    Public Property Cod_tipo_pago As String
        Get
            Return _Cod_tipo_pago
        End Get
        Set(value As String)
            _Cod_tipo_pago = value
        End Set
    End Property

    Public Property Poliza As String
        Get
            Return _Poliza
        End Get
        Set(value As String)
            _Poliza = value
        End Set
    End Property
End Class
