---
type: docs
title: "RandomText"
linkTitle: "RandomText"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Random generator for various text types such as names, addresses or phone numbers.
---

### Description

The RandomText class allows you to generate different types of randomt texts. The options included are colors, names, nouns, adjectives, verbs, phrases, full names, words, phone numbers, email addresses, and texts.


### Static methods

#### adjective
Generates a random adjective.
The result value is capitalized.

> `public static` adjective(): string 

- **returns**: string - random adjective.

#### color
Generates a random color name.
The result value is capitalized.

> `public static` color(): string

- **returns**: string - random color name.

#### email
Generates a random email address.

> `public static` email(): string

- **returns**: string - random email address.

#### fullName
Generates a random person's name, which has the following structure:

**\<optional prefix\> \<first name\> \<second name\> \<optional suffix\>**

> `public static` fullName(): string

- **returns**: string - random name.


#### noun
Generates a random noun.
The result value is capitalized.

> `public static` noun(): string

- **returns**: string - random noun.

#### phone
Generates a random phone number.
The phone number has the format: (XXX) XXX-YYYY

> `public static` phone(): string

- **returns**: string - random phone number.


#### phrase
Generates a random phrase which consists of few words separated by spaces.
The first word is capitalized, others are not.

> `public static` phrase(minLength: number, maxLength: number = null): string 

- **minLength**: number - (optional) minimum string length.
- **maxLength**: number -  maximum string length.
- **returns**: string -  random phrase.

#### text
Generates a random text, consisting of first names, last names, colors, stuffs, adjectives, verbs, and punctuation marks.

> `public static` text(minLength: number, maxLength: number = null): string

- **minLength**: number - minimum amount of words to generate. The text will contain 'minSize' words if 'maxSize' is omitted.
- **maxLength**: number -  (optional) maximum amount of words to generate.
- **returns**: string -  random text.

#### verb
Generates a random verb.
The result value is capitalized.

> `public static` verb(): string

- **returns**: string - random verb.


#### word
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` word(): string

- **returns**: string - random word.

#### words
Generates a random word from available first names, last names, colors, stuffs, adjectives, or verbs.

> `public static` words(min: number, max: number = null): string

- **min**: number - (optional) minimum number of words.
- **max**: number - maximum number of words.
- **returns**: string - random text.

### Examples

```typescript
let value1 = RandomText.name();     // Possible result: "Segio"
let value2 = RandomText.verb();      // Possible result: "Run"
let value3 = RandomText.Text(50);    // Possible result: "Run jorge. Red high scream?"

```
