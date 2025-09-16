FROM node:18-alpine
WORKDIR /app
COPY  package.json tsconfig.json  ./
COPY index.ts ./


RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "node" , "dist/index.js" ]