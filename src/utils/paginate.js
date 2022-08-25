export default function getPagination(startIndex, pageSize, itemsArray) {
  const endIndex = startIndex + pageSize;
  const items = itemsArray.slice(startIndex, endIndex);
  return items;
}
