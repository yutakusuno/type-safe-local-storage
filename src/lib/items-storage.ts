import { CustomStorage } from './custom-storage';

const STORAGE_ITEMS_KEY = 'items';

type Item = {
  id: number;
  name: string;
};

class ItemsStorage {
  private static instance: ItemsStorage;
  private storage: CustomStorage<Item>;

  private constructor() {
    this.storage = new CustomStorage<Item>(STORAGE_ITEMS_KEY);
  }

  public static getInstance(): ItemsStorage {
    return this.instance ?? (this.instance = new ItemsStorage());
  }

  public getItems(): Item[] | null {
    try {
      const items = this.storage.getItems();
      if (!this.isValidItems(items)) {
        throw new Error('Invalid items');
      }

      return items;
    } catch (error: unknown) {
      this.logError(error);
      return null;
    }
  }

  public setItem(item: Item): void {
    try {
      if (!this.isValidItemFields(item)) {
        throw new Error('Invalid item fields');
      }

      const currentItems = this.storage.getItems();
      if (!this.isValidItems(currentItems)) {
        throw new Error('Invalid items');
      }

      const items: Item[] = [...currentItems, item];
      this.storage.setItems(items);
    } catch (error: unknown) {
      this.logError(error);
    }
  }

  public clearItems(): void {
    try {
      this.storage.clearItems();
    } catch (error: unknown) {
      this.logError(error);
    }
  }

  private isValidItems(items: unknown): items is Item[] {
    if (!items || !Array.isArray(items)) {
      return false;
    }

    for (const item of items) {
      if (!this.isValidItemFields(item)) {
        return false;
      }
    }

    return true;
  }

  private isValidItemFields(item: unknown): item is Item {
    if (!item || typeof item !== 'object') {
      return false;
    }

    if (!('id' in item) || !('name' in item)) {
      return false;
    }

    return this.idNumber(item.id) && this.isString(item.name);
  }

  private idNumber(num: unknown): num is number {
    return typeof num === 'number';
  }

  private isString(str: unknown): str is string {
    return typeof str === 'string';
  }

  private logError(error: unknown): void {
    let errorMessage = 'An error occurred in ItemsStorage';
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    console.error(errorMessage);
  }
}

export const itemsStorage = ItemsStorage.getInstance();
