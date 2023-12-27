const { db } = require('@vercel/postgres');

const {
  users,
  classes,
  champions,
  roles,
  championClasses,
} = require('../app/lib/placeholder-data.js');

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
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}}, ${user.verified}})
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
        VALUES (${role.id}, ${role.name}, ${role.icon}})
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

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedClasses(client);
  await seedChampions(client);
  await seedRoles(client);
  await championClasses(client);
  await seedChampionClassRelations(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
