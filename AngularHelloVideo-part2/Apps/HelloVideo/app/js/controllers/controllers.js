(function(){

	angular.module("app.controllers", ["app.configuration"
									  ,"app.services"
									  ,"app.utils"
									  ,"app.testAsset"])
		.controller("MainController", MainController)
		.controller("MyMovieListCtrl", MyMovieListCtrl)
	;

	//This controller act as our main entry point to receive and communicate with
	//Main.js. This controller should be seen as the master controller that will
	//receive all keydown events then cleverly select the right child controller to pass
	//the keydown event to
	function MainController(ConfigData, FocusHandlerFactory, Utils){
		var TAG = "Controller - MainController",
			isSmartTVMode = ConfigData.isSmartTVMode(),
			_THIS = this;

		//set application's global Main variable's controller to this controller
		Main.mainController = _THIS;

		this.onApplicationOnLoadComplete = function(){
			Utils.log("***onApplicationOnLoadComplete()***",TAG);
		};

		this.onApplicationUnload = function(){
			Utils.log("***onApplicationUnload()***");
		};

		this.handleKeyDown = function(keyCode){
			Utils.log("handleKeyDown(" + keyCode + ")", TAG);

			//We should block the Return key & exit key if we are using real tv device
			if(isSmartTVMode==true){
				if( keyCode == tvKey.KEY_RETURN
					|| keyCode == tvKey.KEY_EXIT){
					widgetAPI.blockNavigation(event);
				}
			}

			_THIS.currentController = FocusHandlerFactory.getCurrentController();
			if(_THIS.currentController !=null){
				_THIS.currentController.handleKeyDown(keyCode);
			}
		};
	}

	//The base controller, any controller that wants to handle the keydown event
	//should extend from this controller.
	function CoreController($scope, FocusHandlerFactory, Utils){
		var _THIS = this;

		//Define if keyDown function should be listened or not
		$scope.isFocus = false;

		this.setFocus = function(value){
			if(value != $scope.isFocus){
				Utils.dispatchCallbackUsingAngularTimeout(function(){
					$scope.isFocus = value;
				});
			}
			if( value===true ){
				FocusHandlerFactory.setCurrentFocusController(_THIS);
			}
		};
	}

	function MyMovieListCtrl($scope, FocusHandlerFactory, Utils, TestAssets){
		CoreController.apply(this, [$scope, FocusHandlerFactory, Utils]);
		var TAG = "MyFavouriteVideoList",
			_THIS = this,

			NUMBER_OF_ROW_ITEMS = 5;
		Utils.log("Initialized", TAG);

		//The reason we load the collection in $timeout is because in Samsung Smart TV,
		//This controller will be initialized in the same Main.onLoad() scope so it will
		//take a while for the Samsung Smart TV app to completely load all of test content
		//To prevent this to happen I use $timeout to delay the load TestAssets data by 1.5 sec
		//after the controller is initialized.
		//I load test data this way just to showcase the tutorial app
		//In real production app, do not load data this way, instead use promise.
		Utils.dispatchCallbackUsingAngularTimeout(function(){
			$scope.collection = TestAssets.getMovieCollection();
		},1500);

		$scope.selectedIndex = 0;

		_THIS.setFocus(true);

		//You will see I am using a lot of $timeout to update because the handleKeyDown function
		//is performed outside of Angular's digest loop so $timeout or asyncEval will help us to ask
		//the digest loop to run again. You can use $apply if you want but be mindful that it may be called
		//why we are already inside the digest loop and an exception will be thrown.
		this.handleKeyDown = function(keyCode){
			Utils.log("handleKeyDown(" + keyCode + ")");
			switch(keyCode){
				case tvKey.KEY_LEFT:
					if($scope.selectedIndex > 0){
						_THIS.setSelectedIndex($scope.selectedIndex - 1);
					}
					break;
				case tvKey.KEY_RIGHT:
					if($scope.selectedIndex < $scope.collection.length-1){
						_THIS.setSelectedIndex($scope.selectedIndex + 1);
					}
					break;
				case tvKey.KEY_UP:
					if($scope.selectedIndex - NUMBER_OF_ROW_ITEMS >= 0){
						_THIS.setSelectedIndex($scope.selectedIndex - NUMBER_OF_ROW_ITEMS);
					}
					break;
				case tvKey.KEY_DOWN:
					if($scope.selectedIndex + NUMBER_OF_ROW_ITEMS < $scope.collection.length-1){
						_THIS.setSelectedIndex($scope.selectedIndex + NUMBER_OF_ROW_ITEMS);
					}
					break;
				case tvKey.KEY_ENTER:
				case tvKey.KEY_PANEL_ENTER:
					Utils.dispatchCallbackUsingAngularTimeout(function(){
						$scope.selectedItem = $scope.collection[$scope.selectedIndex];
					});
					break;

				case tvKey.KEY_RETURN:
				case tvKey.KEY_PANEL_RETURN:
					Utils.dispatchCallbackUsingAngularTimeout(function(){
						$scope.selectedItem = null;
					});
					break;
			}
		};

		//Actually set the selectedIndex to $scope
		this.setSelectedIndex = function(value){
			Utils.log("setSelectedIndex(" + value + ")");
			if($scope.selectedIndex != value){
				Utils.dispatchCallbackUsingAngularTimeout(function(){
					$scope.selectedIndex = value;
				});
			}
		};
	}
})();

