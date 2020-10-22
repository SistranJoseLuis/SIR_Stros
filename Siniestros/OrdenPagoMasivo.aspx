<%@ Page Title="" Language="VB" MasterPageFile="~/Pages/SiteMaster.master" AutoEventWireup="false" CodeFile="OrdenPagoMasivo.aspx.vb" Inherits="Siniestros_OrdenPagoMasivo" %>
<%@ MasterType VirtualPath="~/Pages/SiteMaster.master" %>




<asp:Content ID="Content2" ContentPlaceHolderID="cph_principal" runat="Server">
  <asp:HiddenField runat="server" ID="hid_Ventanas" Value="1|0" />


    <link rel="stylesheet" type="text/css" media="screen" href="../Content/JQGRID/jquery-ui-custom.css"  />
    <link rel="stylesheet" type="text/css" media="screen" href="../Content/JQGRID/ui.jqgrid.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="../Content/JQGRID/ui.multiselect.css" />
    
    <%--<link href="../Content/JQGRID/tableexport.css" rel="stylesheet" type="text/css"/>--%>

    <script src="../Scripts/Siniestros/OrdenPago.js"></script>
    <script src="../Scripts/Siniestros/OrdenPagoMasivo.js"></script>
    
    
    <script src="../Scripts/JQGRID/jquery-ui-custom.min.js" type="text/javascript"></script>
    <script src="../Scripts/JQGRID/jquery.layout.js" type="text/javascript"></script>   
    <script src="../Scripts/JQGRID/grid.locale-en.js" type="text/javascript"></script>
    <script src="../Scripts/JQGRID/ui.multiselect.js" type="text/javascript"></script>
    <script src="../Scripts/JQGRID/jquery.jqGrid.js" type="text/javascript"></script>


    

    <div class="zona-principal" style="overflow-x: hidden; overflow-y: hidden">
     
        <asp:UpdatePanel runat="server" ID="upGenerales">
            <ContentTemplate>

                <div class="cuadro-titulo panel-encabezado">
                    <input type="image" src="../Images/contraer_mini_inv.png" id="coVentana1" class="contraer" />
                    <input type="image" src="../Images/expander_mini_inv.png" id="exVentana1" class="expandir" />
                    Solicitud de Ordenes de pago Masivas Tradicional
                </div>
                <asp:HiddenField runat="server" ID="hid_Operacion" Value="0" />
             <div class="panel-contenido ventana1">

                     <div class="row">
                         <div class="form-group col-md-3">
                           <asp:Label ID="Label2" runat="server" class="etiqueta-control">Recuperar por Numero de Lote</asp:Label>
                            
                         </div>
                         <div class="form-group col-md-2">
                             <asp:TextBox ID="txt_NumLote"   runat="server" CssClass=" estandar-control  Centro" ></asp:TextBox>
                             </div>

                        <div class="form-group col-md-2">
                                  <button type="button"  class="btn botones" id="btn_Recuperar_lote" style="border-width:2px; text-align:center" ><span>
                                                                <img class="btn-buscar"/>
                                    </span></button>
                         </div>
                     </div>

                    <div class="row">
                        
    

                        <div runat="server">
                            <div class="form-group col-md-3">
                                <asp:Label ID="Label1" runat="server" class="etiqueta-control">Fecha de aceptación del documento</asp:Label>
                               
                            </div>

                            <div class="form-group col-md-2">
                                
                                <asp:TextBox ID="txt_fecha_ini"   runat="server" CssClass=" estandar-control fechadepago  Fecha Centro" autocomplete="off" placeholder="DD/MM/YYYY"></asp:TextBox>
                            </div>

                           <div class="col-md-1">
                              <asp:label runat="server" class="etiqueta-control" >A</asp:label>
                           </div>

                            <div class="form-group col-md-2">
                                
                                <asp:TextBox ID="txt_fecha_fin"  runat="server" CssClass="estandar-control fechadepago  Fecha Centro" autocomplete="off" placeholder="DD/MM/YYYY"></asp:TextBox>
                            </div>

                        
                        </div>
                       
                    </div>






                    <div class="row">

                        <div runat="server">
                            <div class="form-group col-md-3">
                                <asp:Label ID="lblObBase" runat="server" class="etiqueta-control">Folio Onbase</asp:Label>
                                
                            </div>

                            <div class="form-group col-md-2">
                                
                                <asp:TextBox AutoPostBack="True"   ID="txt_folio_onbase_Desde" runat="server"   CssClass="estandar-control Monto  Centro" placeholder="Folio Onbase Desde"></asp:TextBox>
                            </div>

                           <div class="col-md-1">
                              <asp:label runat="server" class="etiqueta-control" >A</asp:label>
                           </div>

                            <div class="form-group col-md-2">
                                
                                <asp:TextBox AutoPostBack="True" OnBlur="__doPostBack(this.id, '');"  ID="txt_folio_onbase_Hasta" runat="server"   CssClass="estandar-control onbase  Centro" placeholder="Folio Onbase Hasta"></asp:TextBox>
                            </div>

                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="form-group col-md-2">
                            <asp:Label runat="server" class="etiqueta-control">Pagar a</asp:Label>
                            <asp:DropDownList  ID="cmbPagarA" runat="server" ClientIDMode="Static" CssClass="estandar-control tipoUsuario ">
                                <asp:ListItem Value="9">TODOS</asp:ListItem> <%--A--%>
                                <asp:ListItem Value="7">ASEGURADO</asp:ListItem> <%--A--%>
                                <asp:ListItem Value="8">TERCERO</asp:ListItem>   <%--T--%>
                                <asp:ListItem Value="10">PROVEEDOR</asp:ListItem> <%--P--%>
                            </asp:DropDownList>
                        </div>
                             <div class="form-group col-md-2">
                                <asp:Label runat="server" class="etiqueta-control">Tipo Pago</asp:Label>
                                <asp:DropDownList ID="cmbTipoPago" runat="server" ClientIDMode="Static" CssClass="estandar-control  Centro" >
                                    <asp:ListItem Value="9">TODOS</asp:ListItem> <%--A--%>
                                    <asp:ListItem Value="0">Cheque</asp:ListItem> <%--A--%>
                                    <asp:ListItem Value="-1">Transferencia</asp:ListItem> <%--A--%>
                                </asp:DropDownList>
                            </div>

                             <div class="form-group col-md-2">
                                <asp:Label runat="server" class="etiqueta-control">Tipo comprobante</asp:Label>
                                <asp:DropDownList ID="cmbTipoComprobante" runat="server" ClientIDMode="Static" CssClass="estandar-control  Centro" ></asp:DropDownList>
                            </div>

                            <div class="form-group col-md-2">
                            <asp:Label runat="server" class="etiqueta-control">Moneda de pago</asp:Label>
                            <asp:DropDownList  ID="cmbMonedaPago" runat="server" ClientIDMode="Static" CssClass="estandar-control  Centro" >
                                <asp:ListItem Value="9">TODOS</asp:ListItem> <%--A--%>
                                <asp:ListItem Value="0">NACIONAL</asp:ListItem>
                                <asp:ListItem Value="1">DOLAR AMERICANO</asp:ListItem>
                            </asp:DropDownList>

                            </div>

                             <div class="form-group col-md-2">
                                <asp:Label runat="server" class="etiqueta-control">RFC</asp:Label>
                                <asp:TextBox AutoPostBack="True" ID="txtRFC" runat="server"  CssClass="estandar-control RFC  Centro" placeholder="RFC"></asp:TextBox>
                                
                             </div>

                            <div class="form-group col-md-2">
                            <asp:Label runat="server" class="etiqueta-control">Subsiniestro</asp:Label>
                            <asp:DropDownList ID="cmbSubsiniestro" runat="server" ClientIDMode="Static" CssClass="estandar-control  Centro">
                                <asp:ListItem Value="0">TODOS</asp:ListItem>
                                <asp:ListItem Value="1">1</asp:ListItem>
                                <asp:ListItem Value="2">2</asp:ListItem>
                                <asp:ListItem Value="3">3</asp:ListItem>
                                <asp:ListItem Value="4">4</asp:ListItem>
                                <asp:ListItem Value="5">5</asp:ListItem>
                                <asp:ListItem Value="6">6</asp:ListItem>
                                <asp:ListItem Value="7">7</asp:ListItem>
                                <asp:ListItem Value="8">8</asp:ListItem>
                                <asp:ListItem Value="9">9</asp:ListItem>
                                <asp:ListItem Value="10">10</asp:ListItem>
                                </asp:DropDownList>
                           </div>


                     </div>


                   <div class="row">
                    <div class="modal-progress hidden" style="width:150px; height:95px;" id="loading" >
                            <img src="../Images/loading.gif" />
                            Procesando.....
                        
                    </div>
                       
                   </div>




             </div>
  
            </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="btn_Revisar" EventName="Click" />
            </Triggers>
        </asp:UpdatePanel>
       
    </div>
    
       
    <div style="width: 100%; text-align: right; border-top-style: inset; border-width: 1px; border-color: #003A5D">
        <div class="padding10">
       
                    
                    <button type="button"  class="btn botones Centrado" id="btn_Reporte" style="border-width:2px" ><span>
                                        <img class="btn-buscar"/>
                                        &nbsp Buscar
                                    </span></button>

            <asp:Button CssClass="btn botones Centrado" style="border-width:2px" runat="server" Text="Limpiar" ID="btnLimpiar"/>

                     
                    

           
        </div>
    </div>



 
    <br />

    <div class="row">

        <table id="list47" >
        </table>
        <div id="plist47"></div>
    </div>
 
    <br />

              
        
    <div style="width: 100%; text-align: right;  border-width: 1px; border-color: #003A5D">
        <div class="padding10">
                    


            <a id="btn_Enviar" runat="server" class="btn botones pull-right hidden" data-toggle="modal" data-target="#Modal"  disabled>
                                   <span>
                                        <i class="fa fa-arrow-circle-up"></i>&nbsp;
                                        Generar
                                    </span>
                                    </a>

                    

                 <asp:Button Text="Revisar" CssClass="btn botones pull-right hidden" ID="btn_Revisar" runat="server" />
                     


                    <button type="button"  class="btn botones pull-right hidden" id="btn_Guardar" ><span>
                          <img class="btn-guardar"/>
                                        Guardar
                                    </span>

                    

                    </button>

                                


            
        </div>
    </div>


            <!-- Modal -->
        <div id="Modal"  class="modal-catalogo" >
            <div class="cuadro-titulo-flotante">
                <button type="button" data-dismiss="modal" class="close">&times;</button>
                <div><label id="lbl_Catalogo">Generacion de Ordenes de Pago</label></div>
            </div>
            <div class="clear padding5"></div>
            <asp:UpdatePanel runat="server" ID="upCatalogo">
                <ContentTemplate>
                    <div class="input-group">
                        <br />                        
                        <asp:label runat="server"  class="col-md-12 etiqueta-control" >¿Deseas confirmar la generacion de Ordenes de pago?</asp:label>
                        <br />
                        <br />
                    
                    </div>
                    
                    <div style="width:100%; text-align:right;">
                            <asp:Button runat="server" id="btn_Aceptar" class="btn botones" Text="Aceptar"  />
                            <asp:Button runat="server" id="btn_Cancela_OP" class="btn botones" Text="Cancelar"  data-dismiss="modal"/>
                    </div>
                </ContentTemplate>
            </asp:UpdatePanel>
        </div> 


   <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
       <br />

</asp:Content>

