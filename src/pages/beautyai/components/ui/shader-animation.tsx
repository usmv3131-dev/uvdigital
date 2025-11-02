"use client"

import { useEffect, useRef } from "react"

export function ShaderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      time += 0.01

      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, width, height)

      // Draw animated circles/waves
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
          const hue = (i * 120 + time * 20) % 360
          const radius = 50 + j * 30 + Math.sin(time + i + j) * 20
          const x = width / 2 + Math.cos(time * 0.5 + i) * 200
          const y = height / 2 + Math.sin(time * 0.5 + i) * 150

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${0.1 + j * 0.05})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      // Add grid lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen"
      style={{
        background: "#000",
      }}
    />
  )
}
