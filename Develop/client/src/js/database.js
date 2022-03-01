import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');
  const jateDb = await open('Jate', '1');

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put()({ jate:content});

  const result = await request;
  console.log("Data saved to the database")

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

  const jateDb = await open('Jate', '1');

  const tx = jateDb.transaction('jate', 'readwrite');
  
  const store = tx.objectStore('jate');

  const request = store.get() ({ jate:content });

  const rewult = await request;
  console.log("getDb implemented");

initdb();

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post');

  const jateDb = await open('jate', '1');

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.post()({jate:content})
  const result = await request
  console.log("Data posted");
  };
