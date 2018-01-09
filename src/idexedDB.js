import Dexie from 'dexie';

let db = new Dexie('concertTracker');

db.version(1).stores({
    shows: 'id, title, venue, date, apiKey'
});

export const saveOfflineShows = (show) => {
    return db.projects.add(show);
};

export const loadOfflineShows = () => {
    return db.projects.toArray();
};
