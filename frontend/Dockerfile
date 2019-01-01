FROM node

COPY . /app/frontend
WORKDIR /app/frontend

RUN npm install
ENV mode="development"

EXPOSE 8080
CMD ["npm", "start"]