# Use official Node image
FROM node:20-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]