var perProject="";
var perType="";

var grid = new Muuri('.grid', {dragEnabled:false,/*dragSortInterval: 50, dragStartPredicate:{distance:25},*/ hideDuration: 0, layout:{fillGaps:true}});

var controlsValue =$(".propertyItem");


function filterWallType(property){

	if (perType == property) {
		perType ="";
		$('#' + property+', '+ '#' + property+ 'M').removeClass("activeType");
		gridArrange();
	}
	else if(perType =""){
		perType = property;
		$('#' + property+', '+ '#' + property+ 'M').addClass("activeType");
		gridArrange();
	}
	else{
		perType = property;
		$(".activeType").removeClass("activeType")
		$('#' + property+', '+ '#' + property+ 'M').addClass("activeType");
		gridArrange();
	}
}

function filterWallProject(property){

	if (perProject == property) {
		perProject ="";
		$('#' + property+', '+ '#' + property+ 'M').removeClass("activeProject");
		gridArrange();
	}
	else if(perProject =""){
		perProject = property;
		$('#' + property+', '+ '#' + property+ 'M').addClass("activeProject");
		gridArrange();
	}
	else{
		perProject = property;
		$(".activeProject").removeClass("activeProject")
		$('#' + property+', '+ '#' + property+ 'M').addClass("activeProject");
		gridArrange();
	}
}

function gridArrange() {
	if(perType=="" && perProject==""){
		grid.filter("*");
	}
	else if(perProject ==""){
		grid.filter("."+perType);
	}
	else if(perType ==""){
		grid.filter("."+perProject);
	}

	else{
		grid.filter("."+perType+"."+perProject);
	}
}

function clickArticle(id){
	$("#articleContent").load("Articles/" + id, function(responseTxt, statusTxt, xhr) {
	 	if (statusTxt == "error") {
	 		alert("Error: " + xhr.status + ": " + xhr.statusText);
	 	}
		else{
			$(".articleWindow").show();
		}
	});
}

function clickStory(id){
	$("#storyContent").load("stories/" + id, function(responseTxt, statusTxt, xhr) {
	 	if (statusTxt == "error") {
	 		alert("Error: " + xhr.status + ": " + xhr.statusText);
	 	}
		else{
			$(".storyWindow").show();
		}
	});
}

function clickActivity(id){
	$("#activityContent").load("Activities/" + id, function(responseTxt, statusTxt, xhr) {
	 	if (statusTxt == "error") {
	 		alert("Error: " + xhr.status + ": " + xhr.statusText);
	 	}
		else{
			$(".activityWindow").show();
		}	 	
	});
}

function animWindow(windowId, In, Out){
	windowId.parent().removeClass(In).addClass(Out);
	windowId.delay(650).queue(function(){windowId.next().empty(); windowId.parent().removeClass(Out).addClass(In).hide();windowId.clearQueue();});
}