import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-l, .reveal-r')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
