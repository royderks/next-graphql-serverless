import { posts } from './posts';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(posts[0]);
      break;
    case 'POST':
      inserted = [
        ...posts,
        {
          ...posts[0],
          title: `Post number ${posts.length + 2}`,
        },
      ];
      res.status(200).json(inserted);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
