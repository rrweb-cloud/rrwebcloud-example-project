# rrwebCloud Example Project

This is a simple example project demonstrating how to integrate the [`@rrwebcloud/js-client`](https://www.npmjs.com/package/@rrwebcloud/js-client) into a Vite application.

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher recommended)

## Getting Started

1.  **Install dependencies:**

    ```bash
    bun install
    ```

    *Note: This project uses `resolutions` in `package.json` to manage specific versions of `@rrweb` packages required by the alpha client.*

2.  **Start the development server:**

    ```bash
    bun run dev
    ```

3.  **Open the application:**

    Navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Features

- **rrwebCloud Integration**: Demonstrates how to import and configure the rrwebCloud client.
- **Recording**: Automatically starts recording when the page loads.
- **Console Output**: Logs the recording ID and retrieval URL to the browser console.

## Configuration

The rrwebCloud configuration can be found in `src/main.js`. It includes examples of:

- Setting a custom `serverUrl`
- Configuring `blockSelector`
- Managing `captureAssets` settings
- Adding custom metadata (user ID, session ID, etc.)

## License

MIT
