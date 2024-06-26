import { column, defineDb, defineTable } from 'astro:db';

const Parties = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    title: column.text({ optional: false }),
    description: column.text(),
    location: column.text(),
    date: column.text()
  }
})

const Participants = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    partyId: column.text({ references: () => Parties.columns.id }),
    name: column.text({ optional: false }),
    email: column.text(),
    invitation_sent: column.boolean(),
  }
})

const Tasks = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    partyId: column.text({ references: () => Parties.columns.id }),
    assignee: column.number({ references: () => Participants.columns.id, optional: true }),
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
