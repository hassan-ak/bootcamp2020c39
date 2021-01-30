const faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();

var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

async function run() {
    //   const results = await client.query(
    //     q.Update(q.Ref(q.Collection("todos"), "289146273298121228"), {
    //       data: {
    //         done: true
    //       }
    //     })
    //   );
    //   console.log(results);
  
    //   const results = await client.query(
    //     q.Create(q.Collection("todos"), {
    //       data: {
    //         text: "my todo",
    //         done: false,
    //         owner: "user-test-2"
    //       }
    //     })
    //   );
    //   console.log(results.ref.id);
  
    const results = await client.query(
      q.Paginate(q.Match(q.Index("todos_by_user"), "user-test"))
    );
    console.log(results);
  }
  
  run();