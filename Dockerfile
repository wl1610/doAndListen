FROM node:10.16.3-alpine as cache
LABEL stage=cache
WORKDIR /usr/src/app/
COPY package.json ./
RUN npm install --silent --registry https://registry.npm.taobao.org

FROM cache as builder
LABEL stage=intermediate
COPY ./ ./
RUN npm run build

FROM 172.16.0.185:5000/nginx:1.16.1-alpine-production
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
