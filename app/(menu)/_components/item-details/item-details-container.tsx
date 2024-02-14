type ItemDetailsContainerProps = {
  children: React.ReactNode
  name: string
  description?: string
}

export const ItemDetailsContainer = ({
  children,
  name,
  description,
}: ItemDetailsContainerProps) => {
  return (
    <>
      <div className="h-[calc(100vh-320px)] sm:h-[calc(100vh-520px)] overflow-auto flex justify-between flex-col">
        <div className="p-4">
          <h3 className="font-bold text-2xl mb-2 text-main">{name}</h3>
          {description && <p className="text-secondary">{description}</p>}
        </div>
        {children}
      </div>
    </>
  )
}
