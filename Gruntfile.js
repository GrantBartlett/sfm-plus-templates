module.exports = function (grunt) {

    var js_src_files = [
        'node_modules/jquery/dist/cdn/*.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery-lazyload/jquery.lazyload.js',
        'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
        'node_modules/packery/dist/packery.pkgd.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'src/**/**/.js',
        'src/**/*.js'
    ];

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true, cwd: 'node_modules/font-awesome/', src: ['fonts/*'], dest: 'www/assets/', filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'node_modules/slick-carousel/slick', src: ['fonts/*'], dest: 'www/assets/', filter: 'isFile'
                    }
                ]
            }
        },

        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: js_src_files,
                dest: 'www/assets/js/scripts.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["src/less/**"]
                },
                files: {
                    "www/assets/css/main.css": "src/less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))({advanced: true})
                    ]
                },
                files: {
                    "www/assets/css/main.min.css": "src/less/main.less"
                }
            }
        },

        watch: {
            config: {
                files: ['package.json', 'gruntfile.js'],
                tasks: ['exit']
            },
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('Finished watching in ' + time + ' ms at' + (new Date()).toString());
                }
            },
            less: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['src/less/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: '**/*.js',
                tasks: ['concat'],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['src/**/*']
            }
        }

    });

    //grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('init', ['copy', 'watch']);

    grunt.registerTask('exit', 'Just exits.', function() {
        process.exit(0);
    });
};