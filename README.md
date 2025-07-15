# Keep Name Reproduction

This is a bug reproduction project that demonstrates the use of Primer's action-list element with rolldown-vite.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000` to see the action-list demo. In this setup, you can see `Registering custom element: action-list` which is _correct_. The class names are being preserved.

4. Run tests with `npm test`. In this environment you see `Registering custom element: action-list-element2` which is _incorrect_. The class names are not being preserved, so the custom element is not registered correctly and the test fails.
