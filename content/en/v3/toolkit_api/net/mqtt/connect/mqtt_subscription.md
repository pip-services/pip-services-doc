---
type: docs
title: "MqttSubscription"
linkTitle: "MqttSubscription"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mqtt-dotnet"
description: >
    Defines subscription fields.

---

### Description

The MqttSubscription class defines subscription fields.

### Properties



#### Topic
Topic
> `public` string Topic { get; set; }
#### Qos
Quality of service level
> `public` MqttQualityOfServiceLevel Qos { get; set; }
#### Filter
Filter
> `public` bool Filter { get; set; }
#### Listener
Listener
> `public` [IMqttMessageListener](../imqtt_message_listener) Listener { get; set; }


