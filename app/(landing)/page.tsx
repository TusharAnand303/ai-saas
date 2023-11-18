import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='p-5'>
     <Link href='/sign-in'>
     <Button>Sign-In</Button>
     </Link>
     <Link href='/sign-up'>
     <Button>Register</Button>
     </Link>
    </div>
  )
}

export default LandingPage
