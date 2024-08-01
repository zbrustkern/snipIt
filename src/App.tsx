import { useState } from 'react'
import './App.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, RangeCalendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">SnipIT</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Offers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Stores
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      <h1 className="text-3xl font-bold underline">Current Offers</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="flex gap-x-4">
      <RangeCalendar
        aria-label="Date (Uncontrolled)"
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({weeks: 1}),
        }}
      />
    </div>

    </>
  )
}

export default App
