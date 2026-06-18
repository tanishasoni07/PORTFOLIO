import React, { useEffect, useState } from 'react'

const PointerEffects = () => {
  const [pointer, setPointer] = useState({ x: -100, y: -100, visible: false })

  useEffect(() => {
    let frameId = null
    const next = { x: -100, y: -100, visible: false }

    const update = () => setPointer((current) => ({ ...current, ...next }))

    const handleMove = (event) => {
      next.x = event.clientX
      next.y = event.clientY
      next.visible = true

      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(update)
    }

    const handleLeave = () => {
      next.visible = false
      update()
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div className="pointer-events-none hidden md:block">
      <span
        className="pointer-orb h-5 w-5 transition-all duration-150 ease-out"
        style={{
          left: pointer.x,
          top: pointer.y,
          opacity: pointer.visible ? 1 : 0,
        }}
      />
    </div>
  )
}

export default PointerEffects
