import {Card, CardHeader, CardBody, CardFooter, Divider, Input} from "@nextui-org/react";

export default function FindPlanCard() {
    return (
        <>
        <Card className="mb-4">
          <CardHeader className="flex gap-3">
            Get them monies
        </CardHeader>
        <Divider/>
        <CardBody>
        <div className="flex flex-col gap-4">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    type="number"
                    label="Income"
                    placeholder="100,000"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    }
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">annually</span>
                        </div>
                    }
                />
                <Input
                    type="number"
                    label="Income"
                    placeholder="100,000"
                    labelPlacement="outside"
                    // startContent={
                    //     <div className="pointer-events-none flex items-center">
                    //         <span className="text-default-400 text-small">$</span>
                    //     </div>
                    // }
                />
                <Input
                    type="number"
                    label="Income"
                    placeholder="100,000"
                    labelPlacement="outside"
                    // startContent={
                    //     <div className="pointer-events-none flex items-center">
                    //         <span className="text-default-400 text-small">$</span>
                    //     </div>
                    // }
                />
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            />
            <Input
            type="number"
            label="Price"
            placeholder="0.00"
            labelPlacement="outside"
            endContent={
                <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
                </div>
            }
            />
            <Input
            type="url"
            label="Website"
            placeholder="nextui"
            labelPlacement="outside"
            endContent={
                <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">.org/</span>
                </div>
            }
            />
        </div>
        </div>
        </CardBody>
        <Divider/>
          <CardFooter>
            Footer goes here
          </CardFooter>
        </Card>
        </>
      )
}