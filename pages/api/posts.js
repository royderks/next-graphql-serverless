export const posts = [
  {
    id: 1,
    title: 'First post',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non placerat elit, sollicitudin luctus nisi. Vivamus at eros lacinia, laoreet nisl id, luctus ligula.',
    imageUrl: 'https://picsum.photos/id/369/400/400',
  },
  {
    id: 2,
    title: 'The Second post',
    description:
      'Vestibulum scelerisque feugiat magna, quis varius tellus. Duis at porta neque. Maecenas et odio risus. Nunc ultrices ullamcorper sem, vitae sollicitudin enim iaculis ut.',
    imageUrl: 'https://picsum.photos/id/369/400/400',
  },
  {
    id: 3,
    title: 'My Third post',
    description:
      'Phasellus tristique elementum urna, ut bibendum enim fermentum quis. Cras vitae consequat nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: 'https://picsum.photos/id/369/400/400',
  },
];

export default function handler(req, res) {
  res.status(200).json(posts);
}
