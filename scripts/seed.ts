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
      { firstName: 'alice', lastName: 'johnson' },
      { firstName: 'mark', lastName: 'example' },
      { firstName: 'jackie', lastName: 'jackson' },
      { firstName: 'bob', lastName: 'bobson' },
    ]
    const workers = await Promise.all(
      workerData.map(async (data: Prisma.WorkerCreateArgs['data']) => {
        const record = await db.worker.create({ data })
        console.log(record)
        return record
      })
    )

    const shiftAssignmentData: Prisma.ShiftAssignmentCreateArgs['data'][] = [
      { workerId: workers[0].id, shiftId: shifts[0].id },
      { workerId: workers[1].id, shiftId: shifts[1].id },
      { workerId: workers[2].id, shiftId: shifts[2].id },
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
