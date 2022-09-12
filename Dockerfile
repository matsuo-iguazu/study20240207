FROM registry.access.redhat.com/ubi8:8.4

RUN dnf -y install make gcc-c++ python3

RUN dnf module -y enable nodejs:14
RUN dnf module -y install nodejs:14

COPY . /src
WORKDIR /src

RUN npm install

CMD ["node", "app.js"]
