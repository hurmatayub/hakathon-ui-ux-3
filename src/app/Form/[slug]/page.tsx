// File: src/app/product/[slug]/page.tsx
import type { Metadata } from 'next'

// 1. Unified Page Props
export interface PageProps {
  params: { slug: string }  // Same type for all pages
  searchParams?: { [key: string]: string | string[] | undefined }
}

// 2. Product Component
export default function ProductPage({ params }: PageProps) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Product: {params.slug}</h1>
    </div>
  )
}

// 3. Static Paths
export async function generateStaticParams() {
  return [{ slug: 'mobile' }, { slug: 'laptop' }]
}

// 4. Vercel Optimization
export const dynamicParams = false
export const revalidate = 60 // 60 seconds