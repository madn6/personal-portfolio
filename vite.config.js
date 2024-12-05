import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
	plugins: [react(svgr)],
	server: {
		host: '0.0.0.0', // Bind to all network interfaces
		port: 5173, // Ensure it's on port 5173
		strictPort: true, // Fails if port is already in use
		open: false // Prevents auto-opening in the desktop browser
	}
});
