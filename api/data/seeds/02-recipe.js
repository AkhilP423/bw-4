exports.seed = async function (knex) {
    await knex("users")
      .insert([
      {
        username: 'administrator',
        password: '$2a$08$CjOzAqkUXePlNyZCG6TKuubIY.MpjKqOdrV/W3178ah483kyEbeSe'
      },
      {
        username: 'ahkil',
        password: '$2a$08$pKyiXfW8AlJ76UMrcpIMC.qFgMIv.3qVGjB2I.6LjVwGQSNSq//62'
      }
      ])
      await knex("items")
      .insert([
        {title: 'Sandwich' ,source: 'Dad',ingredients: 'Buns, meat, cheese', instructions: 'Put meat and cheese in buns.', category: 'American', user_id: 1},
        {title: 'Hotdog' ,source: 'Mom',ingredients: 'Bun, hotdog', instructions: 'Hotdog in bun', category: 'American', user_id: 2}
      ])
  }
  