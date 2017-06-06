$(function(){
  $('.J_editItem').on('click', function(){
    $.confirm({
        closeIcon: true,
        boxWidth: '30%',
        useBootstrap: false,
        title: 'Record Edit',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
          'From <input type="text" placeholder="HH:MM" class="name form-control" required /> to <input type="text" placeholder="HH:MM" class="name form-control" required /> <br>' +
          'Subject: <input type="text" class="name form-control" required /> <br>'+
          'Number of Attendees: <input type="Number" class="name form-control" required /> <br>'+
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Submit',
                btnClass: 'btn-blue',
                action: function () {
                    location.href = './myrecords.html';
                }
            },
            cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
  });
})
