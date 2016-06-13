module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
		'../AngularHelloVideo/Apps/HelloVideo/app/js/libs/jquery.min.js',
		'../AngularHelloVideo/Apps/HelloVideo/app/js/libs/angular.js',
		'test/libs/angular-mocks.js',
		'../AngularHelloVideo/Apps/HelloVideo/app/js/**/*.js',
		'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
