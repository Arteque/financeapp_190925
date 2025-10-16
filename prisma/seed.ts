import { PrismaClient, AccountType, TransactionType, BudgetPeriod } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starte Demo User Seeding...')

  // Demo User erstellen
  const demoPasswordHash = await bcrypt.hash('demo123', 10)
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@financeapp.com' },
    update: {},
    create: {
      email: 'demo@financeapp.com',
      passwordHash: demoPasswordHash,
      name: 'Demo User',
      isDemo: true,
    },
  })

  console.log(`✅ Demo User erstellt: ${demoUser.email}`)

  // Demo Account (Hauptkonto)
  const mainAccount = await prisma.account.upsert({
    where: { 
      userId_name: { 
        userId: demoUser.id, 
        name: 'Hauptkonto' 
      } 
    },
    update: {},
    create: {
      userId: demoUser.id,
      name: 'Hauptkonto',
      type: AccountType.CHECKING,
      balance: 4836.00, // Aus Ihren Demo-Daten
      currency: 'USD',
      color: '#277c78',
    },
  })

  // Demo Kategorien mit korrekten Namen
  const categories = await Promise.all([
    // Expense Kategorien
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'General' } },
      update: {},
      create: { userId: demoUser.id, name: 'General', color: '#626070', icon: 'general', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Dining Out' } },
      update: {},
      create: { userId: demoUser.id, name: 'Dining Out', color: '#F2CDAC', icon: 'dining', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Groceries' } },
      update: {},
      create: { userId: demoUser.id, name: 'Groceries', color: '#82C9D7', icon: 'groceries', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Entertainment' } },
      update: {},
      create: { userId: demoUser.id, name: 'Entertainment', color: '#277C78', icon: 'entertainment', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Transportation' } },
      update: {},
      create: { userId: demoUser.id, name: 'Transportation', color: '#626070', icon: 'transport', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Bills' } },
      update: {},
      create: { userId: demoUser.id, name: 'Bills', color: '#82C9D7', icon: 'bills', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Personal Care' } },
      update: {},
      create: { userId: demoUser.id, name: 'Personal Care', color: '#626070', icon: 'care', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Education' } },
      update: {},
      create: { userId: demoUser.id, name: 'Education', color: '#F2CDAC', icon: 'education', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Shopping' } },
      update: {},
      create: { userId: demoUser.id, name: 'Shopping', color: '#826CB0', icon: 'shopping', type: TransactionType.EXPENSE }
    }),
    prisma.category.upsert({
      where: { userId_name: { userId: demoUser.id, name: 'Lifestyle' } },
      update: {},
      create: { userId: demoUser.id, name: 'Lifestyle', color: '#277C78', icon: 'lifestyle', type: TransactionType.EXPENSE }
    }),
  ])

  console.log(`✅ ${categories.length} Kategorien erstellt`)

  // Demo Transaktionen (erste 20 aus Ihren Daten)
  const demoTransactions = [
    {
      name: "Emma Richardson",
      category: "General",
      date: "2024-08-19T14:23:11Z",
      amount: 75.50,
      recurring: false,
      avatar: "/images/avatars/emma-richardson.jpg"
    },
    {
      name: "Savory Bites Bistro",
      category: "Dining Out",
      date: "2024-08-19T20:23:11Z",
      amount: -55.50,
      recurring: false,
      avatar: "/images/avatars/savory-bites-bistro.jpg"
    },
    {
      name: "Daniel Carter",
      category: "General",
      date: "2024-08-18T09:45:32Z",
      amount: -42.30,
      recurring: false,
      avatar: "/images/avatars/daniel-carter.jpg"
    },
    {
      name: "Sun Park",
      category: "General",
      date: "2024-08-17T16:12:05Z",
      amount: 120.00,
      recurring: false,
      avatar: "/images/avatars/sun-park.jpg"
    },
    {
      name: "Urban Services Hub",
      category: "General",
      date: "2024-08-17T21:08:09Z",
      amount: -65.00,
      recurring: false,
      avatar: "/images/avatars/urban-services-hub.jpg"
    },
    {
      name: "Liam Hughes",
      category: "Groceries",
      date: "2024-08-15T18:20:33Z",
      amount: 65.75,
      recurring: false,
      avatar: "/images/avatars/liam-hughes.jpg"
    },
    {
      name: "Lily Ramirez",
      category: "General",
      date: "2024-08-14T13:05:27Z",
      amount: 50.00,
      recurring: false,
      avatar: "/images/avatars/lily-ramirez.jpg"
    },
    {
      name: "Ethan Clark",
      category: "Dining Out",
      date: "2024-08-13T20:15:59Z",
      amount: -32.50,
      recurring: false,
      avatar: "/images/avatars/ethan-clark.jpg"
    },
    {
      name: "James Thompson",
      category: "Entertainment",
      date: "2024-08-11T15:45:38Z",
      amount: -5.00,
      recurring: false,
      avatar: "/images/avatars/james-thompson.jpg"
    },
    {
      name: "Pixel Playground",
      category: "Entertainment",
      date: "2024-08-11T18:45:38Z",
      amount: -10.00,
      recurring: true,
      avatar: "/images/avatars/pixel-playground.jpg"
    },
    {
      name: "Ella Phillips",
      category: "Dining Out",
      date: "2024-08-10T19:22:51Z",
      amount: -45.00,
      recurring: false,
      avatar: "/images/avatars/ella-phillips.jpg"
    },
    {
      name: "Sofia Peterson",
      category: "Transportation",
      date: "2024-08-08T08:55:17Z",
      amount: -15.00,
      recurring: false,
      avatar: "/images/avatars/sofia-peterson.jpg"
    },
    {
      name: "Mason Martinez",
      category: "Lifestyle",
      date: "2024-08-07T17:40:29Z",
      amount: -35.25,
      recurring: false,
      avatar: "/images/avatars/mason-martinez.jpg"
    },
    {
      name: "Green Plate Eatery",
      category: "Groceries",
      date: "2024-08-06T08:25:44Z",
      amount: -78.50,
      recurring: false,
      avatar: "/images/avatars/green-plate-eatery.jpg"
    },
    {
      name: "Sebastian Cook",
      category: "Transportation",
      date: "2024-08-06T10:05:44Z",
      amount: -22.50,
      recurring: false,
      avatar: "/images/avatars/sebastian-cook.jpg"
    },
    {
      name: "William Harris",
      category: "Personal Care",
      date: "2024-08-05T14:30:56Z",
      amount: -10.00,
      recurring: false,
      avatar: "/images/avatars/william-harris.jpg"
    },
    {
      name: "Elevate Education",
      category: "Education",
      date: "2024-08-04T11:15:22Z",
      amount: -50.00,
      recurring: true,
      avatar: "/images/avatars/elevate-education.jpg"
    },
    {
      name: "Serenity Spa & Wellness",
      category: "Personal Care",
      date: "2024-08-03T14:00:37Z",
      amount: -30.00,
      recurring: true,
      avatar: "/images/avatars/serenity-spa-and-wellness.jpg"
    },
    {
      name: "Spark Electric Solutions",
      category: "Bills",
      date: "2024-08-02T09:25:11Z",
      amount: -100.00,
      recurring: true,
      avatar: "/images/avatars/spark-electric-solutions.jpg"
    },
    {
      name: "Rina Sato",
      category: "Bills",
      date: "2024-08-02T13:31:11Z",
      amount: -50.00,
      recurring: false,
      avatar: "/images/avatars/rina-sato.jpg"
    },
    {
      name: "Swift Ride Share",
      category: "Transportation",
      date: "2024-08-01T18:40:33Z",
      amount: -18.75,
      recurring: false,
      avatar: "/images/avatars/swift-ride-share.jpg"
    },
    {
      name: "Aqua Flow Utilities",
      category: "Bills",
      date: "2024-07-30T13:20:14Z",
      amount: -100.00,
      recurring: true,
      avatar: "/images/avatars/aqua-flow-utilities.jpg"
    },
    {
      name: "EcoFuel Energy",
      category: "Bills",
      date: "2024-07-29T11:55:29Z",
      amount: -35.00,
      recurring: true,
      avatar: "/images/avatars/ecofuel-energy.jpg"
    },
    {
      name: "Yuna Kim",
      category: "Dining Out",
      date: "2024-07-29T13:51:29Z",
      amount: -28.50,
      recurring: false,
      avatar: "/images/avatars/yuna-kim.jpg"
    },
    {
      name: "Flavor Fiesta",
      category: "Dining Out",
      date: "2024-07-27T20:15:06Z",
      amount: -42.75,
      recurring: false,
      avatar: "/images/avatars/flavor-fiesta.jpg"
    },
    {
      name: "Harper Edwards",
      category: "Shopping",
      date: "2024-07-26T09:43:23Z",
      amount: -89.99,
      recurring: false,
      avatar: "/images/avatars/harper-edwards.jpg"
    },
    {
      name: "Buzz Marketing Group",
      category: "General",
      date: "2024-07-26T14:40:23Z",
      amount: 3358.00,
      recurring: false,
      avatar: "/images/avatars/buzz-marketing-group.jpg"
    },
    {
      name: "TechNova Innovations",
      category: "Shopping",
      date: "2024-07-25T16:25:37Z",
      amount: -29.99,
      recurring: false,
      avatar: "/images/avatars/technova-innovations.jpg"
    },
    {
      name: "ByteWise",
      category: "Lifestyle",
      date: "2024-07-23T09:35:14Z",
      amount: -49.99,
      recurring: true,
      avatar: "/images/avatars/bytewise.jpg"
    },
    {
      name: "Nimbus Data Storage",
      category: "Bills",
      date: "2024-07-21T10:05:42Z",
      amount: -9.99,
      recurring: true,
      avatar: "/images/avatars/nimbus-data-storage.jpg"
    }
  ]

  // Transaktionen erstellen
   let transactionCount = 0
  for (const tx of demoTransactions) {
    const category = categories.find(c => c.name === tx.category)
    if (category) {
      await prisma.transaction.create({
        data: {
          userId: demoUser.id,
          accountId: mainAccount.id,
          categoryId: category.id,
          amount: tx.amount,
          description: tx.name,
          avatar:tx.avatar,
          date: new Date(tx.date),
          type: tx.amount > 0 ? TransactionType.INCOME : TransactionType.EXPENSE,
          recurring: tx.recurring,
        }
      })
    }
  }

  console.log(`✅ ${demoTransactions.length} Transaktionen erstellt`)

  // Demo Budgets aus Ihren Daten
  const budgetData = [
    { category: "Entertainment", maximum: 50.00, theme: "#277C78" },
    { category: "Bills", maximum: 750.00, theme: "#82C9D7" },
    { category: "Dining Out", maximum: 75.00, theme: "#F2CDAC" },
    { category: "Personal Care", maximum: 100.00, theme: "#626070" }
  ]

  for (const budget of budgetData) {
    const category = categories.find(c => c.name === budget.category)
    if (category) {
      await prisma.budget.create({
        data: {
          userId: demoUser.id,
          categoryId: category.id,
          name: `${budget.category} Budget`,
          limit: budget.maximum,
          period: BudgetPeriod.MONTHLY,
          spent: 0, // Wird durch Transaktionen berechnet
          startDate: new Date('2024-01-01'),
          endDate: new Date('2024-12-31'),
        }
      })
    }
  }

  console.log(`✅ ${budgetData.length} Budgets erstellt`)

  // Demo Pots aus Ihren Daten
  const potsData = [
    { name: "Savings", target: 2000.00, total: 159.00, theme: "#277C78" },
    { name: "Concert Ticket", target: 150.00, total: 110.00, theme: "#626070" },
    { name: "Gift", target: 150.00, total: 110.00, theme: "#82C9D7" },
    { name: "New Laptop", target: 1000.00, total: 10.00, theme: "#F2CDAC" },
    { name: "Holiday", target: 1440.00, total: 531.00, theme: "#826CB0" }
  ]

  for (const pot of potsData) {
    await prisma.pot.upsert({
      where: {
        userId_name: {
          userId: demoUser.id,
          name: pot.name
        }
      },
      update: {
        target: pot.target,
        total: pot.total,
        color: pot.theme,
      },
      create: {
        userId: demoUser.id,
        name: pot.name,
        target: pot.target,
        total: pot.total,
        color: pot.theme,
      }
    })
  }

  console.log(`✅ ${potsData.length} Pots erstellt`)

  // Balance Summary aus Demo-Daten erstellen
  await prisma.balanceSummary.upsert({
    where: {
      userId: demoUser.id
    },
    update: {
      current: 4836.00,
      income: 3814.25,
      expenses: 1700.50,
      currency: 'USD',
      period: 'monthly'
    },
    create: {
      userId: demoUser.id,
      current: 4836.00,
      income: 3814.25,
      expenses: 1700.50,
      currency: 'USD',
      period: 'monthly'
    }
  })

  console.log('✅ Balance Summary erstellt')

  console.log('🎉 Demo User Seeding erfolgreich abgeschlossen!')
  console.log(`📧 Login: demo@financeapp.com`)
  console.log(`🔑 Passwort: demo123`)
}

main()
  .catch((e) => {
    console.error('❌ Seed Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })