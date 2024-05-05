# Type-Safe Local Storage Demo

This repository contains a demo for type-safe local storage implementation using TypeScript. The demo showcases how to store and retrieve items from local storage in a type-safe manner.

## Overview

The demo consists of the following files:

- items-storage.ts: Defines a class ItemsStorage responsible for managing items in local storage.
- custom-storage.ts: Provides a generic class CustomStorage for interacting with local storage.
- utils.ts: Contains utility functions for validating items and item fields.
- App.tsx: React component demonstrating the usage of the ItemsStorage class.

## Installation

To run the demo locally, follow these steps:

Clone the repository:

```
git clone git@github.com:yutakusuno/type-safe-local-storage.git
```

Install dependencies:

```
bun i
```

Those who have not installed bun: https://bun.sh/docs/installation

Start the development server:

```
bun run dev
```

## Usage

In the App.tsx file, you can find a simple React component demonstrating how to use the ItemsStorage class:

- Click the "Add Item" button to add a random item to local storage.
- Click the "Get Items" button to retrieve items from local storage and log them to the console.
- Click the "Clear Items" button to remove all items from local storage.

## Notes

- The ItemsStorage class ensures that only valid items are stored and retrieved from local storage.
- Type safety is maintained throughout the process, ensuring that item fields are of the correct type.
