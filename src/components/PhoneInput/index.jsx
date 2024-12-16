import { CheckIcon, ChevronsUpDown } from 'lucide-react'

import * as React from 'react'
import * as RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

const PhoneInput = forwardRef(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className={cn('flex', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      onChange={(value) => onChange?.(value || '')}
      {...props}
    />
  )
})
PhoneInput.displayName = 'PhoneInput'

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <Input
    className={cn(
      'rounded-e rounded-s-none border-yellow-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-500 md:text-base',
      className
    )}
    {...props}
    ref={ref}
  />
))
InputComponent.displayName = 'InputComponent'

const CountrySelect = ({ disabled, value, onChange, options }) => {
  const handleSelect = React.useCallback(
    (country) => {
      onChange(country)
    },
    [onChange]
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={'outline'}
          className={cn(
            'flex gap-1 rounded-e-none rounded-s bg-neutral-900 px-2 text-sm'
          )}
          disabled={disabled}
        >
          <FlagComponent country={value} countryName={value} />
          {value && (
            <p className="ml-1">+{RPNInput?.getCountryCallingCode(value)}</p>
          )}
          <ChevronsUpDown
            className={cn(
              '-mr-1 h-4 w-4 opacity-50',
              disabled ? 'hidden' : 'opacity-100'
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] bg-neutral-950 p-0">
        <Command>
          <CommandList>
            <ScrollArea className="h-72 bg-neutral-950">
              <CommandInput
                placeholder="Search country..."
                className="text-white"
              />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options
                  .filter((x) => x.value)
                  .map((option) => (
                    <CommandItem
                      className="gap-2 bg-neutral-950 text-neutral-200 hover:bg-neutral-700 active:bg-neutral-700"
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <FlagComponent
                        country={option.value}
                        countryName={option.label}
                      />
                      <span className="flex-1 text-sm">{option.label}</span>
                      {option.value && (
                        <span className="text-foreground/50 text-sm">
                          {`+${RPNInput.getCountryCallingCode(option.value)}`}
                        </span>
                      )}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          option.value === value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country]

  return (
    <span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  )
}
FlagComponent.displayName = 'FlagComponent'

export { PhoneInput }
