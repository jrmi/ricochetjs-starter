import { ownerOrNewHooks } from './hooks.js';

export const main = async ({ store, schedules, hooks, functions }) => {
  // Declare stores
  await store.createOrUpdateBox('myData', { security: 'readOnly' });
  await store.createOrUpdateBox('publicData', { security: 'public' });

  // Add hooks to store
  hooks.before = [ownerOrNewHooks]; // Add a hooks for JSON store
  hooks.beforeFile = [ownerOrNewHooks]; // The same hook for File store

  // Add a custom function
  functions.testFunction = () => {
    console.log('test function is called');
    return { answer: 42 };
  };

  // Add schedules
  schedules['daily'] = [
    async () => {
      console.log('Message display once by day');
    },
  ];
};

export default main;
