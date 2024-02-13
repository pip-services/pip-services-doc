---
type: docs
no_list: true
title: "Step 5. Publishing a microservice container"
linkTitle: "Step 5. Publish"
---

Now that all of the preparational work has been done, all that's left is to publish the image of the container we've created with our microservice to a Docker Registry. In this tutorial, we'll be demonstrating the process of publishing to a free registry on Docker Hub, so you'll be needing a Docker Hub account to continue. If you don't have a Docker ID yet, you can get one by registering on their site: https://hub.docker.com/.

In commercial projects, we tend to use private Docker registries instead of DockerHub. Private registries function in a similar manner to DockerHub, so with minimal modifications to the scripts you can use them as well.

Login to Docker Hub using your credentials and create a repository for hosting the microservice's image that we built. For simplicity, let's name the repository **test_registry**.

It's worth pointing out that a version number tag is appended to the name of the image. The tagging system allows us to control the versions of images we've published. By changing a service's tag, you can publish more than one version of your service to the repository. This way you can start using the new version, without breaking any other systems that are still using an older version of your service.

Since our scripts use values from the **component.json** file, make sure to edit that file as needed before you package your service

To automate the publication process, create a **publish.ps1** file with the following script inside:


```ps1
#!/usr/bin/env pwsh
‍
Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# Get component data and set necessary variables
$component = Get-Content -Path "component.json" | ConvertFrom-Json
$rcImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)-rc"

# Define server name
$pos = $component.registry.IndexOf("/")
$server = ""
if ($pos -gt 0) {
    $server = $component.registry.Substring(0, $pos)
}

# Automatically login to server
if ($env:DOCKER_USER -ne $null -and $env:DOCKER_PASS -ne $null) {
    docker login $server -u $env:DOCKER_USER -p $env:DOCKER_PASS
}
‍
# Push image to docker registry
docker push $rcImage

```

Before running this script, be sure to initialize the **DOCKER_USER** and **DOCKER_PASS** variables in your environment, as these will be used for authorization in Docker Hub.

Run the script using the following command:

```bash
./publish.ps1
```

While running, the script will generate a name for the image using the data in the component.json file, authorize itself in the Docker Hub service, and push the image to the repository.

Please wait for the image to finish uploading. Once uploaded, the image will become available for use, alongside the other images in the repository.

The publishing stage is the last step of a microservice's Dockerized development process. However, sometimes there occurs the need to just run a microservice for demonstration or testing purposes. [Step 6](../step5) will focus on how we can use Docker to help us do that as well.

<span class="hide-title-link">

### [Step 6. Running a dockerized microservice.](../step5)
    
</span>
