module.exports = function (config) {
    config.set({
      basePath: '/home/lavonsampson/TypeScript/pokeverse', // Root directory of your project
      frameworks: ['jasmine'], // Testing framework
      files: [
        '/home/lavonsampson/TypeScript/pokeverse/src/app/components/pokemon-list/pokemon-list.component.ts'
      ],
      exclude: [
        // List of files to exclude from testing (optional)
      ],
      reporters: ['progress', 'html'], // Test result reporters
      port: 9876, // Port used by Karma server
      colors: true, // Enable colored output in the terminal
      logLevel: config.LOG_INFO, // Logging level (INFO, DEBUG, etc.)
      autoWatch: true, // Automatically watch for file changes and rerun tests
  
      // Added section for headless testing
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),  // Import the plugin
      ],
  
      browsers: ['ChromeHeadless'],  // Use ChromeHeadless for headless testing
      singleRun: false, // Keep the Karma server running after tests are complete
    });
  };
  