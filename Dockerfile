FROM cs50/server
EXPOSE 8080

RUN npm i -g n
RUN n 6.9.4
