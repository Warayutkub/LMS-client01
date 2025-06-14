"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type teacherType = {
  id: string,
  name: string
}

export function TeacherComboxcompo({ teacher, handleTeacherFromChild }: { teacher: teacherType[], handleTeacherFromChild: (id: string) => void }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | undefined>("")
  const [valueForForm, setValueForForm] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? teacher.find((item) => item.name === value)?.name
            : "Select teacher..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search teacher..." />
          <CommandList className="w-full">
            <CommandEmpty>No teacher found.</CommandEmpty>
            <CommandGroup className="w-full">
              {teacher.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    handleTeacherFromChild(currentValue === value ? "" : item.id)
                  }}
                  className="w-full"
                >
                  {item.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
