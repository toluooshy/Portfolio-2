export function loadSection(section) {
  const context = require.context(`../media/${section}`, true, /\.(png|txt)$/);

  const entries = {};

  context.keys().forEach((key) => {
    const [, folder, file] = key.split("/");

    if (!entries[folder]) {
      entries[folder] = {
        id: folder,
        images: [],
        captions: {},
        description: "",
      };
    }

    if (file === "description.txt") {
      entries[folder].description = context(key).default;
    } else if (file.endsWith(".png")) {
      entries[folder].images.push({
        src: context(key),
        index: parseInt(file.match(/\d+/)?.[0] || 0),
      });
    } else if (file.endsWith(".txt")) {
      const idx = parseInt(file.match(/\d+/)?.[0] || 0);
      entries[folder].captions[idx] = context(key).default;
    }
  });

  return Object.values(entries).map((entry) => ({
    ...entry,
    images: entry.images.sort((a, b) => a.index - b.index).map((i) => i.src),
  }));
}
