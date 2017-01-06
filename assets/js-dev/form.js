/**
 * Created by Pamela on 2016-12-19.
 */
$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');
    var $input;

    function onInputFocus(event) {
        var $target = $(event.target);
        var $parent = $target.parent();
        $parent.addClass('input--filled');
    };

    function onInputBlur(event) {
        var $target = $(event.target);
        var $parent = $target.parent();

        if (event.target.value.trim() === '') {
            $parent.removeClass('input--filled');
        }
    };

    $(document).ready(function() {
        $input = $('.input__field');

        // in case there is any value already
        $input.each(function(){
            if ($input.val().trim() !== '') {
                var $parent = $input.parent();
                $parent.addClass('input--filled');
            }
        });

        $input.on('focus', onInputFocus);
        $input.on('blur', onInputBlur);
    });

    // TODO: The rest of the code will go here...
    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        var formData = $(form).serialize();


        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });




    });
});