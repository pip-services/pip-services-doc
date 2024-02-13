---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
description: >
    This package contains classes used to create MongoDB persistence components.
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableMongoDbPersistence](identifiable_mongodb_persistence)
Abstract persistence component that stores data in MongoDB
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../commons/data/iidentifiable) interface.

#### [MongoDbPersistence](mongodb_persistence)
Abstract persistence component that stores data in MongoDB using the official driver.
This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **this._database** or **this._collection** properties.

#### [PartitionMongoDbPersistence](partition_mongodb_persistence)
Abstract persistence component that stores data in MongoDB and implements a number of CRUD operations over data items with partitionKey.

</div>
