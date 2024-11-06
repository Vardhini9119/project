# Use a simple web server to serve static HTML content
FROM nginx:alpine

COPY ./frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
