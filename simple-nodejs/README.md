# Simple Node.js application

## Container lifecycle for developer

Build the image.

```bash
docker build -t simple-nodejs 01-simple-nodejs
```

Run container using this image.

```bash
docker run -it -p 8000:8000 simple-nodejs
```

Check that application is running.

```bash
curl http://localhost:8000
```

Add remote repository tag to the image.

```bash
docker tag simple-nodejs pdiroot/simple-nodejs:v1
```

Push the image to remote repository.

```bash
docker push pdiroot/simple-nodejs:v1
```

## Container lifecycle for QA engineer

Pull the image from remote repository.

```bash
docker pull pdiroot/simple-nodejs:v1
```

Run container using this image and test it.

```bash
docker run -it -p 8000:8000 pdiroot/simple-nodejs:v1
```

## Container lifecycle for DevOps engineer

Deploy application on kubernetes cluster using multiple replicas.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: simple-nodejs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: simple-nodejs
  template:
    metadata:
      labels:
        app: simple-nodejs
    spec:
      containers:
        - name: app
          image: pdiroot/simple-nodejs:v1
          ports:
            - containerPort: 8000
              name: app
```
