import { cn } from '@/lib/utils'

export const Content = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn(className, 'bg-[#FFF] shadow-[0_2px_14px_0_hsl(0,0%,0%,0.14)]')}>{children}</div>
}
