'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Button from '@/components/Button'
import Input from '@/components/Input'

const SearchField = () => {
  const router = useRouter()

  const [keyword, setKeyword] = useState('')

  const onSearch = () => {
    const newParams = new URLSearchParams({ keyword })
    router.push(`/?${newParams.toString()}`)
  }

  return (
    <div className="flex gap-3 items-center">
      <Input value={keyword} onChange={setKeyword} />

      <Button onClick={onSearch}>Search</Button>
    </div>
  )
}

export default SearchField
