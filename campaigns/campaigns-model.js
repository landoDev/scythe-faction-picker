const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getCampaignInfo,
    addPlayers,
    connectTables
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

// takes two arguments to tie the player to the given campaign
async function addPlayers(player, connect) {
    const [id] = await db("players").insert(player, "id");
    connect.player_id = id;
    console.log('checking connection before passing it', connect);
    connectTables(connect)
    return findById(id);
  }

  async function connectTables(connection) {
    const [id] = await db("campaigns_players").insert(connection, "id");
    return findById(id); // not sure what to return
  }