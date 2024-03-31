import { db, Participants, Parties } from 'astro:db';

export default async function seed() {
  // Seed local development data.
  // See https://docs.astro.build/en/guides/astro-db/#seed-your-database
  const parties = await db.insert(Parties).values([
    {
      title: 'Birthday Bash',
      description: 'Celebrating a special day!',
      location: '123 Main Street',
      date: '2024-02-18'
    },
    {
      title: 'Office Christmas Party',
      description: 'Year-end festivities',
      location: '456 Business Ave',
      date: '2024-12-20',
    },
    {
      title: 'Summer BBQ',
      description: 'Grilling and chilling',
      location: '789 Sunny Lane',
      date: '2024-07-15'
    }
  ])

  console.log(parties)

  // await db.insert(Participants).values([
  //   {
  //     partyId: 1, name: 'John Doe', email: 'john@example.com', invitation_sent: true
  //   },
  //   {
  //     partyId: 1, name: 'Jane Smith', email: 'jane@example.com', invitation_sent: false
  //   },
  //   {
  //     partyId: 2, name: 'Bob Johnson', email: 'bob@example.com', invitation_sent: true
  //   },
  //   {
  //     partyId: 3, name: 'Alice Anderson', email: 'alice@example.com', invitation_sent: false
  //   },
  //   {
  //     partyId: 3, name: 'Charlie Brown', email: 'charlie@example.com', invitation_sent: true
  //   },
  // ])
}
