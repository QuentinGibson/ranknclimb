const { db } = require('@vercel/postgres');

const {
  users,
  classes,
  champions,
  roles,
  championClasses,
  championRoles: deck,
  decks,
  cards,
  answerBanks,
} = require('../app/lib/new-placeholder.js');

const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        verified BOOLEAN DEFAULT false
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password, role, verified)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.verified})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedClasses(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lol_champion_classes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        icon VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "Classes" table`);

    // Insert data into the "Classes" table
    const insertedClasses = await Promise.all(
      classes.map(async (classData) => {
        return client.sql`
        INSERT INTO lol_champion_classes (id, name, icon)
        VALUES (${classData.id}, ${classData.name}, ${classData.icon})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedClasses.length} classes`);

    return {
      createTable,
      classes: insertedClasses,
    };
  } catch (error) {
    console.error('Error seeding Classes:', error);
    throw error;
  }
}

async function seedChampions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "lol champions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lol_champions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        icon VARCHAR(255) NOT NULL,
        range VARCHAR(50) NOT NULL,
        resource VARCHAR(50) NOT NULL,
        attack_class VARCHAR(50) NOT NULL
      );
    `;

    console.log(`Created "Champions" table`);

    // Insert data into the "lol champions" table
    const insertedChampions = await Promise.all(
      champions.map(async (champion) => {
        return client.sql`
        INSERT INTO lol_champions (id, name, icon, range, resource, attack_class)
        VALUES (${champion.id}, ${champion.name}, ${champion.icon}, ${champion.range}, ${champion.resource}, ${champion.attack_class})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedChampions.length} champions`);

    return {
      createTable,
      champions: insertedChampions,
    };
  } catch (error) {
    console.error('Error seeding champions:', error);
    throw error;
  }
}

async function seedRoles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "lol roles" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lol_roles (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        icon VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "Roles" table`);

    // Insert data into the "lol roles" table
    const insertedRoles = await Promise.all(
      roles.map(async (role) => {
        return client.sql`
        INSERT INTO lol_roles (id, name, icon)
        VALUES (${role.id}, ${role.name}, ${role.icon})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedRoles.length} roles`);

    return {
      createTable,
      roles: insertedRoles,
    };
  } catch (error) {
    console.error('Error seeding roles:', error);
    throw error;
  }
}

async function seedChampionClassRelations(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "champion class" relation table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lol_champion_class_relations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        champion_id UUID NOT NULL,
        class_id UUID NOT NULL
      );
    `;

    console.log(`Created "Champion class relations" table`);

    // Insert data into the "lol Champion class" relations table
    const insertedChampionClass = await Promise.all(
      championClasses.map(async (championClass) => {
        return client.sql`
        INSERT INTO lol_champion_class_relations (id, champion_id, class_id)
        VALUES (${championClass.id}, ${championClass.champion_id}, ${championClass.class_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(
      `Seeded ${insertedChampionClass.length} champion class relations`,
    );

    return {
      createTable,
      championClasses: insertedChampionClass,
    };
  } catch (error) {
    console.error('Error seeding champion class relations:', error);
    throw error;
  }
}

async function seedChampionRolesRelations(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "champion role" relation table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lol_champion_role_relations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        champion_id UUID NOT NULL,
        role_id UUID NOT NULL
      );
    `;

    console.log(`Created "Champion role relations" table`);

    // Insert data into the "lol Champion role" relations table
    const insertedChampionRoles = await Promise.all(
      deck.map(async (championRole) => {
        return client.sql`
        INSERT INTO lol_champion_role_relations (id, champion_id, role_id)
        VALUES (${championRole.id}, ${championRole.champion_id}, ${championRole.role_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(
      `Seeded ${insertedChampionRoles.length} champion role relations`,
    );

    return {
      createTable,
      championRoles: insertedChampionRoles,
    };
  } catch (error) {
    console.error('Error seeding champion role relations:', error);
    throw error;
  }
}

async function seedDecks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "deck" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS decks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        champion_id UUID NOT NULL,
        keybind VARCHAR(50) NOT NULL,
        name VARCHAR(255) NOT NULL,
        icon VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "deck" table`);

    // Insert data into the "deck" table
    const insertedDeck = await Promise.all(
      decks.map(async (deck) => {
        return client.sql`
        INSERT INTO decks (id, champion_id, keybind, name, icon)
        VALUES (${deck.id}, ${deck.champion_id}, ${deck.keybind}, ${deck.name}, ${deck.icon})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedDeck.length} decks`);

    return {
      createTable,
      decks: insertedDeck,
    };
  } catch (error) {
    console.error('Error seeding decks:', error);
    throw error;
  }
}

async function seedCards(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "card" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cards (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        deckId UUID NOT NULL,
        question VARCHAR(255) NOT NULL,
        correctAnswer VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "cards" table`);

    // Insert data into the "card" table
    const insertedCards = await Promise.all(
      cards.map(async (card) => {
        return client.sql`
        INSERT INTO cards (id, deckId, question, correctAnswer)
        VALUES (${card.id}, ${card.deckId}, ${card.question}, ${card.correctAnswer})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCards.length} cards`);

    return {
      createTable,
      cards: insertedCards,
    };
  } catch (error) {
    console.error('Error seeding cards:', error);
    throw error;
  }
}

async function seedAnswerBank(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "answer banks" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS answer_banks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        cardId UUID NOT NULL,
        content VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "answer bank" table`);

    // Insert data into the "answer bank" table
    const insertedAnswerBank = await Promise.all(
      answerBanks.map(async (answerBank) => {
        return client.sql`
        INSERT INTO answer_banks (id, cardId, content)
        VALUES (${answerBank.id}, ${answerBank.cardId}, ${answerBank.content})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAnswerBank.length} answer banks`);

    return {
      createTable,
      answerBank: insertedAnswerBank,
    };
  } catch (error) {
    console.error('Error seeding answer bank:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedClasses(client);
  await seedChampions(client);
  await seedRoles(client);
  await seedChampionClassRelations(client);
  await seedChampionRolesRelations(client);
  await seedDecks(client);
  await seedCards(client);
  await seedAnswerBank(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
