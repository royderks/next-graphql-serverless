let names = [{ name: 'John Doe' }]

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(names);
      break;
    case 'POST':
      names = [...names, { name: 'Harry Potter'}]
      res.status(200).json(names);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
