FROM cs50/server
EXPOSE 8080

# provides path to static files
CMD ["passenger", "start"]
