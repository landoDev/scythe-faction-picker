const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getCampaignInfo,
};

function find() {
  return db("campaigns").select('*');
}

function findBy(filter) {
  return db("campaigns").where(filter);
}

async function add(code) {
  const [id] = await db("campaigns").insert(code, "id");

  return findById(id);
}

function findById(id) {
  return db('campaigns')
    .select('*')
    .where({ id })
    .first();
}

function getCampaignInfo(id) {
	return db('campaign')
		.join('players', 'players.campaign_id', 'campaign.id')
		.where('campaign.id', id)
		.select('player_name', 'faction')
}

function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes);
};

function remove(id) {
    return db('users')
      .where('id', id)
      .del();
};