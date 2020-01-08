$(function() {

    $('#send').click(function(event) {
        event.preventDefault();
        var contactList = contactStore.getList();

        var index = 0;

        $('.error').each(function() {
            $(this).text('');
        });

        $('.modal-body').text('');

        $('.validate').each(function() {
            var self = $(this);
            var self_id = self.attr('id');
            var id_error_elt = self_id + '_error';
            if (self.val().length === 0) {
                $('<p>Le champ ' + self_id + ' ne doit pas être vide</p>').appendTo($(`#${id_error_elt}`));
            } else if (self.val().length > 0 && self.val().length < 4) {
                $('<p>Le champ ' + self_id + ' doit faire plus de 4 caractères</p>').appendTo($(`#${id_error_elt}`));
            } else {
                index += 1;
            }
        });

        if (index === 5) {
            var img_link = `https://maps.googleapis.com/maps/api/staticmap?center=${ $("#address").val().replace(/ /g, '') }&zoom=14&size=400x400&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
            $(`<a href="http://maps.google.com/maps?q=Paris"><img src="${img_link}"></a>`).appendTo($('#map'));
            //$('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722646796!2d2.2770202429886357!3d48.85883773936647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1574512831248!5m2!1sfr!2sfr" width="450" height="320" frameborder="0" style="border:0;" allowfullscreen=""></iframe>').appendTo($(".modal-body"));
            $(`<p>${ $("#address").val() }</p>`).appendTo($('.modal-body'));
        } else {
            $('#myModalTitle').text('Message Modal');
            $('.modal-body').text('Veuillez remplir tous les champs svp.')
        }
    });
});