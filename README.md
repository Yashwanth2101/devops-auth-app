# DevOps Auth App

This project demonstrates a DevOps-based web application with:
- HTML frontend
- Node.js authentication backend
- PostgreSQL database
- Docker & Docker Compose
- Kubernetes deployment
- CI/CD pipeline
- Infrastructure as Code (Terraform)

## Run Locally
docker-compose up -d

## Kubernetes
kubectl apply -f k8s/

devops-auth-app/
│
├── frontend/
│   ├── index.html
│   └── Dockerfile
│
├── backend/
│   ├── app.js
│   ├── auth.js
│   ├── db.js
│   ├── package.json
│   └── Dockerfile
│
├── database/
│   └── init.sql
│
├── k8s/
│   ├── db-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── secrets.yaml
│   └── services.yaml
│
├── docker-compose.yml
├── terraform/
├── .github/workflows/
└── README.md

