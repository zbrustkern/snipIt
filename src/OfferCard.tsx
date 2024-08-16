import {RangeCalendar, CheckboxGroup, Checkbox, Autocomplete, AutocompleteItem, Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Slider, Switch} from "@nextui-org/react";
import {today, getLocalTimeZone} from '@internationalized/date';
import {products, sizes} from "./data.ts";

function OfferCard() {
  return (
    <>
    <Card className="mb-4">
      <CardHeader className="flex gap-3">
        <Autocomplete
        defaultItems={products}
        label="Product"
        placeholder="Search a product"
        className="max-w-xs"
        >
            {(product) => <AutocompleteItem key={product.value}>{product.label}</AutocompleteItem>}
        </Autocomplete>
        <Autocomplete
        defaultItems={sizes}
        label="Size"
        placeholder="Select a Size"
        className="max-w-xs"
        >
            {(product) => <AutocompleteItem key={product.value}>{product.label}</AutocompleteItem>}
        </Autocomplete>
        <Slider 
        label="Dollar Value" 
        step={0.01} 
        maxValue={1} 
        minValue={0} 
        defaultValue={0.25}
        className="max-w-md"
        />
    </CardHeader>
    <Divider/>
    <CardBody>
      <div className="flex flex-row justify-between">
        <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://m.media-amazon.com/images/I/81As7EJUNjL.jpg"
            width={270}
            />
        <div className="flex flex-col">
            Offer Validity:
            <RangeCalendar
                aria-label="Date (Uncontrolled)"
                defaultValue={{
                start: today(getLocalTimeZone()),
                end: today(getLocalTimeZone()).add({weeks: 1}),
                }}
            />
        </div>
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
        <div className="flex flex-col justify-around w-1/5">
        <Switch defaultSelected>
            Active
        </Switch>
      </div>
    </div>
    </CardBody>
    <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="#"
        >
          Add new product UPCs
        </Link>
      </CardFooter>
    </Card>
    </>
  )
}

export default OfferCard
