import { z } from 'zod'

export const MenuSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  collapse: z.number(),
  sections: z.array(
    z.union([
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.null(),
        position: z.number(),
        visible: z.number(),
        images: z.array(z.object({ id: z.number(), image: z.string() })),
        items: z.array(
          z.union([
            z.object({
              id: z.number(),
              name: z.string(),
              description: z.string(),
              alcoholic: z.number(),
              price: z.number(),
              position: z.number(),
              visible: z.number(),
              availabilityType: z.string(),
              sku: z.string(),
              images: z.array(z.object({ id: z.number(), image: z.string() })),
              available: z.boolean(),
            }),
            z.object({
              id: z.number(),
              name: z.string(),
              description: z.string(),
              alcoholic: z.number(),
              price: z.number(),
              position: z.number(),
              visible: z.number(),
              availabilityType: z.string(),
              sku: z.string(),
              modifiers: z.array(
                z.object({
                  id: z.number(),
                  name: z.string(),
                  minChoices: z.number(),
                  maxChoices: z.number(),
                  items: z.array(
                    z.union([
                      z.object({
                        id: z.number(),
                        name: z.string(),
                        price: z.number(),
                        maxChoices: z.number(),
                        position: z.number(),
                        visible: z.number(),
                        availabilityType: z.string(),
                        available: z.boolean(),
                      }),
                      z.object({
                        id: z.number(),
                        name: z.string(),
                        price: z.number(),
                        maxChoices: z.number(),
                        position: z.number(),
                        visible: z.number(),
                        availabilityType: z.string(),
                        qty: z.number(),
                        available: z.boolean(),
                      }),
                    ])
                  ),
                })
              ),
              images: z.array(z.object({ id: z.number(), image: z.string() })),
              available: z.boolean(),
            }),
          ])
        ),
      }),
      z.object({
        id: z.number(),
        name: z.string(),
        position: z.number(),
        visible: z.number(),
        images: z.array(z.object({ id: z.number(), image: z.string() })),
        items: z.array(
          z.union([
            z.object({
              id: z.number(),
              name: z.string(),
              alcoholic: z.number(),
              price: z.number(),
              position: z.number(),
              visible: z.number(),
              availabilityType: z.string(),
              sku: z.string(),
              available: z.boolean(),
            }),
            z.object({
              id: z.number(),
              name: z.string(),
              alcoholic: z.number(),
              price: z.number(),
              position: z.number(),
              availabilityType: z.string(),
              sku: z.string(),
              available: z.boolean(),
            }),
          ])
        ),
      }),
      z.object({
        id: z.number(),
        name: z.string(),
        position: z.number(),
        images: z.array(z.object({ id: z.number(), image: z.string() })),
        items: z.array(
          z.object({
            id: z.number(),
            name: z.string(),
            alcoholic: z.number(),
            price: z.number(),
            position: z.number(),
            visible: z.number(),
            availabilityType: z.string(),
            images: z.array(z.object({ id: z.number(), image: z.string() })),
            available: z.boolean(),
          })
        ),
      }),
    ])
  ),
})
