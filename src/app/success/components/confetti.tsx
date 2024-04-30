'use client'

import ConfettiExplosion from 'react-confetti'

export function EffectConfetti() {
  return (
    <ConfettiExplosion
      className="h-screen w-screen object-cover"
      recycle={false}
    />
  )
}
