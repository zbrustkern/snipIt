import { useState } from 'react'
import './App.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, RangeCalendar, CheckboxGroup, Checkbox, Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';
import {products} from "./data.ts";



function App() {
  return (
    <>
    <Navbar>
      <NavbarBrand>
        {/* <img src={`/logo.jpeg`} alt={'snip it logo'} /> */}
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
      <h1 className="text-3xl font-bold underline mb-3">Current Offers</h1>
      <div className="offer-card flex gap-x-4">
      <Autocomplete
      defaultItems={products}
      label="Product"
      placeholder="Search a product"
      className="max-w-xs"
    >
      {(product) => <AutocompleteItem key={product.value}>{product.label}</AutocompleteItem>}
    </Autocomplete>
      <RangeCalendar
        aria-label="Date (Uncontrolled)"
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({weeks: 1}),
        }}
      />
      <CheckboxGroup
      label="Select Regions"
      defaultValue={["north-america", "europe"]}
      >
      <Checkbox value="north-america">North America</Checkbox>
      <Checkbox value="south-america">South America</Checkbox>
      <Checkbox value="europe">Europe</Checkbox>
      <Checkbox value="asia">Asia</Checkbox>
      <Checkbox value="africa">Africa</Checkbox>
      <Checkbox value="australia">Australia</Checkbox>
    </CheckboxGroup>
    </div>
    </>
  )
}

export default App
