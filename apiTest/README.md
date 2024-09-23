# API Automation Test (Postman)

## Test steps:

1. ### Sign up to the Weather API for Free to Get the API Key:

- Go to https://www.weatherbit.io/account/create to sign up for the free version (21-day trial).
- You will receive a confirmation email; click Activate Your Account to access your dashboard and see your API Key.

2. ### Create a new collection in Postman "Weatherbit API Automation":

- Open Postman, In the left sidebar, click on Collections.
- Click New Collection and name it, for example, "Weatherbit API Automation".
- Save the collection.

3. ### Create the Lat/Lon Request, and run the request manually to validate the tests:

- In your new collection, click Add Request.
- Name the request Current weather based on Latitude and Longitude.
- Set the method to GET.
- Enter the following URL (replace the “YOUR_API_KEY” with your actual API key):
  https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=YOUR_API_KEY
  Note:
  - lat: Latitude (35.7796)
  - lon: Longitude (-78.6382)
  - key: Your API key from Weatherbit.
- Click save.
- Click Send to manually run the API requests.
- Check the Test Results at the bottom of the Postman window to inspect the response.

4. ### Create the Postcode Request, and run the request manually to validate the Tests:

- In the same collection, click Add Request.
- Name the request Current weather based on Postcode.
- Set the method to GET.
- Enter the following URL (replace the “YOUR_API_KEY” with your actual API key):
  https://api.weatherbit.io/v2.0/current?postal_code=27601&country=US&key=YOUR_API_KEY
  Note:
  - postal_code: 27601 (for Raleigh, NC)
  - country: US
  - key: Your API key from Weatherbit
- Click Save.
- Click Send to manually run the API request.
- Check the Test Results at the bottom of the Postman window to inspect the response.

5. ### Store the API Key in Postman Environment:

- Go to Manage Environments in Postman.
- Click Add to create a new environment, name it (e.g., Weatherbit Environment).
- Add a variable called API_KEY and set the value to your API key (e.g., f2173cac655240cb899bc1407203f554) and save.
- Select "Weatherbit Environment" in the environment dropdown at the top right of Postman.

6. ### Add Tests for the Latitude/Longitude Request:

- Go to the Tests tab for the Current weather based on Latitude and Longitude request.
- Update the requests to use variables for lat, lon: https://api.weatherbit.io/v2.0/current?lat={{lat}}&lon={{lon}}&key={{API_KEY}}
- After running the requests in step 3, inspect the response to understand the structure.
- Click on Scripts tab.
- Add sample scripts from script.js to automate the validation of the response.

7. ### Add Tests for the Postal Code Request:

- Go to the Tests tab for the Current weather based on Postcode request.
- Update the requests to use variables for post code:
  https://api.weatherbit.io/v2.0/current?postal_code={{postal_code}}&country=US&key={{API_KEY}}
- After running the requests in step 4, inspect the response to understand the structure.
- Click on Scripts tab.
- Add sample scripts from script.js to automate the validation of the response.

8. ### Automate the Tests for Multiple Locations:

- Create a CSV file (e.g. locations.csv) with multiple lat/lon pairs and postal codes:
  example:
  lat,lon,postal_code
  35.7796,-78.6382,27601
  34.0522,-118.2437,90001
  40.7128,-74.0060,10001
  -33.8688,151.2093,2000
  48.8566,2.3522,75000

- **Note**:
  CSV File Mapping: Postman will replace the placeholders ({{lat}}, {{lon}}, {{postal_code}}) in the requests with the corresponding values from the CSV file for each iteration.

- Go to Collection Runner in Postman.
- Drag your Weatherbit API Automation collection into Run Order.
- Select both Current weather based on Latitude and Longitude and Current weather based on Postcode files.
- Select "Weatherbit Environment" in the environment dropdown at the top right of Postman.
- Upload the CSV file with multiple locations.
- Click Run to execute the tests for each location.

9. ### Generate cURL Commands:

- For each request, click on the Code button (</>) next to the request URL.
- Select cURL from the dropdown.
- Copy the generated cURL command to use in the terminal or other tools.
- Examples:

```bash

curl --location --globoff 'https://api.weatherbit.io/v2.0/current?lat={{lat}}&lon={{lon}}&key=f2173cac655240cb899bc1407203f554'
```

```bash
curl --location --globoff 'https://api.weatherbit.io/v2.0/current?postal_code={{postal_code}}&country=US&key=f2173cac655240cb899bc1407203f554'
```
