import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useShoppingCartStore } from '@/store/shopping-cart'
import { MenuDataSectionItemModifier } from '@/types/menu-data'

export const ItemDetailsModifiers = ({
  modifiers,
}: {
  modifiers?: MenuDataSectionItemModifier[]
}) => {
  const addTemporaryItemModifiers = useShoppingCartStore(
    (state) => state.addTemporaryItemModifiers
  )

  return (
    <>
      {modifiers?.map((modifier) => (
        <div key={modifier.id}>
          <div className="bg-background px-6 py-4">
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
            onValueChange={(value) => {
              const modifierSelected = modifier.items.find(
                (item) => item.id === Number(value)
              )

              if (!modifierSelected) return

              addTemporaryItemModifiers({
                [modifier.id]: {
                  id: modifierSelected.id,
                  name: modifierSelected.name,
                  price: modifierSelected.price,
                },
              })
            }}
          >
            {modifier.items?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center px-6 py-3"
              >
                <label
                  htmlFor={`option-${modifier.id}-${item.id}`}
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
                  value={String(item.id)}
                  id={`option-${modifier.id}-${item.id}`}
                />
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </>
  )
}
