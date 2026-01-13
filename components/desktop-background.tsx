"use client"

import { useSyncExternalStore } from "react"
import { WarpBackground } from "@/components/ui/warp-background"

interface DesktopBackgroundProps {
  children: React.ReactNode
}

function useIsDesktop() {
  const subscribe = (callback: () => void) => {
    window.addEventListener("resize", callback)
    return () => window.removeEventListener("resize", callback)
  }
  
  const getSnapshot = () => window.innerWidth >= 768
  const getServerSnapshot = () => false // Default to mobile on server
  
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function useIsMounted() {
  const subscribe = () => () => {}
  const getSnapshot = () => true
  const getServerSnapshot = () => false
  
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function DesktopBackground({ children }: DesktopBackgroundProps) {
  const isDesktop = useIsDesktop()
  const isMounted = useIsMounted()

  // Before mount, render children without background (SSR-safe)
  if (!isMounted) {
    return (
      <div className="min-h-screen w-full">
        {children}
      </div>
    )
  }

  // On mobile, render without the heavy background
  if (!isDesktop) {
    return (
      <div className="min-h-screen w-full bg-background">
        {children}
      </div>
    )
  }

  // On desktop, render with the warp background
  return (
    <WarpBackground
      className="min-h-screen w-full"
      beamsPerSide={4}
      beamSize={3}
      beamDelayMax={3}
      gridColor="hsl(var(--border))"
    >
      {children}
    </WarpBackground>
  )
}
