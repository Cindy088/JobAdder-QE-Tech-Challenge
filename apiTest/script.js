pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

const jsonData = pm.response.json();

pm.test('City name is present', function () {
  pm.expect(jsonData.data[0].city_name).to.exist;
});

pm.test('Temperature is a valid number', function () {
  pm.expect(jsonData.data[0].temp).to.be.a('number');
});

pm.test('Wind speed is valid', function () {
  pm.expect(jsonData.data[0].wind_spd).to.be.a('number');
});

pm.test('Weather description is present', function () {
  pm.expect(jsonData.data[0].weather.description).to.exist;
});
