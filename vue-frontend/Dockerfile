# Use the official Cypress image with all dependencies
FROM cypress/base:14.17.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js application
RUN npm run build

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port that the app runs on
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "dist"]
