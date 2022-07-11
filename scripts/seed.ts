import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    const workSiteData: Prisma.WorksiteCreateArgs['data'][] = [
      { name: 'Dunder Mifflin' },
    ]
    const workSites = await Promise.all(
      workSiteData.map(async (data: Prisma.WorksiteCreateArgs['data']) => {
        const record = await db.worksite.create({ data })
        console.log(record)
        return record
      })
    )

    const locationData: Prisma.LocationCreateArgs['data'][] = [
      { name: 'Office', worksiteId: workSites[0].id },
      { name: 'Warehouse', worksiteId: workSites[0].id },
    ]
    const locations = await Promise.all(
      locationData.map(async (data: Prisma.LocationCreateArgs['data']) => {
        const record = await db.location.create({ data })
        console.log(record)
        return record
      })
    )

    const shiftData: Prisma.ShiftCreateArgs['data'][] = [
      { name: 'Day', locationId: locations[1].id },
      { name: 'Night', locationId: locations[1].id },
      { name: 'Day', locationId: locations[0].id },
    ]
    const shifts = await Promise.all(
      shiftData.map(async (data: Prisma.ShiftCreateArgs['data']) => {
        const record = await db.shift.create({ data })
        console.log(record)
        return record
      })
    )

    const workerData: Prisma.WorkerCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      { firstName: 'Jim', lastName: 'Halpert' },
      { firstName: 'Pam', lastName: 'Beesly' },
      { firstName: 'Dwight', lastName: 'Schrute' },
      { firstName: 'Ryan', lastName: 'Howard' },
      { firstName: 'Oscar', lastName: 'Martinezk' },
      { firstName: 'Kevin', lastName: 'Malone' },
      { firstName: 'Angela', lastName: 'Martin' },
      { firstName: 'Kelly', lastName: 'Kapoor' },
      { firstName: 'Darryl', lastName: 'Philbin' },
      { firstName: 'Roy', lastName: 'Anderson' },
      { firstName: 'Val', lastName: 'Lastname' },
      { firstName: 'Nate', lastName: 'Nickerson' },
      { firstName: 'Lonny', lastName: 'Jackson' },
      { firstName: 'Glenn', lastName: 'Glennderson' },
      { firstName: 'Matt', lastName: 'TheMan' },
      { firstName: 'Hidetoshi', lastName: 'Person' },
    ]
    const workers = await Promise.all(
      workerData.map(async (data: Prisma.WorkerCreateArgs['data']) => {
        const record = await db.worker.create({ data })
        console.log(record)
        return record
      })
    )

    const assessmentData: Prisma.AssessmentCreateArgs['data'][] = [
      { rating: 2, workerId: workers[0].id, notes: "" },
      { rating: 1, workerId: workers[0].id, notes: "" },
      { rating: 2, workerId: workers[1].id, notes: "" },
      { rating: 5, workerId: workers[2].id, notes: "" },
      { rating: 4, workerId: workers[3].id, notes: ""},
      { rating: 1, workerId: workers[4].id, notes: ""},
      { rating: 3, workerId: workers[5].id, notes: ""},
      { rating: 5, workerId: workers[6].id, notes: ""},
      { rating: 4, workerId: workers[7].id, notes: ""},
      { rating: 1, workerId: workers[8].id, notes: ""},
      { rating: 5, workerId: workers[9].id, notes: ""},
      { rating: 2, workerId: workers[10].id, notes: ""},
      { rating: 4, workerId: workers[11].id, notes: ""},
      { rating: 2, workerId: workers[12].id, notes: ""},
      { rating: 3, workerId: workers[13].id, notes: ""},
      { rating: 5, workerId: workers[14].id, notes: ""},
      { rating: 3, workerId: workers[15].id, notes: ""},
    ]
    const assessments = await Promise.all(
      assessmentData.map(async (data: Prisma.AssessmentCreateArgs['data']) => {
        const record = await db.assessment.create({ data })
        console.log(record)
        return record
      })
    )

    const shiftAssignmentData: Prisma.ShiftAssignmentCreateArgs['data'][] = [
      { workerId: workers[0].id, shiftId: shifts[2].id },
      { workerId: workers[1].id, shiftId: shifts[2].id },
      { workerId: workers[2].id, shiftId: shifts[2].id },
      { workerId: workers[3].id, shiftId: shifts[2].id },
      { workerId: workers[4].id, shiftId: shifts[2].id },
      { workerId: workers[5].id, shiftId: shifts[2].id },
      { workerId: workers[6].id, shiftId: shifts[2].id },
      { workerId: workers[7].id, shiftId: shifts[2].id },
      { workerId: workers[8].id, shiftId: shifts[0].id },
      { workerId: workers[9].id, shiftId: shifts[0].id },
      { workerId: workers[10].id, shiftId: shifts[0].id },
      { workerId: workers[11].id, shiftId: shifts[0].id },
      { workerId: workers[12].id, shiftId: shifts[0].id },
      { workerId: workers[13].id, shiftId: shifts[1].id },
      { workerId: workers[14].id, shiftId: shifts[1].id },
      { workerId: workers[15].id, shiftId: shifts[1].id },
    ]
    await Promise.all(
      shiftAssignmentData.map(async (data: Prisma.ShiftAssignmentCreateArgs['data']) => {
        const record = await db.shiftAssignment.create({ data })
        console.log(record)
        return record
      })
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // Promise.all(
    //
    // Change to match your data model and seeding needs
    //
    // )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
