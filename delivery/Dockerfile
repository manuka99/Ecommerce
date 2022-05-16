FROM node:14-alpine

# set the workingdirectory path
WORKDIR /app

# copy source code to the root directory
COPY . .

# run dependencies
RUN npm install

# EXPOSE 8080
EXPOSE 8080

# run the commands when the container begins to run
CMD ["node", "app.js"]