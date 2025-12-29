export function parseDescription(text) {
  const lines = text.split("\n");
  const data = {};
  let key = null;

  lines.forEach((line) => {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      key = match[1];
      data[key] = match[2];
    } else if (key) {
      data[key] += " " + line.trim();
    }
  });

  if (data.links) {
    data.links = data.links.split(",").map((l) => l.trim());
  }

  return data;
}
