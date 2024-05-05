import { Item } from './types';

export function isValidItems(items: unknown): items is Item[] {
  if (!items || !Array.isArray(items)) {
    return false;
  }

  for (const item of items) {
    if (!isValidItemFields(item)) {
      return false;
    }
  }

  return true;
}

export function isValidItemFields(item: unknown): item is Item {
  if (!item || typeof item !== 'object') {
    return false;
  }

  if (!('id' in item) || !('name' in item)) {
    return false;
  }

  return idNumber(item.id) && isString(item.name);
}

export function idNumber(num: unknown): num is number {
  return typeof num === 'number';
}

export function isString(str: unknown): str is string {
  return typeof str === 'string';
}
