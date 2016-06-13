/**
 * ---------------------------------------
 * Application Initialisation Phase
 * ---------------------------------------
 */
var app = angular.module("HelloVideo", ["app.configuration"
									  	,"app.controllers"
										,"app.directives"
									  	,"app.services"
									  	,"app.utils"]);
/**
 * ---------------------------------------
 * Application Configuration Phase
 * ---------------------------------------
 */
app.config(function(){
});

/**
 * ---------------------------------------
 * Application Creation Complete phase
 * ---------------------------------------
 */
app.run(function( $http,
				  ConfigData,
				  Utils ){
	var TAG = "***Application RUN PHASE***",
		path = document.URL,
		configUrl = path.substring(0, path.lastIndexOf('/')) + "/" + "appConfig.json";
	$http.get(configUrl)
		.then(function(data){
			setupApplication(data.data);
			Utils.log("Application Config loaded completed", TAG);
		});

	function setupApplication(configData){
		ConfigData.init(configData);
	}
});