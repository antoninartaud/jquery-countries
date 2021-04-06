function getCountries() {
  $(function () {
    $.ajax('http://localhost:8000/countries', {
      success: function (data, status, res) {
        let listCountries = data;
        // console.log(listCountries);
        return console.log(listCountries);
      },
    });
  });
}

$('#btnShowCountries').on('click', function () {
  getCountries();
});
