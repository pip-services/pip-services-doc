---
type: docs
no_list: true
title: "MongoDB Basic"
linkTitle: "MongoDB Basic"
description: >-
     How to persist data using a MongoDB database.
---
{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

### Key takeaways
<table class="full-width-table">
  <tr>
    <td>MongoDbPersistence</td>
    <td>Pip.Services component used to create MongoDB persistence objects that accept any type of data.</td>
  </tr>
  <tr>
    <td>IdentifiableMongoDbPersistence</td>
    <td>Pip.Services component used to create MongoDB persistence objects that accept identifiable data objects.</td>
  </tr>
</table>

### Introduction

This tutorial will help you understand how to create persistence components for MongoDB. In particular, you will learn how to use two components, namely MongoDbPersistence and IdentifiableMongoDbPersistence. The explanations will include practical examples.

### Persisting data with MongoDB
The Pip.Services toolkit provides two different components for MongoDB persistence. They are the MongoDbPersistence and the IdentifiableMongoDbPersistence classes respectively. The first can be used to persist objects of any type. The second is aimed at data items with unique ids. Both classes are part of the MongoDB module, persistence 

#### General pre-requisites
In order to use any of these two components, we need to install the MongoDB module. This can be done with the following command:

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

#### Data object
Throughout the examples, we will use the data structure that appears below. It contains an id field, which can be used to identify each document. The next two fields (key and content) are generic and represent any type of content that we want to persist.
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

In addition, we create three instances of this class, which we will use in the examples for CRUD operations.

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

#### MongoDbPersistence
This component can be used with any type of data object. However, all documents stored in MongoDB are identifiable, that is, they have a unique id value. This means that even if we don't assign a unique identifier to our object, MongoDB will assign one automatically. That is the reason behind having an id field in our data structure.

##### Pre-requisites

To use the MongoDbPersistence component we need to insert it first. This can be done with the following command:

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

##### Component creation

To create our MongoDB persistence component, we create a class that extends the MongoDbPersistence class.  We also define an instance of this class and configure it using the configure method available from its parent class. As this method requires an input of type ConfigParams, we import this component and define the host, port, and database. Finally, we open the persistence component. Our code will look something like this:

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

Later on, once all operations have been completed, we can close our persistence component with the close() method.

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

##### CRUD operations
Our class inherits several methods from its parent class that can be used to perform CRUD operations. This section explores them.
###### Create
To store a document, we use the create method. This method asks for the correlationId and the data object. In the following example, we create a document based on the previously defined data1 object.

{{< tabsection >}}
  {{< include "./__code7_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code7P2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7P2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7P2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7P2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7P2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Read
The MongoDbPersistence class offers several options to extract documents from a database. 

**getOneRandom()**

As its name suggests, this method retrieves a random document based on a given filter. In the following example, we ask to retrieve a component with a key value of 'key 3'.

{{< tabsection >}}
  {{< include "./__code8_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code9_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**getListByFilter()**

This method gets a list of data items retrieved according to a given filter. In order to use it, we override this method. This action allows us to introduce any specific aspects that we may need. Our function will look something like this:

{{< tabsection >}}
  {{< include "./__code10_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Once we have our class defined, we can call it to get our search results. For example, to get all the elements with a key value of 'key 3' we can write:

{{< tabsection >}}
  {{< include "./__code11_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code11_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code12_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code12_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**getPageByFilter()**

This method gets a page of data items retrieved according to a given filter. It also allows adding a sorting parameter and a projection object. 
Similar to what we did in the previous example, we override this method in our persistence class. Besides, we add two methods, namely composeFilter and  composeSort. These two methods are used to define aspects that are specific to the database we are using (In our case MongoDB). An example of both methods is:

{{< tabsection >}}
  {{< include "./__code13_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code13_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And, an example of get_page_by_filter() is:

{{< tabsection >}}
  {{< include "./__code14_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code14_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Now, we can call this method from our persistence object. For example, to obtain all the records with a key value of 'key 3', we can write:

{{< tabsection >}}
  {{< include "./__code15_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code15_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

which returns the searched values in a DataPage object:

{{< tabsection >}}
  {{< include "./__code16_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code16_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**getCountByFilter()**

This method gets the number of data items that will be retrieved based on a given filter. Because it is a private method in other languages – such as Node.js -  we need to override it. Our added method will look similar to 

{{< tabsection >}}
  {{< include "./__code17_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code17_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Now, we can call it from our code and get the returned amount of records that comply with a given condition, such as key equal to 'key 3'.

{{< tabsection >}}
  {{< include "./__code18_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code18_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Update

As MongoDbPersistence doesn't have an update method, we need to define it in our class. We will see how to do this in the [Example](#example) section.

###### Delete

The MongoDbPersistence class provides the deleteByFilter() method, which deletes all those documents that comply with a given condition. The following example shows how to delete all the elements with a key value equal to 'key 3':

{{< tabsection >}}
  {{< include "./__code19_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code19_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Component's final version

After overriding and adding the methods specified in the previous examples, our MongoDb persistence component looks like this:

{{< tabsection >}}
  {{< include "./__code5P2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5P2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5P2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5P2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5P2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Example
Now, we will see a simple example that puts most of the learned concepts together. It starts by importing the necessary libraries and creating a MongoDB persistence class that includes an update method. Then, it performs CRUD operations and prints the results. The code is:

{{< tabsection >}}
  {{< include "./__code20_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code20_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And the output is:

![figure 1](./figure1.png)

#### IdentifiableMongoDbPersistence

This component is used to perform CRUD operations with identifiable data objects, that is, objects that can be identified via a unique id. 

##### Pre-requisites

To use the IdentifiableMongoDbPersistence component we need to import it first. This can be done with the following command:

{{< tabsection >}}
  {{< include "./__code21_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code21_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### Component creation

To create an identifiable MongoDB persistence component, we create a subclass of the IdentifiableMongoDbPersistence class where we specify the name of the table we will be using (In our example: mydata). We also define an instance of it and, via the configure() method, we add the connection parameters. In our example, we use a local database and we connect to it through the default port 27017. We also define a database named "pipdatabase".

{{< tabsection >}}
  {{< include "./__code22_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code22_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And, after creating it, we open the connection. 

{{< tabsection >}}
  {{< include "./__code23_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code23_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Later on, once we have finished using this persistence component, we can close it with the close() method.

{{< tabsection >}}
  {{< include "./__code24_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code24_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

##### CRUD operations

This class presents a set of methods for CRUD operations. This section explains their usage and provides examples for each of them.

###### Create

This component presents two methods that allow us to create a document in MongoDB. They are:

###### Read

**create()**

To add a new document to our collection, we can use the create() method, which accepts the correlationId and the data item as inputs. The example below shows how to use it.

{{< tabsection >}}
  {{< include "./__code25_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code25P2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25P2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25P2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25P2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code25P2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**set()**

This method updates an existing data item. If the item doesn't exist, it creates it. The example below shows how to use it.

{{< tabsection >}}
  {{< include "./__code26_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code26P2_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26P2_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26P2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26P2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code26P2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**get_one_by_id()**

To retrieve a data object, we can use the get_one_by_id method, which allows for the selection of a data object based on its id. In the following example, we obtain the item with key = '1'. 

{{< tabsection >}}
  {{< include "./__code27_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code27_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code27_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code27_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code27_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code28_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code28_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code28_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code28_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code28_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**getListByIds()**

We can also use the getListByIds() method, which is similar to the previous one, but accepts a list containing ids and retrieves the documents related to those ids. In the following example, we search for those items with id equal to '1' and '2'.

{{< tabsection >}}
  {{< include "./__code29_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code29_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code29_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code29_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code29_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code30_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code30_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code30_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code30_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code30_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Update

**update()**

This method updates the data stored in a record. It accepts the correlationId and the id of the record to be updated as input parameters. In the example below, we change the value of content to 'new content 2' for a record with id equal to '2'.

{{< tabsection >}}
  {{< include "./__code31_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code31_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code31_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code31_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code31_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code32_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code32_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code32_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code32_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code32_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**updatePartially()**

This method also updates an item, but only the specified fields. It takes the id of the item to be updated and an AnyValueMap object containing the fields to be modified and their updated values as input parameters. The following example shows how to update the content field for a record with id equal to '3'.

{{< tabsection >}}
  {{< include "./__code33_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code33_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code33_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code33_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code33_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code34_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code34_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Delete

**deleteById()**

We can delete a stored data object by using the delete() method. Here, we need to indicate the correlationId and the id of the object to be deleted. The following example deletes a record with an id equal to '1'.

{{< tabsection >}}
  {{< include "./__code35_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code35_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

Which returns:

{{< tabsection >}}
  {{< include "./__code36_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code36_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

**deleteByIds**

This method accepts a list containing the ids of the documents to be deleted. The following example shows how to delete the records with ids equal to '1' and '2'.

{{< tabsection >}}
  {{< include "./__code37_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code37_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

###### Example

To summarize, we put everything together in one comprehensive example. In it, we first create a data class with a field named id. Then, we create our persistence object, configure it and open the connection. Once we are connected to the database "mydb", we perform the four CRUD operations and print the results. The code is:

{{< tabsection >}}
  {{< include "./__code38_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code38_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code38_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code38_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code38_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

And the output is:

![figure 2](./figure2.png)


### Wrapping up

In this tutorial, we have explored how to create MongoDB persistence components. We saw two different components, namely the MongoDbPersistence and the IdentifiableMongoDbPersistence classes, and how to perform CRUD operations with them. Finally, we saw a comprehensive example for each component.
