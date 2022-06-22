import { MetaTags } from '@redwoodjs/web'
import WallChartCell from 'src/components/WallchartCell'

const HomePage = () => (
    <>
      <WallChartCell id={1} />
      <MetaTags title="Home" description="Home page" />
    </>
  )

export default HomePage
