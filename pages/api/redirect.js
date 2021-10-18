// You can also specify a status code in res.redirect([status,] path). If not specified, the default status is "307" "Temporary redirect".
export default function handler(req, res) {
    res.redirect('https://slip.so');
  }