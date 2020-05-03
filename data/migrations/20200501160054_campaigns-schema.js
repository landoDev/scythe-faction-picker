
exports.up = function(knex) {
  return knex.schema
  .createTable('campaigns', tbl => {
      tbl.increments(); // id
      tbl.string('code', 8).unique().notNullable();
      tbl.date('created');
  })
  .createTable('players', tbl =>{
      tbl.increments(); // id
      tbl.string('player_name', 48);
      tbl.string('faction');
  })
  .createTable('campaigns_players', tbl =>{
    tbl.increments(); // id
    tbl.integer('campaign_id', 255);
    tbl.string('player_id', 255);
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('campaigns_players')
    .dropTableIfExists('players')
    .dropTableIfExists('campaigns')
};
