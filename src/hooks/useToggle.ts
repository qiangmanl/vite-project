// define show is setIsOpen(true)#isOpen return true
// define hide is setIsOpen(false)#isOpen return false
// define toggle is setIsOpen(!isOpen,)#isOpen return !isOpen

import { useCallback, useState } from 'react'



export default function useToggle(
	initialState: boolean = false
): [boolean, () => void, () => void, () => void] {
	const [isOpen, setIsOpen] = useState(initialState)

	const show = useCallback(() => setIsOpen(true), [])
	const hide = useCallback(() => setIsOpen(false), [])
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

	return [isOpen, toggle, show, hide]
}
