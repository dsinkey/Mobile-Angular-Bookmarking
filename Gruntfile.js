module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: { separator: ';' },
            dist: {
                src: [
                    'src/bower_components/modernizr/modernizr.js',
                    'src/bower_components/jquery/dist/jquery.js',
                    'src/bower_components/angular/angular.js',
                    'src/bower_components/angular-route/angular-route.js',
                    'src/bower_components/angular-touch/angular-touch.js',
                    'src/bower_components/angular-animate/angular-animate.js',
                    'src/bower_components/bootstrap/dist/js/bootstrap.js',
                    'src/js/app.js', 'src/js/controllers.js', 'src/js/filters.js' ],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/css/' },
                    { expand: true, cwd: 'src/bower_components/bootstrap/dist/css', src: ['bootstrap.css'], dest: 'dist/bower_components/bootstrap/dist/css' },
                    { expand: true, cwd: 'src/views', src: ['**'], dest: 'dist/views/' }
                ]
            }
        },
        targethtml: {
            dist: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.registerTask('dist', ['concat', 'targethtml', 'copy']);
};
