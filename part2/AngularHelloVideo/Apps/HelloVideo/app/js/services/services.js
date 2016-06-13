/**
 * Created by Jack Vo on 20/10/2014.
 */
(function(){
	angular.module("app.services", ["app.utils"])
	/**
	 * The following service factory will help to ease the switching focus process
	 * The factory will keep track of which controller has just been removed focus
	 * and the controller that will take over the focus
	 */
		.factory("FocusHandlerFactory", function(Utils) {
			var TAG = "Services - FocusHandlerFactory",
				previousController,
				currentController,
				publicMethods = {};

			publicMethods.setCurrentFocusController = function(controller){
				if( controller!==null
					&& controller!==undefined
					&& currentController!= controller){
					Utils.log("setCurrentFocusController()", TAG);
					previousController = currentController;
					if(previousController!=null){
						previousController.setFocus(false);
					}
					currentController = controller;

				}
			};

			publicMethods.getCurrentController = function(){
				return currentController;
			};

			return publicMethods;
		})
	;

	angular.module("app.testAsset", [])
		.factory("TestAssets", function(){
			return {
				getMovieCollection: function(){
					return [
						{
							"name":"The Two Faces of January",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Grace of Monaco",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Under The Skin",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Toy Story of Terror",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Rover",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"I Am Ali",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Blended",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Roger Corman's Operation Rogue",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Broken Circle Breakdown",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Lords of London",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Face of Love",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Edge of Tomorrow",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Oculus",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Possession of Michael King",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Longest Week",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Monster High: Freaky Fusion",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Mums' Night Out",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"The Sacrament",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"X-Men: Days of Future Past",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Frozen (Sing Along)",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Heaven Is for Real ",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Bad Words",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Odd Thomas",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"A Single Shot",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"They Came Together",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Brightest Star",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Ivory Tower",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Maleficent",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Sunshine on Leith",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						},
						{
							"name":"Godzilla",
							"imageUrl":"/images/img.jpg",
							"synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin ante, non consequat lorem. Duis in massa scelerisque, imperdiet erat quis, fermentum nibh. Nam diam leo, lobortis vitae ultrices sit amet, aliquam quis massa. Quisque porta quis sem ut feugiat."
						}
					];
				}
			};
		})
})();
