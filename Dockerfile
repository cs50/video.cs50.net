FROM cs50/server
EXPOSE 8080

# temporary until server50 supports such
RUN sed -i 's#\# enable PHP-FPM#location / { try_files $uri /index.html =404; }#' /etc/opt/cs50/server50/nginx.conf.erb
