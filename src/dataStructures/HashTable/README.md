## Hash Table

- It is a data structure that maps a key to its value
- A hash function is used to get index from a key to store/find the value
- Hashing functions have to be fast for almost instant address generation/lookup

## Implementation

- Javascript/Typescript Objects are hash maps

## Advantages

- Read, Write, Delete - O(1)
  - Good collision resolution needed

## Problems

- Hash collision - sometimes two keys generate same hashes, so the data is then stored in a new data structure using different techniques
- No concept of ordering

## Why HashTables

- Search, Insert, Lookup and Delete is constant time
