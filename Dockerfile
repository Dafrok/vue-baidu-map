FROM node
ADD . /code
WORKDIR /code
RUN npm i
CMD sudo npm run