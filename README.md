
🚀 Cloud Run Project (React + Node.js)<br />

🧩 Problem Statement:<br />
This project demonstrates a lightweight web application deployed on Google Cloud Run, using a React frontend and a Node.js backend. <br />The goal is to provide a fully containerized, scalable all container images are hosted on Docker Hub for simplicity and portability.<br />

☁️ GCP Services Used:<br />
Cloud Run – To host both the frontend and backend containers.<br />
Cloud IAM – For securing and managing access.<br />
Cloud Logging – For centralized logs.<br />

Note: Docker Hub is used to host container images instead of Artifact Registry.<br />

📦 Deployment Instructions:<br />

1-Push Docker images to Docker Hub:<br />

````
docker build -t your-dockerhub-username:tag
docker push your-dockerhub-username
````

2- Deploy to Cloud Run:<br />

````
gcloud run deploy my-fullstack-app \
  --image docker.io/your-dockerhub-username/fullstack-app \
  --platform managed \
  --region YOUR_REGION \
  --allow-unauthenticated
````

We can also use Cloud Console instead of gcloud commands. <br />

3- Access your app:<br />

https://my-fullstack-app-932992916573.us-central1.run.app


