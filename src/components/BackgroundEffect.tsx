import { useEffect, useRef } from 'react'


const BackgroundEffect = () => {
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 54, 54, 0.15), transparent 300px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={lightRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition duration-300"
      style={{ backgroundColor: '#f5f5f5' }}
    />
  )
}

export default BackgroundEffect
