// addEventListener使事件监听器handleWindowResize在每次窗口大小发生变化时被调用

import { useState, useEffect } from 'react'

export default function useViewport() {
	const [width, setWidth] = useState<number>(window.innerWidth)
	const [height, setHeight] = useState<number>(window.innerHeight)

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}

		window.addEventListener('resize', handleWindowResize)
        // removeEventListener移除该事件监听器
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	return { width, height }
}
