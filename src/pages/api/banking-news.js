
import Parser from 'rss-parser';

export default async function handler(req, res) {
  const parser = new Parser();
  const feeds = [
    'https://www.reuters.com/markets/finance/rss',
    'https://www.ft.com/banking?format=rss',
    'https://www.cnbc.com/id/10000664/device/rss/rss.html',
  ];

  const items = [];

  for (const url of feeds) {
    try {
      const rss = await parser.parseURL(url);
      const source = (new URL(url)).hostname.replace('www.', '');
      for (const it of rss.items || []) {
        items.push({
          id: it.enclosure?.url || it.thumbnail || '/team.jpg', // image fallback
          name: source,                                          // your "name" field
          date: it.pubDate || it.isoDate || '',                  // used by your UI
          description: it.title || 'Banking update',             // your title line
          link: it.link || '#',                                  // for <a href>
        });
      }
    } catch (e) {
      // ignore feed errors to keep endpoint resilient
    }
  }

  // newest first
  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  // only the first 6 to match your grid
  res.status(200).json(items.slice(0, 6));
}
