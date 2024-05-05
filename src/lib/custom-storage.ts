export class CustomStorage<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public getItems(): T | null {
    try {
      const data = localStorage.getItem(this.key);
      if (!data) return null;

      return JSON.parse(data) as T;
    } catch (error) {
      throw new Error('Failed to retrieve items from storage');
    }
  }

  public setItems(items: T[]): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (error) {
      throw new Error('Failed to set items in storage');
    }
  }

  public clearItems(): void {
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      throw new Error('Failed to clear items from storage');
    }
  }
}
