import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

// Set up adapter for reading/writing a JSON file
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);

// Read from file (or initialize if empty)
db.read();
db.data ||= { companies: [], vehicles: [], inspections: [] };

// Export db object
export default db;
