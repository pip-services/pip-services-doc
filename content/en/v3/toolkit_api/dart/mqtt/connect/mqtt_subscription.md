---
type: docs
title: "MqttSubscription"
linkTitle: "MqttSubscription"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mqtt-nodex"
description: >
    Defines the fields for an MQTT subscription.

---

### Description

The MqttSubscription class defines the main fields for an MQTT subscription.

### Constructors
Create new instance of subscription

> MqttSubscription({required this.topic, required this.filter, required this.options, required this.listener});

### Fields

<span class="hide-title-link">

#### topic
Topic
> **topic**: String
#### filter
Filter
> **filter**: bool
#### options
Subscription options
> **options**: Map\<String, dynamic\>
#### listener
Listener
> **listener**: [IMqttMessageListener](../imqtt_message_listener)

</span>
