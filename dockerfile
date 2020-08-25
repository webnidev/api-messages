FROM node:12-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/api-messages

COPY --chown=node backend/package*.json ./

RUN npm install

COPY --chown=node ./backend .

RUN npm run build

CMD ["npm", "run", "start"]