# HackRPI2025

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Best Sun: Solar Panel Feasibility and Potential Estimator</h1>

  <h2>Inspiration</h2>
  <p>
    Our inspiration for this project stems from a desire to promote the use of renewable energy and contribute to a more sustainable world. One of the main barriers to widespread adoption of solar energy is determining whether solar panel installation is a worthwhile investment. Since the benefits of solar energy can vary greatly from one location to another, our goal is to provide a tool that helps users easily assess whether installing solar panels at their location makes sense for them.
  </p>

  <h2>What It Does</h2>
  <p>
    Best Sun is a tool designed to help users explore the potential for solar energy installation at any given location. By integrating the Google Places API, users can enter a location (e.g., their home address), and the app retrieves relevant place data. The app then uses the Google Solar API to provide information about solar panel feasibility, including:
  </p>
  <ul>
    <li>Estimated energy output</li>
    <li>Potential cost savings</li>
    <li>Environmental impact</li>
  </ul>
  <p>
    This tool aims to simplify the process of evaluating solar energy potential, making it easy for anyone to assess if solar panels are a viable option for their property.
  </p>

  <h2>How We Built It</h2>
  <p>
    We developed Best Sun using <strong>React</strong> for the front end, with TypeScript for enhanced type safety and scalability. The application leverages several key APIs to retrieve and display relevant data:
  </p>
  <ul>
    <li><strong>Google Places API</strong>: Used to gather precise location data, such as the coordinates of a home or other place of interest.</li>
    <li><strong>Google Solar API</strong>: Provides information on solar panel feasibility, such as energy production estimates, potential savings, and environmental impact metrics.</li>
  </ul>
  <p>
    We focused on creating an intuitive and efficient user interface, allowing users to easily search for locations and view solar data without hassle.
  </p>

  <h2>Challenges We Ran Into</h2>
  <p>
    One of the major challenges we faced was managing the large amount of data returned by the Google Solar API. The API provides detailed information about solar potential, including estimates for energy output, cost breakdowns, and environmental metrics. We had to learn how to filter and process this data to present only the most relevant information to the user. This experience taught us valuable skills in handling and displaying large data sets efficiently in a React application.
  </p>

  <h2>Accomplishments We're Proud Of</h2>
  <p>
    We are incredibly proud of the fact that we successfully integrated multiple APIs into a fully functional, user-friendly application. Despite the challenges with processing and filtering data from the Solar API, we were able to ensure that the app provides accurate and reliable solar potential data. This project highlights our ability to combine complex data sources and deliver a practical tool for users interested in sustainable energy.
  </p>

  <h2>What We Learned</h2>
  <p>
    Through this project, we gained valuable experience working with the <strong>Google API ecosystem</strong>, particularly in terms of handling API rate limits and managing error responses within a React application. Additionally, we sharpened our TypeScript skills, especially when it came to typing complex API responses, which helped make the application more robust and reliable.
  </p>

  <h2>What's Next for Best Sun</h2>
  <p>
    Looking ahead, we plan to expand the app with more advanced features, including:
  </p>
  <ul>
    <li><strong>Data visualizations</strong>: Adding interactive graphs and charts to better illustrate energy output projections and other solar-related metrics.</li>
    <li><strong>Support for other renewable energy sources</strong>: Providing users with a more comprehensive tool for evaluating the potential of other renewable energy solutions, such as wind or geothermal.</li>
  </ul>
  <p>
    These enhancements will help make Best Sun an even more powerful tool for those looking to explore and invest in renewable energy.
  </p>

</body>
</html>
