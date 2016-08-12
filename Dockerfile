FROM cs50/server
EXPOSE 8080
CMD ["passenger", "start", "--app-type=php"]
