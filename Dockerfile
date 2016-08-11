FROM cs50/server
EXPOSE 8080
RUN apt-get update && apt-get install -y nodejs-legacy
CMD ["passenger", "start"]
