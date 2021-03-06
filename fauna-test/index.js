const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

var client = new faunadb.Client({ secret: process.env.FAUNA });

async function run() {
  // const result = await client.query(
  //   q.Paginate(q.Match(q.Index("todos_by_user"), "user-test"))
  // );

  // const results = await client.query(
  //   q.Update(q.Ref(q.Collection("todos"), id), {
  //     data: {
  //       done: true
  //     }
  //   })
  // );

  const results = await client.query(
    q.Get(q.Ref(q.Collection("todos"), "291723336977744390"))
  );
  const results1 = await client.query(
    q.Update(q.Ref(q.Collection("todos"), "291723336977744390"), {
      data: {
        done: !results.data.done,
      },
    })
  );
  console.log(results);
  console.log(results1);
}

run();

// ***Test three***
// async function run() {
//   const results = await client.query(
//     q.Update(q.Ref(q.Collection("todos"), "291723336977744390"), {
//       data: {
//         done: true,
//       },
//     })
//   );
//   console.log(results);
// }

// run();

// *** Test Two ***
// async function run() {
//   const results = await client.query(
//     q.Create(q.Collection("todos"), {
//       data: {
//         text: "third",
//         done: "false",
//         owner: "user-test2",
//       },
//     })
//   );
//   console.log(results.ref.id);
// }

// run();

// ***Test One***
// async function run() {
//   const results = await client.query(
//     q.Create(q.Collection("todos"), {
//       data: {
//         text: "first",
//         done: "false",
//         owner: "user-test",
//       },
//     })
//   );
//   console.log(results);
// }

// run();
