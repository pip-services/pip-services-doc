---
type: docs
no_list: true
title: "REST Client"
linkTitle: "REST Client"
description: >-
     How to use the RestClient component.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>RestClient</td>
    <td>Component used to call remote endpoints using the HTTP/REST protocol.</td>
  </tr>
  <tr>
    <td>RestService</td>
    <td>Component used to receive remote calls via the HTTP/REST protocol.</td>
  </tr>
  <tr>
    <td>GET, HEAD, POST, PUT, DELETE</td>
    <td>HTTP methods supported by the RestClient component.</td>
  </tr>
</table>

### Introduction

A REST client is a program used to communicate with a service via the HTTP/REST protocol. Within Pip.Services, the RestClient component can be used as a base to build REST clients.

In this tutorial, you will be introduced to the RestClient component. First, we will see how to create a REST service by using the RestService class. Then, we will learn how to create a REST client with a class that extends the RestClient component. Following this, we will understand how to use the different HTML methods to communicate between the client and the service. We will end by reviewing what we learned in the different sections.

### The REST service

Our first step is to create a REST service. For this, we create a subclass of the RestService class. To show the different HTTP communication methods, this subclass includes one function per HTTP method. Each of these functions returns a message and a data parameter. Our component also includes a register() method, which is used to register the route for each of the HTTP methods. 

Once we have defined our REST service, we instantiate and configure it to run on our local machine. Then, we make it available with the open() method. The following code shows how this program looks like:


{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


### The REST client

Now that we have our REST service, we build a REST client that connects to it. This client has a function for each of the HTTP methods which calls the corresponding methods in our REST service.

Once we have defined our component, we instantiate and configure it, pointing toward the endpoint previously defined in the REST service. Then, we connect it to the service with the open() method. The code below shows how to do this:

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 


### Using the different HTTP methods

Our last step is to call each of the client's functions and obtain the respective results. The following commands and their outcomes show how to do this:

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

![figure 3](./figure3.png)

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Note: the HEAD method produces no output.

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

![figure 1](./figure1.png)


{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

![figure 1](./figure1.png)

### Final code

The code below summarizes the steps learned in the previous sections.

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
 Not available 
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}} 

Which after running produces the following outcome:

![figure 2](./figure2.png)

### Wrapping up

In this tutorial, we have learned how to create a REST client that communicates via an endpoint defined by a REST service. We used the RestClient and the RestService classes to define these components, and we added functions for the GET, HEAD, POST and PUT methods in the service and the client. We concluded by creating a program that summarizes all the learned concepts.
