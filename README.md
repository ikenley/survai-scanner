# survai-scanner

A webapp which allows users to transcribe photos of surveys using AI (because everything must use AI nowadays).

[Live demo](https://survey.ikenley.com/) (invite only)

## IaC

See [https://github.com/ikenley/template-infrastructure](https://github.com/ikenley/template-infrastructure)

---

## Getting Started

```
# Install aws ecr cli helper
# https://github.com/awslabs/amazon-ecr-credential-helper

# Configure env vars
cp ./.env.example ./.env

# Start docker dependencies
make deps

# Run API service
cd ./api
npm i
npm run start

# Run front-end service
cd ./front-end
npm i
npm run start
```

---

- ai.image table

```
aws sqs send-message --queue-url https://sqs.us-east-1.amazonaws.com/924586450630/ik-dev-ai-job-runner --message-body '{"imageId":"ed0f0da5-876f-4356-9bf1-083c4001276f","prompt":"A fancy cocktail in the style of art deco","userId":"12a9e338-3d23-47eb-8804-78f7e723d81d","email":"ikenley6@gmail.com"}'

aws dynamodb describe-table --table-name test_image_metadata --no-paginate > dynamo.json

```
