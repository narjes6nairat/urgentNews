```markdown
# urgentNews

A Dockerized web application to display urgent news articles with a MySQL database, Node.js backend, and Apache frontend.

## Project Description

The **urgentNews** project is a web application that displays urgent news articles. It consists of three main components:

1. **MySQL Database**: Stores the news articles.
2. **Node.js Backend API**: Fetches news articles from the database and serves them to the frontend.
3. **Apache Frontend**: Displays the news articles in a web browser.

The entire application is containerized using Docker, making it easy to build, run, and manage the app.

## Requirements

- Docker
- Docker Compose

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/urgentNews.git
   cd urgentNews
   ```

2. Build and run the application using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This command will build and start the MySQL database, Node.js backend, and Apache frontend. Once everything is running, open your browser and go to **`http://localhost:8080`** to view the news articles.

## Usage

- **Frontend**: Open your browser and go to **`http://localhost:8080`** to view the news articles.
- **Backend**: The backend API is available at **`http://localhost:3000/getUrgentNews`**. You can send a GET request to this endpoint to retrieve the news articles in JSON format.

Example command to fetch the news articles:

```bash
curl http://localhost:3000/getUrgentNews
```

## Docker Instructions

### Build the images

To build the Docker images separately, run the following commands:

- **Frontend**: Navigate to the `frontend` directory and run:

   ```bash
   docker build -t urgentnews-frontend .
   ```

- **Backend**: Navigate to the `backend` directory and run:

   ```bash
   docker build -t urgentnews-backend .
   ```

- **Database**: Navigate to the `database` directory and run:

   ```bash
   docker build -t urgentnews-database .
   ```

### Run with Docker Compose

The easiest way to run the application is by using Docker Compose. From the root of the project, run:

```bash
docker-compose up --build
```

This will automatically build and start all the services defined in `docker-compose.yml`.

## Docker Compose Configuration

The `docker-compose.yml` file defines three services:

1. **database**: MySQL container with the `urgent_news` database.
2. **backend**: Node.js container that connects to the MySQL database and serves the API.
3. **frontend**: Apache container that serves the news articles in the web browser.

These services communicate with each other using Docker's internal networking.