export function createElement(tagName, properties, parentElement) {
  const element = document.createElement(tagName);
  parentElement?.append(element);
  return Object.assign(element, properties);
}
