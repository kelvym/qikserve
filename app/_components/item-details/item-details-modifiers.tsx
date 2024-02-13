import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Modifier } from '../menu'

export const ItemDetailsModifiers = ({
  modifiers,
}: {
  modifiers: Modifier[]
}) => {
  return (
    <>
      {modifiers?.map((modifier) => (
        <>
          <div className="bg-background px-6 py-4" key={modifier.id}>
            <span className="block font-bold text-base text-secondary">
              {modifier.name}
            </span>
            {/* TODO */}
            <span className="text-inactive">Select 1 option</span>
            {/* --- */}
          </div>
          <RadioGroup
            defaultValue={`option-${modifier.items[0].id}`}
            name={modifier.name}
          >
            {modifier.items?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center px-6 py-3"
              >
                <label
                  htmlFor={`option-${modifier.name}-${item.id}`}
                  className="grow"
                >
                  <span className="block text-main font-medium">
                    {item.name}
                  </span>
                  <span className="block text-secondary font-normal">
                    {item.price}
                  </span>
                </label>
                <RadioGroupItem
                  value={`option-${modifier.name}-${item.id}`}
                  id={`option-${modifier.name}-${item.id}`}
                />
              </div>
            ))}
          </RadioGroup>
        </>
      ))}
    </>
  )
}
