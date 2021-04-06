function getCountries() {
  $(function () {
    $('#btnShowCountries').on('click', function () {
      $ajax('http://localhost:8000/countries', {
        success: function (data, status, res) {
          console.log(res);
          return;
        },
      });
    });
  });
}

getCountries();
