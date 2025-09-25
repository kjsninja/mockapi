# Mockapi

This is a mock api that can be use for testing during training.

There are 2 components in this repository
- programs is a test data that display all programs
- phases is a database CRUD component

### Prerequisites

- Install node
- Have decent IDE like VSCode to edit

### How to run

1. Edit the `sample.env` to `.env` just replace the `PORT` and you are good to go.

2. Install all dependencies `npm install`

3. Run migration `npm run migrate`

4. Push the database changes `npm run db:push`

5. Run the `programs` component `npm run dev`

6. Open another terminal then run the `phases` component `npm run dev2`

### Optional

If you want to run it using `pm2` just run the command `npm run prod:start` and `npm run prod:start2`. To stop the instance of `pm2` you can run stop commands `npm run prod:stop` and `npm run prod:stop2`.


