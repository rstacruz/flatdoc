# Versus API Endpoints

This documentation lists the API endpoints required for engineers on the Versus team to interface with Versus Backend. The API endpoints are generally grouped into the following.

 * Clients
 * Dashboard
 * Email Templates
 * Profanity Filter

*Current version: [v0.1.0][dist]*


# Clients

This has functions for managing clients
 * Create Client: create a new Versus Sentiment Client
 * Get Client: get details about a Versus Sentiment Client
 * Update Client: onboard a Versus Sentiment Client
 * Create Member: register someone who was added to the list of team members

# Dasboard

This has functions for retrieving mentions
 * Today Summary: Today's mentions on social media, news, and other sources
 * Week Summary: This week's mentions on social media, news, and other sources
 * Month Summary: This month's mentions on social media, news, and other sources
 * All Time Summary: Total aggregate on our systems of mentions on social media, news, and other sources
 * Today Details: Mentions from social media, news, and other sources grouped by source for today
 * Week Details: Mentions from social media, news, and other sources grouped by source for the past week
 * Today Details: Mentions from social media, news, and other sources grouped by source for the past month
 * All Time Details: Mentions from social media, news, and other sources grouped by source for all content on our systems

# Email Templates

This has functions for sending out emails
 * Custom Alerts: Notify an admin that custom alerts have been set for their account
 * Dashboard Ready: Notify an admin that the Versus Sentiment dashboard has data for viewing
 * Designated Primary Email: Notify an admin that they have been designated as a primary contact
 * Designated Team Member: Notify someone that they have been added as a team member to Versus Sentiment
 * Respond to Article: Notify a recipient to respond to a social media post
 * Welcome to Versus: Notify the recipient that their Versus Sentiment account has been created
 * Your Report: Dispatch a periodic report

# Profanity Filter

This function will take a string and return a HTML formattted string with tags that decorate profane words.


# Getting started

All endpoints are REST. The default method is POST unless otherwise specified. There is a base URL to which you will need to append the endpoint.

> Method: POST

> Base_URL: https://us-central1-versus-dev-212614.cloudfunctions.net/
