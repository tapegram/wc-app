import { MetaTags } from '@redwoodjs/web'
import WallchartComponent from 'src/components/WallchartComponent'
import WallChartCell from 'src/components/WallchartCell'

const HomePage = () => {
  const hardCodedData = {
    shifts: [
      {
        displayName: 'Day Shift',
        time: '9am-5pm',
        locations: [
          {
            displayName: 'Office',
            workers: [{ name: 'Jim' }, { name: 'Pam' }, { name: 'Dwight' }],
          },
          {
            displayName: 'Warehouse',
            workers: [
              { name: 'Glenn2' },
              { name: 'Matt' },
              { name: 'Hidetoshi' },
            ],
          },
        ],
      },
      {
        displayName: 'Night Shift',
        time: '5am-1pm',
        locations: [
          {
            displayName: 'Office',
            workers: [{ name: 'Oscar' }, { name: 'Kevin' }, { name: 'Angela' }],
          },
          {
            displayName: 'Warehouse',
            workers: [{ name: 'Darryl' }, { name: 'Roy' }, { name: 'Val' }],
          },
        ],
      },
    ],
  }

  return (
    <>
      <WallChartCell id={1}></WallChartCell>
      {/* <WallchartComponent shifts={hardCodedData.shifts} /> */}
      <MetaTags title="Home" description="Home page" />
    </>
  )
}

export default HomePage
