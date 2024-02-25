FROM node:16.14.2 as node

WORKDIR /app
VOLUME /app
COPY . .
RUN npm install 
RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alpine
COPY --from=node /app/dist/angular-3-app /usr/share/nginx/html
