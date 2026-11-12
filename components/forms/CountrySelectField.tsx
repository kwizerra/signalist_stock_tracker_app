'use client'
import {Label} from "@/components/ui/label";
import { Controller } from "react-hook-form"
import countryList from "react-select-country-list"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import { ChevronDown } from "lucide-react"
import React, { useState, useMemo } from "react"
const CountrySelectField = ({name, label, control, error, required = false} :CountrySelectProps) => {
    const [open, setOpen] = useState(false)
    const countries = useMemo(() => countryList().getData(), [])
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">
                {label}
            </Label>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? `Please Select ${label.toLocaleLowerCase()}` : false,
                }}
                render={({ field }) =>(
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger className="select-trigger w-full flex items-center justify-between border border-input">
    <span className="flex items-center gap-2">
        {field.value && (
            <img
                src={`https://flagcdn.com/w20/${field.value.toLowerCase()}.png`}
                alt=""
                className="h-3.5 w-5 rounded-sm object-cover"
            />
        )}
        {countries.find((c: {value: string; label: string}) => c.value === field.value)?.label ?? "Select Country"}
    </span>
                            <ChevronDown className="size-4 opacity-50" />
                        </PopoverTrigger>
                        <PopoverContent className="w-(--anchor-width) p-0 bg-gray-800! ring-1 ring-gray-600! text-white">
                          <Command className="bg-transparent!">
                              <CommandInput placeholder="Search country..."/>
                              <CommandList className ="max-h-64 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-gray-600">
                                  <CommandEmpty>No country found.</CommandEmpty>
                                  <CommandGroup>
                                      {countries.map((c: {value: string; label: string}) => (
                                          <CommandItem
                                              key={c.value}
                                              value={c.label}
                                              onSelect={() => {
                                                  field.onChange(c.value)
                                                  setOpen(false)
                                              }}
                                              className="bg-transparent! data-[selected=true]:bg-gray-600! data-[selected=true]:text-white"
                                          >
                                              <img
                                                  src={`https://flagcdn.com/w20/${c.value.toLowerCase()}.png`}
                                                  alt=""
                                                  className="mr-2 h-3.5 w-5 rounded-sm object-cover"
                                              />
                                              {c.label}
                                          </CommandItem>
                                      ))}
                                  </CommandGroup>
                              </CommandList>
                          </Command>
                        </PopoverContent>
                    </Popover>

                )}/>
            {error && <p className="text-red-600">{error.message}</p>}
        </div>
    )
}
export default CountrySelectField
