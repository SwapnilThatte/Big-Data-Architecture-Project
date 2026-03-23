# RTD Transit App

This repository contains:

- An Expo mobile client for browsing nearby RTD transit data
- A FastAPI service that exposes GTFS-backed transit endpoints
- A separate live data collector that can ingest GTFS-realtime feeds

The frontend and API are now wired to be deployment-compatible on GCP without requiring full live integration on day one.

## Frontend setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file and point it at your deployed API:

   ```bash
   cp .env.example .env
   ```

3. Set `EXPO_PUBLIC_API_BASE_URL` to your HTTPS FastAPI URL, for example:

   ```bash
   EXPO_PUBLIC_API_BASE_URL=https://rtd-api-xxxxx-uc.a.run.app
   ```

4. Start the Expo app:

   ```bash
   npx expo start
   ```

If the API URL is missing or unreachable, the app keeps rendering the current UI shell and shows fallback cards instead of crashing.

## Backend setup

API setup and Cloud Run notes live in [api/README.md](api/README.md).

## Architecture notes

- The API expects preloaded static GTFS tables such as `stops`, `routes`, `trips`, `stop_times`, and `shapes`.
- GTFS-realtime ingestion remains a separate deployment concern under `live_data/`.
- Redis-backed realtime enrichment is optional in this phase; the API will return valid JSON even when realtime data is unavailable.
