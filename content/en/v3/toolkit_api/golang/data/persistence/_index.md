---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    This package contains classes used to create in memory and file persistence components. 


---
---

Important points

- These components only connect to data sources and do not implement the operations and methods to handle the data. Therefore, the classes that extend these persistences must implement this logic on their own.  
- Identifiable Persistences work with Identifiable objects, which have primary keys. A few standard operations are defined by default for these objects: reading arrays and data pages; searching for an object by its id; and creating, updating and deleting records of objects. 

<div class="module-body"> 

### Interfaces

#### [IFilteredPageReader](ifiltered_page_reader)
Interface for data processing components that can retrieve a page of data items by using a filter.

#### [IFilteredReader](ifiltered_reader)
Interface for data processing components that can retrieve a list of data items by using a filter.

#### [IGetter](igetter)
Interface for data processing components that can get data items.

#### [ILoader](iloader)
Interface for data processing components that load data items.

#### [IPartialUpdater](ipartial_updater)
Interface for data processing components used to update data items partially.

#### [IQuerablePageReader](iquerable_page_reader)
Interface for data processing components that can query a page of data items.

#### [IQuerableReader](iquerable_reader)
Interface for data processing components that can query a list of data items.

#### [ISaver](isaver)
Interface for data processing components that save data items.

#### [ISetter](isetter)
Interface for data processing components that can set (create or update) data items.

#### [IWriter](iwriter)
Interface for data processing components that can create, update and delete data items.

### Types

#### [FilePersistence](file_persistence)
Abstract persistence component that stores data in flat files
and caches them in memory.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing the this._items property and calling the [save](file_persistence/#save) method.

#### [IdentifiableFilePersistence](identifiable_file_persistence)
Abstract persistence component that stores data in flat files
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable interface][IIdentifiable](../../commons/data/iidentifiable)

#### [IdentifiableMemoryPersistence](identifiable_memory_persistence)
Abstract persistence component that stores data in memory
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable interface][IIdentifiable](../../commons/data/iidentifiable)

#### [JsonFilePersister](json_file_persister)
Persistence component that loads and saves data from/to a flat file.
It is used by [FilePersistence](file_persistence), but can be useful on its own.

#### [MemoryPersistence](memory_persistence)
Abstract persistence component that stores data in memory.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing the **this._items** property and calling the [save](memory_persistence/#save) method.

</div>
