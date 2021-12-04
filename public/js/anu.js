const base_url = 'https://erdwpe.codes')
 $.ajax({
        type: "POST",
        url: base_url + '/create',
        timeout: 30000,
        data: {
            url: $('#url').val(),
            costum: $('#costum').val()
        },
        dataType: "json",