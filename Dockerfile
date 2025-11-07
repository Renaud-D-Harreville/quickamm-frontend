FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first.
# This takes advantage of Docker's layer caching.
# If these files don't change, 'npm install' won't re-run.
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Run the build command to create the static assets
RUN npm run build

# --- Stage 2: The Server ---
# Use a lightweight Nginx image
FROM nginx:stable-alpine

# Copy the built static files from the "builder" stage
# into the Nginx public HTML directory.
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration
# This file tells Nginx how to handle Vue Router.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80
