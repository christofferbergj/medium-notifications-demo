import type { NextPage } from 'next'

import { Button } from '@app/core/components/elements/Button'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button>Create notification</Button>
    </div>
  )
}

export default Home
