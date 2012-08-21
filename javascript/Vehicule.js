/**
 * Vehicule classe.
 * 
 * @author Julien Boz
 */
var Vehicule = (function(description) {

	var description = description;
	var owner = "";

	this.starEngine = function() {
		alert("start " + description);
	};

	this.setOwner = function(owner) {
		this.owner = owner;
	}
});