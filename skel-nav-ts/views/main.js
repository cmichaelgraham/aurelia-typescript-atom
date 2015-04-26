define(["require", "exports", 'aurelia-framework', 'aurelia-logging-console'], function (require, exports, aurelia_framework_1, aurelia_logging_console_1) {
    aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
    aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.levels.debug);
    function configure(aurelia) {
        aurelia.use
            .defaultBindingLanguage()
            .defaultResources()
            .router()
            .eventAggregator();
        // .plugin('./path/to/plugin');
        aurelia.start().then(function (a) { return a.setRoot('views/app', document.body); });
    }
    exports.configure = configure;
});
