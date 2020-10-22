<%@ Page Title="" Language="VB" MasterPageFile="~/Pages/SiteMaster.master" AutoEventWireup="false" CodeFile="ResumenOPMasivo.aspx.vb" Inherits="Siniestros_ResumenOPMasivo" %>
<%@ MasterType VirtualPath="~/Pages/SiteMaster.master" %>

<asp:Content ID="Content2" ContentPlaceHolderID="cph_principal" Runat="Server">
    <asp:HiddenField runat="server" ID="hid_Ventanas" Value="1|0" />
 
    

    <div class="zona-principal" style="overflow-x: hidden; overflow-y: hidden">
                        <div class="cuadro-titulo panel-encabezado">                    
                    Resumen del Proceso Masivo  Numero de Lote:
                </div>
                <asp:HiddenField runat="server" ID="hid_Operacion" Value="0" />
             <div class="panel-contenido ventana1">

                   




      


                   
                 
               


                 <center>
                     <div class="row">
                           <asp:Panel runat="server" ID="pnlUsuario" Width="99%" Height="300" ScrollBars="Auto" >
                             <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" BackColor="White" BorderColor="#003A5D" BorderStyle="None" BorderWidth="1px" CellPadding="3" GridLines="Vertical" Width="80%">
                                 <AlternatingRowStyle BackColor="#DCDCDC" />
                                 <Columns>
                                     <asp:BoundField DataField="Folio_Onbase" HeaderText="Folio Onbase" />
                                     <asp:BoundField DataField="Notas" HeaderText="Notas" />
                                     <asp:BoundField DataField="Nro_OP" HeaderText="Nro OP" />
                                     <asp:BoundField DataField="Estado" HeaderText="Estado" />
                                     <asp:ButtonField Text="" HeaderText="PDF" CommandName="RepCarta" ButtonType="Image" ImageUrl="../Images/buscar_mini_inv.png" ItemStyle-HorizontalAlign="Center">
                                            <ItemStyle HorizontalAlign="Center" />
                                     </asp:ButtonField>
                                 </Columns>
                                 <FooterStyle BackColor="#CCCCCC" ForeColor="Black" />
                                 <HeaderStyle BackColor="#003A5D" Font-Bold="True" ForeColor="White" />
                                 <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                                 <RowStyle BackColor="#EEEEEE" ForeColor="Black" />
                                 <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White" />
                                 <SortedAscendingCellStyle BackColor="#F1F1F1" />
                                 <SortedAscendingHeaderStyle BackColor="#0000A9" />
                                 <SortedDescendingCellStyle BackColor="#CAC9C9" />
                                 <SortedDescendingHeaderStyle BackColor="#000065" />
                             </asp:GridView>
                               </asp:Panel>
                    </div>
                    <div class="row">
                        <br />
                        <br />
                        <div class="col-md-6" style="text-align: right">
                        <%If Request.QueryString("Fondos") = Nothing Then %>
                             <a id="btn_Enviar" href="OrdenPagoMasivo.aspx"  class="btn botones" >
                                           <span>
                                                <i class="fa fa-arrow-circle-up"></i>&nbsp;
                                                Aceptar
                                            </span>
                                            </a>                   
                        <% else %>

                             <a id="btn_Enviar2" href="OrdenPagoMasivoFondos.aspx"  class="btn botones" >
                                           <span>
                                                <i class="fa fa-arrow-circle-up"></i>&nbsp;
                                                Aceptar
                                            </span>
                                            </a>   

                        <%End if %>
                         </div>
                         <div class="col-md-6" style="text-align: left">
                                 <asp:LinkButton ID="btnExportar" runat="server" class="btn botones" Width="100px" >
                                <span>
                                    <img class="btn-excel"/>&nbsp&nbsp Exportar
                                </span>
                            </asp:LinkButton>
                        </div>
                     
                 </div>
                     </center>

                   


               




             </div>

    </div>
</asp:Content>

