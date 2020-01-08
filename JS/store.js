$('#send').click(() => {
    console.log('ACTION::ADD');
    let fistName = $('#nom').val();
    let lastName = $('#prenom').val();
    let address = $('#address').val();
    let birthday = $('#datepicker').val();
    let mail = $('#email').val();

    contactStore.add(fistName, lastName, birthday, address, mail);

    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
        '<tr><td>' + fistName + '</td><td>' + lastName + '</td><td>' + birthday + '</td><td>' + address + '</td><td>' + mail + '</td><td>';

});

var contactStore = (function() {

    // variable privée
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function(_name, _firsname, _date, _adress, _mail) {
            var contact = {
                name: _name,
                firstname: _firsname,
                date: _date,
                adress: _adress,
                mail: _mail
            };
            // ajout du contact à la liste
            contactList.push(contact);

            return contactList;
        },

        getList: function() {
            return contactList;
        }
    }
})();