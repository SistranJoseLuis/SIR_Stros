;(function($){
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com

 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
        recordtext: "Mostrando {0} - {1} de {2}",
        emptyrecords: "Sin registros que mostrar",
        loadtext: "Cargando...",
		pgtext : "Pagina {0} de {1}"
	},
	search : {
        caption: "Búsqueda...",
        Find: "Buscar",
        Reset: "Limpiar",
		odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [{ op: "AND", text: "all" },{ op: "OR",  text: "any" }],
        operandTitle: "Clic para seleccionar la operación de búsqueda.",
        resetTitle: "Reiniciar valores de búsqueda"
	},
	edit : {
        addCaption: "Agregar registro",
        editCaption: "Modificar registro",
        bSubmit: "Guardar",
        bCancel: "Cancelar",
        bClose: "Cerrar",
        saveData: "Se han modificado los datos, ¿guardar cambios?",
		bYes : "Si",
		bNo : "No",
		bExit : "Cancelar",
		msg: {
            required:"Campo obligatorio",
            number:"Introduzca un número",
            minValue:"El valor debe ser mayor o igual a ",
            maxValue:"El valor debe ser menor o igual a ",
            email: "no es una dirección de correo válida ",
            integer: "Introduzca un valor entero ",
            date: "Introduzca una fecha correcta ",
            url: "no es una URL válida. Prefijo requerido ('http://' or 'https://')",
            nodefined: " no está definido.",
            novalue: " valor de retorno es requerido.",
            customarray: "La función personalizada debe devolver un array.",
            customfcheck: "La función personalizada debe estar presente en el caso de validación personalizada. "
			
		}
	},
	view : {
        caption: "Consultar registro",
		bClose: "Close"
	},
	del : {
        caption: "Eliminar",
        msg: "Desea eliminar el registro seleccionado?",
        bSubmit: "Eliminar",
		bCancel: "Cancelar"
	},
	nav : {
		edittext: "",
        edittitle: "Modificar fila seleccionada",
		addtext:"",
        addtitle: "Agregar nueva fila",
		deltext: "",
        deltitle: "Eliminar fila seleccionada",
		searchtext: "",
        searchtitle: "Buscar información",
		refreshtext: "",
        refreshtitle: "Recargar datos",
        alertcap: "Aviso",
        alerttext: "Seleccione una fila",
		viewtext: "",
        viewtitle: "Ver fila seleccionada",
        savetext: "",
        savetitle: "Guardar fila",
        canceltext: "",
        canceltitle: "Cancelar edición de fila",
        selectcaption: "Acciones..."
	},
	col : {
        caption: "Mostrar/ocultar columnas",
        bSubmit: "Enviar",
        bCancel: "Cancelar"	
	},
	errors : {
        errcap: "Error",
        nourl: "No se ha especificado una URL",
        norecords: "No hay datos para procesar",
        model: "Las columnas de nombres son diferentes de las columnas del modelo"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
            dayNames: [
                "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa",
                "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
            ],
            monthNames: [
                "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            AmPm: ["am", "pm", "AM", "PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
    },
    colmenu: {
        sortasc: "Orden Ascendente",
        sortdesc: "Orden Descendente",
        columns: "Columnas",
        filter: "Filtrar",
        grouping: "Agrupar por",
        ungrouping: "Desagrupar",
        searchTitle: "Obtener elementos con un valor que:",
        freeze: "Inmovilizar",
        unfreeze: "Movilizar",
        reorder: "Mover para reordenar"
    }
});
})(jQuery);
