---
type: docs
title: "RabbitMQMessageQueueFactory"
linkTitle: "RabbitMQMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rabbitmq-gox"
description: >
    Creates [RabbitMQMessageQueue](../../queues/rabbitmq_message_queue/) components by their descriptors.
    
---

**Implements:** [Factory](../../../components/build/factory)

### Description
The RabbitMQMessageQueueFactory class allows you to create [RabbitMQMessageQueue](../../queues/rabbitmq_message_queue/) components by their descriptors..


### Constructors
Creates an instance of this class.

#### NewRabbitMQMessageQueueFactory
> NewRabbitMQMessageQueueFactory() [*RabbitMQMessageQueueFactory]()


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQMessageQueueFactory]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> (c [*RabbitMQMessageQueueFactory]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### CreateQueue
Creates a message queue component and assigns its name.
> (c [*RabbitMQMessageQueueFactory]()) CreateQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)

 - **name**: string - a name of the created message queue.