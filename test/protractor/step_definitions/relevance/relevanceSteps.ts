import { Then } from 'cucumber';
import { Client } from '@elastic/elasticsearch';
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';

Then(/^Verify that my visit is logged in elasticsearch$/, async () => {
  const client = new Client({
    node: 'https://elasticsearch-ota.do.unive.nl',
    ssl: {
      ca: fs.readFileSync(path.resolve('../test/config/elasticsearch.pem')),
      rejectUnauthorized: false
    }
  });
  const result = await client.search({
    index: 'hippo.visits',
    body: {
      query: {
        range: {
          'entry.timestamp': {
            gte: new Date().getTime() - 2000
          }
        }
      }
    }
  });
  assert(result.body.hits.total > 0);
});
