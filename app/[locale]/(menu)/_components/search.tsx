'use client'

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [_, startTransition] = useTransition()
  const t = useTranslations('Menu')
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlSearch = searchParams.get('search') || ''

  const changeUrlParamSearch = (search: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString())

      params.set('search', search)

      router.push('?' + params.toString())
    })
  }

  useEffect(() => {
    setInputValue(urlSearch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative">
      <Input
        id="search"
        value={inputValue}
        type="text"
        placeholder={t('search-placeholder')}
        className="pl-12 border-[#8A94A4]"
        onChange={(e) => {
          setInputValue(e.target.value)
          changeUrlParamSearch(e.target.value)
        }}
      />
      <Image
        src="/search-icon.svg"
        alt="Search icon"
        height={20}
        width={20}
        className="absolute top-2.5 left-[14px] h-[20px] w-[20px]"
      />
    </div>
  )
}
