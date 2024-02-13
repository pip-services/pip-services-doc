---
type: docs
no_list: true
title: "Discovery services"
linkTitle: "Discovery services"
description: >-
     How to create and manage a discovery service.
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways

<table class="full-width-table">
  <tr>
    <td>MemoryDiscovery</td>
    <td>Component used to create discovery services that keep data in memory.</td>
  </tr>
  <tr>
    <td>Configure</td>
    <td>Method used to configure a MemoryDiscovery component.</td>
  </tr>
  <tr>
    <td>Register</td>
    <td>Method used to add connection parameters to a MemoryDiscovery component.</td>
  </tr>
  <tr>
    <td>resolveOne</td>
    <td>Method used to obtain a set of connection parameters identified by a common key.</td>
  </tr>
  <tr>
    <td>resolveAll</td>
    <td>Method used to obtain all sets of connection parameters identified by a common key.</td>
  </tr>
</table>


### Introduction

In this tutorial, you will learn how to create and operate a discovery service that stores connection parameters in memory. We will begin by explaining the necessary pre-requisites. Then, we will continue by showing how to create the service and add and extract connection parameters from it. We will finish with a comprehensive example that illustrates all the learned concepts.

### Pre-requisites

To create a discovery service, we can use the MemoryDiscovery class, which models a discovery service that stores connections in memory. To import this class, we can use the following code:

{{< tabsection >}}
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code1_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Creating a discovery service

In order to create our discovery service, we need to create an instance of the MemoryDiscovery  class. Here, we have two options: we add one or more sets of connection parameters to the constructor through a config object

{{< tabsection >}}
  {{< include "./__code2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

or we add them after instantiation via the configure() method.

{{< tabsection >}}
  {{< include "./__code3_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code3_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code3_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Adding connections

Once we have created our component, we can use the register() method to add connections to our discovery service. This method takes the correlationId, a key, and the connection parameters to be registered as inputs. The following example shows how to use this method.

{{< tabsection >}}
  {{< include "./__code4_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code4_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code4_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Resolving connections

We can obtain a connection with the resolveOne() method, which considers as input parameters the correlationId and the key identifying the connection parameters we are looking for.

{{< tabsection >}}
  {{< include "./__code5_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code5_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code5_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Alternatively, we can use the resolveAll() method, which asks for the same inputs, but returns a list containing all the sets of connection parameters identified by a common key.

{{< tabsection >}}
  {{< include "./__code6_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code6_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
 {{< include "./__code6_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### Complete example

In this section, we have an example that illustrates the use of a memory discovery service, from creation to addition of parameters to resolving a connection. The code is as follows:

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code7_node.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code7_net.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code7_go.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code7_dart.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< collapse >}}
    {{< include "./__code7_python.md" >}}
  {{< /collapse >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Wrapping up

In this tutorial, we learned how to create a discovery service that stores connection parameters in memory. We also saw how to add a set of connection parameters and extract them from the component. We ended with a complete example that illustrated all the operations that can be performed on this component. 
