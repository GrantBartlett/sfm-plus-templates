/**
 * Low search ajax
 */

$(function () {

    var $form = $('#search-form'), // Search form
        $target = $('#search-results'), // Results container
        rp = 'search/ajax-results'; // Template for results only

    // Function to execute on success
    var success = function (data, status, xhr) {
        $target.html(data);
    };

    // Hijack the form on submit
    $form.submit(function () {

        // Tell target we're loading
        $target.html('<p>Loading...</p>');

        // Add custom result page to data
        var data = $form.serialize()
            + '&result_page=' + rp;

        // Perform the ajax call
        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: data,
            success: success,
            dataType: 'html'
        });

        // Don't submit the form afterwards
        return false;
    });
});