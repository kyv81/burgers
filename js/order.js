$(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '/server.php',
            type: 'POST',
            data: formData,
            success: function(data) {

                var popup = data.status ? '#send' : '#error';

                $.fancybox.open({
                    src: popup
                })

              }
          })
      })

      $('.send__close, .error__close').on('click', function(e){
        e.preventDefault();
        $.fancybox.close();
    })
})
