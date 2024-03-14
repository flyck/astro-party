import { db, Parties } from 'astro:db';

export default async function seed() {
  // Seed local development data.
  // See https://docs.astro.build/en/guides/astro-db/#seed-your-database
  await db.insert(Parties).values([
    {
      title: 'Birthday Bash',
      description: 'Celebrating a special day!',
      location: '123 Main Street',
      date: new Date('2024-02-18')
    },
    {
      title: 'Office Christmas Party',
      description: 'Year-end festivities',
      location: '456 Business Ave',
      date: new Date('2024-12-20'),
    },
    {
      title: 'Summer BBQ',
      description: 'Grilling and chilling',
      location: '789 Sunny Lane',
      date: new Date('2024-07-15')
    }
  ])
}
