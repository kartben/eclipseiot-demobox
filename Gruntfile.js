module.exports = function(grunt) {

    grunt.initConfig({
        'request-progress': {

            'webm-sample': {
                options: {
                    dst: './big_buck_bunny.webm',
                    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm'
                }
            },
            'other': {
                options: {
                    dst: './xxx.jpg',
                    src: 'http://blog.benjamin-cabe.com/wp-content/uploads/2015/08/Arduino_Uno_-_R3-300x300.jpg'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-request-progress');

    grunt.registerTask('default', [
        'request-progress:*'
    ]);


};
