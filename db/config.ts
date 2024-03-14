import { column, defineDb, defineTable } from 'astro:db';

const Parties = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    title: column.text({ optional: false }),
    description: column.text(),
    location: column.text(),
    date: column.date()
  }
})

const Participants = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    partyId: column.number({ references: () => Parties.columns.id }),
    name: column.text({ optional: false }),
    email: column.text(),
    invitation_sent: column.boolean(),
  }
})

const Tasks = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    partyId: column.number({ references: () => Parties.columns.id }),
    title: column.text({ optional: false }),
    description: column.text(),
    status: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Parties,
    Participants,
    Tasks
  },
});
