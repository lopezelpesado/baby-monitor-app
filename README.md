# Baby Monitor App

A full stack app that simulates monitoring and displaying baby temperature readings.

## Overview

This is a monorepo managed with Yarn workspaces. There are 2 workspaces, both written in TypeScript:

1. `apps/backend`: A Node Express server that generates random temperature readings each second for 5 minutes and provides them on the `/temperatures` endpoint.

2. `apps/frontend`: A React client that periodically fetches temperature readings from the backend and displays the most recent reading.

## Setup

1. Ensure you are using Node v22.11.0 (an `.nvmrc` is included so you can run `nvm use` to switch to the correct version of Node).

2. Run `yarn` at the root of the repo to install dependencies (ensure you are using Yarn v1, [installation instructions here](https://classic.yarnpkg.com/lang/en/docs/install)).

3. You can run both the frontend and backend in the same terminal session by running `yarn workspace backend dev & yarn workspace frontend dev`. Alternatively, you can run the backend with `yarn workspace backend dev` or frontend with `yarn workspace frontend dev`.

## Enhancements

### Backend

- To better simulate receiving temperature readings from a device, a separate "device" app could be created that generated the readings and sent them to an endpoint on the backend. The backend could then be changed to ingest these readings, store them in a database and then serve client requests with readings from the database.
- The backend currently sends all the temperature readings it has. The `/temperatures` endpoint could be updated to accept a query parameter allowing the frontend to send a timestamp with it's request and then only send temperature readings since that timestamp allowing the frontend to request only readings it doesn't have yet. This would avoid large amounts of data being transferred and the frontend having to process a large amount of data at once.

### Frontend

- The accessibility of the frontend could be improved with the use of ARIA labels. Correctly labelling the temperature reading component and it's error and loading messages would improve the user experience for people using a screen reader.
- To improve usability the colour of the temperature reading could be changed based on whether it is too high or low allowing users to gain more information at a glance.
- A graph could be added below the temperature reading to show temperature change over time that would be updated as new readings came in. This would allow users to see concerning temperature trends.
