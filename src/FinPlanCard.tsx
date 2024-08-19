
import {Card, CardHeader, CardBody, CardFooter, Divider, Input} from "@nextui-org/react";
import { useState } from "react";

export default function FindPlanCard() {

    const newForm = {
        income: 100000,
        raise: .03,
        saveRate: .20,
        balance: 100000,
        taxRate: .45,
        return: .08,
    }

    const [formData, setFormData] = useState(newForm)
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if ((evt.target.name === "raise") || (evt.target.name === "saveRate") || (evt.target.name === "taxRate") || (evt.target.name === "return")) {
            setFormData({...formData, [evt.target.name]: parseFloat(evt.target.value) * 0.01 })
        }
        else {
        setFormData({...formData, [evt.target.name]: evt.target.value })
        }
        console.log(formData)
    }

    const retirementIncome = (.04 * formData.balance + formData.income )

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
                    required
                    type="number"
                    name="income"
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
                    onChange={handleChange}
                />
                <Input
                    required
                    type="number"
                    name="raise"
                    label="Estimated Annual Raise"
                    placeholder="3"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                        </div>
                    }
                    onChange={handleChange}
                />
                <Input
                    required
                    type="number"
                    name="saveRate"
                    label="Savings Rate"
                    placeholder="20"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                        </div>
                    }
                    onChange={handleChange}
                />
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    required
                    type="number"
                    name="balance"
                    label="Starting Balance"
                    placeholder="100,000"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    }
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">Invested</span>
                        </div>
                    }
                    onChange={handleChange}
                />
                <Input
                    required
                    type="number"
                    name="taxRate"
                    label="Blended Total Tax Rate"
                    placeholder="45"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                        </div>
                    }
                    onChange={handleChange}
                />
                <Input
                    required
                    type="number"
                    name="return"
                    label="Estimated Long Term Average Portfolio Return"
                    placeholder="8"
                    labelPlacement="outside"
                    endContent={
                        <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                        </div>
                    }
                    onChange={handleChange}
                />
            </div>
        </div>
        </CardBody>
        <Divider/>
          <CardFooter>
            Estimated perpetual annual income after twenty years: {retirementIncome}
          </CardFooter>
        </Card>
        </>
      )
}