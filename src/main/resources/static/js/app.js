var app = (function () {
	var nombreAutor = "";		
	var planos = [];	
	var callBack = function(error, datos) {
		if (error != null) {
			return;
		}
		planos = datos.map(function(blueprint) {
			return {
				name: blueprint.name,
				puntos: blueprint.points.length
			}
		});
		var stringTable = table();
		$("#idTable").html(stringTable);
		var getSum = planos.reduce(sumTotalPoints, 0);
		$("#idGetSum").text("Total user points: " + getSum);
	}
	var table = function() {
		var tabla = "<table class='table' style = 'width:500px; align-content:center;'>" +
						"<thead class='thead-dark'>" +
							"<tr>" +
								"<th scope='col'> Blueprint name </th>" +
								"<th scope='col'> Number of points </th>" +
								"<th scope='col'> </th>" +
							"</tr>" +
						"</thead>" +
						"<tbody>";
		planos.forEach(function(plano) {
			tabla += "<tr>" +
						"<td>" + plano.name + "</td>" +
						"<td>" + plano.puntos + "</td>" +
						"<td> <button type='button' class='btn btn-secondary btn-sm'> Open </button> </td>" +
					"</tr>";
		});
		tabla += "</tbody> </table>";
		return tabla;
	}
	
	var sumTotalPoints = function(total, blueprint) {
		return total + blueprint.puntos;
	}
	
	return {
        setNameAuthor: function(author) {
            nombreAutor = author;
        },        
        updatePlanes: function(author) {
        	var Blueprint = apimock.getBlueprintsByAuthor(author, callBack); 
        }        
    }	
})();
