# HackRPI2025

Best Sun: Solar Panel Feasibility and Potential Estimator
Inspiration
Our inspiration for this project stems from a desire to promote the use of renewable energy and contribute to a more sustainable world. One of the main barriers to widespread adoption of solar energy is determining whether solar panel installation is a worthwhile investment. Since the benefits of solar energy can vary greatly from one location to another, our goal is to provide a tool that helps users easily assess whether installing solar panels at their location makes sense for them.

What It Does
Best Sun is a tool designed to help users explore the potential for solar energy installation at any given location. By integrating the Google Places API, users can enter a location (e.g., their home address), and the app retrieves relevant place data. The app then uses the Google Solar API to provide information about solar panel feasibility, including:

Estimated energy output
Potential cost savings
Environmental impact
This tool aims to simplify the process of evaluating solar energy potential, making it easy for anyone to assess if solar panels are a viable option for their property.

How We Built It
We developed Best Sun using React for the front end, with TypeScript for enhanced type safety and scalability. The application leverages several key APIs to retrieve and display relevant data:

Google Places API: Used to gather precise location data, such as the coordinates of a home or other place of interest.
Google Solar API: Provides information on solar panel feasibility, such as energy production estimates, potential savings, and environmental impact metrics.
We focused on creating an intuitive and efficient user interface, allowing users to easily search for locations and view solar data without hassle.

Challenges We Ran Into
One of the major challenges we faced was managing the large amount of data returned by the Google Solar API. The API provides detailed information about solar potential, including estimates for energy output, cost breakdowns, and environmental metrics. We had to learn how to filter and process this data to present only the most relevant information to the user. This experience taught us valuable skills in handling and displaying large data sets efficiently in a React application.

Accomplishments We're Proud Of
We are incredibly proud of the fact that we successfully integrated multiple APIs into a fully functional, user-friendly application. Despite the challenges with processing and filtering data from the Solar API, we were able to ensure that the app provides accurate and reliable solar potential data. This project highlights our ability to combine complex data sources and deliver a practical tool for users interested in sustainable energy.

What We Learned
Through this project, we gained valuable experience working with the Google API ecosystem, particularly in terms of handling API rate limits and managing error responses within a React application. Additionally, we sharpened our TypeScript skills, especially when it came to typing complex API responses, which helped make the application more robust and reliable.

What's Next for Best Sun
Looking ahead, we plan to expand the app with more advanced features, including:

Data visualizations: Adding interactive graphs and charts to better illustrate energy output projections and other solar-related metrics.
Support for other renewable energy sources: Providing users with a more comprehensive tool for evaluating the potential of other renewable energy solutions, such as wind or geothermal.
These enhancements will help make Best Sun an even more powerful tool for those looking to explore and invest in renewable energy.
