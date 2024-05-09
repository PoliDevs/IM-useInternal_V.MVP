FROM --platform=linux/amd64 node:22-alpine as BUILD

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY certificates/cloudflare.pem /etc/ssl/certs/

COPY certificates/cloudflare.key /etc/ssl/private/

COPY default-ssl.conf /etc/nginx/conf.d/default-ssl.conf

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]